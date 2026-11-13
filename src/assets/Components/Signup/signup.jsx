
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Cherry, Eye, EyeOff, ArrowRight } from "lucide-react";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (loading) return;

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:3000/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//  const data = await response.json();

// if (!response.ok) {
//   throw new Error(data.message || "Signup failed. Please try again.");
// }

// setFormData({
//   name: "",
//   email: "",
//   password: "",
// });

// navigate("/home");

// } catch (error) {
//   console.error(error);
//   setMessage(error.message || "Something went wrong. Please try again.");
// } finally {
//   setLoading(false);
// }
//   }
    

//   return (
//     <div className="min-h-screen bg-[#FFF8EF] p-4 sm:p-8 flex items-center justify-center">
//       <div className="w-full max-w-6xl min-h-[680px] grid md:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_rgba(110,40,40,0.12)]">

//         {/* Left Branding Section */}
//         <div className="relative hidden md:flex flex-col justify-between overflow-hidden bg-[#8E2438] p-10 lg:p-14 text-white">
//           <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
//           <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
//           <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/[0.04]" />

//           <Link to="/" className="relative z-10 flex items-center gap-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
//               <Cherry size={27} />
//             </div>
//             <div>
//               <h1 className="font-serif text-2xl font-bold tracking-wide">
//                 Crumb & Cherry
//               </h1>
//               <p className="text-xs tracking-[3px] text-white/60">
//                 BAKED WITH LOVE
//               </p>
//             </div>
//           </Link>

//           <div className="relative z-10 max-w-md">
//             <span className="mb-6 inline-block rounded-full border border-white/20 px-4 py-2 text-xs tracking-[2px] text-white/80">
//               A LITTLE MOMENT OF JOY
//             </span>

//             <h2 className="font-serif text-5xl font-medium leading-[1.2] lg:text-6xl">
//               Your sweetest
//               <br />
//               moments
//               <br />
//               <span className="italic text-[#F5DFDF]">start here.</span>
//             </h2>

//             <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
//               From freshly baked pastries to your favourite coffee,
//               there's always something special waiting for you.
//             </p>

//             <div className="mt-10 flex items-center gap-3">
//               <div className="h-1 w-12 rounded-full bg-[#F5DFDF]" />
//               <div className="h-1 w-4 rounded-full bg-white/30" />
//               <div className="h-1 w-4 rounded-full bg-white/30" />
//             </div>
//           </div>

//           <p className="relative z-10 text-xs tracking-wide text-white/60">
//             Made for your everyday little celebrations.
//           </p>
//         </div>

//         {/* Signup Form */}
//         <div className="flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
//           <Link
//             to="/"
//             className="mb-8 flex w-fit items-center gap-2 text-sm font-semibold text-[#8E2438] md:hidden"
//           >
//             <Cherry size={22} />
//             Crumb & Cherry
//           </Link>

//           <div className="mb-8">
//             <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#B92735]">
//               Welcome to our table
//             </p>

//             <h2 className="font-serif text-3xl font-bold text-[#49312C] sm:text-4xl">
//               Create your account
//             </h2>

//             <p className="mt-3 text-sm leading-6 text-[#8B746C]">
//               Join us for coffee, cake and sweeter moments.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label
//                 htmlFor="signup-name"
//                 className="mb-2 block text-sm font-semibold text-[#49312C]"
//               >
//                 Full name
//               </label>
//               <input
//                 id="signup-name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your full name"
//                 autoComplete="name"
//                 required
//                 className="w-full rounded-xl border border-[#EADCD4] bg-[#FFFCF8] px-4 py-3.5 text-sm text-[#49312C] placeholder:text-[#B6A39A] outline-none transition focus:border-[#B92735] focus:ring-4 focus:ring-[#B92735]/10"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="signup-email"
//                 className="mb-2 block text-sm font-semibold text-[#49312C]"
//               >
//                 Email address
//               </label>
//               <input
//                 id="signup-email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 autoComplete="email"
//                 required
//                 className="w-full rounded-xl border border-[#EADCD4] bg-[#FFFCF8] px-4 py-3.5 text-sm text-[#49312C] placeholder:text-[#B6A39A] outline-none transition focus:border-[#B92735] focus:ring-4 focus:ring-[#B92735]/10"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="signup-password"
//                 className="mb-2 block text-sm font-semibold text-[#49312C]"
//               >
//                 Password
//               </label>

//               <div className="relative">
//                 <input
//                   id="signup-password"
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Create a strong password"
//                   autoComplete="new-password"
//                   minLength={8}
//                   required
//                   className="w-full rounded-xl border border-[#EADCD4] bg-[#FFFCF8] px-4 py-3.5 pr-12 text-sm text-[#49312C] placeholder:text-[#B6A39A] outline-none transition focus:border-[#B92735] focus:ring-4 focus:ring-[#B92735]/10"
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B746C] transition hover:text-[#B92735]"
//                 >
//                   {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
//                 </button>
//               </div>

//               <p className="mt-2 text-xs text-[#9A857C]">
//                 Use at least 8 characters.
//               </p>
//             </div>

//             {message && (
//               <p
//                 role="alert"
//                 className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
//               >
//                 {message}
//               </p>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#B92735] py-4 text-sm font-bold text-white shadow-lg shadow-[#B92735]/15 transition duration-300 hover:bg-[#8E2438] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {loading ? "Creating Account..." : "Create Account"}
//               {!loading && (
//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               )}
//             </button>
//           </form>

//           <div className="my-7 flex items-center gap-4">
//             <div className="h-px flex-1 bg-[#EEE2DB]" />
//             <span className="text-xs text-[#A18B81]">ALREADY A MEMBER?</span>
//             <div className="h-px flex-1 bg-[#EEE2DB]" />
//           </div>

//           <p className="text-center text-sm text-[#795D55]">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="font-bold text-[#B92735] transition hover:text-[#8E2438] hover:underline"
//             >
//               Log in
//             </Link>
//           </p>

//           <p className="mt-8 text-center text-xs leading-5 text-[#A18B81]">
//             By creating an account, you agree to our{" "}
//             <span className="font-medium text-[#795D55]">
//               Terms of Service
//             </span>{" "}
//             and{" "}
//             <span className="font-medium text-[#795D55]">
//               Privacy Policy
//             </span>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

