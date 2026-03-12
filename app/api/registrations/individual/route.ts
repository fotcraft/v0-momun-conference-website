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
      countryPreference1,
      countryPreference2,
      countryPreference3,
      previousMunExperience,
      dietaryRestrictions,
      emergencyContactName,
      emergencyContactPhone,
    } = body

    // Validate required fields
    if (!fullName || !email || !phone || !school || !committeePreference1 || !emergencyContactName || !emergencyContactPhone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const result = await sql`
      INSERT INTO individual_registrations (
        full_name, email, phone, date_of_birth, school, grade_level,
        committee_preference_1, committee_preference_2, committee_preference_3,
        country_preference_1, country_preference_2, country_preference_3,
        previous_mun_experience, dietary_restrictions,
        emergency_contact_name, emergency_contact_phone
      ) VALUES (
        ${fullName}, ${email}, ${phone}, ${dateOfBirth || null}, ${school}, ${gradeLevel || null},
        ${committeePreference1}, ${committeePreference2 || null}, ${committeePreference3 || null},
        ${countryPreference1 || null}, ${countryPreference2 || null}, ${countryPreference3 || null},
        ${previousMunExperience || null}, ${dietaryRestrictions || null},
        ${emergencyContactName}, ${emergencyContactPhone}
      )
      RETURNING id
    `

    return NextResponse.json({ success: true, id: result[0].id })
  } catch (error) {
    console.error("Individual registration error:", error)
    return NextResponse.json(
      { error: "Failed to submit registration" },
      { status: 500 }
    )
  }
}
