"use client";

import { Plus, Trash2 } from "lucide-react";

export default function Itinerary({
  formData,
  setFormData,
}) {

  const addDay = () => {
    setFormData((prev) => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        {
          day: prev.itinerary.length + 1,
          title: "",
          description: "",
        },
      ],
    }));
  };

  const updateDay = (index, field, value) => {
    const updated = [...formData.itinerary];

    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      itinerary: updated,
    }));
  };

  const removeDay = (index) => {
    const updated = formData.itinerary
      .filter((_, i) => i !== index)
      .map((item, i) => ({
        ...item,
        day: i + 1,
      }));

    setFormData((prev) => ({
      ...prev,
      itinerary: updated,
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-lg font-semibold">
          Trek Itinerary
        </h2>

        <button
          type="button"
          onClick={addDay}
          className="theme-color text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Day
        </button>

      </div>

      <div className="space-y-5">

        {formData.itinerary.map((item, index) => (

          <div
            key={index}
            className="border rounded-xl p-5"
          >

            <div className="flex justify-between items-center mb-4">

              <h3 className="font-semibold">
                Day {item.day}
              </h3>

              <button
                type="button"
                onClick={() => removeDay(index)}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
              >
                <Trash2 size={18} />
              </button>

            </div>

            <input
              type="text"
              value={item.title || ""}
              onChange={(e) =>
                updateDay(
                  index,
                  "title",
                  e.target.value
                )
              }
              placeholder="Day Title"
              className="w-full border rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <textarea
              rows={4}
              value={item.description || ""}
              onChange={(e) =>
                updateDay(
                  index,
                  "description",
                  e.target.value
                )
              }
              placeholder="Write itinerary..."
              className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-orange-500 outline-none"
            />

          </div>

        ))}

        {formData.itinerary.length === 0 && (
          <div className="text-center text-gray-400 py-10 border rounded-xl">
            No itinerary added yet.
          </div>
        )}

      </div>

    </div>
  );
}