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

const departments = [
  { value: "press", label: "Press Team" },
  { value: "logistics", label: "Logistics" },
  { value: "it", label: "IT & Technology" },
  { value: "social", label: "Social Events" },
  { value: "academic", label: "Academic Team" },
  { value: "design", label: "Design & Media" },
]

export default function HeadApplicationPage() {
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
    departmentPreference: "",
    previousMunExperience: "",
    leadershipExperience: "",
    motivationLetter: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/applications/head", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to submit application")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit application")
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
            <h2 className="mb-2 text-2xl font-bold text-primary">Application Submitted!</h2>
            <p className="mb-6 text-muted-foreground">
              Thank you for applying to be a Department Head at MoMUN 2026. We will review your application and contact you soon.
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
            <CardTitle className="text-2xl text-primary">Head Application</CardTitle>
            <CardDescription>
              Apply to lead a department at MoMUN 2026. Department Heads are responsible for organizing and managing their teams.
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
                <h3 className="text-lg font-semibold text-primary">Department Preference</h3>

                <div className="space-y-2">
                  <Label htmlFor="departmentPreference">Preferred Department *</Label>
                  <Select
                    value={formData.departmentPreference}
                    onValueChange={(value) => setFormData({ ...formData, departmentPreference: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((d) => (
                        <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Experience & Motivation</h3>

                <div className="space-y-2">
                  <Label htmlFor="previousMunExperience">Previous MUN Experience</Label>
                  <Textarea
                    id="previousMunExperience"
                    placeholder="List any MUN conferences you have attended, roles held, and awards received..."
                    rows={4}
                    value={formData.previousMunExperience}
                    onChange={(e) => setFormData({ ...formData, previousMunExperience: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="leadershipExperience">Leadership Experience</Label>
                  <Textarea
                    id="leadershipExperience"
                    placeholder="Describe any leadership roles you have held in school, clubs, or other organizations..."
                    rows={4}
                    value={formData.leadershipExperience}
                    onChange={(e) => setFormData({ ...formData, leadershipExperience: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivationLetter">Motivation Letter *</Label>
                  <Textarea
                    id="motivationLetter"
                    placeholder="Tell us why you want to be a Department Head at MoMUN 2026 and what you would bring to the role..."
                    rows={6}
                    required
                    value={formData.motivationLetter}
                    onChange={(e) => setFormData({ ...formData, motivationLetter: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
