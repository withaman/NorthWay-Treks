"use client"
import React, { useState } from "react";
import PlanTripForm from "./PlanTripForm";
import Link from "next/link";
import { sendToWhatsApp } from "@/utils/sendToWhatsapp";

export default function HeroSection() {
  const [openForm, setOpenForm] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  mobile: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  sendToWhatsApp(
    "918979735791", // your number 918979735791
    "📩 Travel Inquiry",
    {
      Name: formData.name,
      Email: formData.email,
      Mobile: formData.mobile,
      Message: formData.message,
    }
  );
};
  return (
    <section className="relative w-full h-screen overflow-hidden md:overflow-visible">

      {/* Background Video */}
      <video
        src="/video/herovid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row h-full text-white mt-10 overflow-y-auto md:overflow-visible scroll-smooth">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center px-6 lg:px-20">
          <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 mt-12 lg:mt-0">
            Trek the Himalayas, Discover Your Limits.
          </h1>

          <p className="max-w-lg text-base sm:text-lg mb-8">
            Discover breathtaking Himalayan destinations through expertly curated trekking tours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setOpenForm(true)}
              className="bg-white text-black px-6 btn-cta py-3 rounded-full font-medium cursor-pointer">
              Plan Your Trip
            </button>
            {/* Modal */}
            {openForm && (
              <div
                className="fixed inset-0 bg-black/60 w-full flex items-center justify-center z-50 px-4 md:px-0
   overflow-y-auto"
                onClick={() => setOpenForm(false)}
              >
                {/* Popup Box */}
                <div
                  className="relative w-full sm:w-auto max-h-[90vh] sm:max-h-none overflow-y-auto sm:overflow-visible"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setOpenForm(false)}
                    className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black top-17 right-6"
                  >
                    ✕
                  </button>

                  {/* Your Form */}
                  <PlanTripForm />
                </div>
              </div>
            )}
            <Link href="/pack" className="bg-white/20 backdrop-blur-md border text-center border-white px-6 py-3 rounded-full font-medium">
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/3 flex justify-center items-center px-4 pb-10 lg:pb-0 mt-10 sm:mt-0 mb-5">
          <form
          onSubmit={handleSubmit}
            className="
      w-full max-w-md
      flex flex-col gap-3
      rounded-2xl
      px-6 py-6

      bg-white/15
      backdrop-blur-xl
      border border-white/30

      shadow-xl shadow-black/20
    "
          >
            <p className="text-lg font-semibold text-center text-white">
              Fill up the form and our travel experts will soon reach out to you.
            </p>

            {/* Inputs */}
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Name"
              className="glass-input border p-2 rounded-full"
            />

            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="glass-input border p-2 rounded-full"
            />

            <input
              type="text"
              name="mobile"
              onChange={handleChange}
              placeholder="Mobile"
              className="glass-input border p-2 rounded-full"
            />

            <textarea
              placeholder="Message"
              name="message"
              onChange={handleChange}
              rows={3}
              className="glass-input resize-none border p-2 rounded-xl"
            />

            <p className="text-[11px] text-white/70">
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="text-yellow-300 cursor-pointer">Privacy Policy</span> and{" "}
              <span className="text-yellow-300 cursor-pointer">Terms of Services</span> apply.
            </p>

            {/* Button */}
            <button
            type="submit"
              className="
        mt-2
        rounded-full
        py-3
        font-medium
        text-white

        bg-white/20
        backdrop-blur-md
        border border-white/30

        hover:bg-[#fd8925]
        transition-all duration-300
      "
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}