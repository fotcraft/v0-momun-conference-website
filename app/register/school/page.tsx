"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function SchoolRegistrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    schoolName: "",
    schoolAddress: "",
    schoolCountry: "",
    facultyAdvisorName: "",
    facultyAdvisorEmail: "",
    facultyAdvisorPhone: "",
    delegationSize: "",
    committeePreferences: "",
    specialRequirements: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/registrations/school", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          delegationSize: parseInt(formData.delegationSize) || 0,
        }),
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
              Thank you for registering your school for MoMUN 2026. We will contact your faculty advisor with further details.
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
          <Image src="/images/momun-logo.png" alt="MoMUN Logo" width={40} height={40} className="ml-auto" />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">School Registration</CardTitle>
            <CardDescription>
              Register your school delegation for MoMUN 2026. Faculty advisors can register multiple delegates at once.
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
                <h3 className="text-lg font-semibold text-primary">School Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input
                    id="schoolName"
                    required
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schoolAddress">School Address</Label>
                  <Input
                    id="schoolAddress"
                    value={formData.schoolAddress}
                    onChange={(e) => setFormData({ ...formData, schoolAddress: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schoolCountry">Country *</Label>
                  <Input
                    id="schoolCountry"
                    required
                    value={formData.schoolCountry}
                    onChange={(e) => setFormData({ ...formData, schoolCountry: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Faculty Advisor</h3>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="facultyAdvisorName">Advisor Name *</Label>
                    <Input
                      id="facultyAdvisorName"
                      required
                      value={formData.facultyAdvisorName}
                      onChange={(e) => setFormData({ ...formData, facultyAdvisorName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facultyAdvisorEmail">Advisor Email *</Label>
                    <Input
                      id="facultyAdvisorEmail"
                      type="email"
                      required
                      value={formData.facultyAdvisorEmail}
                      onChange={(e) => setFormData({ ...formData, facultyAdvisorEmail: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facultyAdvisorPhone">Advisor Phone</Label>
                  <Input
                    id="facultyAdvisorPhone"
                    type="tel"
                    value={formData.facultyAdvisorPhone}
                    onChange={(e) => setFormData({ ...formData, facultyAdvisorPhone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Delegation Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="delegationSize">Expected Delegation Size *</Label>
                  <Input
                    id="delegationSize"
                    type="number"
                    min="1"
                    required
                    placeholder="Number of delegates"
                    value={formData.delegationSize}
                    onChange={(e) => setFormData({ ...formData, delegationSize: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="committeePreferences">Committee Preferences</Label>
                  <Textarea
                    id="committeePreferences"
                    placeholder="List any committee preferences for your delegation..."
                    rows={3}
                    value={formData.committeePreferences}
                    onChange={(e) => setFormData({ ...formData, committeePreferences: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    placeholder="Any special requirements, dietary restrictions, accessibility needs, etc..."
                    rows={3}
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Register School"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
