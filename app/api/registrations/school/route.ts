import { sql } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      schoolName,
      schoolAddress,
      schoolCountry,
      facultyAdvisorName,
      facultyAdvisorEmail,
      facultyAdvisorPhone,
      delegationSize,
      committeePreferences,
      specialRequirements,
    } = body

    // Validate required fields
    if (!schoolName || !schoolCountry || !facultyAdvisorName || !facultyAdvisorEmail || !delegationSize) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const result = await sql`
      INSERT INTO school_registrations (
        school_name, school_address, school_country,
        faculty_advisor_name, faculty_advisor_email, faculty_advisor_phone,
        delegation_size, committee_preferences, special_requirements
      ) VALUES (
        ${schoolName}, ${schoolAddress || null}, ${schoolCountry},
        ${facultyAdvisorName}, ${facultyAdvisorEmail}, ${facultyAdvisorPhone || null},
        ${delegationSize}, ${committeePreferences || null}, ${specialRequirements || null}
      )
      RETURNING id
    `

    return NextResponse.json({ success: true, id: result[0].id })
  } catch (error) {
    console.error("School registration error:", error)
    return NextResponse.json(
      { error: "Failed to submit registration" },
      { status: 500 }
    )
  }
}
