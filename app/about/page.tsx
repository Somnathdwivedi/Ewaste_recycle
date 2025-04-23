import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Award, Recycle, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-accent to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About EcoRecycle</h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're on a mission to create a sustainable future by making e-waste recycling accessible, convenient,
                and impactful for everyone.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Our team recycling e-waste"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Our journey"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter">How We Started</h2>
              <p className="text-muted-foreground">
                Founded in 2015, EcoRecycle began with a simple observation: electronic waste was becoming one of the
                fastest-growing waste streams, yet recycling options were limited and inconvenient.
              </p>
              <p className="text-muted-foreground">
                Our founders, a group of environmental engineers and tech enthusiasts, set out to create a solution that
                would make e-waste recycling accessible to everyone. They built EcoRecycle with a vision of combining
                technology and sustainability to address the growing e-waste crisis.
              </p>
              <p className="text-muted-foreground">
                Today, we've grown into a nationwide service with a network of certified recycling facilities, but our
                mission remains the same: to protect our planet by ensuring electronic waste is recycled responsibly.
              </p>
              <Link href="/contact">
                <Button>Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Drives Us</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values guide everything we do at EcoRecycle.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Environmental Stewardship</h3>
                <p className="text-muted-foreground">
                  We're committed to protecting our planet through responsible recycling practices and minimizing waste.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community Focus</h3>
                <p className="text-muted-foreground">
                  We believe in building strong relationships with the communities we serve and making a positive local
                  impact.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in all aspects of our service, from customer experience to recycling
                  processes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously seek innovative solutions to improve our services and maximize environmental impact.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in being open about our processes and the impact of our recycling efforts.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Passion</h3>
                <p className="text-muted-foreground">
                  We're passionate about creating a sustainable future and inspiring others to join our mission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Meet the People Behind EcoRecycle
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our diverse team of experts is united by a shared commitment to environmental sustainability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Environmental engineer with 15+ years of experience in waste management.",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Tech innovator focused on creating digital solutions for environmental challenges.",
              },
              {
                name: "Aisha Patel",
                role: "Operations Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Logistics expert ensuring our recycling operations run smoothly and efficiently.",
              },
              {
                name: "David Rodriguez",
                role: "Sustainability Manager",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Environmental scientist specializing in circular economy principles.",
              },
              {
                name: "Emma Wilson",
                role: "Community Outreach",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Passionate about educating communities on the importance of e-waste recycling.",
              },
              {
                name: "James Lee",
                role: "Recycling Specialist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Expert in e-waste processing techniques and materials recovery.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground mt-2">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Impact</div>
              <h2 className="text-3xl font-bold tracking-tighter">Making a Difference</h2>
              <p className="text-muted-foreground">
                Since our founding, we've made significant strides in reducing e-waste and its environmental impact:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Recycled over 5 million pounds of electronic waste</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Prevented 2.5 million pounds of CO2 emissions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Recovered valuable materials for reuse in manufacturing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Served over 100,000 customers nationwide</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Partnered with 50+ businesses for corporate recycling programs</span>
                </li>
              </ul>
              <Link href="/donate">
                <Button>Support Our Mission</Button>
              </Link>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Environmental impact"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
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
                Whether you're looking to recycle your e-waste or support our mission, there are many ways to get
                involved.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/pickup">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Schedule a Pickup
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

