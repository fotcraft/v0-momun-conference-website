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
      departmentPreference,
      previousMunExperience,
      leadershipExperience,
      motivationLetter,
    } = body

    // Validate required fields
    if (!fullName || !email || !phone || !school || !departmentPreference || !motivationLetter) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const result = await sql`
      INSERT INTO head_applications (
        full_name, email, phone, date_of_birth, school, grade_level,
        department_preference, previous_mun_experience, leadership_experience, motivation_letter
      ) VALUES (
        ${fullName}, ${email}, ${phone}, ${dateOfBirth || null}, ${school}, ${gradeLevel || null},
        ${departmentPreference}, ${previousMunExperience || null}, ${leadershipExperience || null}, ${motivationLetter}
      )
      RETURNING id
    `

    return NextResponse.json({ success: true, id: result[0].id })
  } catch (error) {
    console.error("Head application error:", error)
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    )
  }
}
