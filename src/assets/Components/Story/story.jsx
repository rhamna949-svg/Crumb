
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Cherry } from "lucide-react";
import happy from "../../../assets/Happy.png";
import memory from "../../../assets/memory.png";

const Story = () => {
  return (
    <main className="overflow-hidden bg-[#FCF8F2] text-[#392521]">
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#211416] px-6 py-24 md:min-h-[680px] md:px-16">
        <div className="absolute inset-0">
          <img
            src={happy}
            alt="Guests enjoying a warm evening at Crumb and Cherry"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#160D0F] via-[#241416]/85 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#E7B7A8]">
            A place for every feeling
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.1] text-[#FCF8F2] md:text-7xl">
            Sometimes,
            <span className="block font-serif italic text-[#E7B7A8]">
              all you need
            </span>
            is a little sweetness.
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-white/80 md:text-lg">
            Rainy days, long conversations and a warm cup in your hands.
            At Crumb & Cherry, there's always room for one more moment.
          </p>

          <Link
            to="/menu"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#873447] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A3465B]"
          >
            Find your happy place
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-right text-[#E7B7A8] md:block">
          <p className="font-serif text-2xl italic">Made with heart.</p>
          <p className="mt-1 text-xs tracking-widest">SERVED WITH LOVE</p>
        </div>
      </section>

      {/* STORY — EDITORIAL LAYOUT */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">

          <div className="relative pb-8 pr-5">
            <img
              src={memory}
              alt="Sweet memories at Crumb and Cherry"
              className="h-[400px] w-full rounded-t-[180px] object-cover md:h-[540px]"
            />

            <div className="absolute -bottom-1 right-0 max-w-[220px] bg-[#EED8D0] p-5 md:right-[-10px]">
              <Heart className="mb-3 text-[#873447]" size={22} />
              <p className="font-serif text-xl italic text-[#76283B]">
                Little moments. Lasting memories.
              </p>
            </div>
          </div>

          <div className="md:pl-5">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#873447]">
              The heart behind the crumbs
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              More than a bakery.
              <span className="mt-2 block italic text-[#873447]">
                A feeling.
              </span>
            </h2>

            <div className="my-7 h-px w-20 bg-[#873447]" />

            <p className="leading-8 text-[#79665D]">
              We believe happiness can begin with the smallest things:
              the smell of freshly baked pastries, a favourite dessert,
              or a friend who says, "Let's get coffee."
            </p>

            <p className="mt-5 leading-8 text-[#79665D]">
              Crumb & Cherry is built around those little moments. We want
              every guest to feel welcome, every table to invite
              conversation, and every treat to add a little joy to the day.
            </p>

            <p className="mt-5 font-serif text-xl italic text-[#873447]">
              Because the sweetest memories are the ones we share.
            </p>
          </div>
        </div>
      </section>

      {/* HAPPY MOMENTS — FULL IMAGE BREAK */}
      <section className="relative isolate flex min-h-[470px] items-center justify-center overflow-hidden bg-[#2A1919] px-6 py-20 text-center">
        <img
          src={happy}
          alt="Friends sharing happy moments at the café"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-[#211416]/65" />

        <div className="max-w-3xl">
          <Cherry className="mx-auto mb-6 text-[#E7B7A8]" size={38} />

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#E7B7A8]">
            Good food. Good company.
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white md:text-6xl">
            Every table has a story.
            <span className="mt-3 block italic text-[#E7B7A8]">
              What's yours?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/80">
            From quiet coffee breaks to laughter-filled catch-ups,
            we're here for the moments that make life feel a little warmer.
          </p>
        </div>
      </section>

      {/* OUR BELIEFS — TYPOGRAPHY, NOT CARDS */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#873447]">
                What matters to us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">
                Our little promises.
              </h2>
            </div>

            <p className="max-w-sm leading-7 text-[#79665D]">
              The things that shape the way we bake, welcome and serve.
            </p>
          </div>

          <div className="border-t border-[#D9C3B9]">
            <div className="grid gap-3 border-b border-[#D9C3B9] py-8 md:grid-cols-[100px_1fr_1.2fr] md:items-center md:gap-8">
              <span className="font-serif text-3xl italic text-[#B98A80]">01</span>
              <h3 className="font-serif text-2xl md:text-3xl">Made with care</h3>
              <p className="leading-7 text-[#79665D]">
                We care about the little details, from the first preparation
                to the final touch on every treat.
              </p>
            </div>

            <div className="grid gap-3 border-b border-[#D9C3B9] py-8 md:grid-cols-[100px_1fr_1.2fr] md:items-center md:gap-8">
              <span className="font-serif text-3xl italic text-[#B98A80]">02</span>
              <h3 className="font-serif text-2xl md:text-3xl">Everyone belongs</h3>
              <p className="leading-7 text-[#79665D]">
                Whether you're celebrating or simply taking a break,
                we want you to feel welcome here.
              </p>
            </div>

            <div className="grid gap-3 border-b border-[#D9C3B9] py-8 md:grid-cols-[100px_1fr_1.2fr] md:items-center md:gap-8">
              <span className="font-serif text-3xl italic text-[#B98A80]">03</span>
              <h3 className="font-serif text-2xl md:text-3xl">Joy in every bite</h3>
              <p className="leading-7 text-[#79665D]">
                We believe a lovely dessert can turn an ordinary day
                into something worth remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#76283B] px-6 py-20 text-center text-[#FCF8F2] md:py-24">
        <Sparkles className="mx-auto mb-6 text-[#E7B7A8]" size={30} />

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#E7B7A8]">
          Your Crumb & Cherry moment
        </p>

        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Come for the treats.
          <span className="mt-2 block italic text-[#E7B7A8]">
            Stay for the feeling.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg leading-8 text-white/80">
          Your favourite pastry, your favourite people,
          and a little time just for you.
        </p>

        <Link
          to="/menu"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FCF8F2] px-8 py-4 font-semibold text-[#76283B] transition hover:bg-[#F4E6E4]"
        >
          Explore our menu
          <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
};

export default Story;

