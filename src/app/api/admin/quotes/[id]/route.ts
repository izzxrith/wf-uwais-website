import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { QuoteStatus } from "@prisma/client";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const updated = await prisma.quoteRequest.update({ where: { id }, data: { ...(body.status && { status: body.status as QuoteStatus }), ...(body.adminNote !== undefined && { adminNote: body.adminNote }) } });
    return NextResponse.json(updated);
  } catch (err) { console.error(err); return NextResponse.json({ message: "Failed." }, { status: 500 }); }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.quoteRequest.update({ where: { id }, data: { status: "ARCHIVED" } });
    return NextResponse.json({ ok: true });
  } catch (err) { console.error(err); return NextResponse.json({ message: "Failed." }, { status: 500 }); }
}
