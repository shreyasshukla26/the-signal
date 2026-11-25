
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { z } from "zod";

const analyticsSchema = z.object({
  sessionId: z.string().uuid(),

  eventName: z.enum([
    "page_view",
    "section_view",
    "experience_click",
    "clarity_interaction",
    "time_spent",
    "contact_submit",
    "linkedin_click",
  ]),

  eventData: z.object({
    section: z.string().max(100).optional(),
    company: z.string().max(100).optional(),
    value: z.number().min(0).max(100).optional(),
    seconds: z.number().int().min(1).max(15).optional(),
  }).strict().default({}),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = analyticsSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid analytics event",
        },
        { status: 400 }
      );
    }

    const { sessionId, eventName, eventData } =
      validation.data;

    const sql = getDb();

    await sql`
      INSERT INTO analytics_events (
        session_id,
        event_name,
        event_data
      )
      VALUES (
        ${sessionId},
        ${eventName},
        ${JSON.stringify(eventData)}::jsonb
      )
    `;

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );

  } catch (error) {
    console.error("Analytics API Error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
