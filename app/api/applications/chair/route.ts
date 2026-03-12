import { sql } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      fullName,
      email,
      phone,
      dateOfBirth,
      school,
      gradeLevel,
      committeePreference1,
      committeePreference2,
      committeePreference3,
      positionType,
      previousMunExperience,
      motivationLetter,
    } = body

    // Validate required fields
    if (!fullName || !email || !phone || !school || !committeePreference1 || !positionType || !motivationLetter) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const result = await sql`
      INSERT INTO chair_applications (
        full_name, email, phone, date_of_birth, school, grade_level,
        committee_preference_1, committee_preference_2, committee_preference_3,
        position_type, previous_mun_experience, motivation_letter
      ) VALUES (
        ${fullName}, ${email}, ${phone}, ${dateOfBirth || null}, ${school}, ${gradeLevel || null},
        ${committeePreference1}, ${committeePreference2 || null}, ${committeePreference3 || null},
        ${positionType}, ${previousMunExperience || null}, ${motivationLetter}
      )
      RETURNING id
    `

    return NextResponse.json({ success: true, id: result[0].id })
  } catch (error) {
    console.error("Chair application error:", error)
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    )
  }
}
