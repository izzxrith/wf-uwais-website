import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildWhatsAppLink } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.website) return NextResponse.json({ ok: true }); // honeypot
    const { customerName, phone, serviceId, location } = body;
    if (!customerName?.trim()) return NextResponse.json({ message: "Full name is required." }, { status: 400 });
    if (!phone?.trim())        return NextResponse.json({ message: "Phone number is required." }, { status: 400 });
    if (!serviceId?.trim())    return NextResponse.json({ message: "Please select a service." }, { status: 400 });
    if (!location?.trim())     return NextResponse.json({ message: "Location is required." }, { status: 400 });

    const service = await prisma.service.findUnique({ where: { slug: serviceId } });
    if (!service) return NextResponse.json({ message: "Invalid service." }, { status: 400 });

    await prisma.quoteRequest.create({ data: {
      customerName: customerName.trim(), phone: phone.trim(),
      email: body.email?.trim() || null, serviceId: service.id,
      location: location.trim(), propertyType: body.propertyType?.trim() || null,
      preferredDate: body.preferredDate ? new Date(body.preferredDate) : null,
      notes: body.notes?.trim() || null, status: "NEW",
    }});

    return NextResponse.json({ ok: true, whatsappUrl: buildWhatsAppLink({ customerName: customerName.trim(), serviceName: service.name, location: location.trim(), preferredDate: body.preferredDate || undefined }) });
  } catch (err) {
    console.error("[/api/quotes]", err);
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
