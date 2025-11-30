import {NextRequest, NextResponse} from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    // const response = await openai.responses.create({
    //   model: "gpt-4o-mini",
    //   input: message
    // });
    //
    // const output = response.output_text;
    const output = "Hi, this is sample message"
    return Response.json({ reply: output })
  } catch (err) {
    return new Response("Error generating response", { status: 500 });
  }
}