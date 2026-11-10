
import { Link } from "react-router-dom";
import {
    Coffee,
    Cherry,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    ArrowUp,
    ShoppingBag,
} from "lucide-react";

const categories = [
    { name: "Beverages", path: "/beverages" },
    { name: "Food & Bakery", path: "/food-bakery" },
    { name: "Desserts", path: "/desserts" },
];

const products = [
    // BEVERAGES
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbPoySokrwxPvquXtYDLUFpmpot6wPN885CyNQnDGI04JbFdQgxiWVQ2jew0hfur07L_uMJ4lLPOxt5A4oNIULzdwJhoxROd3jY3rviU&s=10",
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
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQaFM0L0zwdmQKsjkhPSrk916SnG9E7MaBCZuftWr4SVY1Um-LJ",
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
        image: "https://www.foodandwine.com/thmb/V1OEgtLQGUv_w2Fvm40WMLsJ4rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg",
    },

    // FOOD & BAKERY
    {
        name: "Butter Croissant",
        category: "Food & Bakery",
        price: 350,
        image: "photo-1555507036-ab1f4038808a",
    },
    {
        name: "Fresh Club Sandwich",
        category: "Food & Bakery",
        price: 600,
        image: "photo-1528735602780-2552fd46c7af",
    },
    {
        name: "Chocolate Muffin",
        category: "Food & Bakery",
        price: 320,
        image: "photo-1607958996333-41aef7caefaa",
    },
    {
        name: "Cinnamon Rolls",
        category: "Food & Bakery",
        price: 400,
        image: "photo-1509365465985-25d11c17e812",
    },
    {
        name: "Chocolate Croissant",
        category: "Food & Bakery",
        price: 420,
        image: "photo-1530610476181-d83430b64dcd",
    },
    {
        name: "Classic Pancakes",
        category: "Food & Bakery",
        price: 550,
        image: "photo-1528207776546-365bb710ee93",
    },
    {
        name: "Fresh Garden Salad",
        category: "Food & Bakery",
        price: 550,
        image: "photo-1512621776951-a57141f2eefd",
    },
    {
        name: "Garlic Bread",
        category: "Food & Bakery",
        price: 380,
        image: "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg"
    },
    {
        name: "Margherita Pizza",
        category: "Food & Bakery",
        price: 850,
        image: "photo-1579751626657-72bc17010498",
    },
    {
        name: "Creamy Pasta",
        category: "Food & Bakery",
        price: 750,
        image: "photo-1473093295043-cdd812d0e601",
    },
    {
        name: "Grilled Chicken Burger",
        category: "Food & Bakery",
        price: 680,
        image: "photo-1568901346375-23c9450c58cd",
    },
    {
        name: "French Fries",
        category: "Food & Bakery",
        price: 300,
        image: "photo-1573080496219-bb080dd4f877",
    },
    {
        name: "Avocado Toast",
        category: "Food & Bakery",
        price: 520,
        image: "photo-1525351484163-7529414344d8",
    },
    {
        name: "Blueberry Muffin",
        category: "Food & Bakery",
        price: 350,
        image: "https://www.allrecipes.com/thmb/8Qng6KhaZ5n6SZbRPoF4QTGaTI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-6865-To-Die-For-Blueberry-Muffins-ddmfs-4x3-78c12ec9b46e4225aed6317f592b1bf2.jpg",
    },
    {
        name: "Cheese Sandwich",
        category: "Food & Bakery",
        price: 480,
        image: "photo-1528735602780-2552fd46c7af",
    },
    {
        name: "Chocolate Waffles",
        category: "Food & Bakery",
        price: 580,
        image: "photo-1562376552-0d160a2f238d",
    },

    // DESSERTS
    {
        name: "Chocolate Brownie",
        category: "Desserts",
        price: 450,
        image: "photo-1606313564200-e75d5e30476c",
    },
    {
        name: "Strawberry Cheesecake",
        category: "Desserts",
        price: 750,
        image: "photo-1533134242443-d4fd215305ad",
    },
    {
        name: "Chocolate Cake",
        category: "Desserts",
        price: 600,
        image: "photo-1578985545062-69928b1d9587",
    },
    {
        name: "Strawberry Cupcake",
        category: "Desserts",
        price: 350,
        image: "photo-1486427944299-d1955d23e34d",
    },
    {
        name: "Chocolate Donuts",
        category: "Desserts",
        price: 300,
        image: "photo-1551024506-0bccd828d307",
    },
    {
        name: "Cream Cake Slice",
        category: "Desserts",
        price: 500,
        image: "photo-1565958011703-44f9829ba187",
    },
    {
        name: "Belgian Waffles",
        category: "Desserts",
        price: 520,
        image: "photo-1562376552-0d160a2f238d",
    },
    {
        name: "Red Velvet Cake",
        category: "Desserts",
        price: 650,
        image: "photo-1586788680434-30d324b2d46f",
    },
    {
        name: "Chocolate Cookies",
        category: "Desserts",
        price: 280,
        image: "photo-1499636136210-6f4ee915583e",
    },
    {
        name: "Tiramisu",
        category: "Desserts",
        price: 680,
        image: "photo-1571877227200-a0d98ea607e9",
    },
];

