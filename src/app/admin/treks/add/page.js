"use client";

export default function AddTrekPage() {
  return (
    <div className="space-y-6">

{/* Header */}

  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-3xl font-bold">
        Add Trek
      </h1>
      <p className="text-gray-500">
        Create a new trekking package
      </p>
    </div>

<button
  type="submit"
  className="theme-color text-white px-6 py-2 rounded-lg font-medium"
>
  Save Trek
</button>

  </div>

{/* Basic Information */}

  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      Basic Information
    </h2>

<div className="grid md:grid-cols-3 gap-4">

  <div>
    <label className="text-sm text-gray-600">
      Trek Title
    </label>

    <input
      type="text"
      className="w-full border rounded-lg px-3 py-2 mt-1"
      placeholder="Char Dham Yatra"
    />
  </div>

  <div>
    <label className="text-sm text-gray-600">
      Slug
    </label>

    <input
      type="text"
      className="w-full border rounded-lg px-3 py-2 mt-1"
      placeholder="char-dham-yatra"
    />
  </div>

  <div>
    <label className="text-sm text-gray-600">
      Subtitle
    </label>

    <input
      type="text"
      className="w-full border rounded-lg px-3 py-2 mt-1"
      placeholder="Sacred Himalayan Pilgrimage"
    />
  </div>

</div>

  </div>

{/* Tour Details */}

  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      Tour Details
    </h2>

<div className="grid md:grid-cols-4 gap-4">

  <input
    className="border rounded-lg px-3 py-2"
    placeholder="Price"
  />

  <input
    className="border rounded-lg px-3 py-2"
    placeholder="Duration"
  />

  <input
    className="border rounded-lg px-3 py-2"
    placeholder="Altitude"
  />

  <input
    className="border rounded-lg px-3 py-2"
    placeholder="Starting Point"
  />

</div>

  </div>

  {/* Images Section */}

<div className="bg-white rounded-2xl shadow-sm p-6">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold">
      Trek Images
    </h2>
  </div>

{/* Banner Image */}

  <div className="mb-6">
    <label className="block text-sm text-gray-600 mb-2">
      Banner Image
    </label>

<div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-400 transition">
  <input
    type="file"
    accept="image/*"
    className="hidden"
    id="bannerImage"
  />

  <label
    htmlFor="bannerImage"
    className="cursor-pointer"
  >
    <div className="text-4xl mb-2">📸</div>

    <p className="font-medium">
      Upload Banner Image
    </p>

    <p className="text-sm text-gray-500 mt-1">
      PNG, JPG, WEBP
    </p>
  </label>
</div>
  </div>

{/* Trek Card Image */}

  <div className="mb-6">
    <label className="block text-sm text-gray-600 mb-2">
      Trek Card Image
    </label>
<div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-400 transition">
  <input
    type="file"
    accept="image/*"
    className="hidden"
    id="cardImage"
  />

  <label
    htmlFor="cardImage"
    className="cursor-pointer"
  >
    <div className="text-4xl mb-2">🖼️</div>

    <p className="font-medium">
      Upload Card Image
    </p>
  </label>
</div>

  </div>

{/* Gallery Images */}

  <div>
    <div className="flex items-center justify-between mb-3">
      <label className="text-sm text-gray-600">
        Gallery Images
      </label>

  <button
    type="button"
    className="theme-color text-white px-4 py-2 rounded-lg text-sm"
  >
    + Add Images
  </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

  <div className="border-2 border-dashed border-gray-300 rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer hover:border-orange-400">
    <span className="text-3xl">+</span>
    <span className="text-sm text-gray-500">
      Upload
    </span>
  </div>

  {/* Preview Image Example */}
  <div className="relative rounded-xl overflow-hidden border">
    <img
      src="/placeholder.jpg"
      alt=""
      className="w-full h-40 object-cover"
    />

    <button
      type="button"
      className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 rounded-full"
    >
      ×
    </button>
  </div>

</div>

  </div>
</div>


{/* About Trek */}

  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      About Trek
    </h2>


<textarea
  rows={5}
  className="w-full border rounded-lg p-3"
  placeholder="Description..."
/>

  </div>

{/* Why Choose */}

  <div className="bg-white rounded-2xl shadow-sm p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold text-lg">
        Why Choose
      </h2>

  <button
    type="button"
    className="theme-color text-white px-4 py-2 rounded-lg"
  >
    + Add Point
  </button>
</div>
  </div>

{/* Itinerary */}

  <div className="bg-white rounded-2xl shadow-sm p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold text-lg">
        Itinerary
      </h2>


  <button
    type="button"
    className="theme-color text-white px-4 py-2 rounded-lg"
  >
    + Add Day
  </button>
</div>

<div className="border rounded-xl p-4">
  <input
    className="w-full border rounded-lg px-3 py-2 mb-3"
    placeholder="Day 1 Title"
  />

  <textarea
    rows={3}
    className="w-full border rounded-lg p-3"
    placeholder="Description"
  />
</div>

  </div>

{/* FAQs */}

  <div className="bg-white rounded-2xl shadow-sm p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold text-lg">
        FAQs
      </h2>

  <button
    type="button"
    className="theme-color text-white px-4 py-2 rounded-lg"
  >
    + Add FAQ
  </button>
</div>

  </div>

</div>
  );
}