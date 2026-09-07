import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import butterfly from "../assets/IMG-20260829-WA0083.jpg.asset.json";
import twoCakes from "../assets/IMG-20260829-WA0085.jpg.asset.json";
import kids from "../assets/IMG-20260821-WA0047.jpg.asset.json";
import scones from "../assets/IMG-20260821-WA0049.jpg.asset.json";
import biscuits from "../assets/IMG-20260821-WA0054.jpg.asset.json";
import fairy from "../assets/IMG-20260821-WA0052.jpg.asset.json";
import spiderman from "../assets/IMG-20260821-WA0050.jpg.asset.json";
import bucket from "../assets/IMG-20260821-WA0053.jpg.asset.json";
import redvelvet from "../assets/IMG-20260821-WA0055.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  component: Menu,
  head: () => ({
    meta: [
      { title: "Our Bakes — Trio Bee Bakes" },
      {
        name: "description",
        content:
          "Birthday cakes, wedding cakes, scones, muffins, cupcakes, biscuits, fresh bread and igwinya — baked fresh in Umzimkhulu and delivered to you.",
      },
      { property: "og:title", content: "Our Bakes — Trio Bee Bakes" },
      {
        property: "og:description",
        content: "Fresh, soft and delicious bakes from Ibisi Township, Umzimkhulu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const menu = [
  "Birthday Cakes",
  "Wedding Cakes",
  "Scones",
  "Muffins",
  "Cupcakes",
  "Biscuits",
  "Fresh Bread",
  "Igwinya",
];

const gallery = [
  { img: butterfly.url, label: "Butterfly birthday cake" },
  { img: spiderman.url, label: "Spiderman themed cake" },
  { img: redvelvet.url, label: "Red velvet & strawberry cake" },
  { img: fairy.url, label: "Fairy princess cake" },
  { img: twoCakes.url, label: "Made-to-order celebration cakes" },
  { img: scones.url, label: "Fresh scones & muffins" },
  { img: biscuits.url, label: "Homemade biscuits" },
  { img: bucket.url, label: "Biscuit buckets for events" },
  { img: kids.url, label: "Delivering smiles in the community" },
];

function Menu() {
  return (
    <Layout>
      <section className="bg-sky/40 honeycomb-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold">Our Bakes</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We bake fresh, soft and delicious — plus home-cooked meals made with love through
            Luciano's Lunch Line.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {menu.map((m) => (
            <div
              key={m}
              className="rounded-xl bg-card p-5 text-center font-display text-lg font-bold shadow-sm ring-1 ring-border transition-colors hover:bg-secondary"
            >
              {m}
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-center text-3xl font-bold">From Our Oven</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.label} className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-border">
              <img
                src={g.img}
                alt={g.label}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-64"
              />
            </figure>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">Planning something special?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Tell us about your birthday, wedding or event and we'll bake something unforgettable.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-honey px-7 py-3 text-sm font-bold text-honey-foreground transition-transform hover:scale-105"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}
