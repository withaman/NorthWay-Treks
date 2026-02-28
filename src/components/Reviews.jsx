"use client";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Aman Rawat",
        time: "1 week ago",
        image: "/users/user2.jpg",
        review:
            "Our Kedarnath trek experience was amazing. Everything was well managed from stay to food. The guides were very supportive and professional. Highly recommended!",
    },
    {
        id: 2,
        name: "Priya Sharma",
        time: "10 days ago",
        image: "/users/user2.jpg",
        review:
            "Loved the Manali trip! The itinerary was perfectly planned and we enjoyed every moment. Great communication and smooth bookings.",
    },
    {
        id: 3,
        name: "Rahul Verma",
        time: "2 weeks ago",
        image: "/users/user3.jpg",
        review:
            "Visited Spiti with Northway Treks and it was unforgettable. Clean stays, safe travel, and excellent coordination throughout the journey.",
    },
];

export default function Reviews() {
    return (
        <section className="py-16 px-6 md:px-16 mx-6 rounded-2xl btn-cta">

            {/* Top Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Read reviews,
                    <span className="block font-bold">travel with confidence.</span>
                </h2>

                <div className="flex items-center justify-center gap-2 mt-4 text-gray-600">
                    <span className="font-medium">4.8/5</span>
                    <span className="text-green-500 font-semibold">★★★★★</span>
                    <span>Based on 1200+ reviews</span>
                </div>
            </div>

            {/* Content Layout */}
            <div className="grid md:grid-cols-4 gap-8 items-start">

                {/* Left Side */}
                <div className="md:col-span-1">
                    <div className="text-9xl text-gray-300 font-bold md:translate-y-[4rem]">"</div>
                    <h3 className="text-3xl font-semibold">
                        What our travelers are saying
                    </h3>
                </div>

                {/* Reviews */}
                <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
                    {reviews.map((item) => (
                        <div
                            key={item.id}
                            className="bg-black/10 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                        >
                            <p className="text-white text-sm leading-relaxed">
                                {item.review}
                            </p>

                            {/* Stars */}
                            <div className="flex mt-4 text-green-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            {/* User */}
                            <div className="flex items-center gap-3 mt-6">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-medium text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}