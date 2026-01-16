import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUsPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-page px-4">
            <div className="grid items-start gap-16 md:grid-cols-2">
              {/* Left Column: Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-m-h1 font-headline font-semibold md:text-h1">
                    Contact us
                  </h1>
                  <p className="text-m-body-base mt-4 text-muted-foreground md:text-body-lg">
                    We'd love to hear from you. Please fill out this form, and
                    we'll reply soon.
                  </p>
                </div>

                <div className="grid gap-x-8 gap-y-12 pt-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-h4 font-semibold">Email</h3>
                    <p className="mb-1 text-body-base text-muted-foreground">
                      Contact us by email, and we will respond shortly.
                    </p>
                    <a
                      href="mailto:hey@uiblox.com"
                      className="text-body-base font-medium hover:underline"
                    >
                      hey@uiblox.com
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 text-h4 font-semibold">Phone</h3>
                    <p className="mb-1 text-body-base text-muted-foreground">
                      Call us on weekdays from 9 AM to 5 PM.
                    </p>
                    <a
                      href="tel:+1222333444"
                      className="text-body-base font-medium hover:underline"
                    >
                      +1 (222) 333 444
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 text-h4 font-semibold">Mobile</h3>
                    <p className="mb-1 text-body-base text-muted-foreground">
                      Call us on weekdays from 9 AM to 6 PM.
                    </p>
                    <a
                      href="tel:+2222333444"
                      className="text-body-base font-medium hover:underline"
                    >
                      +2 (222) 333 444
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 text-h4 font-semibold">Office</h3>
                    <p className="text-body-base text-muted-foreground">
                      Visit us at our headquarters.
                    </p>
                    <p className="text-body-base font-medium">
                      87266 Green Station, Euless, Oregon 26739, Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="rounded-xl bg-card p-8 shadow-subtle sm:p-12">
                <h2 className="mb-6 text-m-h2 font-headline font-semibold md:text-h2">
                  Write us a message
                </h2>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name *</Label>
                      <Input
                        id="first-name"
                        type="text"
                        placeholder="Jane"
                        className="rounded-full border-transparent bg-muted"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name *</Label>
                      <Input
                        id="last-name"
                        type="text"
                        placeholder="Smith"
                        className="rounded-full border-transparent bg-muted"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@email.com"
                      className="rounded-full border-transparent bg-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave us a message..."
                      rows={5}
                      className="rounded-xl border-transparent bg-muted"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy-policy" />
                    <Label
                      htmlFor="privacy-policy"
                      className="text-sm font-normal text-muted-foreground"
                    >
                      I agree the Privacy Policy
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-16 border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Mediworker. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
