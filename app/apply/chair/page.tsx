"use client"

import { useState, useRef } from "react"
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
import { ArrowLeft, CheckCircle, Upload, X, FileText, Loader2 } from "lucide-react"

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

export default function ChairApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [isUploadingPdf, setIsUploadingPdf] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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
    positionType: "",
    previousMunExperience: "",
    motivationLetter: "",
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file")
        return
      }
      if (file.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB")
        return
      }
      setPdfFile(file)
      setError("")
    }
  }

  const removePdf = () => {
    setPdfFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      let motivationLetterPdfUrl = ""

      // Upload PDF if provided
      if (pdfFile) {
        setIsUploadingPdf(true)
        const pdfFormData = new FormData()
        pdfFormData.append("file", pdfFile)
        
        const uploadResponse = await fetch("/api/upload/pdf", {
          method: "POST",
          body: pdfFormData,
        })

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload PDF")
        }

        const uploadData = await uploadResponse.json()
        motivationLetterPdfUrl = uploadData.url
        setIsUploadingPdf(false)
      }

      const response = await fetch("/api/applications/chair", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          motivationLetterPdfUrl,
        }),
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
      setIsUploadingPdf(false)
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
              Thank you for applying to be a Chair at MoMUN 2026. We will review your application and contact you soon.
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
          <Image src="/images/moraitis-logo.png" alt="Moraitis School Logo" width={40} height={40} className="ml-auto h-10 w-auto" />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Chair Application</CardTitle>
            <CardDescription>
              Apply to be a Main Chair or Co-Chair at MoMUN 2026. Each committee has one Main Chair and two Co-Chairs.
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
                <h3 className="text-lg font-semibold text-primary">Position Preferences</h3>

                <div className="space-y-2">
                  <Label htmlFor="positionType">Position Type *</Label>
                  <Select
                    value={formData.positionType}
                    onValueChange={(value) => setFormData({ ...formData, positionType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select position type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main_chair">Main Chair</SelectItem>
                      <SelectItem value="co_chair">Co-Chair</SelectItem>
                      <SelectItem value="either">Either (No Preference)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
                  <Label htmlFor="motivationLetter">Motivation Letter *</Label>
                  <Textarea
                    id="motivationLetter"
                    placeholder="Tell us why you want to be a Chair at MoMUN 2026 and what qualities you would bring to the role..."
                    rows={6}
                    required={!pdfFile}
                    value={formData.motivationLetter}
                    onChange={(e) => setFormData({ ...formData, motivationLetter: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Upload Motivation Letter as PDF (Recommended)</Label>
                  <p className="text-sm text-muted-foreground">
                    We recommend uploading a well-formatted PDF version of your motivation letter for best presentation.
                  </p>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="pdf-upload"
                  />

                  {!pdfFile ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/50 px-4 py-8 text-muted-foreground transition-colors hover:border-primary hover:bg-muted"
                    >
                      <Upload className="h-5 w-5" />
                      <span>Click to upload PDF (max 10MB)</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate font-medium text-foreground">{pdfFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={removePdf}
                        className="rounded-full p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {isUploadingPdf ? "Uploading PDF..." : "Submitting..."}
                  </span>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
