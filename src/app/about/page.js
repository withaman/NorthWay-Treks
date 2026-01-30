'use client'
import { destinations } from "@/assets/assets";
import Carousel from "@/components/Carousel";
import { useState } from "react";

export default function About() {
  const trek = destinations[0];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Carousel */}
      <Carousel image={trek.image} />

      {/* Content */}
      <div className="mt-6 bg-amber-500 rounded-lg px-4 py-2">
        <h1 className="text-3xl font-bold">{trek.title}</h1>
        <p className="text-gray-500 mt-1">{trek.subtitle}</p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <p>
            <b>Duration:</b> {trek.duration}
          </p>
          <p>
            <b>Altitude:</b> {trek.altitude}
          </p>
          <p>
            <b>Difficulty:</b> {trek.difficulty}
          </p>
          <p>
            <b>Price:</b> {trek.price}
          </p>
        </div>
      </div>
      <div className="space-y-8">
        {/* Intro */}
        <p className="text-lg md:text-xl font-semibold text-justify leading-relaxed">
          Kedarkantha Trek is one of the most popular winter treks in India,
          located in the Govind Wildlife Sanctuary of Uttarkashi district,
          Uttarakhand. Known for its snow-covered trails, pine forests, charming
          villages, and breathtaking summit views, this trek is ideal for
          beginners as well as experienced trekkers. This page represents a
          detailed trek information system designed with a modern UI, image
          carousel, and structured itinerary—perfect for trekking companies like{" "}
          <b>Northway Treks</b>.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 bg-gray-100 p-6 rounded-2xl">
          {/* LEFT CONTENT */}
          <div className="lg:w-2/3 space-y-8">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold mb-3">
                🌄 About Kedarkantha Trek
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <b>Location:</b> Sankri, Uttarkashi, Uttarakhand
                </li>
                <li>
                  <b>Altitude:</b> 12,500 ft (3,810 meters)
                </li>
                <li>
                  <b>Duration:</b> 6 Days / 5 Nights
                </li>
                <li>
                  <b>Difficulty:</b> Easy to Moderate
                </li>
                <li>
                  <b>Best Season:</b> December to March
                </li>
                <li>
                  <b>Starting Point:</b> Dehradun
                </li>
              </ul>
              <p className="mt-3 text-gray-700">
                Kedarkantha is especially famous for its 360° summit view,
                offering stunning sights of Swargarohini, Bandarpoonch, Black
                Peak, and Ranglana ranges.
              </p>
            </section>

            {/* Why */}
            <section>
              <h2 className="text-2xl font-bold mb-3">
                ❄️ Why Kedarkantha is India’s Best Winter Trek
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Heavy snowfall from December to February</li>
                <li>Safe and beginner-friendly trail</li>
                <li>Dense pine & oak forests</li>
                <li>Iconic campsites like Juda Ka Talab</li>
                <li>Well-marked route with gradual ascent</li>
                <li>Magical sunrise & sunset from the summit</li>
              </ul>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                🗺️ Trek Itinerary Overview
              </h2>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold">
                    Day 1: Dehradun → Sankri (6,400 ft)
                  </h4>
                  <p>
                    Drive via Mussoorie, Purola & Mori. Overnight stay at
                    Sankri.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Day 2: Sankri → Juda Ka Talab (9,100 ft)
                  </h4>
                  <p>
                    Trek through dense pine forests and snow-covered trails.
                    Camp near the frozen lake.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Day 3: Juda Ka Talab → Base Camp (11,250 ft)
                  </h4>
                  <p>
                    Gradual ascent through open meadows. Acclimatization day.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Day 4: Summit Day (12,500 ft) → Base Camp
                  </h4>
                  <p>
                    Early morning summit push with 360° Himalayan views. Descend
                    safely.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Day 5: Base Camp → Sankri</h4>
                  <p>Descend via forest trails. Celebration evening.</p>
                </div>

                <div>
                  <h4 className="font-semibold">Day 6: Sankri → Dehradun</h4>
                  <p>Departure with unforgettable memories.</p>
                </div>
              </div>
              <section>
                <h2 className="text-2xl font-bold mb-3">
                  🧗 Trek Difficulty & Fitness
                </h2>
                <p className="text-gray-700 mb-2">
                  Kedarkantha is categorized as <b>Easy to Moderate</b>, ideal
                  for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Beginners</li>
                  <li>Solo travelers</li>
                  <li>College groups</li>
                  <li>Corporate teams</li>
                </ul>

                <p className="mt-3 font-semibold">Recommended Fitness:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Jog 3–4 km in 30 minutes</li>
                  <li>Basic stamina & leg strength</li>
                  <li>No prior trekking experience required</li>
                </ul>
              </section>

              <h2 className="text-2xl font-bold mb-3">🧳 What to Pack</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Winter jacket & thermals</li>
                <li>Waterproof trekking shoes</li>
                <li>Gloves & woolen cap</li>
                <li>Sunglasses & sunscreen</li>
                <li>Trekking pole</li>
                <li>Personal medicines</li>
              </ul>
            </section>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:w-1/3">
            <form className="sticky top-24 flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-lg">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                required
                className="input-style"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="input-style"
              />

              {/* Email (Optional) */}
              <input
                type="email"
                placeholder="Email (Optional)"
                className="input-style"
              />

              {/* Date Range */}
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">
                    From Date
                  </label>
                  <input type="date" required className="input-style w-full" />
                </div>

                <div className="w-1/2">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">
                    To Date
                  </label>
                  <input type="date" required className="input-style w-full" />
                </div>
              </div>

              {/* Persons */}
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">
                  Number of Persons
                </label>
                <select required className="input-style w-full">
                  <option value="">Select Persons</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5+">5+ Persons</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                placeholder="Message (Optional)"
                rows={3}
                className="input-style"
              />

              {/* reCAPTCHA note */}
              <p className="text-[11px] text-gray-500">
                This site is protected by reCAPTCHA and the Google
                <span className="text-yellow-500"> Privacy Policy </span>&
                <span className="text-yellow-500"> Terms of Service</span>.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="bg-black text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </div>
      <section className="max-w-4xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        ❓ Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {trek.trekfaqs.map((trekfaq, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                {trekfaq.question}
              </h3>
              <span className="text-2xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">
                {trekfaq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}
