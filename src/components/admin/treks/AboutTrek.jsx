"use client";

export default function AboutTrek({
  formData,
  handleChange,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-lg font-semibold mb-6">
        About Trek
      </h2>

      <div className="space-y-5">

        {/* Short Description */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short Description
          </label>

          <textarea
            rows={3}
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Write a short description for trek cards..."
            className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Full Description */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Description
          </label>

          <textarea
            rows={10}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write complete trek details..."
            className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

      </div>

    </div>
  );
}