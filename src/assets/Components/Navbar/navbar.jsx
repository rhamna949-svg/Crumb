
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartCount = props.cart.length;
    const [menu, setMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Our Menu", href: "/menu", dropdown: true },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

   const dropdownLinks = [
  { name: "Explore All", href: "/menu" },
  { name: "Beverages", href: "/beverages" },
{ name: "Food & Bakery", href: "/food-bakery" },
  { name: "Desserts", href: "/desserts" },
];

    return (
        <header className="sticky top-0 z-50 border-b border-rose-200 bg-gradient-to-r from-[#FFF8EF] via-[#FFF0F3] to-[#FFE4E8] shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF718D] via-[#C62845] to-[#76172D] text-2xl text-white shadow-md transition duration-300 hover:rotate-12 hover:scale-110">
                        <span>✦</span>
                    </div>

                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight text-[#49212A] sm:text-2xl">
                            Crumb<span className="text-[#D72D50]">&</span>Cherry
                        </h1>
                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#98616A]">
                            Freshly made with love
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.name} className="relative">
                                <button
                                    type="button"
                                    onClick={() => setMenu(!menu)}
                                    aria-expanded={menu}
                                    className="flex items-center gap-1 text-sm font-semibold text-[#49212A] transition duration-200 hover:text-[#E52E55]"
                                >
                                    {link.name}
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-300 ${
                                            menu ? "rotate-180 text-[#E52E55]" : ""
                                        }`}
                                    />
                                </button>

                                {menu && (
                                    <div className="absolute left-0 top-full z-50 mt-4 flex min-w-52 flex-col rounded-2xl border border-rose-200 bg-gradient-to-b from-white to-[#FFF0F3] p-2 shadow-xl">
                                        {dropdownLinks.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                onClick={() => setMenu(false)}
                                                className="rounded-xl px-4 py-3 text-sm font-medium text-[#49212A] transition-all duration-200 hover:translate-x-1 hover:bg-rose-100 hover:text-[#C62845]"
                                            >
                                             {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm font-semibold text-[#49212A] transition duration-200 hover:-translate-y-0.5 hover:text-[#E52E55]"
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">

                    {/* Shopping Bag */}
                    <button
                        type="button"
                        aria-label={`Shopping bag, ${cartCount} items`}
                        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white/80 text-[#C62845] shadow-sm transition duration-300 hover:scale-110 hover:bg-[#C62845] hover:text-white"
                    >
                        <ShoppingBag size={20} strokeWidth={1.8} />

                        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#FF718D] to-[#C62845] px-1 text-[10px] font-bold text-white ring-2 ring-[#FFF0F3]">
                            {cartCount}
                        </span>
                    </button>

                    {/* Order Now */}
                    <Link
                        to="/menu"
                        className="hidden rounded-full bg-gradient-to-r from-[#E52E55] to-[#A51E3B] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:from-[#A51E3B] hover:to-[#76172D] hover:shadow-lg sm:inline-flex"
                    >
                        Order Now <span className="ml-2">🍰</span>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white/80 text-[#C62845] transition duration-300 hover:bg-[#C62845] hover:text-white lg:hidden"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t border-rose-200 bg-gradient-to-b from-[#FFF0F3] to-[#FFF8EF] px-5 py-4 shadow-inner lg:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.name}>
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenu(!mobileMenu)}
                                        aria-expanded={mobileMenu}
                                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#49212A] transition hover:bg-rose-100 hover:text-[#C62845]"
                                    >
                                        {link.name}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${
                                                mobileMenu ? "rotate-180 text-[#E52E55]" : ""
                                            }`}
                                        />
                                    </button>

                                    {mobileMenu && (
                                        <div className="mt-1 flex flex-col rounded-2xl border border-rose-200 bg-white/80 p-2 shadow-md">
                                            {dropdownLinks.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    onClick={() => {
                                                        setMobileMenu(false);
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#49212A] transition hover:bg-rose-100 hover:text-[#C62845]"
                                                >
                                                {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-xl px-4 py-3 text-sm font-semibold text-[#49212A] transition hover:bg-rose-100 hover:text-[#C62845]"
                                >
                                    {link.name}
                                </Link>
                            )
                        )}

                        <Link
                            to="/menu"
                            onClick={() => {
                                setIsMenuOpen(false);
                                setMobileMenu(false);
                            }}
                            className="mt-3 rounded-full bg-gradient-to-r from-[#E52E55] to-[#A51E3B] px-5 py-3 text-center text-sm font-bold text-white shadow-md transition hover:from-[#A51E3B] hover:to-[#76172D] sm:hidden"
                        >
                            Order Now 🍰
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;