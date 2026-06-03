"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchReviews = async () => {
        try {
            const res = await fetch("/api/reviews");

            const text = await res.text(); // STEP 1: read raw response

            console.log("RAW RESPONSE:", text);

            if (!text) {
                throw new Error("Empty response from API");
            }

            let data;
            try {
                data = JSON.parse(text); // STEP 2: safe parse
            } catch (err) {
                throw new Error("Invalid JSON: " + text);
            }

            setReviews(data.reviews || []);
        } catch (error) {
            console.error("Fetch error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchReviews();
}, []);
    return (
        <section className="py-8 md:py-16 px-6 md:px-16 mx-6 rounded-2xl btn-cta">
            {/* Top Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Read reviews,
                    <span className="block font-bold">
                        travel with confidence.
                    </span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4 text-gray-600">
                    <span className="font-medium">Google Reviews</span>
                    <span className="text-green-500 font-semibold">
                        ★★★★★
                    </span>
                    <span>
                        {reviews.length > 0
                            ? `${reviews.length}+ reviews`
                            : "Verified travelers"}
                    </span>
                </div>
            </div>

            {/* Content Layout */}
            <div className="grid md:grid-cols-4 gap-8 items-start">
                {/* Left Side */}
                <div className="flex flex-row md:flex-col md:col-span-1">
                    <div className="text-5xl md:text-9xl text-gray-300 font-bold md:translate-y-[4rem]">
                        "
                    </div>

                    <h3 className="text-3xl font-semibold text-black">
                        What our travelers are saying
                    </h3>
                </div>

                {/* Reviews */}
                <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
                    {loading && (
                        <>
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="bg-black/10 backdrop-blur-md p-6 rounded-2xl animate-pulse"
                                >
                                    <div className="h-4 bg-white/20 rounded mb-3"></div>
                                    <div className="h-4 bg-white/20 rounded mb-3"></div>
                                    <div className="h-4 bg-white/20 rounded w-2/3"></div>

                                    <div className="flex mt-6 gap-2">
                                        <div className="w-10 h-10 rounded-full bg-white/20"></div>

                                        <div className="flex-1">
                                            <div className="h-3 bg-white/20 rounded mb-2"></div>
                                            <div className="h-2 bg-white/20 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {!loading &&
                        reviews.map((item, index) => (
                            <div
                                key={item.reviewId || index}
                                className="bg-black/10 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                            >
                                <p className="text-white text-sm leading-relaxed">
                                    {item.comment ||
                                        "Amazing experience. Highly recommended."}
                                </p>

                                {/* Stars */}
                                <div className="flex mt-4 text-green-500">
                                    {[
                                        ...Array(
                                            Number(item.starRating) || 5
                                        ),
                                    ].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>

                                {/* User */}
                                <div className="flex items-center gap-3 mt-6">
                                    <Image
                                        src={
                                            item.reviewer
                                                ?.profilePhotoUrl ||
                                            "/users/user2.jpg"
                                        }
                                        alt={
                                            item.reviewer?.displayName ||
                                            "Traveler"
                                        }
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                        unoptimized
                                    />

                                    <div>
                                        <h4 className="font-medium text-sm">
                                            {item.reviewer?.displayName ||
                                                "Verified Traveler"}
                                        </h4>

                                        <p className="text-xs text-gray-500">
                                            {item.createTime
                                                ? new Date(
                                                      item.createTime
                                                  ).toLocaleDateString(
                                                      "en-IN",
                                                      {
                                                          day: "numeric",
                                                          month: "short",
                                                          year: "numeric",
                                                      }
                                                  )
                                                : ""}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    {!loading && reviews.length === 0 && (
                        <div className="col-span-3 text-center py-12">
                            <p className="text-white">
                                No reviews found.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}