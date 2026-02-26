'use client'
import Carousel from "@/components/Carousel";
import { useState } from "react";

export default function PlaceLayout({ trekInfo }) {
  console.log(trekInfo)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-5">
      {/* Carousel */}
      <Carousel images={trekInfo.image} />

      {/* Header */}
      <div className="mt-6 bg-amber-500 rounded-lg px-4 py-2">
        <h1 className="text-3xl font-bold">{trekInfo.title}</h1>
        <p className="text-gray-500 mt-1">{trekInfo.subtitle}</p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <p><b>Duration:</b> {trekInfo.duration}</p>
          <p><b>Altitude:</b> {trekInfo.altitude}</p>
          <p><b>Difficulty:</b> {trekInfo.difficulty}</p>
          <p><b>Price:</b> {trekInfo.price}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="space-y-8 mt-6">
        <p className="text-lg md:text-xl font-semibold text-justify leading-relaxed">
          {trekInfo.intro}
        </p>

        <div className="flex flex-col lg:flex-row gap-8 bg-gray-100 p-6 rounded-2xl">
          {/* LEFT CONTENT */}
          <div className="lg:w-2/3 space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-3">🌄 About {trekInfo.title}</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><b>Location:</b> {trekInfo.about.location}</li>
                <li><b>Altitude:</b> {trekInfo.about.altitude}</li>
                <li><b>Duration:</b> {trekInfo.about.duration}</li>
                <li><b>Difficulty:</b> {trekInfo.about.difficulty}</li>
                <li><b>Best Season:</b> {trekInfo.about.bestSeason}</li>
                <li><b>Starting Point:</b> {trekInfo.about.startingPoint}</li>
              </ul>
              <p className="mt-3 text-gray-700">{trekInfo.about.description}</p>
            </section>

            {/* Why Choose Section */}
            <section>
              <h2 className="text-2xl font-bold mb-3">❄️ Why {trekInfo.title} is a Great Trek</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {trekInfo.whyChoose.map((reason, i) => (
                  <li key={i}>{reason}</li>
                ))}
              </ul>
            </section>

            {/* Itinerary Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">🗺️ Trek Itinerary Overview</h2>
              <div className="space-y-4 text-gray-700">
                {trekInfo.itinerary.map((day, i) => (
                  <div key={i}>
                    <h4 className="font-semibold">{day.day}: {day.title} {day.altitude && `(${day.altitude})`}</h4>
                    <p>{day.description}</p>
                  </div>
                ))}
              </div>

              {/* Trek Difficulty & Fitness */}
              <h2 className="text-2xl font-bold mb-3">🧗 Trek Difficulty & Fitness</h2>
              <p className="text-gray-700 mb-2">{trekInfo.title} is categorized as <b>{trekInfo.fitness.level}</b>, ideal for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {trekInfo.fitness.suitableFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 font-semibold">Recommended Fitness:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {trekInfo.fitness.recommended.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Packing List */}
              <h2 className="text-2xl font-bold mb-3">🧳 What to Pack</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {trekInfo.packingList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:w-1/3">
            <form className="sticky top-24 flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <input type="text" placeholder="Full Name" required className="input-style border rounded-lg p-1" />
              <input type="tel" placeholder="Phone Number" required className="input-style border rounded-lg p-1" />
              <input type="email" placeholder="Email (Optional)" className="input-style border rounded-lg p-1" />
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">From Date</label>
                  <input type="date" required className="input-style w-full border rounded-lg p-1" />
                </div>
                <div className="w-1/2">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">To Date</label>
                  <input type="date" required className="input-style w-full border rounded-lg p-1" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Number of Persons</label>
                <select required className="input-style w-full border rounded-lg p-1">
                  <option value="">Select Persons</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5+">5+ Persons</option>
                </select>
              </div>
              <textarea placeholder="Message (Optional)" rows={3} className="input-style border rounded-lg p-1" />
              <p className="text-[11px] text-gray-500">
                This site is protected by reCAPTCHA and the Google
                <span className="text-yellow-500"> Privacy Policy </span>&
                <span className="text-yellow-500"> Terms of Service</span>.
              </p>
              <button type="submit" className="bg-black text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          {trekInfo.trekfaqs.map((faq, index) => (
            <div key={index} className="border rounded-xl p-4 cursor-pointer bg-white shadow-sm" onClick={() => toggleFAQ(index)}>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <span className="text-2xl font-bold">{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}