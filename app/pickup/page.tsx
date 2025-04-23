

"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Clock, Package, ArrowRight, CheckCircle } from "lucide-react"

export default function PickupPage() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    items: "",
    date: null as Date | null,
    timeSlot: "",
    pickupType: "residential",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate)
      setFormData((prev) => ({ ...prev, date: selectedDate }))
    }
  }

  const handleTimeSlotSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, timeSlot: value }))
  }

  const handlePickupTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, pickupType: value }))
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("https://ewaste-recycle.onrender.com/api/v1/track/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      console.log("Server Response:", result)
      
      if (response.ok) {
        setStep(4)
      } else {
        alert("Failed to schedule pickup. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred. Please try again later.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-accent to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Schedule an E-Waste Pickup</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Complete the form below to schedule a convenient pickup time for your electronic waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup Form Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {stepNumber}
                    </div>
                    <span className="text-sm mt-2">
                      {stepNumber === 1 ? "Your Details" : stepNumber === 2 ? "Pickup Items" : "Schedule"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
                  <div
                    className="h-1 bg-primary transition-all duration-300"
                    style={{ width: `${(step - 1) * 50}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Information */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Your Details</h2>
                        <p className="text-muted-foreground">
                          Please provide your contact information and pickup location.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <RadioGroup
                          defaultValue={formData.pickupType}
                          onValueChange={handlePickupTypeChange}
                          className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="residential" id="residential" />
                            <Label htmlFor="residential">Residential</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="business" id="business" />
                            <Label htmlFor="business">Business</Label>
                          </div>
                        </RadioGroup>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(123) 456-7890"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Street Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="123 Main St"
                            required
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              placeholder="Anytown"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              placeholder="CA"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input
                              id="zip"
                              name="zip"
                              value={formData.zip}
                              onChange={handleInputChange}
                              placeholder="12345"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button type="button" onClick={handleNextStep}>
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Pickup Items */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Pickup Items</h2>
                        <p className="text-muted-foreground">Tell us what electronic items you need to recycle.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="items">Items for Pickup</Label>
                          <Textarea
                            id="items"
                            name="items"
                            value={formData.items}
                            onChange={handleInputChange}
                            placeholder="List the electronic items you want to recycle (e.g., 2 laptops, 1 TV, 3 cell phones)"
                            className="min-h-[150px]"
                            required
                          />
                        </div>

                        <div className="bg-muted p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Acceptable Items</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                            <div>• Computers</div>
                            <div>• Laptops</div>
                            <div>• Monitors</div>
                            <div>• TVs</div>
                            <div>• Printers</div>
                            <div>• Phones</div>
                            <div>• Tablets</div>
                            <div>• Batteries</div>
                            <div>• Cables</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={handlePrevStep}>
                          Back
                        </Button>
                        <Button type="button" onClick={handleNextStep}>
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Schedule */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Schedule Pickup</h2>
                        <p className="text-muted-foreground">
                          Choose a convenient date and time for your e-waste pickup.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Select Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={handleDateSelect}
                                initialFocus
                                disabled={(date) => {
                                  // Disable past dates and Sundays
                                  return date < new Date() || date.getDay() === 0
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2">
                          <Label>Select Time Slot</Label>
                          <Select onValueChange={handleTimeSlotSelect}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                              <SelectItem value="evening">Evening (4:00 PM - 7:00 PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="bg-muted p-4 rounded-lg">
                          <h3 className="font-medium mb-2 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            Pickup Guidelines
                          </h3>
                          <ul className="text-sm space-y-1">
                            <li>• Our team will arrive during your selected time slot</li>
                            <li>• Please ensure someone is available to hand over the items</li>
                            <li>• Have your items ready and accessible</li>
                            <li>• We'll handle all the heavy lifting</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={handlePrevStep}>
                          Back
                        </Button>
                        <Button type="submit">Schedule Pickup</Button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {step === 4 && (
                    <div className="space-y-6 text-center">
                      <div className="flex justify-center">
                        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="h-10 w-10 text-primary" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Pickup Scheduled!</h2>
                        <p className="text-muted-foreground">
                          Your e-waste pickup has been successfully scheduled. We've sent a confirmation email with all
                          the details.
                        </p>
                      </div>

                      <div className="bg-muted p-4 rounded-lg text-left">
                        <h3 className="font-medium mb-2">Pickup Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Calendar className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                            <span>
                              {formData.date ? format(formData.date, "PPPP") : "Date not selected"}
                              {formData.timeSlot &&
                                ` (${formData.timeSlot === "morning" ? "Morning" : formData.timeSlot === "afternoon" ? "Afternoon" : "Evening"})`}
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                            <span>
                              {formData.address}, {formData.city}, {formData.state} {formData.zip}
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Package className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                            <span>{formData.items}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Your pickup confirmation number is{" "}
                          <span className="font-bold">ECO-{Math.floor(100000 + Math.random() * 900000)}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          You can use this number to track the status of your pickup.
                        </p>
                      </div>

                      <div className="flex justify-center gap-4">
                        <Button asChild>
                          <Link href="/">Return Home</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Service Area Map</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Check if your location is within our service area for e-waste pickup.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg overflow-hidden border border-border h-[400px] w-full">
            <div className="h-full w-full bg-muted flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <p>Interactive map would be displayed here</p>
                <p className="text-sm text-muted-foreground">
                  We currently serve the greater metropolitan area and surrounding suburbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

