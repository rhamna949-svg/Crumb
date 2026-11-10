
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee, ShoppingBag } from "lucide-react";



const drinks = [
  {
    name: "Velvet Latte",
    category: "Beverages",
    price: 650,
    image: "photo-1461023058943-07fcbe16d735",
  },
  {
    name: "Iced Mocha",
    category: "Beverages",
    price: 700,
    image: "photo-1517701604599-bb29b565090c",
  },
  {
    name: "Caramel Coffee",
    category: "Beverages",
    price: 680,
    image: "photo-1469957761306-556935073eba",
  },
  {
    name: "Cappuccino",
    category: "Beverages",
    price: 600,
    image: "photo-1570968915860-54d5c301fa9f",
  },
  {
    name: "Cold Brew",
    category: "Beverages",
    price: 550,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbPoySokrwxPvquXtYDLUFpmpot6wPN885CyNQnDGI04JbFdQgxiWVQ2jew0hfur07L_uMJ4lLPOxt5A4oNIULzdwJhoxROd3jY3rviU&s=10",
  },
  {
    name: "Mocha Frappe",
    category: "Beverages",
    price: 720,
    image: "photo-1572490122747-3968b75cc699",
  },
  {
    name: "Berry Smoothie",
    category: "Beverages",
    price: 580,
    image: "photo-1553530666-ba11a7da3888",
  },
  {
    name: "Mango Smoothie",
    category: "Beverages",
    price: 520,
    image: "photo-1505252585461-04db1eb84625",
  },
  {
    name: "Fresh Orange Juice",
    category: "Beverages",
    price: 450,
    image: "photo-1613478223719-2ab802602423",
  },
  {
    name: "Lemon Mint Cooler",
    category: "Beverages",
    price: 400,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQaFM0L0zwdmQKsjkhPSrk916SnG9E7MaBCZuftWr4SVY1Um-LJ",
  },
  {
    name: "Chocolate Milkshake",
    category: "Beverages",
    price: 580,
    image: "photo-1572490122747-3968b75cc699",
  },
  {
    name: "Hot Chocolate",
    category: "Beverages",
    price: 480,
    image:
      "https://www.foodandwine.com/thmb/V1OEgtLQGUv_w2Fvm40WMLsJ4rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg",
  },
];

const photo = (image) =>
  `https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=85`;

export default function Beverages( props) {
  function addToCart(drink) {
  props.setCart((prev) => [...prev, drink]);
}
  return (
    <main className="min-h-screen bg-[#FFF8EF] px-5 py-10 text-[#49312C] md:px-12 md:py-14">
      <Link
        to="/menu"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#8E2438] transition hover:gap-3"
      >
        <ArrowLeft size={18} />
        Back to Menu
      </Link>

      <section className="mx-auto mb-12 mt-10 max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B92735]">
          Sip Something Special
        </p>

        <h1 className="text-4xl font-semibold md:text-6xl">
          Our <span className="text-[#B92735]">Beverages</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#795D55] md:text-base">
          From freshly brewed coffee to refreshing smoothies,
          discover your favourite drink at Crumb & Cherry.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#B92735]" />
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {drinks.map((drink) => (
          <article
            key={drink.name}
            className="group overflow-hidden rounded-2xl border border-[#EBDDD2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-60 overflow-hidden bg-[#F5DFDF]">
              <img
                src={
                  drink.image.startsWith("https://")
                    ? drink.image
                    : photo(drink.image)
                }
                alt={drink.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                }}
              />

              <span className="absolute left-4 top-4 rounded-full bg-[#FFF8EF] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8E2438]">
                Beverages
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold transition group-hover:text-[#B92735]">
                  {drink.name}
                </h2>

                <Coffee
                  size={20}
                  className="shrink-0 text-[#B92735]"
                />
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#F0E4DC] pt-5">
                <div>
                  <p className="text-xs text-[#967D73]">Price</p>
                  <p className="mt-1 text-lg font-bold text-[#8E2438]">
                    Rs. {drink.price}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label={`Add ${drink.name} to cart`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B92735] text-white transition hover:bg-[#6F182C]"
                  onClick={()=>addToCart(drink)}
                >
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-6xl rounded-2xl bg-[#6F182C] px-6 py-10 text-center text-white md:py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[#F5DFDF]">
          Made with Love
        </p>

        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
          Your perfect sip is waiting.
        </h2>

        <p className="mt-3 text-sm text-[#F5DFDF]">
          Take a little break and make your day sweeter.
        </p>

        <Link
          to="/menu"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFF8EF] px-6 py-3 text-sm font-semibold text-[#8E2438] transition hover:bg-[#F5DFDF]"
        >
          Explore Full Menu
          <ArrowLeft size={16} className="rotate-180" />
        </Link>
      </section>
    </main>
  );
}



