import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout } from "../components/Layout";
import { supabase } from "@/integrations/supabase/client";

const orderSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  address: z.string().trim().min(3, "Please enter your address").max(300),
  items: z.string().trim().min(3, "Please tell us what you'd like").max(1000),
});


export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Order & Contact — Trio Bee Bakes" },
      {
        name: "description",
        content:
          "Order cakes, scones, biscuits and more from Trio Bee Bakes in Ibisi Township, Umzimkhulu. Call 078 730 7624 or send us a message.",
      },
      { property: "og:title", content: "Order from Trio Bee Bakes" },
      {
        property: "og:description",
        content: "Fresh bakes and delivery in Umzimkhulu, KwaZulu-Natal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", address: "", items: "" });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = orderSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSaving(true);
    const { error: insertError } = await supabase.from("orders").insert(parsed.data);
    setSaving(false);
    if (insertError) {
      setError("Sorry, we couldn't send that. Please try again or call us on 078 730 7624.");
      return;
    }
    setSent(true);
  }


  return (
    <Layout>
      <section className="bg-sky/40 honeycomb-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold">Order & Contact</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Ready for something delicious? Call us, message us, or send the form below.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Find Us</h2>
          <div className="mt-6 space-y-5">
            <div className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border">
              <h3 className="font-bold text-primary">Address</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                177 Ibisi Township, Umzimkhulu, KwaZulu-Natal
              </p>
            </div>
            <div className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border">
              <h3 className="font-bold text-primary">Phone / WhatsApp</h3>
              <a href="tel:+27787307624" className="mt-1 block text-sm text-muted-foreground hover:text-primary">
                078 730 7624
              </a>
            </div>
            <div className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border">
              <h3 className="font-bold text-primary">Email</h3>
              <a
                href="mailto:lucianoslunchline@gmail.com"
                className="mt-1 block text-sm text-muted-foreground hover:text-primary"
              >
                lucianoslunchline@gmail.com
              </a>
            </div>
            <div className="rounded-xl bg-honey/20 p-5 ring-1 ring-honey/50">
              <h3 className="font-bold text-foreground">We deliver!</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fresh baking delivered around Umzimkhulu and surrounding areas — just ask when you order.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card p-7 shadow-md ring-1 ring-border">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-honey">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-honey-foreground">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-5 text-2xl font-bold">Thank you!</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Your order request has been noted. For the fastest response, please also WhatsApp or
                call us on 078 730 7624.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold">Request an Order</h2>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">Your name</label>
                  <input
                    id="name"
                    required
                    className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g. Nomvula Dlamini"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold">Phone number</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g. 072 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="order" className="text-sm font-semibold">What would you like?</label>
                  <textarea
                    id="order"
                    required
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g. 1 birthday cake for Saturday, 2 dozen scones, delivery to Ibisi"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Send Order Request
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
