import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    // const response = await openai.responses.create({
    //   model: process.env.GPT_AGENT,
    //   input: message
    // })
    // const output = response.output_text;
    const output = "Hi, this is sample message";
    return NextResponse.json({ reply: output });
  } catch (err) {
    return new NextResponse("Error generating response", { status: 500 });
  }
}