
import React from "react";

const items = [
  {
    id: 1,
    name: "Chocolate Brownie",
    description: "Rich, fudgy chocolate brownie for sweet cravings.",
    price: 450,
    image: "photo-1606313564200-e75d5e30476c",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake with delicious strawberry flavour.",
    price: 750,
    image: "photo-1533134242443-d4fd215305ad",
    badge: "FAVOURITE",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    description: "A soft, rich cake made for chocolate lovers.",
    price: 600,
    image: "photo-1578985545062-69928b1d9587",
    badge: "POPULAR",
  },
  {
    id: 4,
    name: "Strawberry Cupcake",
    description: "A delightful cupcake with a strawberry touch.",
    price: 350,
    image: "photo-1486427944299-d1955d23e34d",
    badge: "NEW",
  },
  {
    id: 5,
    name: "Chocolate Donuts",
    description: "Soft donuts topped with delicious chocolate.",
    price: 300,
    image: "photo-1551024506-0bccd828d307",
    badge: "POPULAR",
  },
  {
    id: 6,
    name: "Cream Cake Slice",
    description: "Light, creamy cake for your little sweet moments.",
    price: 500,
    image: "photo-1565958011703-44f9829ba187",
    badge: "FRESH",
  },
  {
    id: 7,
    name: "Belgian Waffles",
    description: "Golden waffles with a delicious dessert twist.",
    price: 520,
    image: "photo-1562376552-0d160a2f238d",
    badge: "FAVOURITE",
  },
  {
    id: 8,
    name: "Red Velvet Cake",
    description: "Soft red velvet cake with a creamy finish.",
    price: 650,
    image: "photo-1586788680434-30d324b2d46f",
    badge: "SIGNATURE",
  },
  {
    id: 9,
    name: "Chocolate Cookies",
    description: "Freshly baked cookies with a chocolatey taste.",
    price: 280,
    image: "photo-1499636136210-6f4ee915583e",
    badge: "FRESH",
  },
  {
    id: 10,
    name: "Tiramisu",
    description: "A classic, creamy dessert for a special treat.",
    price: 680,
    image: "photo-1571877227200-a0d98ea607e9",
    badge: "SPECIAL",
  },
];

const photo = (image) =>
  image.startsWith("https://")
    ? image
    : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=85`;

export default function Desserts({ cart = [], setCart }) {
  function addToCart(item) {
    if (setCart) {
      setCart((prev) => [...prev, item]);
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF8EF] px-4 py-12 sm:px-8 lg:px-16">
      <section className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#B92735]">
          A little sweetness
        </p>

        <h1 className="font-serif text-4xl font-bold text-[#49312C] sm:text-5xl lg:text-6xl">
          Sweet Desserts
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#795D55] sm:text-base">
          From rich chocolate cakes to creamy cheesecakes,
          discover something sweet at Crumb & Cherry.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#B92735]" />
      </section>

      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between">
        <p className="text-sm text-[#795D55]">
          Made for your sweet cravings
        </p>

        <p className="rounded-full bg-[#F5DFDF] px-4 py-2 text-xs font-semibold text-[#8E2438]">
          {items.length} Desserts
        </p>
      </div>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-[#F0DDD4] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden bg-[#F5DFDF]">
              <img
                src={photo(item.image)}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-[#FFF8EF] px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#8E2438] shadow-sm">
                {item.badge}
              </span>
            </div>

            <div className="p-5">
              <h2 className="font-serif text-xl font-bold text-[#49312C]">
                {item.name}
              </h2>

              <p className="mt-2 min-h-10 text-sm leading-5 text-[#795D55]">
                {item.description}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-lg font-bold text-[#B92735]">
                  Rs. {item.price}
                </p>

                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className="rounded-full bg-[#B92735] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8E2438] active:scale-95"
                >
                  + Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="mx-auto mt-14 max-w-7xl border-t border-[#EBD7CD] pt-6 text-center">
        <p className="font-serif text-lg italic text-[#795D55]">
          Life is sweeter with dessert. ❤️
        </p>
      </div>
    </main>
  );
}

