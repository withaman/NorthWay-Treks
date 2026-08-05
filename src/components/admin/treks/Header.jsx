"use client";

export default function Header({
  title,
  description,
  buttonText,
  loading = false,
  onSubmit,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {title}
        </h1>

        <p className="text-gray-500 mt-1">
          {description}
        </p>
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        disabled={loading}
        className={`theme-color text-white px-6 py-3 rounded-lg font-medium transition ${
          loading
            ? "opacity-70 cursor-not-allowed"
            : "hover:opacity-90"
        }`}
      >
        {loading ? "Please Wait..." : buttonText}
      </button>

    </div>
  );
}