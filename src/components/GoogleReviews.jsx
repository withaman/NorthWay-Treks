"use client";

import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center">
        Loading reviews...
      </div>
    );
  }

  if (!reviews) {
    return (
      <div className="py-10 text-center">
        No reviews found.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Google Reviews
        </h2>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-2xl font-bold">
            {reviews.rating || "N/A"}
          </span>

          <div className="text-yellow-500">
            ⭐⭐⭐⭐⭐
          </div>

          <span>
            ({reviews.user_ratings_total || 0} reviews)
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.reviews &&
          reviews.reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-xl border p-6 shadow-sm"
            >
              <h3 className="font-semibold">
                {review.author_name}
              </h3>

              <div className="my-2 text-yellow-500">
                {"⭐".repeat(review.rating)}
              </div>

              <p className="mb-3 text-sm text-gray-500">
                {review.relative_time_description}
              </p>

              <p className="text-gray-700">
                {review.text}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}