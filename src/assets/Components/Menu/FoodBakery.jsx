
import React from "react";

const items = [
  {
    id: 1,
    name: "Butter Croissant",
    description: "Freshly baked, buttery and flaky.",
    price: 350,
    image: "photo-1555507036-ab1f4038808a",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Fresh Club Sandwich",
    description: "A delicious sandwich with fresh fillings.",
    price: 650,
    image: "photo-1528735602780-2552fd46c7af",
    badge: "POPULAR",
  },
  {
    id: 3,
    name: "Chocolate Muffin",
    description: "Soft chocolate muffin for sweet moments.",
    price: 280,
    image: "photo-1607958996333-41aef7caefaa",
    badge: "FRESH",
  },
  {
    id: 4,
    name: "Cinnamon Rolls",
    description: "Soft rolls with a sweet cinnamon swirl.",
    price: 400,
    image: "photo-1509365465985-25d11c17e812",
    badge: "FAVOURITE",
  },
  {
    id: 5,
    name: "Chocolate Croissant",
    description: "Golden pastry filled with chocolate.",
    price: 380,
    image: "photo-1530610476181-d83430b64dcd",
    badge: "POPULAR",
  },
  {
    id: 6,
    name: "Classic Pancakes",
    description: "Fluffy pancakes for a perfect breakfast.",
    price: 550,
    image: "photo-1528207776546-365bb710ee93",
    badge: "NEW",
  },
  {
    id: 7,
    name: "Fresh Garden Salad",
    description: "Fresh greens with a light, tasty dressing.",
    price: 480,
    image: "photo-1512621776951-a57141f2eefd",
    badge: "FRESH",
  },
  {
    id: 8,
    name: "Garlic Bread",
    description: "Warm, crispy bread with garlic butter.",
    price: 320,
    image:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg",
    badge: "POPULAR",
  },
  {
    id: 9,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato and melted cheese.",
    price: 850,
    image: "photo-1579751626657-72bc17010498",
    badge: "FAVOURITE",
  },
  {
    id: 10,
    name: "Creamy Pasta",
    description: "Creamy pasta made for comfort food lovers.",
    price: 750,
    image: "photo-1473093295043-cdd812d0e601",
    badge: "POPULAR",
  },
  {
    id: 11,
    name: "Grilled Chicken Burger",
    description: "Juicy grilled chicken in a soft bun.",
    price: 700,
    image: "photo-1568901346375-23c9450c58cd",
    badge: "BESTSELLER",
  },
  {
    id: 12,
    name: "French Fries",
    description: "Golden, crispy fries served hot.",
    price: 300,
    image: "photo-1573080496219-bb080dd4f877",
    badge: "FAVOURITE",
  },
  {
    id: 13,
    name: "Avocado Toast",
    description: "Toasted bread topped with creamy avocado.",
    price: 520,
    image: "photo-1525351484163-7529414344d8",
    badge: "FRESH",
  },
  {
    id: 14,
    name: "Blueberry Muffin",
    description: "Soft muffin filled with sweet blueberries.",
    price: 300,
    image:
      "https://www.allrecipes.com/thmb/8Qng6KhaZ5n6SZbRPoF4QTGaTI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-6865-To-Die-For-Blueberry-Muffins-ddmfs-4x3-78c12ec9b46e4225aed6317f592b1bf2.jpg",
    badge: "NEW",
  },
  {
    id: 15,
    name: "Cheese Sandwich",
    description: "Toasted sandwich with delicious melted cheese.",
    price: 450,
    image: "photo-1528735602780-2552fd46c7af",
    badge: "POPULAR",
  },
  {
    id: 16,
    name: "Chocolate Waffles",
    description: "Golden waffles with a chocolatey touch.",
    price: 600,
    image: "photo-1562376552-0d160a2f238d",
    badge: "FAVOURITE",
  },
];

const photo = (image) =>
  image.startsWith("https://")
    ? image
    : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=85`;

export default function FoodBakery({ cart = [], setCart }) {
  function addToCart(item) {
    if (setCart) {
      setCart((prev) => [...prev, item]);
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF8EF] px-4 py-12 sm:px-8 lg:px-16">
      {/* Page Heading */}
      <section className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#B92735]">
          Fresh from our kitchen
        </p>

        <h1 className="font-serif text-4xl font-bold text-[#49312C] sm:text-5xl lg:text-6xl">
          Food & Bakery
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#795D55] sm:text-base">
          From freshly baked pastries to delicious bites, discover
          your new favourites at Crumb & Cherry.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#B92735]" />
      </section>

      {/* Product Count */}
      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between">
        <p className="text-sm text-[#795D55]">
          Explore our collection
        </p>

        <p className="rounded-full bg-[#F5DFDF] px-4 py-2 text-xs font-semibold text-[#8E2438]">
          {items.length} Products
        </p>
      </div>

      {/* Product Cards */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-[#F0DDD4] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Product Image */}
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

            {/* Product Details */}
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

      {/* Bottom Note */}
      <div className="mx-auto mt-14 max-w-7xl border-t border-[#EBD7CD] pt-6 text-center">
        <p className="font-serif text-lg italic text-[#795D55]">
          Baked with love, served with a little sweetness. ❤️
        </p>
      </div>
    </main>
  );
}

