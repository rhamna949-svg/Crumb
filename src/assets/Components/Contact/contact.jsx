
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Our Café",
      detail: "Come in for coffee and something sweet.",
      action: "Find our location",
      link: "https://www.google.com/maps/search/cafes",
    },
    {
      icon: Phone,
      title: "Give Us a Call",
      detail: "Have a question? We'd love to help.",
      action: "Contact our team",
      link: "tel:+920000000000",
    },
    {
      icon: Mail,
      title: "Send Us an Email",
      detail: "Share your questions or feedback with us.",
      action: "Email us",
      link: "mailto:hello@crumbandcherry.com",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#FCF8F2] text-[#392521]">
      {/* HERO */}
      <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between border-b border-[#E8DCD2] pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A5A50]">
              Get in Touch
            </p>

            <p className="text-xs uppercase tracking-[0.15em] text-[#7A5A50]">
              We're here for you
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="py-5 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#963B4D]">
                We'd Love to Hear From You
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
                Let's start a
                <span className="block italic text-[#963B4D]">
                  conversation.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#79665D] sm:text-lg">
                Questions about our menu? Want to share some
                feedback? Or simply want to say hello? We're
                always happy to hear from you.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-4 bg-[#76283B] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#54202E]"
                >
                  Send Us a Message
                  <ArrowRight size={17} />
                </a>

                <Link
                  to="/menu"
                  className="inline-flex items-center border-b border-[#BDA39A] py-4 text-sm font-semibold text-[#50362F] transition hover:text-[#76283B]"
                >
                  Explore Our Menu
                </Link>
              </div>

              <div className="mt-12 border-t border-[#E8DCD2] pt-6">
                <p className="font-serif text-2xl italic text-[#76283B]">
                  Good things begin with a hello.
                </p>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#DCC1C1]" />

              <div className="relative overflow-hidden bg-[#EADBD2]">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
                  alt="Freshly brewed coffee in a welcoming café"
                  className="h-[400px] w-full object-cover sm:h-[520px] lg:h-[580px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#241512]/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-7 right-7 text-white sm:bottom-10 sm:left-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/80">
                    A Little Note Goes a Long Way
                  </p>

                  <p className="mt-3 max-w-sm font-serif text-3xl italic sm:text-4xl">
                    Every message matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="border-y border-[#E9DAD5] bg-[#F4E6E4] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#963B4D]">
              Reach Out
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              We're just a message away.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border border-[#E5D6CD] bg-[#FCF8F2] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#F4E6E4] text-[#76283B]">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-12 text-sm leading-7 text-[#79665D]">
                    {item.detail}
                  </p>

                  <a
                    href={item.link}
                    target={
                      item.link.startsWith("https") ? "_blank" : undefined
                    }
                    rel={
                      item.link.startsWith("https")
                        ? "noreferrer"
                        : undefined
                    }
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#76283B] transition hover:text-[#963B4D]"
                  >
                    {item.action}
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MESSAGE FORM */}
      <section
        id="contact-form"
        className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#963B4D]">
              Drop Us a Line
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              What's on your
              <span className="block italic text-[#963B4D]">
                mind?
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-[#79665D] sm:text-base">
              Every question, suggestion and kind word helps us
              make Crumb & Cherry even better. Fill in the form
              and tell us what's on your mind.
            </p>

            <div className="mt-10 border-l-2 border-[#963B4D] pl-5">
              <p className="font-serif text-xl italic text-[#76283B]">
                Your feedback makes a difference.
              </p>

              <p className="mt-2 text-sm leading-6 text-[#79665D]">
                Thank you for being part of our little community.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4 text-[#76283B]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4E6E4]">
                <Clock size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  We're happy to help
                </p>
                <p className="mt-1 text-xs text-[#79665D]">
                  Send us your message anytime.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#E5D6CD] bg-white/60 p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="min-h-12 w-full border border-[#D9C4BC] bg-[#FCF8F2] px-4 text-sm outline-none transition placeholder:text-[#A38E85] focus:border-[#76283B] focus:ring-1 focus:ring-[#76283B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="min-h-12 w-full border border-[#D9C4BC] bg-[#FCF8F2] px-4 text-sm outline-none transition placeholder:text-[#A38E85] focus:border-[#76283B] focus:ring-1 focus:ring-[#76283B]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject *
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="min-h-12 w-full border border-[#D9C4BC] bg-[#FCF8F2] px-4 text-sm text-[#79665D] outline-none transition focus:border-[#76283B] focus:ring-1 focus:ring-[#76283B]"
                >
                  <option value="" disabled>
                    What would you like to talk about?
                  </option>
                  <option value="menu">Menu & Products</option>
                  <option value="feedback">Feedback</option>
                  <option value="cafe">Café Experience</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                  className="w-full resize-y border border-[#D9C4BC] bg-[#FCF8F2] px-4 py-3 text-sm outline-none transition placeholder:text-[#A38E85] focus:border-[#76283B] focus:ring-1 focus:ring-[#76283B]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#76283B] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#54202E] sm:w-auto"
              >
                Send Message
                <Send size={16} />
              </button>

              {isSubmitted && (
                <div
                  role="status"
                  className="border border-[#C8D9C2] bg-[#F0F6ED] p-5 text-sm leading-7 text-[#365C35]"
                >
                  <p className="font-semibold">Thank you for reaching out!</p>
                  <p>
                    Your form has been completed successfully. To actually
                    deliver your message to our team, we still need to
                    connect a backend or email service.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="bg-[#382421] px-5 py-16 text-center text-[#FCF8F2] sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E6B8BD]">
            Crumb & Cherry
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Every good conversation starts with a little warmth.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Whether it's a question, a suggestion or a simple hello,
            there's always room for one more connection.
          </p>

          <Link
            to="/menu"
            className="mt-8 inline-flex items-center gap-3 bg-[#FCF8F2] px-7 py-4 text-sm font-semibold text-[#76283B] transition hover:bg-[#F0D9DA]"
          >
            Explore Our Menu
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
