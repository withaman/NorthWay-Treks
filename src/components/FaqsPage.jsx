'use client'
import { faqs } from "@/assets/assets";
import { useState } from "react";

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-teal-600 italic text-sm">Explore</p>
        <h1 className="text-3xl font-bold text-gray-900">Updates & FAQs</h1>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-black rounded-lg overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full md:w-[45rem] flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium hover:bg-orange-400 transition hover:text-black"
            >
              {faq.question}
              <span className="text-gray-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="w-full md:w-[45rem] px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      {/* {/* <div className="text-center mt-10">
        <button className="border border-teal-500 text-teal-600 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition">
          All Updates
        </button>
      </div> */}
    </section>
  );
}
