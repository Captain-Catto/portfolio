import { NextResponse } from "next/server";
import { projectsI18n } from "@/lib/data";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");
    const limit = searchParams.get("limit");
    const lang = searchParams.get("lang") || "en";

    // Get data based on language
    let data = [
      ...(projectsI18n[lang as keyof typeof projectsI18n] || projectsI18n.en),
    ];

    // Filter by featured
    if (featured === "true") {
      data = data.filter((p) => p.featured);
    }

    // Limit results
    if (limit) {
      const limitNum = parseInt(limit, 10);
      data = data.slice(0, limitNum);
    }

    return NextResponse.json({
      success: true,
      data,
      count: data.length,
      language: lang,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
