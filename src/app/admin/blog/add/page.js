"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(
() => import("react-quill-new"),
{ ssr: false }
);

export default function AddBlogPage() {
const [content, setContent] = useState("");

return ( <div className="space-y-6">
        
  {/* Header */}
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">
        Create Blog
      </h1>

      <p className="text-gray-500 mt-1">
        Write and publish blog articles
      </p>
    </div>

    <div className="flex gap-3">
      <button
        className="border px-5 py-2 rounded-lg"
      >
        Save Draft
      </button>

      <button
        className="theme-color text-white px-5 py-2 rounded-lg"
      >
        Publish Blog
      </button>
    </div>
  </div>

  {/* Basic Information */}
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      Blog Information
    </h2>

    <div className="grid md:grid-cols-3 gap-4">

      <div>
        <label className="text-sm text-gray-600">
          Blog Title
        </label>

        <input
          type="text"
          placeholder="Kedarkantha Trek Complete Guide"
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">
          Category
        </label>

        <select
          className="w-full border rounded-lg px-3 py-2 mt-1"
        >
          <option>Trek Guide</option>
          <option>Travel Tips</option>
          <option>Adventure</option>
          <option>News</option>
        </select>
      </div>

    </div>
  </div>

  {/* Featured Image */}
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      Featured Image
    </h2>

    <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">
      <input
        type="file"
        className="hidden"
        id="featuredImage"
      />

      <label
        htmlFor="featuredImage"
        className="cursor-pointer"
      >
        <div className="text-4xl mb-2">
          📸
        </div>

        <p>
          Upload Featured Image
        </p>
      </label>
    </div>
  </div>

  {/* Short Description */}
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      Short Description
    </h2>

    <textarea
      rows={4}
      placeholder="Short blog summary..."
      className="w-full border rounded-lg p-3"
    />
  </div>

  {/* Blog Content */}
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      Blog Content
    </h2>

    <ReactQuill
      theme="snow"
      value={content}
      onChange={setContent}
      style={{
        height: "400px",
        marginBottom: "50px",
      }}
    />
  </div>

  {/* Tags */}
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      Tags
    </h2>

    <input
      type="text"
      placeholder="trekking, uttarakhand, kedarkantha"
      className="w-full border rounded-lg px-3 py-2"
    />
  </div>

  {/* SEO */}
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="font-semibold text-lg mb-4">
      SEO Settings
    </h2>

    <div className="space-y-4">

      <input
        type="text"
        placeholder="Meta Title"
        className="w-full border rounded-lg px-3 py-2"
      />

      <textarea
        rows={3}
        placeholder="Meta Description"
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        placeholder="Keywords"
        className="w-full border rounded-lg px-3 py-2"
      />

    </div>
  </div>

</div>

);
}
