"use client";

import { useEffect, useState } from "react";
import BasicInfo from "./BasicInfo";
import TourDetails from "./TourDetails";
import TrekImages from "./TrekImages";
import AboutTrek from "./AboutTrek";
import WhyChoose from "./WhyChoose";
import Itinerary from "./Itinerary";
import Faqs from "./Faqs";
import SeoSection from "./SeoSection";
import Header from "./Header";

const defaultData = {
    title: "",
    slug: "",
    subtitle: "",
    category: "",

    location: "",
    state: "",
    startingPoint: "",

    price: "",
    offerPrice: "",

    duration: "",
    difficulty: "",
    altitude: "",
    distance: "",
    bestSeason: "",

    shortDescription: "",
    description: "",

    bannerImage: undefined,
    cardImage: undefined,
    gallery: [],

    whyChoose: [""],

    itinerary: [
        {
            day: 1,
            title: "",
            description: "",
        },
    ],

    faqs: [],

    seo: {
        title: "",
        description: "",
        keywords: "",
        canonical: "",
        robots: "index,follow",
        ogImage: undefined,
    },
};

export default function TrekForm({ mode, initialData }) {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(defaultData);

    useEffect(() => {
        if (initialData) {
            // merge incoming data with defaults to avoid controlled -> uncontrolled issues
            setFormData(prev => ({
                ...defaultData,
                ...initialData,
                // ensure nested seo merges safely if provided partially
                seo: {
                    ...defaultData.seo,
                    ...(initialData.seo || {})
                }
            }));
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "bannerImage" && files?.length) {
            setFormData(prev => ({
                ...prev,
                bannerImage: files[0]
            }));
            return;
        }
        if (name === "cardImage" && files?.length) {

            setFormData(prev => ({
                ...prev,
                cardImage: files[0]
            }));
            return;
        }

        if (name === "gallery" && files?.length) {
            setFormData(prev => ({
                ...prev,
                gallery: [
                    ...prev.gallery,
                    ...Array.from(files)
                ]
            }));
            return;
        }
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSeoChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "ogImage" && files?.length) {
            setFormData(prev => ({
                ...prev,
                seo: {
                    ...prev.seo,
                    ogImage: files[0]
                }
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            seo: {
                ...(prev.seo || {}),
                [name]: value || "",
            },
        }));
    };

    const removeGalleryImage = (index) => {
        setFormData(prev => ({
            ...prev,
            gallery: prev.gallery.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const url = mode === "edit"
                ? `/api/treks/${initialData._id}`
                : "/api/treks";
            const method = mode === "edit"
                ? "PUT"
                : "POST";
            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (!res.ok) {

                alert(data.message);
                return;
            }
            alert(
                mode === "edit"
                    ? "Trek updated successfully"
                    : "Trek created successfully"
            );
            console.log(data);
        }
        catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
        finally {
            setLoading(false);
        }
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <Header
                title={
                    mode === "create"
                        ? "Add Trek"
                        : "Edit Trek"
                }
                description={
                    mode === "create"
                        ? "Create a new trekking package"
                        : "Update trekking package"
                }
                buttonText={
                    mode === "create"
                        ? "Save Trek"
                        : "Update Trek"
                }
                loading={loading}
            />

            <BasicInfo
                formData={formData}
                handleChange={handleChange}
            />

            <TourDetails
                formData={formData}
                handleChange={handleChange}
            />

            <TrekImages
                formData={formData}
                handleChange={handleChange}
                removeGalleryImage={removeGalleryImage}
            />

            <AboutTrek
                formData={formData}
                handleChange={handleChange}
            />

            <WhyChoose
                formData={formData}
                setFormData={setFormData}
            />

            <Itinerary
                formData={formData}
                setFormData={setFormData}
            />

            <Faqs
                formData={formData}
                setFormData={setFormData}
            />

            <SeoSection
                formData={formData}
                handleSeoChange={handleSeoChange}
            />
        </form>
    );
}