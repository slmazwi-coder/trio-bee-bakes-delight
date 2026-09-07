import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import heroCake from "../assets/IMG-20260829-WA0083.jpg.asset.json";
import scones from "../assets/IMG-20260821-WA0049.jpg.asset.json";
import redvelvet from "../assets/IMG-20260821-WA0055.jpg.asset.json";
import biscuits from "../assets/IMG-20260821-WA0054.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Trio Bee Bakes — Fresh Cakes & Bakes in Umzimkhulu" },
      {
        name: "description",
        content:
          "Home-based bakery in Ibisi Township, Umzimkhulu. Birthday cakes, wedding cakes, scones, muffins, biscuits and fresh bread — baked with love and delivered to you.",
      },
      { property: "og:title", content: "Trio Bee Bakes — Baked with Love" },
      {
        property: "og:description",
        content:
          "Fresh, soft & delicious cakes, scones, biscuits and bread in Umzimkhulu, KwaZulu-Natal. Order today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const highlights = [
  {
    img: redvelvet.url,
    title: "Celebration Cakes",
    text: "Birthday, wedding and themed cakes made to order — every detail done with love.",
  },
  {
    img: scones.url,
    title: "Fresh From the Oven",
    text: "Scones, muffins, cupcakes and biscuits baked fresh in small batches.",
  },
  {
    img: biscuits.url,
    title: "Biscuits & Bread",
    text: "Homemade biscuits, fresh bread and igwinya — the taste of home.",
  },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sky/40 honeycomb-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-honey px-4 py-1 text-xs font-bold uppercase tracking-wider text-honey-foreground">
              Baked with Love since 2021
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Fresh bakes, warm hearts — <span className="text-primary">Trio Bee Bakes</span>
            </h1>
            <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
              Trio Bee Bakes brings you home-cooked goodness from 177 Ibisi Township, Umzimkhulu.
              We bake fresh, soft and delicious — and deliver it to your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                Place an Order
              </Link>
              <Link
                to="/menu"
                className="rounded-full border-2 border-honey bg-background px-7 py-3 text-sm font-bold text-foreground transition-transform hover:scale-105"
              >
                See Our Bakes
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-4 ring-honey/60">
              <img
                src={heroCake.url}
                alt="Birthday cake with butterflies by Trio Bee Bakes"
                className="h-80 w-full object-cover md:h-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">What We Bake</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          From celebration cakes to everyday biscuits — everything is homemade with the best
          ingredients and served with warm customer care.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg"
            >
              <img src={h.img} alt={h.title} className="h-52 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Our Mission</h2>
          <p className="mt-4 text-base opacity-90 md:text-lg">
            To bake with love and deliver fresh, high-quality treats that bring joy to every home
            in Umzimkhulu and beyond — made with the best ingredients, warm customer care and
            reliable delivery.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block rounded-full bg-honey px-7 py-3 text-sm font-bold text-honey-foreground transition-transform hover:scale-105"
          >
            Read Our Story
          </Link>
        </div>
      </section>
    </Layout>
  );
}
