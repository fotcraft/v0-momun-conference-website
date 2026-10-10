"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const noticeKey = "momun-individual-registration-2026-10-16"

export function RegistrationNotice() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (Date.now() >= Date.parse("2026-10-17T00:00:00+03:00")) return
    try {
      if (sessionStorage.getItem(noticeKey)) return
      sessionStorage.setItem(noticeKey, "seen")
    } catch {
      // The notice still works when browser storage is unavailable.
    }
    setOpen(true)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-border bg-card p-8">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-bold leading-tight text-foreground">
            Individual Delegate Registration
          </DialogTitle>
          <DialogDescription className="pt-2 text-base leading-relaxed">
            Registration closes on <time dateTime="2026-10-16" className="font-semibold text-foreground">16 October 2026</time>.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/register/individual" onClick={() => setOpen(false)}>Register Now</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
