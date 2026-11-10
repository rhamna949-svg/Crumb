

import { useState } from "react";
import { Link } from "react-router-dom";
import night from "../../night.png";
import coffee from "../../Coffe.PNG";
import croissant from "../../croissant.png";

const About = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <main className="overflow-hidden bg-[#FCF8F2] text-[#392521]">
      {/* HERO SECTION */}
      <section className="px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between border-b border-[#E8DCD2] pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A5A50]">
              Our Story
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A5A50]">
              Crafted with care
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="py-4 lg:py-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#8E3447]">
                Welcome to Crumb & Cherry
              </p>

              <h1 className="max-w-2xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]">
                A little
                <span className="block italic text-[#963B4D]">
                  sweetness,
                </span>
                a lot of
                <span className="block">heart.</span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#79665D] sm:text-lg">
                Thoughtfully made treats, comforting coffee, and
                the little moments that make an ordinary day
                feel extraordinary.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-4 bg-[#76283B] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#54202E]"
                >
                  Explore Our Menu
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  to="/story"
                  className="border-b border-[#BDA39A] pb-2 text-sm font-semibold text-[#50362F] transition hover:border-[#76283B] hover:text-[#76283B]"
                >
                  Discover Our Story
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-[#E8DCD2] pt-6">
                <span className="h-px w-10 bg-[#963B4D]" />
                <p className="text-xs uppercase tracking-[0.18em] text-[#8A746A]">
                  Made for your everyday moments
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#DCC1C1]" />

              <div className="relative overflow-hidden bg-[#EADBD2]">
                <img
                  src={night}
                  alt="The atmosphere of Crumb & Cherry"
                  className="h-[400px] w-full object-cover sm:h-[540px] lg:h-[650px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#241512]/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-9 sm:left-9 sm:right-9">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/80">
                      The Crumb & Cherry Experience
                    </p>
                    <p className="mt-2 font-serif text-2xl italic sm:text-3xl">
                      Your moment. Your ritual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-[#E9DAD5] bg-[#F4E6E4] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#963B4D]">
            A Bakery With Heart
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Where good taste meets the beauty of
            <span className="italic text-[#963B4D]">
              {" "}slowing down.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#79665D] sm:text-base">
            We believe the best moments do not need a special
            occasion. Sometimes, all it takes is a familiar cup
            of coffee, a freshly baked treat, and a little time
            to enjoy the things that matter.
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-[#963B4D]" />
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="our-story"
        className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <img
              src={coffee}
              alt="Coffee prepared for a relaxing cafe moment"
              className="h-[340px] w-full object-cover sm:h-[480px] lg:h-[560px]"
            />

            <div className="absolute -bottom-5 right-4 max-w-[230px] border border-[#E6D5CC] bg-[#FCF8F2] px-5 py-4 sm:right-8 sm:px-7 sm:py-5">
              <p className="font-serif text-xl italic text-[#76283B] sm:text-2xl">
                Made to be savoured.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#963B4D]">
              The Story Behind the Name
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              More than a bakery.
              <span className="mt-1 block italic text-[#963B4D]">
                A feeling.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#79665D]">
              Crumb & Cherry was imagined as a welcoming space
              where the simple pleasures of life take centre stage.
              A place inspired by the aroma of coffee, the charm
              of beautiful pastries, and the warmth of sharing
              something delicious.
            </p>

            <p className="mt-5 text-base leading-8 text-[#79665D]">
              Our philosophy is simple: care about the details,
              celebrate good flavours, and make room for the little
              moments that turn an ordinary day into a lovely one.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#E5D6CD] pt-6">
              <div>
                <p className="font-serif text-2xl text-[#76283B] sm:text-3xl">
                  Thoughtful
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#8A746A]">
                  In every detail
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#76283B] sm:text-3xl">
                  Heartfelt
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#8A746A]">
                  In every moment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="bg-[#382421] px-5 py-20 text-[#FCF8F2] sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 border-b border-white/15 pb-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E6B8BD]">
                What We Believe
              </p>

              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
                The beauty is in the details.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-white/65 md:justify-self-end sm:text-base">
              A memorable bakery experience is about more than
              what is on the plate. It is about the feeling that
              stays with you afterwards.
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            <article className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:pr-8 lg:py-12">
              <span className="font-serif text-3xl italic text-[#E6B8BD]">
                01
              </span>
              <h3 className="mt-5 font-serif text-2xl">
                Thoughtful Quality
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                Every ingredient and detail deserves attention.
                We value the little things that make a good
                experience feel special.
              </p>
            </article>

            <article className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 lg:py-12">
              <span className="font-serif text-3xl italic text-[#E6B8BD]">
                02
              </span>
              <h3 className="mt-5 font-serif text-2xl">
                Everyday Comfort
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                Familiar flavours, comforting coffee, and a
                welcoming atmosphere make even a quick break
                feel worthwhile.
              </p>
            </article>

            <article className="py-8 md:pl-8 lg:py-12">
              <span className="font-serif text-3xl italic text-[#E6B8BD]">
                03
              </span>
              <h3 className="mt-5 font-serif text-2xl">
                Moments Together
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                From conversations with friends to a quiet
                moment alone, we believe good food brings
                a little more joy to the day.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SIGNATURE FAVOURITES */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#963B4D]">
                A Taste of Crumb & Cherry
              </p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                Little things to love.
              </h2>
            </div>

            <Link
              to="/menu"
              className="w-fit border-b border-[#963B4D] pb-2 text-sm font-semibold text-[#76283B] transition hover:border-[#392521] hover:text-[#392521]"
            >
              Explore the full menu →
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group">
              <div className="overflow-hidden bg-[#F0E2D9]">
                <img
                  src={coffee}
                  alt="Coffee at Crumb & Cherry"
                  className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[360px]"
                />
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-[#E5D6CD] py-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#963B4D]">
                    The Coffee Ritual
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">
                    Coffee & Comfort
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#79665D]">
                    Your favourite kind of pause, one cup at a time.
                  </p>
                </div>
                <span className="pt-1 text-xl text-[#963B4D]">↗</span>
              </div>
            </article>

            <article className="group">
              <div className="overflow-hidden bg-[#F0E2D9]">
                <img
                  src={croissant}
                  alt="Croissant and bakery favourites"
                  className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[360px]"
                />
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-[#E5D6CD] py-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#963B4D]">
                    From the Bakery
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">
                    Baked Favourites
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#79665D]">
                    Beautiful bakery treats for the moments
                    worth slowing down for.
                  </p>
                </div>
                <span className="pt-1 text-xl text-[#963B4D]">↗</span>
              </div>
            </article>

            <article className="group sm:col-span-2 lg:col-span-1">
              <div className="flex h-[300px] items-center justify-center overflow-hidden bg-[#EBD6D5] sm:h-[360px]">
                <div className="px-6 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#76283B]">
                    A Little Indulgence
                  </p>

                  <h3 className="mt-5 font-serif text-4xl leading-tight text-[#76283B] sm:text-5xl">
                    Something
                    <span className="block italic">sweet.</span>
                  </h3>

                  <div className="mx-auto mt-6 h-px w-12 bg-[#963B4D]" />

                  <p className="mt-5 text-sm text-[#795D55]">
                    Discover your next favourite dessert.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-[#E5D6CD] py-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#963B4D]">
                    The Sweet Side
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">
                    Cakes & Desserts
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#79665D]">
                    A little sweetness for your everyday celebrations.
                  </p>
                </div>
                <span className="pt-1 text-xl text-[#963B4D]">↗</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-y border-[#E6D3CF] bg-[#F4E6E4] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#963B4D]">
            Our Little Philosophy
          </p>

          <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            “The sweetest moments are often the simplest.”
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#79665D] sm:text-base">
            A cup of something comforting. A treat worth sharing.
            A moment to yourself. That is the feeling we want
            Crumb & Cherry to bring to your day.
          </p>

          <div className="mx-auto mt-8 h-px w-12 bg-[#963B4D]" />
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="border-b border-[#E5D6CD] bg-[#F4E6E4] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#963B4D]">
              Stay in the Loop
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Good coffee.
              <span className="block italic text-[#963B4D]">
                Great news.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#79665D] sm:text-base">
              Be the first to hear about café news, new favourites,
              seasonal treats, and special offers from Crumb & Cherry.
            </p>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubscribed(true);
                e.currentTarget.reset();
              }}
              className="w-full"
            >
              <label
                htmlFor="newsletter-email"
                className="mb-3 block text-sm font-semibold text-[#392521]"
              >
                Email address <span className="text-[#963B4D]">*</span>
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  className="min-h-[54px] min-w-0 flex-1 border border-[#D9C4BC] bg-[#FCF8F2] px-5 text-sm text-[#392521] outline-none transition placeholder:text-[#A38E85] focus:border-[#76283B] focus:ring-1 focus:ring-[#76283B]"
                />

                <button
                  type="submit"
                  className="inline-flex min-h-[54px] items-center justify-center gap-4 bg-[#76283B] px-7 text-sm font-semibold text-white transition duration-300 hover:bg-[#54202E]"
                >
                  Subscribe
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <p className="mt-4 text-xs leading-6 text-[#8A746A]">
                By subscribing, you agree to receive Crumb & Cherry
                email updates. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* CUSTOM SUBSCRIBE POPUP */}
        {isSubscribed && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#241512]/60 px-5 backdrop-blur-sm"
            onClick={() => setIsSubscribed(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="subscribe-title"
              className="relative w-full max-w-md border border-[#E5D6CD] bg-[#FCF8F2] px-7 py-10 text-center shadow-2xl sm:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsSubscribed(false)}
                aria-label="Close popup"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-[#79665D] transition hover:bg-[#F4E6E4] hover:text-[#76283B]"
              >
                ×
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F4E6E4] text-3xl text-[#76283B]">
                ✓
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#963B4D]">
                Crumb & Cherry
              </p>

              <h2
                id="subscribe-title"
                className="mt-3 font-serif text-3xl text-[#392521] sm:text-4xl"
              >
                Thank you!
              </h2>

              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#79665D]">
                Thank you for stopping by. We hope to bring a little
                more sweetness to your inbox!
              </p>

              <button
                type="button"
                onClick={() => setIsSubscribed(false)}
                className="mt-7 w-full bg-[#76283B] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#54202E]"
              >
                Continue Exploring →
              </button>
            </div>
          </div>
        )}
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 bg-[#76283B] px-7 py-12 text-white sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E9BFC5]">
              Your Next Favourite Moment
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              Make a little room for something lovely.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Explore our menu and find something that makes
              your day a little sweeter.
            </p>
          </div>

          <div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-5 bg-[#FCF8F2] px-7 py-4 text-sm font-semibold text-[#76283B] transition duration-300 hover:bg-[#F0D9DA]"
            >
              Discover the Menu
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5D6CD] bg-[#F4EAE1] px-5 pb-6 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link
              to="/"
              className="font-serif text-3xl font-semibold tracking-tight text-[#76283B]"
            >
              Crumb & Cherry
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#79665D]">
              Thoughtful flavours, comforting coffee, and
              a little sweetness in every moment.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#963B4D]">
              Made for the love of little things.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#392521]">
              Explore
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-[#79665D]">
              <li>
                <Link to="/" className="transition hover:text-[#963B4D]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/story" className="transition hover:text-[#963B4D]">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/menu" className="transition hover:text-[#963B4D]">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-[#963B4D]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#392521]">
              Our Menu
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-[#79665D]">
              <li>
                <Link to="/menu/beverages" className="transition hover:text-[#963B4D]">
                  Coffee & Beverages
                </Link>
              </li>
              <li>
                <Link to="/menu/bakery" className="transition hover:text-[#963B4D]">
                  Bakery Favourites
                </Link>
              </li>
              <li>
                <Link to="/menu/desserts" className="transition hover:text-[#963B4D]">
                  Cakes & Desserts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#392521]">
              Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#79665D]">
              Have a question? We would love to hear from you.
            </p>

            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 border-b border-[#963B4D] pb-1 text-sm font-semibold text-[#76283B] transition hover:text-[#963B4D]"
            >
              Get in touch
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-[#DDCBC1] pt-6 text-xs text-[#79665D] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Crumb & Cherry. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="transition hover:text-[#963B4D]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-[#963B4D]">
              Terms & Conditions
            </Link>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-fit border-b border-[#963B4D] pb-1 font-semibold text-[#76283B] transition hover:text-[#963B4D]"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </main>
  );
};

export default About;
