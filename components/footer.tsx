import Link from "next/link"
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EcoRecycle</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Responsible e-waste recycling for a greener future. We make it easy to dispose of electronic waste safely
            and sustainably.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pickup" className="text-muted-foreground hover:text-primary">
                Schedule Pickup
              </Link>
            </li>
            <li>
              <Link href="/track" className="text-muted-foreground hover:text-primary">
                Track Pickup
              </Link>
            </li>
            <li>
              <Link href="/donate" className="text-muted-foreground hover:text-primary">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground">123 Green Street, Eco City, EC 12345</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground">(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground">info@ecorecycle.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter for updates on our services and environmental tips.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mt-8 border-t pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} EcoRecycle. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-primary">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

