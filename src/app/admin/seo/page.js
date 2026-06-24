"use client";

export default function SeoPage() {
return ( <div className="space-y-6">

  {/* Header */}
  <div>
    <h1 className="text-3xl font-bold">
      SEO Management
    </h1>

    <p className="text-gray-500 mt-1">
      Manage SEO settings for Northway Treks
    </p>
  </div>

  {/* SEO Form */}
  <div className="bg-white rounded-2xl shadow-sm p-6">

    <div className="grid md:grid-cols-2 gap-5">

      <div>
        <label className="block text-sm font-medium mb-2">
          Select Page
        </label>

        <select className="w-full border rounded-lg px-3 py-2">
          <option>Home Page</option>
          <option>About Page</option>
          <option>Contact Page</option>
          <option>Treks Page</option>
          <option>Blogs Page</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Canonical URL
        </label>

        <input
          type="text"
          placeholder="https://northwaytreks.com"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

    </div>

  </div>

  {/* Meta Information */}
  <div className="bg-white rounded-2xl shadow-sm p-6">

    <h2 className="text-lg font-semibold mb-5">
      Meta Information
    </h2>

    <div className="space-y-4">

      <div>
        <label className="block text-sm font-medium mb-2">
          Meta Title
        </label>

        <input
          type="text"
          placeholder="Best Trekking Company in Uttarakhand"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Meta Description
        </label>

        <textarea
          rows={4}
          placeholder="Write page description..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Keywords
        </label>

        <input
          type="text"
          placeholder="trekking, uttarakhand, kedarkantha, har ki dun"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

    </div>

  </div>

  {/* Open Graph */}
  <div className="bg-white rounded-2xl shadow-sm p-6">

    <h2 className="text-lg font-semibold mb-5">
      Open Graph Settings
    </h2>

    <div className="space-y-4">

      <input
        type="text"
        placeholder="OG Title"
        className="w-full border rounded-lg px-3 py-2"
      />

      <textarea
        rows={3}
        placeholder="OG Description"
        className="w-full border rounded-lg p-3"
      />

      <div className="border-2 border-dashed rounded-xl p-8 text-center">
        Upload OG Image
      </div>

    </div>

  </div>

  {/* Robots */}
  <div className="bg-white rounded-2xl shadow-sm p-6">

    <h2 className="text-lg font-semibold mb-5">
      Robots Settings
    </h2>

    <select className="w-full border rounded-lg px-3 py-2">
      <option>index, follow</option>
      <option>noindex, follow</option>
      <option>index, nofollow</option>
      <option>noindex, nofollow</option>
    </select>

  </div>

  {/* Google Preview */}
  <div className="bg-white rounded-2xl shadow-sm p-6">

    <h2 className="text-lg font-semibold mb-5">
      Google Search Preview
    </h2>

    <div className="border rounded-xl p-5 bg-gray-50">

      <h3 className="text-blue-600 text-xl hover:underline cursor-pointer">
        Northway Treks | Best Treks in Uttarakhand
      </h3>

      <p className="text-green-700 text-sm mt-1">
        https://northwaytreks.com
      </p>

      <p className="text-gray-600 mt-2">
        Explore the best trekking adventures in
        Uttarakhand including Kedarkantha Trek,
        Har Ki Dun Trek and Valley of Flowers.
      </p>

    </div>

  </div>

  {/* Save Button */}
  <div className="flex justify-end">

    <button
      className="theme-color text-white px-6 py-3 rounded-xl"
    >
      Save SEO Settings
    </button>

  </div>

</div>
);
}
