import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { QuoteStatus } from "@prisma/client";
export async function GET(req: NextRequest) {
  try {
    const status = new URL(req.url).searchParams.get("status") as QuoteStatus | null;
    const quotes = await prisma.quoteRequest.findMany({ where: status ? { status } : undefined, include: { service: { select: { name: true } } }, orderBy: { createdAt: "desc" } });
    return NextResponse.json(quotes);
  } catch (err) { console.error(err); return NextResponse.json({ message: "Failed." }, { status: 500 }); }
}
