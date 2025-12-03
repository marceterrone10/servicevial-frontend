"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border pt-24">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">Get In Touch</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Have a project in mind? Our team of metallurgical experts is ready to discuss your requirements and
              provide tailored solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-8 lg:col-span-1">
              <Card className="p-6">
                <Mail className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-bold">Email Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">info@metalforge.com</p>
                <p className="text-sm text-muted-foreground">sales@metalforge.com</p>
              </Card>

              <Card className="p-6">
                <Phone className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-bold">Call Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">Main: +1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Sales: +1 (555) 123-4568</p>
              </Card>

              <Card className="p-6">
                <MapPin className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-bold">Visit Us</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  123 Industrial Boulevard
                  <br />
                  Steel City, SC 12345
                  <br />
                  United States
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-bold">Business Hours</h3>
                <p className="mt-2 text-sm text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                <p className="text-sm text-muted-foreground">Saturday: 9am - 2pm</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Submit Inquiry
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto px-6">
          <div className="aspect-[21/9] overflow-hidden rounded-sm bg-muted">
            <img src="/industrial-facility-map-location.jpg" alt="Location map" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
