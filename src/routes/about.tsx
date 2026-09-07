import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import community from "../assets/IMG-20260821-WA0047.jpg.asset.json";
import fairy from "../assets/IMG-20260821-WA0052.jpg.asset.json";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us — Trio Bee Bakes" },
      {
        name: "description",
        content:
          "Founded in August 2021 by Siviwe Nkete Mwisi, Trio Bee Bakes is a home-based bakery in Ibisi Township, Umzimkhulu — baking isn't just business, it's love.",
      },
      { property: "og:title", content: "About Trio Bee Bakes" },
      {
        property: "og:description",
        content:
          "A home-based bakery built on passion, flavor and service in Umzimkhulu, KwaZulu-Natal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function About() {
  return (
    <Layout>
      <section className="bg-sky/40 honeycomb-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold">About Trio Bee Bakes</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Luciano's Lunch Line · Home-based bakery in Umzimkhulu, KwaZulu-Natal
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={community.url}
            alt="A Trio Bee Bakes cake delivery bringing smiles to local schoolchildren"
            className="rounded-3xl object-cover shadow-lg ring-4 ring-honey/50"
          />
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in August 2021 by <strong className="text-foreground">Siviwe Nkete Mwisi</strong>,
              Trio Bee Bakes is a home-based bakery built on passion, flavor and service.
            </p>
            <p className="mt-4 text-muted-foreground">
              We're based at <strong className="text-foreground">177 Ibisi Township, Umzimkhulu,
              KwaZulu-Natal</strong>, and we specialize in fresh baking and convenient delivery — so
              you get that "just out the oven" taste wherever you are.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every order is made with care, because to us, baking isn't just business — it's love.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-md">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 opacity-90">
              To bake with love and deliver fresh, high-quality treats that bring joy to every home
              in Umzimkhulu and beyond. We're committed to making delicious, homemade baked goods
              with the best ingredients, served with warm customer care and reliable delivery.
            </p>
          </div>
          <div className="rounded-2xl bg-honey p-8 text-honey-foreground shadow-md">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 opacity-90">
              To become KwaZulu-Natal's most loved community bakery, known for creating moments of
              sweetness and connection — one cake, loaf and delivery at a time. We dream of growing
              Trio Bee Bakes into a brand that nourishes communities while empowering women in
              business.
            </p>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <ul className="mt-6 space-y-4">
              {[
                ["Homemade quality", "Everything baked fresh at home, in small batches."],
                ["Made to order", "Birthday, wedding and themed cakes designed around your day."],
                ["We deliver", "Convenient delivery so your treats arrive fresh."],
                ["Community first", "Proudly local, proudly baked with love."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-full bg-honey" />
                  <div>
                    <strong className="text-foreground">{t}</strong>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={fairy.url}
            alt="A pink fairy-themed birthday cake by Trio Bee Bakes"
            className="order-1 rounded-3xl object-cover shadow-lg ring-4 ring-honey/50 md:order-2"
          />
        </div>
      </section>
    </Layout>
  );
}
