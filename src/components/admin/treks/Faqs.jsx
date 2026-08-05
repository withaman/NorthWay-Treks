"use client";

import { Plus, Trash2 } from "lucide-react";

export default function Faqs({
  formData,
  setFormData,
}) {
  const addFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [
        ...prev.faqs,
        {
          question: "",
          answer: "",
        },
      ],
    }));
  };

  const updateFaq = (index, field, value) => {
    const updated = [...formData.faqs];

    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      faqs: updated,
    }));
  };

  const removeFaq = (index) => {
    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Frequently Asked Questions
        </h2>

        <button
          type="button"
          onClick={addFaq}
          className="theme-color text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add FAQ
        </button>
      </div>

      <div className="space-y-5">

        {formData.faqs.map((faq, index) => (

          <div
            key={index}
            className="border rounded-xl p-5"
          >

            <div className="flex justify-between items-center mb-4">

              <h3 className="font-medium">
                FAQ {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeFaq(index)}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
              >
                <Trash2 size={18} />
              </button>

            </div>

            <input
              type="text"
              placeholder="Question"
              value={faq.question || ""}
              onChange={(e) =>
                updateFaq(
                  index,
                  "question",
                  e.target.value
                )
              }
              className="w-full border rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <textarea
              rows={4}
              placeholder="Answer"
              value={faq.answer || ""}
              onChange={(e) =>
                updateFaq(
                  index,
                  "answer",
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-orange-500 outline-none"
            />

          </div>

        ))}

        {formData.faqs.length === 0 && (
          <div className="border rounded-xl py-10 text-center text-gray-400">
            No FAQs added yet.
          </div>
        )}

      </div>

    </div>
  );
}