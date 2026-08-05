"use client";

import Image from "next/image";
import { ImagePlus, Trash2 } from "lucide-react";

export default function TrekImages({
  formData,
  handleChange,
  removeGalleryImage,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-8">

      <h2 className="text-lg font-semibold">
        Trek Images
      </h2>

      {/* Banner Image */}

      <div>
        <label className="block text-sm font-medium mb-3">
          Banner Image
        </label>

        <label
          htmlFor="bannerImage"
          className="border-2 border-dashed border-gray-300 rounded-xl h-56 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition"
        >
          {formData.bannerImage ? (
            <Image
              src={URL.createObjectURL(formData.bannerImage)}
              alt="Banner"
              width={900}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <>
              <ImagePlus className="w-10 h-10 text-gray-400 mb-2" />
              <p className="font-medium">
                Upload Banner Image
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG, WEBP
              </p>
            </>
          )}
        </label>

        <input
          id="bannerImage"
          name="bannerImage"
          type="file"
          accept="image/*"
          hidden
          onChange={handleChange}
        />
      </div>

      {/* Card Image */}

      <div>
        <label className="block text-sm font-medium mb-3">
          Trek Card Image
        </label>

        <label
          htmlFor="cardImage"
          className="border-2 border-dashed border-gray-300 rounded-xl h-56 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition"
        >
          {formData.cardImage ? (
            <Image
              src={URL.createObjectURL(formData.cardImage)}
              alt="Card"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <>
              <ImagePlus className="w-10 h-10 text-gray-400 mb-2" />
              <p className="font-medium">
                Upload Card Image
              </p>
            </>
          )}
        </label>

        <input
          id="cardImage"
          name="cardImage"
          type="file"
          accept="image/*"
          hidden
          onChange={handleChange}
        />
      </div>

      {/* Gallery */}

      <div>

        <div className="flex justify-between items-center mb-4">

          <label className="font-medium">
            Gallery Images
          </label>

          <label
            htmlFor="galleryImages"
            className="theme-color text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            + Add Images
          </label>

        </div>

        <input
  id="galleryImages"
  name="gallery"
  hidden
  multiple
  type="file"
  accept="image/*"
  onChange={handleChange}
/>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {formData.gallery.map((image, index) => (

            <div
              key={index}
              className="relative rounded-xl overflow-hidden border"
            >
              <Image
                src={URL.createObjectURL(image)}
                alt=""
                width={300}
                height={300}
                className="w-full h-40 object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  removeGalleryImage(index)
                }
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              >
                <Trash2 size={16} />
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}