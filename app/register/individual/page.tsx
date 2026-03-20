"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"

const committees = [
  { value: "ga1", label: "GA 1 - Disarmament and International Security" },
  { value: "ga3", label: "GA 3 - Social, Humanitarian and Cultural Affairs" },
  { value: "ga4", label: "GA 4 - Special Political and Decolonization" },
  { value: "ga6", label: "GA 6 - Legal Affairs" },
  { value: "ecosoc", label: "ECOSOC - Economic and Social Council" },
  { value: "sc", label: "Security Council" },
  { value: "who", label: "WHO - World Health Organization" },
  { value: "wb", label: "World Bank" },
  { value: "unesco", label: "UNESCO" },
]

export default function IndividualRegistrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    school: "",
    gradeLevel: "",
    committeePreference1: "",
    committeePreference2: "",
    committeePreference3: "",
    countryPreference1: "",
    countryPreference2: "",
    countryPreference3: "",
    previousMunExperience: "",
    dietaryRestrictions: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/registrations/individual", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to submit registration")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit registration")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
            <h2 className="mb-2 text-2xl font-bold text-primary">Registration Submitted!</h2>
            <p className="mb-6 text-muted-foreground">
              Thank you for registering as a delegate for MoMUN 2026. We will contact you with further details.
            </p>
            <Link href="/">
              <Button>Return to Homepage</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </Link>
          <Image src="/images/momun-logo.png" alt="MoMUN Logo" width={40} height={40} className="ml-auto h-10 w-auto" />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Individual Delegate Registration</CardTitle>
            <CardDescription>
              Register as an independent delegate for MoMUN 2026. For students not attending with a school delegation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="school">School *</Label>
                    <Input
                      id="school"
                      required
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gradeLevel">Grade Level</Label>
                    <Input
                      id="gradeLevel"
                      placeholder="e.g., 11th Grade, IB Year 1"
                      value={formData.gradeLevel}
                      onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Committee Preferences</h3>

                <div className="space-y-2">
                  <Label htmlFor="committeePreference1">1st Committee Preference *</Label>
                  <Select
                    value={formData.committeePreference1}
                    onValueChange={(value) => setFormData({ ...formData, committeePreference1: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select committee" />
                    </SelectTrigger>
                    <SelectContent>
                      {committees.map((c) => (
                        <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="committeePreference2">2nd Committee Preference</Label>
                  <Select
                    value={formData.committeePreference2}
                    onValueChange={(value) => setFormData({ ...formData, committeePreference2: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select committee" />
                    </SelectTrigger>
                    <SelectContent>
                      {committees.map((c) => (
                        <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="committeePreference3">3rd Committee Preference</Label>
                  <Select
                    value={formData.committeePreference3}
                    onValueChange={(value) => setFormData({ ...formData, committeePreference3: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select committee" />
                    </SelectTrigger>
                    <SelectContent>
                      {committees.map((c) => (
                        <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Country Preferences</h3>
                <p className="text-sm text-muted-foreground">Optional: Let us know which countries you would like to represent.</p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="countryPreference1">1st Choice</Label>
                    <Input
                      id="countryPreference1"
                      placeholder="e.g., France"
                      value={formData.countryPreference1}
                      onChange={(e) => setFormData({ ...formData, countryPreference1: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="countryPreference2">2nd Choice</Label>
                    <Input
                      id="countryPreference2"
                      placeholder="e.g., Japan"
                      value={formData.countryPreference2}
                      onChange={(e) => setFormData({ ...formData, countryPreference2: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="countryPreference3">3rd Choice</Label>
                    <Input
                      id="countryPreference3"
                      placeholder="e.g., Brazil"
                      value={formData.countryPreference3}
                      onChange={(e) => setFormData({ ...formData, countryPreference3: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Additional Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="previousMunExperience">Previous MUN Experience</Label>
                  <Textarea
                    id="previousMunExperience"
                    placeholder="List any MUN conferences you have attended..."
                    rows={3}
                    value={formData.previousMunExperience}
                    onChange={(e) => setFormData({ ...formData, previousMunExperience: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                  <Input
                    id="dietaryRestrictions"
                    placeholder="e.g., Vegetarian, Gluten-free, Allergies"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Emergency Contact</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactName">Contact Name *</Label>
                    <Input
                      id="emergencyContactName"
                      required
                      value={formData.emergencyContactName}
                      onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactPhone">Contact Phone *</Label>
                    <Input
                      id="emergencyContactPhone"
                      type="tel"
                      required
                      value={formData.emergencyContactPhone}
                      onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Register as Delegate"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
