import mongoose from "mongoose";

const ItinerarySchema = new mongoose.Schema({
  day: Number,
  title: String,
  description: String,
});

const FAQSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const TrekSchema = new mongoose.Schema(
  {
    // Basic
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    subtitle: String,

    category: String,

    // Location

    location: String,
    state: String,
    startingPoint: String,

    // Pricing

    price: Number,
    offerPrice: Number,

    // Trek Details

    duration: String,
    difficulty: String,
    altitude: String,
    distance: String,
    bestSeason: String,

    // Description

    shortDescription: String,
    description: String,

    // Images

    bannerImage: String,
    cardImage: String,
    gallery: [String],

    // Dynamic

    whyChoose: [String],

    itinerary: [ItinerarySchema],

    faqs: [FAQSchema],

    // SEO

    seo: {
      title: String,
      description: String,
      keywords: String,
      canonical: String,
      robots: String,
      ogImage: String,
    },

    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Trek ||
mongoose.model("Trek", TrekSchema);