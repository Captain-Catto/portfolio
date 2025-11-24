import { NextResponse } from "next/server";
import { personalInfo, personalInfoI18n } from "@/lib/data";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "en";

    // Get i18n data based on language
    const i18nData =
      personalInfoI18n[lang as keyof typeof personalInfoI18n] ||
      personalInfoI18n.en;

    // Merge static data with i18n data
    const data = {
      ...personalInfo,
      ...i18nData,
    };

    return NextResponse.json({
      success: true,
      data,
      language: lang,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch personal info" },
      { status: 500 }
    );
  }
}