const photo = (id, width = 700) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function Menu() {
    return (
        <div className="min-h-screen bg-[#FCF8F2] font-serif text-[#392521]">
            {/* HERO */}
            <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#241619] px-6 py-16 md:min-h-[330px] md:px-12 lg:px-20">
                <img
                    src={photo("photo-1445116572660-236099ec97a0", 1800)}
                    alt="Warm café interior"
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                />

                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1b100e]/95 via-[#241619]/75 to-[#241619]/20" />

                <div className="max-w-2xl text-[#FCF8F2]">
                    <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-[#DDA2A5]">
                        Crumb & Cherry · Our Menu
                    </p>

                    <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                        A Little Taste
                        <br />
                        of Happiness
                    </h1>

                    <p className="mt-5 max-w-lg font-sans text-sm leading-7 text-[#F0E3DD] md:text-base">
                        Handcrafted coffee, refreshing drinks, freshly baked treats
                        and desserts made to brighten your day.
                    </p>
                </div>
            </section>

            {/* PRODUCTS */}
            <main id="menu" className="mx-auto max-w-[1600px] px-4 py-9 sm:px-6 md:px-8 lg:px-12">
                <div className="mb-9 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={category.path}
                            className="rounded-full border border-[#963B4D] px-6 py-2.5 font-sans text-sm text-[#76283B] transition duration-300 hover:bg-[#76283B] hover:text-white"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>

                <div className="mb-7 flex items-end justify-between gap-3">
                    <div>
                        <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.25em] text-[#963B4D]">
                            Made with love
                        </p>
                        <h2 className="text-2xl font-semibold md:text-3xl">
                            Discover Our Favourites
                        </h2>
                    </div>

                    <span className="shrink-0 font-sans text-xs text-[#79665D]">
                        {products.length} delicious choices
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                    {products.map((product, index) => (
                        <article
                            key={product.name}
                            className="group overflow-hidden rounded-md border border-[#E8D8D2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="aspect-[1.22/1] overflow-hidden bg-[#F4E6E4]">
                                <img
                                    src={
                                        product.image.startsWith("https://")
                                            ? product.image
                                            : photo(product.image)
                                    }
                                    alt={product.name}
                                    loading={index < 10 ? "eager" : "lazy"}
                                    onError={(event) => {
                                        event.currentTarget.onerror = null;
                                    }}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                
                            </div>

                            <div className="p-3 sm:p-3.5">
                                <p className="mb-1.5 font-sans text-[9px] uppercase tracking-wider text-[#963B4D] sm:text-[10px]">
                                    {product.category}
                                </p>

                                <h3 className="min-h-10 text-sm font-medium leading-5 sm:text-base">
                                    {product.name}
                                </h3>

                                <div className="mt-2 flex items-center justify-between gap-2">
                                    <p className="text-sm font-semibold text-[#76283B]">
                                        Rs. {product.price}
                                    </p>
                                    <ArrowRight
                                        size={17}
                                        className="shrink-0 text-[#76283B] transition-transform group-hover:translate-x-1"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* BOTTOM BANNER */}
                <section className="my-14 rounded-lg bg-[#F4E6E4] px-5 py-10 text-center md:py-14">
                    <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-[#963B4D]">
                        Your daily dose of happiness
                    </p>

                    <h2 className="text-3xl font-semibold md:text-4xl">
                        A little love in every bite.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-7 text-[#79665D]">
                        Good coffee, beautiful bakes and sweet memories.
                        Come in, slow down and make yourself at home.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#76283B] px-6 py-3 font-sans text-sm text-white transition hover:bg-[#54202E]"
                    >
                        Contact Us <ArrowRight size={16} />
                    </Link>
                </section>
            </main>

            {/* COMPLETE FOOTER */}
            <footer className="bg-[#241619] px-6 pb-6 pt-12 text-[#FCF8F2] md:px-10 lg:px-12">
                <div className="mx-auto grid max-w-[1500px] gap-9 sm:grid-cols-2 lg:grid-cols-5">
                    {/* LOGO AND DESCRIPTION */}
                    <div>
                        <Link to="/" className="mb-4 inline-flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDA2A5]/15 text-[#DDA2A5]">
                                <Cherry size={27} />
                            </span>

                            <span>
                                <span className="block text-xl font-semibold">
                                    Crumb & Cherry
                                </span>
                                <span className="font-sans text-[9px] tracking-[0.3em] text-[#DDA2A5]">
                                    BAKERY & CAFÉ
                                </span>
                            </span>
                        </Link>

                        <p className="font-sans text-sm leading-6 text-[#D8C6C0]">
                            Freshly baked happiness, handcrafted coffee and sweet
                            memories made with love.
                        </p>

                        <p className="mt-4 font-sans text-sm text-[#DDA2A5]">
                            Fresh bakes. Warm hearts.
                        </p>

                        <div className="mt-5 flex gap-3">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="rounded-full border border-white/20 p-2 transition hover:border-[#DDA2A5] hover:text-[#DDA2A5]"
                            >
                                <Coffee size={17} />
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="rounded-full border border-white/20 p-2 transition hover:border-[#DDA2A5] hover:text-[#DDA2A5]"
                            >
                                <ShoppingBag size={17} />
                            </a>
                        </div>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">Company</h3>
                        <ul className="space-y-3 font-sans text-sm text-[#D8C6C0]">
                            <li><Link to="/about" className="hover:text-[#DDA2A5]">About us</Link></li>
                            <li><Link to="/story" className="hover:text-[#DDA2A5]">Our story</Link></li>
                            <li><Link to="/contact" className="hover:text-[#DDA2A5]">Contact us</Link></li>
                            <li><Link to="/story" className="hover:text-[#DDA2A5]">Our philosophy</Link></li>
                            <li><a href="mailto:hello@crumbandcherry.com" className="hover:text-[#DDA2A5]">Careers</a></li>
                        </ul>
                    </div>

                    {/* MENU */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">Menu</h3>
                        <ul className="space-y-3 font-sans text-sm text-[#D8C6C0]">
                            <li><Link to="/beverages" className="hover:text-[#DDA2A5]">Beverages</Link></li>
                            <li><Link to="/food-bakery" className="hover:text-[#DDA2A5]">Food & bakery</Link></li>
                            <li><Link to="/desserts" className="hover:text-[#DDA2A5]">Desserts</Link></li>
                            <li><Link to="/menu" className="hover:text-[#DDA2A5]">Explore all</Link></li>
                        </ul>
                    </div>

                    {/* EXPERIENCE */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">Experience</h3>
                        <ul className="space-y-3 font-sans text-sm text-[#D8C6C0]">
                            <li><Link to="/contact" className="hover:text-[#DDA2A5]">Visit our café</Link></li>
                            <li><Link to="/contact" className="hover:text-[#DDA2A5]">Get in touch</Link></li>
                            <li><Link to="/story" className="hover:text-[#DDA2A5]">Our story</Link></li>
                            <li><a href="mailto:hello@crumbandcherry.com" className="hover:text-[#DDA2A5]">Work with us</a></li>
                            <li><Link to="/about" className="hover:text-[#DDA2A5]">Our philosophy</Link></li>
                        </ul>
                    </div>

                    {/* CONTACT DETAILS */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold">Connect with us</h3>

                        <ul className="space-y-4 font-sans text-sm leading-6 text-[#D8C6C0]">
                            <li className="flex items-start gap-3">
                                <MapPin size={17} className="mt-1 shrink-0 text-[#DDA2A5]" />
                                <span>
                                    Crumb & Cherry Café
                                    <br />
                                    Pakistan
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone size={16} className="shrink-0 text-[#DDA2A5]" />
                                <a href="tel:+923000000000" className="hover:text-[#DDA2A5]">
                                    +92 300 0000000
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <Mail size={16} className="mt-1 shrink-0 text-[#DDA2A5]" />
                                <a
                                    href="mailto:hello@crumbandcherry.com"
                                    className="break-all hover:text-[#DDA2A5]"
                                >
                                    hello@crumbandcherry.com
                                </a>
                            </li>
                        </ul>

                        <p className="mb-3 mt-6 text-sm font-semibold">
                            Discover more
                        </p>

                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded border border-white/25 px-3 py-2 font-sans text-xs transition hover:border-[#DDA2A5] hover:text-[#DDA2A5]"
                        >
                            <ShoppingBag size={14} />
                            Follow our café
                            <ArrowRight size={13} />
                        </a>
                    </div>
                </div>

                {/* COPYRIGHT AND BACK TO TOP */}
                <div className="mx-auto mt-10 max-w-[1500px] border-t border-white/20 pt-5">
                    <div className="flex flex-col items-center justify-between gap-4 font-sans text-[11px] text-[#BCA7A0] md:flex-row">
                        <p>Made with love at Crumb & Cherry.</p>

                        <p>
                            © {new Date().getFullYear()} Crumb & Cherry. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4">
                            <Link to="/contact" className="hover:text-[#DDA2A5]">
                                Contact
                            </Link>

                            <Link to="/story" className="hover:text-[#DDA2A5]">
                                Our story
                            </Link>

                            <button
                                onClick={() =>
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }
                                aria-label="Back to top"
                                className="rounded-full border border-[#DDA2A5] p-2 text-[#DDA2A5] transition hover:bg-[#DDA2A5] hover:text-[#241619]"
                            >
                                <ArrowUp size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
