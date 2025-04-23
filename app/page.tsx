import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Truck, BarChart, Leaf, Award, Recycle, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-accent to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Responsible E-Waste Recycling
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Recycle Your E-Waste for a Greener Future
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We make it easy to dispose of your electronic waste responsibly. Schedule a pickup today and contribute
                to a more sustainable planet.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/pickup">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Schedule Pickup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="E-waste recycling"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Simple Process</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How Our E-Waste Recycling Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our streamlined process makes recycling your electronic waste easy and convenient.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Schedule</h3>
              <p className="text-muted-foreground">
                Book a convenient pickup time through our easy-to-use online form.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Pickup</h3>
              <p className="text-muted-foreground">Our team arrives at your location to collect your e-waste items.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Recycle</h3>
              <p className="text-muted-foreground">
                We responsibly recycle your e-waste, ensuring materials are properly processed.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/pickup">
              <Button>
                Schedule Your Pickup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Features That Make Us Different</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're committed to making e-waste recycling accessible, transparent, and impactful.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            <Card>
              <CardHeader className="pb-2">
                <Leaf className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our recycling processes adhere to the highest environmental standards, minimizing the impact on our
                  planet.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Truck className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Free Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We offer free pickup services for your convenience, making it easier to recycle your e-waste.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <BarChart className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Impact Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track the positive environmental impact of your recycling efforts with our detailed reports.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Award className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Certified Process</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our recycling processes are certified by leading environmental organizations, ensuring proper
                  handling.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Convenient Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Choose a pickup time that works for you with our flexible scheduling system.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Recycle className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We ensure complete data destruction for all devices, protecting your privacy and security.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Recycle Your E-Waste?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of environmentally conscious individuals and businesses who trust us with their e-waste
                recycling needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/pickup">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Schedule Pickup
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

