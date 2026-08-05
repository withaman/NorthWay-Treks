"use client";

import { Plus, Trash2 } from "lucide-react";

export default function WhyChoose({
  formData,
  setFormData,
}) {

  const addPoint = () => {
    setFormData((prev) => ({
      ...prev,
      whyChoose: [...prev.whyChoose, ""],
    }));
  };

  const updatePoint = (index, value) => {
    const updated = [...formData.whyChoose];
    updated[index] = value;

    setFormData((prev) => ({
      ...prev,
      whyChoose: updated,
    }));
  };

  const removePoint = (index) => {
    const updated = formData.whyChoose.filter(
      (_, i) => i !== index
    );

    setFormData((prev) => ({
      ...prev,
      whyChoose: updated,
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-lg font-semibold">
          Why Choose This Trek
        </h2>

        <button
          type="button"
          onClick={addPoint}
          className="theme-color text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Point
        </button>

      </div>

      <div className="space-y-4">

        {formData.whyChoose.map((point, index) => (

          <div
            key={index}
            className="flex gap-3 items-start"
          >

            <textarea
              rows={2}
              value={point}
              onChange={(e) =>
                updatePoint(index, e.target.value)
              }
              placeholder={`Point ${index + 1}`}
              className="flex-1 border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <button
              type="button"
              onClick={() => removePoint(index)}
              className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
            >
              <Trash2 size={18} />
            </button>

          </div>

        ))}

        {formData.whyChoose.length === 0 && (
          <p className="text-gray-400 text-sm">
            No points added yet.
          </p>
        )}

      </div>

    </div>
  );
}