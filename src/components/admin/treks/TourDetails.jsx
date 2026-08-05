"use client";

export default function TourDetails({
  formData,
  handleChange,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-lg font-semibold mb-6">
        Tour Details
      </h2>

      <div className="grid md:grid-cols-4 gap-5">

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price (₹)
          </label>

          <input
            type="number"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
            placeholder="8999"
            className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Offer Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Offer Price
          </label>

          <input
            type="number"
            name="offerPrice"
            value={formData.offerPrice || ""}
            onChange={handleChange}
            placeholder="7499"
            className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration
          </label>

          <input
            type="text"
            name="duration"
            value={formData.duration || ""}
            onChange={handleChange}
            placeholder="5D / 4N"
            className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Difficulty
          </label>

          <select
            name="difficulty"
            value={formData.difficulty || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option value="">Select</option>
            <option value="Easy">Easy</option>
            <option value="Easy-Moderate">Easy - Moderate</option>
            <option value="Moderate">Moderate</option>
            <option value="Moderate-Difficult">
              Moderate - Difficult
            </option>
            <option value="Difficult">Difficult</option>
          </select>
        </div>

        {/* Altitude */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Altitude
          </label>

          <input
            type="text"
            name="altitude"
            value={formData.altitude || ""}
            onChange={handleChange}
            placeholder="12,500 ft"
            className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Trek Distance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trek Distance
          </label>

          <input
            type="text"
            name="distance"
            value={formData.distance || ""}
            onChange={handleChange}
            placeholder="24 KM"
            className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Starting Point */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Starting Point
          </label>

          <input
            type="text"
            name="startingPoint"
            value={formData.startingPoint || ""}
            onChange={handleChange}
            placeholder="Dehradun"
            className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Best Season */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Best Season
          </label>

          <input
            type="text"
            name="bestSeason"
            value={formData.bestSeason || ""}
            onChange={handleChange}
            placeholder="Dec - Apr"
            className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

      </div>

    </div>
  );
}