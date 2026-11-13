import React, { useState } from "react";
import cake from "../../cake.png";
import croissant from "../../croissant.PNG";
import cherry from "../../Cherry.PNG";
import cold from "../../Cold coffee.PNG";
import coffee from "../../Coffe.PNG";
import Rain from "../../Rain.png";
import { Link } from "react-router-dom";
import tea from "../../tea.PNG";
import strawberry from "../../strawberry.PNG";
import pairing from "../../pairing.PNG";
import hype from "../../hype.PNG";

const Home = () => {
    const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [subscribeError, setSubscribeError] = useState("");

    function openSubscribe() {
        setIsSubscribeOpen(true);
        setSubscribeError("");
    }

    function closeSubscribe() {
        setIsSubscribeOpen(false);
        setSubscribeError("");
    }

    function handleSubscribe(e) {
        e.preventDefault();

        if (!email.trim()) {
            setSubscribeError("Please enter your email address.");
            return;
        }

        setIsSubscribed(true);
        setSubscribeError("");
    }

    const hero = {
        heading: "“Freshly Baked, Made with Love”",
        description:
            "Freshly baked cakes, delicious pastries, and sweet little moments made with love. 🍰",
        image: cake,
    };

    const signatureItems = [
        {
            name: "Butter Croissant",
            description:
                "A golden, flaky croissant baked to perfection for your sweetest mornings.",
            image: croissant,
            label: "NEW",
        },
        {
            name: "Cherry Velvet Latte",
            description:
                "Smooth coffee with creamy milk and a delicate cherry-inspired sweetness.",
            image: coffee,
            label: "SIGNATURE",
        },
        {
            name: "Iced Hazelnut Cloud",
            description:
                "Chilled coffee with a refreshing taste and a smooth, creamy finish.",
            image: cold,
            label: "FAVOURITE",
        },
        {
            name: "Cherry Cream Special",
            description:
                "A sweet cherry-inspired treat to make your café moments extra special.",
            image: cherry,
            label: "NEW",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="flex min-h-[85vh] flex-col items-center justify-between gap-12 overflow-hidden bg-[#FFF8EF] px-6 py-16 md:flex-row md:px-16 lg:px-24">
                <div className="w-full space-y-7 md:w-1/2">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B92735]">
                        <span className="h-[2px] w-8 bg-[#B92735]" />
                        Baked with love
                    </span>

                    <h1 className="max-w-xl text-5xl font-bold leading-[1.15] tracking-tight text-[#3B171B] md:text-6xl lg:text-7xl">
                        {hero.heading}
                        <span className="text-[#B92735]">.</span>
                    </h1>

                    <p className="max-w-lg text-base leading-8 text-[#765442] md:text-lg">
                        {hero.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-5 pt-2">
                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-3 rounded-full bg-[#B92735] px-8 py-4 font-semibold text-white shadow-lg shadow-[#B92735]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#3B171B]"
                        >
                            Explore Our Menu <span aria-hidden="true">→</span>
                        </Link>

                        <span className="text-sm font-medium text-[#765442]">
                            Freshly made, every day
                        </span>
                    </div>
                </div>

                <div className="relative w-full md:w-1/2">
                    <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#E8D9C8] md:-right-8 md:-top-8" />

                    <div className="relative overflow-hidden rounded-t-[180px] rounded-b-3xl border-[8px] border-white shadow-2xl">
                        <img
                            src={hero.image}
                            alt="Freshly baked cake from Crumb and Cherry"
                            className="h-auto max-h-[520px] w-full object-contain transition duration-500 hover:scale-[1.02]"
                        />
                    </div>

                    <div className="absolute -bottom-5 left-4 rounded-2xl border border-[#E8D9C8] bg-white px-5 py-4 shadow-xl md:-left-8 md:bottom-8">
                        <p className="text-xs uppercase tracking-widest text-[#765442]">
                            Made fresh
                        </p>
                        <p className="mt-1 font-bold text-[#3B171B]">
                            A little slice of happiness 🍒
                        </p>
                    </div>
                </div>
            </section>

            {/* Signature Selection */}
            <section id="menu" className="bg-[#F8F0E5] px-5 py-16 md:px-12 lg:px-20">
                <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#873447]">
                            Signature Selection
                        </p>

                        <h2 className="text-4xl font-semibold leading-tight text-[#351B20] md:text-5xl">
                            A little sweetness,
                            <br />
                            <span className="text-[#873447]">a lot of love.</span>
                        </h2>

                        <p className="mt-4 max-w-lg leading-7 text-[#70585A]">
                            Discover our signature treats and coffee favourites,
                            crafted to make your sweetest moments unforgettable.
                        </p>
                    </div>

                    <Link
                        to="/menu"
                        className="inline-flex w-fit items-center gap-3 rounded-full bg-[#873447] px-7 py-3 text-sm font-medium text-[#FFF8EE] transition duration-300 hover:bg-[#672535]"
                    >
                        View Full Menu <span className="text-lg">🡒</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {signatureItems.map((item, index) => (
                        <article key={item.name} className="group min-w-0">
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <span className="absolute left-3 top-3 rounded-full bg-[#F8F0E5] px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-[#873447]">
                                    {item.label}
                                </span>
                            </div>

                            <div className="pt-5">
                                <p className="mb-2 text-xs tracking-widest text-[#873447]">
                                    0{index + 1} / SIGNATURE
                                </p>
                                <h3 className="text-xl font-semibold text-[#351B20]">
                                    {item.name}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#70585A]">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-[#170D0F] px-6 py-16 text-white md:px-12 lg:px-20 lg:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C43D50]">
                            Our Story
                        </p>

                        <h2 className="text-4xl font-bold leading-tight text-[#FFF5F0] md:text-5xl lg:text-6xl">
                            Baked with love.
                            <br />
                            <span className="text-[#C43D50]">Made for moments.</span>
                        </h2>

                        <div className="my-6 h-1 w-20 rounded-full bg-[#C43D50]" />

                        <p className="max-w-lg text-base leading-8 text-[#D8C7C9] md:text-lg">
                            At Crumb & Cherry, every treat is made to bring a
                            little sweetness to your day. From freshly baked
                            pastries to comforting coffee, we make life's little
                            moments extra special.
                        </p>

                        <Link
                            to="/story"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#A9273D] px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#D13B52]"
                        >
                            Discover Our Story <span className="text-xl">🡒</span>
                        </Link>

                        <div className="mt-10 grid grid-cols-2 gap-5 border-t border-[#493035] pt-6">
                            <div>
                                <h3 className="mb-2 font-semibold text-[#F4D5D8]">
                                    ♡ Made with Love
                                </h3>
                                <p className="text-sm leading-6 text-[#BDA9AC]">
                                    Every bite, crafted with care.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold text-[#F4D5D8]">
                                    ☕ Freshly Brewed
                                </h3>
                                <p className="text-sm leading-6 text-[#BDA9AC]">
                                    Your perfect coffee moment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-[#A9273D]" />

                        <img
                            src={Rain}
                            alt="Crumb and Cherry bakery on a rainy day"
                            className="relative z-10 h-[350px] w-full rounded-2xl object-cover shadow-2xl md:h-[480px] lg:h-[550px]"
                        />

                        <div className="absolute bottom-5 left-5 z-20 rounded-xl border border-white/20 bg-[#170D0F]/85 px-5 py-3 backdrop-blur-sm">
                            <p className="text-xs uppercase tracking-widest text-[#E46A7A]">
                                Welcome to
                            </p>
                            <p className="mt-1 text-lg font-semibold text-white">
                                Crumb & Cherry 🍒
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <main className="bg-[#FFF8EF]">
                {/* Featured Treats */}
                <section className="bg-white px-5 py-16 sm:px-10 lg:px-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 text-center">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B92735]">
                                A little sweetness
                            </p>
                            <h2 className="font-serif text-4xl font-bold text-[#49312C] sm:text-5xl">
                                Little Treats, Big Love
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-[#795D55]">
                                From comforting tea to strawberry delights, find your
                                next favourite moment.
                            </p>
                        </div>

                        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    image: tea,
                                    alt: "Tea at Crumb and Cherry",
                                    label: "Warm & comforting",
                                    title: "A Perfect Cup of Tea",
                                    description:
                                        "Slow down, take a sip and enjoy a little moment for yourself.",
                                },
                                {
                                    image: strawberry,
                                    alt: "Strawberry dessert",
                                    label: "Sweet favourite",
                                    title: "Strawberry Moments",
                                    description:
                                        "A fruity little delight to make your day sweeter.",
                                },
                                {
                                    image: hype,
                                    alt: "Featured Crumb and Cherry treat",
                                    label: "Worth the hype",
                                    title: "Your New Favourite",
                                    description:
                                        "Discover something special, made for your sweetest cravings.",
                                },
                            ].map((item) => (
                                <article
                                    key={item.title}
                                    className="group overflow-hidden rounded-2xl border border-[#F0DDD4] bg-[#FFF8EF]"
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#B92735]">
                                            {item.label}
                                        </p>
                                        <h3 className="mt-2 font-serif text-2xl font-bold text-[#49312C]">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-[#795D55]">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seasonal Special */}
                <section className="bg-[#FFF8EF] px-5 py-20 sm:px-10 lg:px-20">
                    <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src={pairing}
                                alt="A delicious pairing at Crumb and Cherry"
                                className="h-[320px] w-full object-cover sm:h-[420px]"
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B92735]">
                                Made for your moments
                            </p>
                            <h2 className="font-serif text-4xl font-bold leading-tight text-[#49312C] sm:text-5xl">
                                Good Things Are Better Together
                            </h2>
                            <p className="mt-5 leading-8 text-[#795D55]">
                                A comforting drink, a delicious bite, and a little
                                time to yourself. Discover pairings that turn
                                everyday moments into something worth remembering.
                            </p>
                            <Link
                                to="/menu"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B92735] px-7 py-3.5 font-semibold text-white transition hover:bg-[#8E2438]"
                            >
                                Explore Our Menu <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Our Philosophy */}
                <section className="bg-[#F5DFDF] px-5 py-20 sm:px-10 lg:px-20">
                    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B92735]">
                                More than just a bakery
                            </p>
                            <h2 className="font-serif text-4xl font-bold leading-tight text-[#49312C] sm:text-5xl">
                                Made for Moments That Matter
                            </h2>
                            <p className="mt-5 max-w-xl leading-8 text-[#795D55]">
                                Life is sweeter with the little things: a warm
                                drink, a favourite dessert, and moments shared
                                with the people who matter. At Crumb & Cherry,
                                every visit is an invitation to slow down and
                                enjoy something lovely.
                            </p>
                            <Link
                                to="/story"
                                className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#B92735] pb-2 font-semibold text-[#B92735] transition hover:gap-5"
                            >
                                Discover Our Story <span>→</span>
                            </Link>
                        </div>

                        <div className="rounded-2xl border border-[#E6C6C5] bg-[#FFF8EF] p-8 sm:p-10">
                            <p className="font-serif text-6xl text-[#B92735]">“</p>
                            <p className="font-serif text-3xl leading-snug text-[#49312C]">
                                The sweetest memories often begin with the simplest moments.
                            </p>
                            <div className="mt-7 h-px w-16 bg-[#B92735]" />
                            <p className="mt-4 text-sm font-semibold text-[#795D55]">
                                The Crumb & Cherry philosophy
                            </p>
                        </div>
                    </div>
                </section>

                {/* Subscription Section */}
                <section className="bg-[#FFF8EF] px-5 py-20 sm:px-10 lg:px-20">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#EBD6CC] bg-white">
                        <div className="grid md:grid-cols-[1.2fr_0.8fr]">
                            <div className="px-7 py-12 sm:px-12 sm:py-16">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B92735]">
                                    The Cherry Letter
                                </p>
                                <h2 className="mt-5 max-w-xl font-serif text-4xl font-bold leading-tight text-[#49312C] sm:text-5xl">
                                    Good Things
                                    <span className="block italic text-[#B92735]">
                                        Are Worth Sharing.
                                    </span>
                                </h2>
                                <p className="mt-5 max-w-lg text-sm leading-7 text-[#795D55] sm:text-base">
                                    Discover seasonal favourites, freshly baked
                                    delights, and first tastes of what's new at
                                    Crumb & Cherry.
                                </p>
                                <button
                                    type="button"
                                    onClick={openSubscribe}
                                    className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#B92735] pb-2 text-sm font-bold text-[#B92735] transition hover:gap-5"
                                >
                                    Join Our Mailing List <span>→</span>
                                </button>
                                <p className="mt-5 text-xs text-[#967D75]">
                                    Thoughtfully sent. Always with love.
                                </p>
                            </div>

                            <div className="flex flex-col justify-between bg-[#F5DFDF] p-8 sm:p-10">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E2438]">
                                    A Note from Us
                                </span>
                                <div className="py-8">
                                    <span className="font-serif text-6xl text-[#B92735]">“</span>
                                    <p className="font-serif text-3xl leading-snug text-[#49312C]">
                                        Make room for little things that make life sweeter.
                                    </p>
                                </div>
                                <div className="h-px w-full bg-[#DDBBB9]" />
                                <p className="mt-5 text-sm text-[#795D55]">
                                    With love,
                                    <span className="mt-1 block font-semibold text-[#49312C]">
                                        Crumb & Cherry
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subscription Popup */}
                {isSubscribeOpen && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#241416]/70 px-4 py-6 backdrop-blur-sm"
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget) {
                                closeSubscribe();
                            }
                        }}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="cherry-popup-title"
                            className="relative my-auto w-full max-w-md overflow-hidden rounded-2xl border border-[#EBD6CC] bg-[#FFF8EF] shadow-2xl"
                        >
                            <button
                                type="button"
                                onClick={closeSubscribe}
                                aria-label="Close subscription popup"
                                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white/15"
                            >
                                ×
                            </button>

                            <div className="bg-[#8E2438] px-7 pb-8 pt-10 text-center sm:px-10">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5DFDF]">
                                    Crumb & Cherry
                                </p>
                                <h2
                                    id="cherry-popup-title"
                                    className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl"
                                >
                                    {isSubscribed ? "A Sweet Welcome" : "A Letter Worth Opening"}
                                </h2>
                                <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-[#F5DFDF]">
                                    {isSubscribed
                                        ? "Thank you for joining our little community."
                                        : "Discover new bakes, seasonal favourites, and thoughtful little surprises."}
                                </p>
                            </div>

                            <div className="px-7 py-8 sm:px-9">
                                {isSubscribed ? (
                                    <div className="text-center">
                                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5DFDF] text-2xl text-[#B92735]">
                                            ✓
                                        </div>
                                        <h3 className="mt-5 font-serif text-2xl font-bold text-[#49312C]">
                                            You're on the list!
                                        </h3>
                                        <p className="mt-3 break-all text-sm leading-6 text-[#795D55]">
                                            Email address: {email}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={closeSubscribe}
                                            className="mt-7 w-full rounded-lg bg-[#B92735] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8E2438]"
                                        >
                                            Lovely, Thank You
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubscribe}>
                                        <label
                                            htmlFor="cherry-email"
                                            className="mb-2 block text-sm font-semibold text-[#49312C]"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            id="cherry-email"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setSubscribeError("");
                                            }}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full rounded-lg border border-[#E5CDC3] bg-white px-4 py-3.5 text-sm text-[#49312C] outline-none transition placeholder:text-[#AD9690] focus:border-[#B92735] focus:ring-2 focus:ring-[#B92735]/10"
                                        />

                                        {subscribeError && (
                                            <p role="alert" className="mt-2 text-sm text-[#B92735]">
                                                {subscribeError}
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            className="mt-5 w-full rounded-lg bg-[#B92735] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8E2438]"
                                        >
                                            Subscribe <span className="ml-2">→</span>
                                        </button>

                                        <p className="mt-4 text-center text-xs leading-5 text-[#967D75]">
                                            By subscribing, you agree to receive
                                            updates from Crumb & Cherry.
                                        </p>
                                    </form>
                                )}
                            </div>
                            <div className="h-1 bg-[#B92735]" />
                        </div>
                    </div>
                )}

                {/* Editorial Footer */}
                <footer className="bg-[#2B1719] text-[#FFF8EF]">
                    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-10 lg:px-16">
                        <div className="flex flex-col justify-between gap-7 border-b border-[#654247] pb-10 md:flex-row md:items-end">
                            <div>
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#E7A5A7]">
                                    Freshly Baked, Made with Love
                                </p>
                                <h2 className="font-serif text-4xl font-bold leading-tight sm:text-6xl">
                                    Crumb <span className="text-[#E76B78]">&</span> Cherry
                                </h2>
                            </div>
                            <Link
                                to="/menu"
                                className="inline-flex w-fit items-center gap-3 border-b border-[#E76B78] pb-2 text-sm font-semibold transition hover:gap-5"
                            >
                                Discover Our Menu <span>→</span>
                            </Link>
                        </div>

                        <div className="grid gap-10 border-b border-[#654247] py-12 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E7A5A7]">
                                    Our Philosophy
                                </h3>
                                <p className="max-w-xs text-sm leading-7 text-[#D8BCB7]">
                                    Life is made sweeter by the little things:
                                    a warm drink, a favourite dessert, and
                                    moments shared with the people who matter.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E7A5A7]">
                                    Explore
                                </h3>
                                <div className="flex flex-col items-start gap-4 text-sm text-[#D8BCB7]">
                                    <Link to="/" className="transition hover:text-white">Home</Link>
                                    <Link to="/story" className="transition hover:text-white">Our Story</Link>
                                    <Link to="/about" className="transition hover:text-white">About Us</Link>
                                    <Link to="/contact" className="transition hover:text-white">Contact</Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E7A5A7]">
                                    From Our Kitchen
                                </h3>
                                <div className="flex flex-col items-start gap-4 text-sm text-[#D8BCB7]">
                                    <Link to="/menu" className="transition hover:text-white">Full Menu</Link>
                                    <Link to="/beverages" className="transition hover:text-white">Coffee & Beverages</Link>
                                    <Link to="/food-bakery" className="transition hover:text-white">Food & Bakery</Link>
                                    <Link to="/desserts" className="transition hover:text-white">Cakes & Desserts</Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E7A5A7]">
                                    Stay Connected
                                </h3>
                                <p className="text-sm leading-7 text-[#D8BCB7]">
                                    Follow along for new favourites, freshly
                                    baked delights, and little moments from our world.
                                </p>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Instagram"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#654247] text-xs font-bold transition hover:border-[#E76B78] hover:bg-[#B92735]"
                                    >
                                        IG
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Facebook"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#654247] text-sm font-bold transition hover:border-[#E76B78] hover:bg-[#B92735]"
                                    >
                                        f
                                    </a>
                                </div>

                                <button
                                    type="button"
                                    onClick={openSubscribe}
                                    className="mt-6 text-sm font-semibold text-[#F0B5B6] transition hover:text-white"
                                >
                                    Join the Cherry Letter →
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-7 text-xs text-[#BDA5A1] sm:flex-row sm:items-center sm:justify-between">
                            <p>© 2026 Crumb & Cherry. All rights reserved.</p>
                            <p className="font-serif text-sm italic text-[#E7A5A7]">
                                A little sweetness goes a long way.
                            </p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
};

export default Home;
