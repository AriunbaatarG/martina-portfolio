import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!filename) {
    return NextResponse.json(
      { error: "Filename is required" },
      { status: 400 }
    );
  }

  // Check if request body is null
  const body = request.body;
  if (!body) {
    return NextResponse.json(
      { error: "Request body is required" },
      { status: 400 }
    );
  }

  const blob = await put(filename, body, {
    access: "public",
  });

  return NextResponse.json(blob);
}