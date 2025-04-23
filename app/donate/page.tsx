import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, School, Leaf, ArrowRight } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-accent to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Support Our Mission
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Donate to EcoRecycle</h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your donation helps us expand our e-waste recycling efforts, educate communities, and create a more
                sustainable future.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#donate-form">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Donate Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#impact">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    See Your Impact
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Donation impact"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Your Impact</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                How Your Donation Makes a Difference
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Every contribution helps us expand our mission and create a more sustainable future.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-8">
            <Card>
              <CardHeader className="pb-2">
                <Heart className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Community Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your donation supports free e-waste collection events in underserved communities, making responsible
                  recycling accessible to all.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <School className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Education Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We develop educational programs for schools and communities about the importance of e-waste recycling
                  and environmental sustainability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Leaf className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Technology Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We invest in research and development of more efficient recycling processes to maximize the recovery
                  of valuable materials.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Donation impact"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-2xl font-bold">Your Donation in Action</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">$25</span>
                    <span>Recycles 50 lbs of e-waste</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/5"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">$50</span>
                    <span>Provides educational materials for one classroom</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/5"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">$100</span>
                    <span>Sponsors a community collection event</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/5"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">$250</span>
                    <span>Funds research into new recycling technologies</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-4/5"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">$500+</span>
                    <span>Establishes a permanent collection point</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donate-form" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Donate Now</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Support Our Mission</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose how you'd like to contribute to our e-waste recycling efforts.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-8">
            <Card className="bg-background">
              <CardContent className="p-6">
                <Tabs defaultValue="one-time">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
                  </TabsList>

                  <TabsContent value="one-time" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <RadioGroup defaultValue="50">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                          <div>
                            <RadioGroupItem value="25" id="one-time-25" className="peer sr-only" />
                            <Label
                              htmlFor="one-time-25"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-xl font-bold">$25</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="50" id="one-time-50" className="peer sr-only" />
                            <Label
                              htmlFor="one-time-50"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-xl font-bold">$50</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="100" id="one-time-100" className="peer sr-only" />
                            <Label
                              htmlFor="one-time-100"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-xl font-bold">$100</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="custom" id="one-time-custom" className="peer sr-only" />
                            <Label
                              htmlFor="one-time-custom"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-xl font-bold">Custom</span>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>

                      <div className="space-y-2">
                        <Label htmlFor="custom-amount">Custom Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <Input id="custom-amount" type="number" min="1" placeholder="Enter amount" className="pl-8" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Donation Designation</Label>
                        <RadioGroup defaultValue="general">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="general" id="general" />
                              <Label htmlFor="general">General Fund</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="education" id="education" />
                              <Label htmlFor="education">Education Programs</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="community" id="community" />
                              <Label htmlFor="community">Community Outreach</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="research" id="research" />
                              <Label htmlFor="research">Research & Innovation</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full">
                        Proceed to Payment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Your donation is tax-deductible. You will receive a receipt for your records.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="monthly" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <RadioGroup defaultValue="25">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                          <div>
                            <RadioGroupItem value="10" id="monthly-10" className="peer sr-only" />
                            <Label
                              htmlFor="monthly-10"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-xl font-bold">$10</span>
                              <span className="text-xs text-muted-foreground">per month</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="25" id="monthly-25" className="peer sr-only" />
                            <Label
                              htmlFor="monthly-25"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-xl font-bold">$25</span>
                              <span className="text-xs text-muted-foreground">per month</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="50" id="monthly-50" className="peer sr-only" />
                            <Label
                              htmlFor="monthly-50"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-xl font-bold">$50</span>
                              <span className="text-xs text-muted-foreground">per month</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="custom" id="monthly-custom" className="peer sr-only" />
                            <Label
                              htmlFor="monthly-custom"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-xl font-bold">Custom</span>
                              <span className="text-xs text-muted-foreground">amount</span>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>

                      <div className="space-y-2">
                        <Label htmlFor="monthly-custom-amount">Custom Monthly Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <Input
                            id="monthly-custom-amount"
                            type="number"
                            min="1"
                            placeholder="Enter amount"
                            className="pl-8"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="monthly-name">Full Name</Label>
                        <Input id="monthly-name" placeholder="John Doe" required />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="monthly-email">Email</Label>
                          <Input id="monthly-email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="monthly-phone">Phone (Optional)</Label>
                          <Input id="monthly-phone" type="tel" placeholder="(123) 456-7890" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Donation Designation</Label>
                        <RadioGroup defaultValue="general">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="general" id="monthly-general" />
                              <Label htmlFor="monthly-general">General Fund</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="education" id="monthly-education" />
                              <Label htmlFor="monthly-education">Education Programs</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="community" id="monthly-community" />
                              <Label htmlFor="monthly-community">Community Outreach</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="research" id="monthly-research" />
                              <Label htmlFor="monthly-research">Research & Innovation</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full">
                        Proceed to Payment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Your monthly donation will continue until canceled. You can cancel at any time.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">From Our Supporters</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from the people who have supported our mission.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Monthly Donor",
                quote:
                  "I've been a monthly donor for over a year now. It feels good knowing my contribution is helping create a more sustainable future for our planet.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Michael Chen",
                role: "Corporate Partner",
                quote:
                  "Our company partnered with EcoRecycle for our office e-waste management. Their dedication to environmental sustainability aligns perfectly with our corporate values.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Emily Rodriguez",
                role: "Community Volunteer",
                quote:
                  "I started as a donor and now I volunteer at community collection events. The impact EcoRecycle has on local communities is truly inspiring.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <Users className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join Us in Creating a Sustainable Future
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your donation today will help us continue our mission of responsible e-waste recycling and environmental
                education.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#donate-form">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

