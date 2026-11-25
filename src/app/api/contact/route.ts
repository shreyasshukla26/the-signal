
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  topic: z.enum([
    "Business Collaboration",
    "Marketing Consultation",
    "Professional Networking",
    "Other",
  ]),
  message: z.string().trim().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter valid details",
          errors: validation.error.issues,
        },
        { status: 400 }
      );
    }

    const { name, email, topic, message } = validation.data;

    const sql = getDb();

    await sql`
      INSERT INTO contacts (name, email, topic, message)
      VALUES (${name}, ${email}, ${topic}, ${message})
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been recorded successfully.",
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
