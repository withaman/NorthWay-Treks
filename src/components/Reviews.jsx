"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const topReviews = [...reviews]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);

    useEffect(() => {
        fetch("/api/google-reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data.reviews || []))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="py-8 md:py-10 px-6 md:px-16 mx-6 rounded-2xl btn-cta">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Read reviews,
                    <span className="block font-bold">
                        travel with confidence.
                    </span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4 text-gray-600">
                    <span className="font-medium">
                        Google Reviews
                    </span>

                    <span className="text-green-500 font-semibold">
                        ★★★★★
                    </span>

                    <span>
                        {reviews.length
                            ? `${reviews.length} Google Reviews`
                            : "Verified travelers"}
                    </span>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 items-start">
                <div className="flex flex-row md:flex-col md:col-span-1">
                    <div className="text-5xl md:text-9xl text-gray-300 font-bold md:translate-y-[4rem]">
                        "
                    </div>

                    <h3 className="text-3xl font-semibold text-black">
                        What our travelers are saying
                    </h3>
                </div>
                <div className="md:col-span-3">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        loop={topReviews.length > 3}
                        grabCursor={true}
                        spaceBetween={24}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                        }}
                        className="py-10"
                    >
                        {loading &&
                            [1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="bg-black/10 backdrop-blur-md p-6 rounded-2xl animate-pulse"
                                >
                                    <div className="h-4 bg-white/20 rounded mb-3" />
                                    <div className="h-4 bg-white/20 rounded mb-3" />
                                    <div className="h-4 bg-white/20 rounded w-2/3" />

                                    <div className="flex mt-6 gap-2">
                                        <div className="w-10 h-10 rounded-full bg-white/20" />

                                        <div className="flex-1">
                                            <div className="h-3 bg-white/20 rounded mb-2" />
                                            <div className="h-2 bg-white/20 rounded w-1/2" />
                                        </div>
                                    </div>
                                </div>
                            ))}

                        {!loading &&
                            topReviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        key={index}
                                        className="group h-full min-h-[320px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                                    >
                                        {/* Top */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-4xl leading-none text-white/20">
                                                "
                                            </span>

                                            <div className="flex items-center gap-1 text-yellow-400">
                                                {[...Array(review.rating || 5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        fill="currentColor"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Review */}
                                        <p className="text-white/90 text-sm leading-7 line-clamp-5 min-h-[140px]">
                                            {review.text ||
                                                "Amazing experience. Highly recommended."}
                                        </p>

                                        {/* User */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={review.profile_photo_url || "/images/default-user.png"}
                                                    alt={review.author_name || "Traveler"}
                                                    width={30}
                                                    height={30}
                                                    className="rounded-full object-cover"
                                                    unoptimized
                                                />

                                                <div>
                                                    <h4 className="font-semibold text-sm text-white">
                                                        {review.author_name ||
                                                            "Verified Traveler"}
                                                    </h4>

                                                    <p className="text-xs text-gray-400">
                                                        {review.relative_time_description ||
                                                            "Google Review"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        {!loading && reviews.length === 0 && (
                            <div className="col-span-3 text-center py-12">
                                <p className="text-white">
                                    No reviews found.
                                </p>
                            </div>
                        )}
                    </Swiper>

                </div>

            </div>
            <div className="pt-5 ml-auto w-fit">
                <Link
                    href={`https://g.page/r/CeiqWVrpG_CcEBM/review`}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-x text-black bg-white hover:bg-yellow-3 00 rounded-3xl font-medium transition"
                >
                    Share your Exprerince
                </Link>
                <Link
                    href={`https://www.google.com/search?q=northway+treks&oq=north&gs_lcrp=EgZjaHJvbWUqBggAECMYJzIGCAAQIxgnMg8IARBFGDkYsQMYyQMYgAQyBggCEEUYOzIGCAMQRRg7MgoIBBAuGLEDGIAEMhAIBRAuGMcBGLEDGNEDGIAEMgoIBhAuGLEDGIAEMgcIBxAuGIAEMg0ICBAAGJIDGIAEGIoFMg0ICRAAGJIDGIAEGIoF0gEJNTQ4OGowajE1qAIIsAIB8QW5Nd2QjQCkVg&sourceid=chrome&ie=UTF-8#mpd=~6839500652186733305/customers/reviews`}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-x text-white hover:text-red-600  font-medium transition"
                >
                    Read All Reviews →
                </Link>
            </div>
        </section>

    );
}
