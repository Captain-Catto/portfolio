import { NextResponse } from "next/server";
import { experiencesI18n } from "@/lib/data";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const current = searchParams.get("current");
    const lang = searchParams.get("lang") || "en";

    // Get data based on language
    let data = [
      ...(experiencesI18n[lang as keyof typeof experiencesI18n] ||
        experiencesI18n.en),
    ];

    // Filter current experiences (no endDate)
    if (current === "true") {
      data = data.filter((exp) => !exp.endDate);
    }

    // Sort by start date (most recent first)
    data.sort((a, b) => b.startDate.localeCompare(a.startDate));

    return NextResponse.json({
      success: true,
      data,
      count: data.length,
      language: lang,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch experiences" },
      { status: 500 }
    );
  }
}
