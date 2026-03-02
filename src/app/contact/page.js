"use client"
import { image } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";


import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tour: "",
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
      "918979735791", // your WhatsApp number
      "📩 Contact Page Travel Inquiry",
      {
        Name: formData.name,
        Email: formData.email,
        Tour: formData.tour,
        Message: formData.message,
      }
    );

    // Optional: Reset form
    setFormData({
      name: "",
      email: "",
      tour: "",
      message: "",
    });
  };
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={image.contactus} // replace with your image
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl md:text-5xl font-semibold">Contact</h1>
          <p className="text-sm mt-2 opacity-80">Home / Contact</p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Call Us On", value: "+91 89797 35791" },
            { title: "Email Us", value: "northwaytreks@gmail.com" },
            { title: "Our Location", value: "Dehradun, Uttarakhand" },
          ].map((item, i) => (
            <div
              key={i}
              className="btn-cta rounded-xl shadow-lg p-6 text-center text-white"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-green-600 font-semibold mb-2">CONTACT US</p>
          <h2 className="text-3xl font-bold mb-4">
            Get the Best Travel Package – Contact Us Today!
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions? Our travel experts are ready to help you plan your
            next adventure.
          </p>

          <div className="flex gap-4">
            <div className="flex gap-4">
              <a className="social-icon">
                <RiFacebookFill />
              </a>

              <a className="social-icon">
                <RiTwitterFill />
              </a>

              <a className="social-icon">
                <RiInstagramFill />
              </a>

              <a className="social-icon">
                <RiYoutubeFill />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
         <form
      onSubmit={handleSubmit}
      className="bg-gray-100 rounded-xl shadow-xl p-6 space-y-4 gap-5"
    >
      <div className="grid grid-cols-2 gap-2">
        <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="input outline-none border rounded-2xl p-1"
        placeholder="Full Name"
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="input outline-none border rounded-2xl p-1"
        placeholder="Email"
        required
      />
      </div>

      <select
        name="tour"
        value={formData.tour}
        onChange={handleChange}
        className="input"
        required
      >
        <option value="">Select Tour</option>
        <option value="Kedarkantha">Kedarkantha</option>
        <option value="Tungnath">Tungnath</option>
        <option value="Char Dham Yatra">Char Dham Yatra</option>
        <option value="Mussoorie Tour">Mussoorie Tour</option>
      </select>

      <textarea
        rows="4"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="input w-full"
        placeholder="Your message"
        required
      />

      <div className="flex items-start gap-2 text-sm text-gray-600">
        <input type="checkbox" required />
        <span>I agree to all terms and policies</span>
      </div>

      <button
        type="submit"
        className="w-full btn-cta text-white py-3 rounded-full font-medium hover:bg-green-700 transition"
      >
        Send Now →
      </button>
    </form>
      </section>

      {/* MAP SECTION */}
      <section className="w-full h-[400px] mb-10">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps?q=Dehradun&output=embed"
          loading="lazy"
        />
      </section>
    </main>
  );
}
