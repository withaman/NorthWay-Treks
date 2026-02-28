"use client";
import { useState } from "react";

export default function PlanSection() {
  const [travelers, setTravelers] = useState(1);

  const increase = () => {
    setTravelers((prev) => prev + 1);
  };

  const decrease = () => {
    setTravelers((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <section className="min-h-screenflex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col-reverse flex-col lg:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <p className="text-sm uppercase text-gray-500 mb-3">
            We’re here to help you
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Plan Your Perfect <br /> Himalayan Adventure
          </h2>

          <p className="text-gray-600 mt-4 max-w-md">
            Tell us your preferences and our experts will design
            the best itinerary for you.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>📧 northwaytreks@gmail.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="lg:w-2/3 sm:bg-gray-50 rounded-2xl sm:shadow-xl sm:p-8">
          <form className="space-y-6">

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-full focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border p-2 rounded-full focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="w-full border p-2 rounded-full focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            {/* Trip Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Destination
                </label>
                <select className="w-full border p-2 rounded-full focus:ring-2 focus:ring-orange-400 outline-none">
                  <option value="">Select Destination</option>
                  <option>Kedarnath Trek</option>
                  <option>Hampta Pass</option>
                  <option>Valley of Flowers</option>
                  <option>Spiti Valley</option>
                  <option>Custom Trip</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Trip Type
                </label>
                <select className="w-full border p-2 rounded-full focus:ring-2 focus:ring-orange-400 outline-none">
                  <option value="">Select Trip Type</option>
                  <option>Adventure Trek</option>
                  <option>Family Tour</option>
                  <option>Luxury Travel</option>
                  <option>Backpacking</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  className="w-full border p-2 rounded-full focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Travelers
                </label>

                <div className="flex items-center border rounded-full overflow-hidden h-[42px]">
                  <button
                    type="button"
                    onClick={decrease}
                    className="px-4 bg-gray-200 hover:bg-gray-300 h-full"
                  >
                    -
                  </button>

                  <div className="flex-1 text-center font-semibold">
                    {travelers}
                  </div>

                  <button
                    type="button"
                    onClick={increase}
                    className="px-4 bg-gray-200 hover:bg-gray-300 h-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Budget + Special Requests */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              <div className="md:col-span-1">
                <label className="block text-sm font-medium mb-1">
                  Approx Budget (Optional)
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-full focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div className="md:col-span-3">
                <label className="block text-sm font-medium mb-1">
                  Special Requests
                </label>
                <textarea
                  rows={4}
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none resize-none"
                />
              </div>

            </div>

            {/* Submit */}
            <button
              className="
                w-full
                btn-cta
                text-white
                py-3
                rounded-full
                font-medium
                transition
              "
            >
              Plan My Trip →
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}