import hero from "./hero.jpg";
import footer from "./footer.jpg";
import servicebg from "./servicesbackground.jpg";
import contactus from "./contact.jpg";
import t1 from "./travelpoint.jpg";
import t2 from "./travelpoint1.jpg";
import support from "./support.jpg";
import guide from "./guide.jpg";
import compass from "./compass.jpg";
import about from "./about.jpg";
import about1 from "./about1.jpg";

import kedarkantha from "./kedarkantha-m.jpg";
import k1 from "./k-1.jpg";
import k2 from "./k-2.jpg";
import k3 from "./k-3.jpg";
import tungnath from "./tungnath.jpg";
import tungnath1 from "./tungnath-1.jpeg";
import tungnath2 from "./tungnath-2.jpg";
import tungnath3 from "./tungnath-3.jpg";
import tungnath4 from "./tungnath-4.jpg";
import tungnath5 from "./tungnath-5.jpeg";
import kuaripass from "./kuaripass.jpeg";
import kpass1 from "./kpass-1.jpeg";
import kpass2 from "./kpass-2.jpeg";
import kpass3 from "./kpass-3.jpeg";
import kpass4 from "./kpass-4.jpeg";
import dayarabugyal from "./dayarabugyal.jpeg";
import dayara1 from "./dayara-1.jpeg";
import dayara2 from "./dayara-2.jpeg";
import dayara3 from "./dayara-3.jpeg";
import dayara4 from "./dayara-4.jpg";
import pangarchulla from "./pangarchulla.jpg";
import pangar1 from "./pangar-1.jpg";
import pangar2 from "./pangar-2.jpeg";
import pangar3 from "./pangar-3.jpeg";
import pangar4 from "./pangar-4.jpeg";
import nagtibba from "./nagtibba.jpg";
import nag1 from "./nag-1.jpg";
import nag2 from "./nag-2.jpeg";
import nag3 from "./nag-3.jpeg";
import nag4 from "./nag-4.jpeg";
import binoghill from "./binoghill.jpg";
import binog1 from "./binog-1.jpg";
import binog2 from "./binog-2.jpeg";
import binog3 from "./binog-3.jpeg";
import binog4 from "./binog-4.jpeg";
import chardham from "./chardham.jpg";
import kedarnath from "./kedarnath.jpg";
import badrinath from "./Badrinath.jpeg";
import yamnotri from "./yamnotri.jpeg";
import gangotri from "./gangotri.jpeg";
import harkidun from "./harkidun.jpeg";
import hkd1 from "./hkd-1.jpeg";
import hkd2 from "./hkd-2.jpg";
import hkd3 from "./hkd-3.jpg";
import hkd4 from "./hkd-4.jpg";
import hkd5 from "./hkd-5.jpeg";

export const image = {
  hero,
  footer,
  servicebg,
  contactus,
  kedarkantha,
  t1,
  t2,
  support,
  guide,
  compass,
  about,
  about1,
};

export const destinations = [
  {
    id: "char-dham-yatra",
    title: "Char Dham Yatra",
    subtitle: "Sacred Himalayan Pilgrimage",
    price: "₹24,999",
    rating: "4.8 (12k)",
    location: "Yamunotri, Gangotri, Kedarnath, Badrinath - Uttarakhand",
    duration: "10 Days / 9 Nights",
    altitude: "11,755 ft (Kedarnath)",
    difficulty: "Moderate",
    startingPoint: "Haridwar / Dehradun",

    bestSeason: ["May", "June", "September", "October"],
    trekType: ["Religious Tour", "Spiritual Journey", "Himalayan Yatra"],

    image: [chardham, badrinath, kedarnath, yamnotri, gangotri],

    intro: `Char Dham Yatra is one of the most sacred pilgrimages in India, covering Yamunotri, Gangotri, Kedarnath, and Badrinath in Uttarakhand. Nestled in the Garhwal Himalayas, this spiritual journey attracts thousands of devotees seeking blessings and divine peace.`,

    about: {
      location: "Garhwal Himalayas, Uttarakhand",
      altitude: "11,755 ft (Kedarnath - Highest Dham)",
      duration: "10 Days / 9 Nights",
      difficulty: "Moderate",
      bestSeason: "May to June & September to October",
      startingPoint: "Haridwar / Dehradun",
      description:
        "The Char Dham circuit includes Yamunotri (source of River Yamuna), Gangotri (origin of River Ganga), Kedarnath (Jyotirlinga of Lord Shiva), and Badrinath (temple of Lord Vishnu). The journey combines devotion, scenic Himalayan drives, and moderate trekking.",
    },

    whyChoose: [
      "One of India's holiest pilgrimages",
      "Visit all four sacred shrines in one journey",
      "Beautiful Himalayan landscapes",
      "Spiritual and cultural experience",
      "Comfortable stays & guided assistance",
      "Perfect blend of devotion & adventure",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Haridwar → Barkot",
        description:
          "Drive via Mussoorie and Kempty Falls. Reach Barkot for overnight stay.",
      },
      {
        day: "Day 2",
        title: "Barkot → Yamunotri → Barkot",
        altitude: "10,804 ft",
        description:
          "Drive to Janki Chatti and trek 6 km to Yamunotri Temple. Return to Barkot.",
      },
      {
        day: "Day 3",
        title: "Barkot → Uttarkashi",
        description:
          "Scenic drive to Uttarkashi. Visit Kashi Vishwanath Temple. Overnight stay.",
      },
      {
        day: "Day 4",
        title: "Uttarkashi → Gangotri → Uttarkashi",
        altitude: "10,200 ft",
        description:
          "Drive to Gangotri Temple, offer prayers, and return to Uttarkashi.",
      },
      {
        day: "Day 5",
        title: "Uttarkashi → Guptkashi",
        description:
          "Long scenic drive along rivers and mountains. Overnight stay at Guptkashi.",
      },
      {
        day: "Day 6",
        title: "Guptkashi → Kedarnath",
        altitude: "11,755 ft",
        description:
          "Drive to Sonprayag and trek 16 km to Kedarnath Temple (or helicopter option available).",
      },
      {
        day: "Day 7",
        title: "Kedarnath → Guptkashi",
        description:
          "Morning darshan at Kedarnath Temple. Trek back and drive to Guptkashi.",
      },
      {
        day: "Day 8",
        title: "Guptkashi → Badrinath",
        altitude: "10,279 ft",
        description:
          "Drive to Badrinath via Joshimath. Evening aarti at Badrinath Temple.",
      },
      {
        day: "Day 9",
        title: "Badrinath → Rudraprayag",
        description:
          "Visit Mana Village (last Indian village). Drive to Rudraprayag for overnight stay.",
      },
      {
        day: "Day 10",
        title: "Rudraprayag → Haridwar",
        description: "Return journey to Haridwar with divine memories.",
      },
    ],

    fitness: {
      level: "Moderate",
      suitableFor: [
        "Families",
        "Senior citizens (with medical fitness)",
        "Devotees",
        "Spiritual travelers",
      ],
      recommended: [
        "Basic walking stamina",
        "Medical check-up before travel",
        "Comfortable with long road journeys",
      ],
    },

    packingList: [
      "Warm clothes (even in summer)",
      "Comfortable walking shoes",
      "Raincoat / Poncho",
      "Personal medicines",
      "ID proof (mandatory)",
      "Sunscreen & sunglasses",
    ],

    trekfaqs: [
      {
        question: "When does Char Dham Yatra open?",
        answer:
          "Char Dham usually opens in April/May (Akshaya Tritiya) and closes around October/November (Diwali).",
      },
      {
        question: "Is the trek difficult?",
        answer:
          "The journey involves moderate trekking, especially to Yamunotri and Kedarnath.",
      },
      {
        question: "Is helicopter service available?",
        answer:
          "Yes, helicopter services are available for Kedarnath from Phata, Guptkashi, and Dehradun.",
      },
      {
        question: "Are senior citizens allowed?",
        answer:
          "Yes, but medical fitness is recommended due to high altitude conditions.",
      },
      {
        question: "Do we need registration?",
        answer: "Yes, biometric registration is mandatory for Char Dham Yatra.",
      },
      {
        question: "Is accommodation included?",
        answer: "Yes, accommodation and meals are included as per package.",
      },
    ],
  },
  {
    id: "kedarkantha-trek",
    title: "Kedarkantha Trek",
    subtitle: "Most Popular Winter Trek",
    price: "₹6,499",
    rating: "4.9 (18k)",
    location: "Sankri, Uttarkashi, Uttarakhand",
    duration: "6 Days / 5 Nights",
    altitude: "12,500 ft",
    difficulty: "Easy to Moderate",
    startingPoint: "Dehradun",

    bestSeason: ["December", "January", "February", "March"],
    trekType: ["Winter Trek", "Beginner Trek"],

    image: [kedarkantha, k1, k2, k3],

    intro: `Kedarkantha Trek is one of the most popular winter treks in India, located in the Govind Wildlife Sanctuary of Uttarkashi district, Uttarakhand. Famous for its snow-covered trails, pine forests, and breathtaking summit views, this trek is ideal for beginners as well as experienced trekkers.`,

    about: {
      location: "Sankri, Uttarkashi, Uttarakhand",
      altitude: "12,500 ft (3,810 meters)",
      duration: "6 Days / 5 Nights",
      difficulty: "Easy to Moderate",
      bestSeason: "December to March",
      startingPoint: "Dehradun",
      description:
        "Kedarkantha is renowned for its well-defined trail and stunning 360° summit views of Swargarohini, Bandarpoonch, Black Peak, and Ranglana ranges. The trek offers a perfect mix of adventure, snow trekking, and scenic beauty.",
    },

    whyChoose: [
      "One of India’s best winter treks",
      "Perfect for first-time trekkers",
      "Heavy snowfall and white landscapes",
      "Dense pine & oak forests",
      "Iconic campsites like Juda Ka Talab",
      "Panoramic Himalayan summit views",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun → Sankri",
        description:
          "Drive via Mussoorie, Purola, and Mori. Reach Sankri by evening. Overnight stay at guesthouse.",
      },
      {
        day: "Day 2",
        title: "Sankri → Juda Ka Talab",
        altitude: "9,100 ft",
        description:
          "Trek through dense pine forests and snow trails. Camp near the frozen Juda Ka Talab lake.",
      },
      {
        day: "Day 3",
        title: "Juda Ka Talab → Kedarkantha Base Camp",
        altitude: "11,250 ft",
        description:
          "Gradual ascent through meadows with stunning mountain views. Overnight at base camp.",
      },
      {
        day: "Day 4",
        title: "Summit Day → Base Camp",
        altitude: "12,500 ft",
        description:
          "Early morning summit push with 360° Himalayan views. Descend back to base camp.",
      },
      {
        day: "Day 5",
        title: "Base Camp → Sankri",
        description:
          "Descend through forest trails. Celebration evening at Sankri.",
      },
      {
        day: "Day 6",
        title: "Sankri → Dehradun",
        description: "Return drive to Dehradun with unforgettable memories.",
      },
    ],

    fitness: {
      level: "Easy to Moderate",
      suitableFor: [
        "Beginners",
        "College groups",
        "Solo travelers",
        "Corporate teams",
      ],
      recommended: [
        "Jog 3–4 km in 30 minutes",
        "Basic stamina & leg strength",
        "No prior trekking experience required",
      ],
    },

    packingList: [
      "Winter jacket & thermals",
      "Waterproof trekking shoes",
      "Gloves & woolen cap",
      "Sunglasses & sunscreen",
      "Trekking pole",
      "Personal medicines",
    ],

    trekfaqs: [
      {
        question: "Is Kedarkantha Trek suitable for beginners?",
        answer:
          "Yes, Kedarkantha is one of the best beginner-friendly Himalayan winter treks.",
      },
      {
        question: "How cold does it get during the trek?",
        answer: "Temperatures can drop to -5°C to -10°C during winter nights.",
      },
      {
        question: "Is snowfall guaranteed on this trek?",
        answer: "Yes, from December to February, snowfall is very common.",
      },
      {
        question: "Do we need prior trekking experience?",
        answer:
          "No prior trekking experience is required for Kedarkantha Trek.",
      },
      {
        question: "Which mobile network works in Sankri?",
        answer: "BSNL works intermittently; other networks are unreliable.",
      },
      {
        question: "Are permits required?",
        answer: "Forest permits are arranged by the trek operator.",
      },
    ],
  },
  {
    id: "tungnath-chandrashila-trek",
    title: "Tungnath–Chandrashila Trek",
    subtitle: "Highest Shiva Temple Trek",
    price: "₹5,999",
    rating: "4.8 (15k)",
    location: "Chopta, Rudraprayag, Uttarakhand",
    duration: "3 Days / 2 Nights",
    altitude: "13,000 ft",
    difficulty: "Easy",
    startingPoint: "Rishikesh",

    bestSeason: ["March", "April", "May", "October", "November"],
    trekType: ["Spiritual Trek", "Weekend Trek"],

    image: [tungnath, tungnath1, tungnath2, tungnath3, tungnath4, tungnath5],

    intro: `The Tungnath–Chandrashila Trek is one of the most scenic and spiritually enriching treks in Uttarakhand. Home to Tungnath Temple, the highest Shiva temple in the world, this trek offers breathtaking Himalayan views combined with deep religious significance. Ideal for beginners and weekend travelers, the trek starts from Chopta—also known as the Mini Switzerland of India.`,

    about: {
      location: "Chopta, Rudraprayag, Uttarakhand",
      altitude: "13,000 ft (Chandrashila Summit)",
      duration: "3 Days / 2 Nights",
      difficulty: "Easy",
      bestSeason: "March to May & October to November",
      startingPoint: "Rishikesh",
      description:
        "The trek passes through lush meadows, rhododendron forests, and snow-covered paths in early summer. Chandrashila summit offers panoramic views of Nanda Devi, Trishul, Chaukhamba, and Kedar Peak ranges.",
    },

    whyChoose: [
      "Visit the highest Shiva temple in the world",
      "Perfect beginner-friendly Himalayan trek",
      "Panoramic views of major Himalayan peaks",
      "Short and ideal weekend trek",
      "Spiritual and scenic experience combined",
      "Accessible almost throughout the year",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh → Chopta",
        description:
          "Drive through Devprayag, Rudraprayag, and Ukhimath. Reach Chopta by evening and enjoy sunset views.",
      },
      {
        day: "Day 2",
        title: "Chopta → Tungnath → Chandrashila → Chopta",
        altitude: "13,000 ft",
        description:
          "Early morning trek to Tungnath Temple followed by a steep climb to Chandrashila summit. Enjoy 360° Himalayan views and descend back to Chopta.",
      },
      {
        day: "Day 3",
        title: "Chopta → Rishikesh",
        description:
          "Return journey with scenic mountain views and unforgettable memories.",
      },
    ],

    fitness: {
      level: "Easy",
      suitableFor: [
        "Beginners",
        "Spiritual travelers",
        "Weekend trekkers",
        "Solo travelers",
      ],
      recommended: [
        "Ability to walk 4–5 km comfortably",
        "Basic stamina",
        "No prior trekking experience required",
      ],
    },

    packingList: [
      "Warm jacket & thermals",
      "Good grip trekking shoes",
      "Rain jacket / poncho",
      "Woolen cap & gloves",
      "Water bottle",
      "Personal medicines",
    ],

    trekfaqs: [
      {
        question: "Is Tungnath–Chandrashila Trek suitable for beginners?",
        answer:
          "Yes, it is one of the easiest Himalayan treks and is perfect for beginners and first-time trekkers.",
      },
      {
        question: "What is the best time to do this trek?",
        answer:
          "March to May and October to November are the best months. Winter months may have heavy snow.",
      },
      {
        question: "How long is the trek?",
        answer:
          "The trek from Chopta to Chandrashila summit is approximately 5 km round trip.",
      },
      {
        question: "Is Tungnath Temple open throughout the year?",
        answer:
          "Tungnath Temple usually closes during peak winter due to heavy snowfall.",
      },
      {
        question: "Do we need permits for this trek?",
        answer: "No special permits are required for Indian nationals.",
      },
      {
        question: "What mobile network works in Chopta?",
        answer:
          "Network connectivity is very limited. BSNL works intermittently.",
      },
    ],
  },
  {
    id: "har-ki-dun-trek",
    title: "Har Ki Dun Trek",
    subtitle: "Valley of Gods Trek",
    price: "₹9,499",
    rating: "4.8 (12k)",
    location: "Sankri, Uttarkashi, Uttarakhand",
    duration: "7–9 Days",
    altitude: "12,000 ft",
    difficulty: "Easy to Moderate",
    startingPoint: "Dehradun",

    bestSeason: ["April", "May", "June", "September", "October", "November"],
    trekType: ["Valley Trek", "Beginner Friendly", "Summer Trek"],

    image: [harkidun, hkd1, hkd2, hkd3, hkd4, hkd5],

    intro: `Har Ki Dun Trek is a breathtaking river valley trek located in the Govind Wildlife Sanctuary of Uttarkashi, Uttarakhand. Surrounded by snow-clad peaks, alpine meadows, ancient villages, and lush forests, this trek offers a perfect blend of nature, culture, and adventure.`,

    about: {
      location: "Sankri, Uttarkashi, Uttarakhand",
      altitude: "12,000 ft (3,658 meters)",
      duration: "7–9 Days",
      difficulty: "Easy to Moderate",
      bestSeason: "April to June & September to November",
      startingPoint: "Dehradun",
      description:
        "Har Ki Dun, also known as the ‘Valley of Gods’, offers stunning views of Swargarohini peaks and the beautiful Tons River flowing alongside the trail. The trek passes through ancient Himalayan villages like Osla and Seema, giving trekkers a glimpse into traditional mountain life.",
    },

    whyChoose: [
      "Scenic valley surrounded by snow peaks",
      "Rich Himalayan culture & ancient villages",
      "Beautiful riverside campsites",
      "Lush green meadows & pine forests",
      "Perfect for beginners & nature lovers",
      "Stunning Swargarohini peak views",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun → Sankri",
        description:
          "Drive through Mussoorie, Purola, and Mori along the Tons River. Reach Sankri by evening. Overnight stay at guesthouse.",
      },
      {
        day: "Day 2",
        title: "Sankri → Taluka → Seema/Osla",
        altitude: "8,600 ft",
        description:
          "Drive to Taluka and begin trek along the river trail. Pass through forests and small villages. Overnight stay at Seema or Osla campsite.",
      },
      {
        day: "Day 3",
        title: "Seema/Osla → Har Ki Dun",
        altitude: "11,700 ft",
        description:
          "Gradual ascent through alpine meadows and pine forests. Reach the beautiful Har Ki Dun valley surrounded by snow peaks.",
      },
      {
        day: "Day 4",
        title: "Exploration Day at Har Ki Dun",
        altitude: "12,000 ft",
        description:
          "Explore the valley, enjoy panoramic views of Swargarohini peaks, and optional short hikes nearby.",
      },
      {
        day: "Day 5",
        title: "Har Ki Dun → Seema/Osla",
        description:
          "Descend back through scenic valley trails to Seema or Osla campsite.",
      },
      {
        day: "Day 6",
        title: "Seema/Osla → Taluka → Sankri",
        description:
          "Trek back to Taluka and drive to Sankri. Relax and celebrate completion of trek.",
      },
      {
        day: "Day 7",
        title: "Sankri → Dehradun",
        description:
          "Return drive to Dehradun with unforgettable Himalayan memories.",
      },
    ],

    fitness: {
      level: "Easy to Moderate",
      suitableFor: [
        "Beginners",
        "Nature lovers",
        "Family groups",
        "Photographers",
      ],
      recommended: [
        "Jog 4–5 km in 30 minutes",
        "Basic stamina & endurance",
        "No technical trekking skills required",
      ],
    },

    packingList: [
      "Trekking shoes with good grip",
      "Light down jacket & fleece",
      "Rain jacket/poncho",
      "Trekking pole",
      "Sunglasses & sunscreen",
      "Personal medicines",
    ],

    trekfaqs: [
      {
        question: "Is Har Ki Dun Trek suitable for beginners?",
        answer:
          "Yes, Har Ki Dun is considered a beginner-friendly Himalayan trek with gradual ascents.",
      },
      {
        question: "What is the best time to visit Har Ki Dun?",
        answer:
          "The best time is April to June for greenery and September to November for clear mountain views.",
      },
      {
        question: "How difficult is the Har Ki Dun Trek?",
        answer:
          "It is rated Easy to Moderate, suitable for first-time trekkers with basic fitness.",
      },
      {
        question: "Is snowfall available on this trek?",
        answer:
          "Snowfall is possible in early spring and late autumn, but it is primarily a summer and post-monsoon trek.",
      },
      {
        question: "Which mobile network works in Sankri?",
        answer:
          "BSNL works intermittently; other networks have limited connectivity.",
      },
      {
        question: "Are permits required for Har Ki Dun?",
        answer:
          "Yes, forest permits are required and usually arranged by the trek operator.",
      },
    ],
  },
  {
    id: "kuari-pass-trek",
    title: "Kuari Pass Trek",
    subtitle: "Lord Curzon Trail Trek",
    price: "₹8,499",
    rating: "4.8 (10k)",
    location: "Joshimath, Chamoli, Uttarakhand",
    duration: "6–9 Days",
    altitude: "12,516 ft",
    difficulty: "Easy to Moderate",
    startingPoint: "Rishikesh",

    bestSeason: [
      "March",
      "April",
      "May",
      "June",
      "September",
      "October",
      "December",
    ],
    trekType: ["Snow Trek", "Beginner Friendly", "Himalayan Views Trek"],

    image: [kuaripass, , kpass1, kpass2, kpass3, kpass4],

    intro: `Kuari Pass Trek, also known as the Lord Curzon Trail, is one of the most scenic Himalayan treks in Uttarakhand. Famous for its breathtaking views of Nanda Devi, Dronagiri, Kamet, and other towering peaks, this trek offers a perfect mix of forests, meadows, and snow trails, making it ideal for beginners and nature lovers.`,

    about: {
      location: "Joshimath, Chamoli, Uttarakhand",
      altitude: "12,516 ft (3,815 meters)",
      duration: "6–9 Days",
      difficulty: "Easy to Moderate",
      bestSeason: "March to June & September to December",
      startingPoint: "Rishikesh",
      description:
        "Kuari Pass is renowned for its panoramic views of the Nanda Devi massif and surrounding Himalayan peaks. The trail passes through dense oak and rhododendron forests, vast alpine meadows, and charming mountain villages, offering a complete Himalayan trekking experience.",
    },

    whyChoose: [
      "Stunning views of Nanda Devi (India’s 2nd highest peak)",
      "Historic Lord Curzon Trail",
      "Snow trekking experience in winter",
      "Lush meadows & dense forests",
      "Perfect beginner-friendly Himalayan trek",
      "360° panoramic summit views",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh → Joshimath",
        description:
          "Scenic drive along the Alaknanda River via Devprayag, Rudraprayag, and Karnaprayag. Overnight stay at Joshimath.",
      },
      {
        day: "Day 2",
        title: "Joshimath → Dhak → Gulling Camp",
        altitude: "9,500 ft",
        description:
          "Short drive to Dhak village followed by trek through forests and terraced fields to Gulling campsite.",
      },
      {
        day: "Day 3",
        title: "Gulling → Khullara",
        altitude: "10,800 ft",
        description:
          "Trek through oak and rhododendron forests with beautiful Himalayan views. Overnight stay at Khullara.",
      },
      {
        day: "Day 4",
        title: "Khullara → Kuari Pass → Khullara",
        altitude: "12,516 ft",
        description:
          "Early morning summit climb to Kuari Pass. Witness breathtaking views of Nanda Devi, Dronagiri, and Kamet. Descend back to camp.",
      },
      {
        day: "Day 5",
        title: "Khullara → Dhak → Joshimath",
        description:
          "Descend through forest trails to Dhak village and drive back to Joshimath.",
      },
      {
        day: "Day 6",
        title: "Joshimath → Rishikesh",
        description:
          "Return drive to Rishikesh with unforgettable mountain memories.",
      },
      {
        day: "Day 7-9 (Extended Option)",
        title: "Extended Exploration (Auli / Tali Lake / Pangarchulla Base)",
        description:
          "Optional extended itinerary includes exploration of Auli meadows, Tali Lake, or Pangarchulla Base Camp for a longer and more immersive experience.",
      },
    ],

    fitness: {
      level: "Easy to Moderate",
      suitableFor: [
        "Beginners",
        "Adventure enthusiasts",
        "College groups",
        "Corporate teams",
      ],
      recommended: [
        "Jog 4–5 km in 30 minutes",
        "Good stamina & leg strength",
        "Basic cardio training recommended",
      ],
    },

    packingList: [
      "Down jacket & thermals",
      "Waterproof trekking shoes",
      "Gloves & woolen cap",
      "Rain cover / Poncho",
      "Sunglasses & sunscreen",
      "Trekking pole",
      "Personal medicines",
    ],

    trekfaqs: [
      {
        question: "Is Kuari Pass Trek suitable for beginners?",
        answer:
          "Yes, Kuari Pass is a beginner-friendly Himalayan trek with gradual ascents and well-defined trails.",
      },
      {
        question: "When can we experience snow on Kuari Pass?",
        answer: "Snow is usually available from December to March.",
      },
      {
        question: "What peaks are visible from Kuari Pass?",
        answer:
          "Nanda Devi, Dronagiri, Kamet, Hathi-Ghoda peaks, and Chaukhamba are clearly visible.",
      },
      {
        question: "How cold does it get during winter?",
        answer: "Temperatures can drop to -5°C to -10°C during winter nights.",
      },
      {
        question: "Is prior trekking experience required?",
        answer:
          "No prior trekking experience is mandatory, but basic fitness is recommended.",
      },
      {
        question: "Are permits required?",
        answer:
          "Yes, forest permits are required and arranged by the trek operator.",
      },
    ],
  },
  {
    id: "dayara-bugyal-trek",
    title: "Dayara Bugyal Trek",
    subtitle: "Most Beautiful Alpine Meadows Trek",
    price: "₹7,499",
    rating: "4.9 (9k)",
    location: "Bhatwari, Uttarkashi, Uttarakhand",
    duration: "6 Days / 5 Nights",
    altitude: "12,000 ft",
    difficulty: "Easy",
    startingPoint: "Dehradun",

    bestSeason: [
      "March",
      "April",
      "May",
      "June",
      "September",
      "October",
      "December",
      "January",
    ],
    trekType: ["Meadow Trek", "Snow Trek", "Beginner Friendly"],

    image: [dayarabugyal, dayara1, dayara2, dayara3, dayara4],

    intro: `Dayara Bugyal Trek is one of the most beautiful meadow treks in Uttarakhand, offering vast rolling grasslands, panoramic Himalayan views, and a peaceful trekking experience. Perfect for beginners, this trek showcases lush green meadows in summer and snow-covered landscapes in winter.`,

    about: {
      location: "Bhatwari, Uttarkashi, Uttarakhand",
      altitude: "12,000 ft (3,658 meters)",
      duration: "6 Days / 5 Nights",
      difficulty: "Easy",
      bestSeason: "March to June & September to January",
      startingPoint: "Dehradun",
      description:
        "Dayara Bugyal is famous for its wide alpine meadows that stretch endlessly under the open sky. The trek offers stunning views of Bandarpoonch, Black Peak, Srikanth, and Draupadi Ka Danda ranges. It is an ideal Himalayan trek for beginners, families, and nature lovers.",
    },

    whyChoose: [
      "Vast & scenic alpine meadows",
      "Perfect beginner-friendly trek",
      "Snow experience in winter",
      "Panoramic views of Bandarpoonch & Black Peak",
      "Peaceful and less crowded trails",
      "Ideal for families & first-time trekkers",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun → Raithal",
        description:
          "Scenic drive via Mussoorie and Uttarkashi to Raithal village. Overnight stay at homestay/guesthouse.",
      },
      {
        day: "Day 2",
        title: "Raithal → Gui Campsite",
        altitude: "9,500 ft",
        description:
          "Gradual ascent through forests of oak and rhododendron. Reach Gui campsite with beautiful mountain views.",
      },
      {
        day: "Day 3",
        title: "Gui → Dayara Bugyal",
        altitude: "11,800 ft",
        description:
          "Trek into vast alpine meadows with stunning Himalayan backdrop. Overnight camping at Dayara Bugyal.",
      },
      {
        day: "Day 4",
        title: "Dayara Top Exploration",
        altitude: "12,000 ft",
        description:
          "Explore the summit area and enjoy panoramic views of Bandarpoonch, Srikanth, and Draupadi Ka Danda peaks.",
      },
      {
        day: "Day 5",
        title: "Dayara Bugyal → Raithal",
        description:
          "Descend back through scenic forest trails to Raithal village.",
      },
      {
        day: "Day 6",
        title: "Raithal → Dehradun",
        description:
          "Return drive to Dehradun with unforgettable meadow memories.",
      },
    ],

    fitness: {
      level: "Easy",
      suitableFor: [
        "Beginners",
        "Families",
        "School/College groups",
        "Senior trekkers",
      ],
      recommended: [
        "Walk 3–4 km comfortably",
        "Basic stamina",
        "No prior trekking experience required",
      ],
    },

    packingList: [
      "Light down jacket",
      "Comfortable trekking shoes",
      "Gloves & woolen cap (winter)",
      "Sunglasses & sunscreen",
      "Rain jacket/poncho",
      "Personal medicines",
    ],

    trekfaqs: [
      {
        question: "Is Dayara Bugyal Trek suitable for beginners?",
        answer:
          "Yes, Dayara Bugyal is one of the easiest Himalayan treks and ideal for beginners.",
      },
      {
        question: "When can we experience snow on this trek?",
        answer: "Snow is usually available from December to February.",
      },
      {
        question: "What peaks are visible from Dayara Bugyal?",
        answer:
          "Bandarpoonch, Black Peak, Srikanth, and Draupadi Ka Danda peaks are clearly visible.",
      },
      {
        question: "Is this trek suitable for families?",
        answer:
          "Yes, due to its easy difficulty level, it is perfect for families and children.",
      },
      {
        question: "Do we need prior trekking experience?",
        answer:
          "No prior trekking experience is required for Dayara Bugyal Trek.",
      },
      {
        question: "Are permits required?",
        answer:
          "Yes, forest permits are required and arranged by the trek operator.",
      },
    ],
  },
  {
    id: "pangarchulla-peak-trek",
    title: "Pangarchulla Peak Trek",
    subtitle: "High Altitude Summit Adventure",
    price: "₹10,499",
    rating: "4.7 (8k)",
    location: "Joshimath, Chamoli, Uttarakhand",
    duration: "7 Days / 6 Nights",
    altitude: "15,069 ft",
    difficulty: "Moderate to Difficult",
    startingPoint: "Rishikesh",

    bestSeason: ["April", "May", "June", "September", "October"],
    trekType: ["Peak Trek", "Adventure Trek", "Snow Trek"],

    image: [pangarchulla, pangar1, pangar2, pangar3, pangar4],

    intro: `Pangarchulla Peak Trek is a thrilling high-altitude summit trek located near Joshimath in Uttarakhand. Known for its steep summit climb and breathtaking views of Nanda Devi, Dronagiri, Chaukhamba, and Kamet peaks, this trek is perfect for adventure seekers looking for a challenging Himalayan experience.`,

    about: {
      location: "Joshimath, Chamoli, Uttarakhand",
      altitude: "15,069 ft (4,593 meters)",
      duration: "7 Days / 6 Nights",
      difficulty: "Moderate to Difficult",
      bestSeason: "April to June & September to October",
      startingPoint: "Rishikesh",
      description:
        "Pangarchulla Peak offers one of the most dramatic summit climbs in Uttarakhand. The trail passes through oak forests, alpine meadows, and snow slopes before a steep final ascent to the summit, rewarding trekkers with panoramic views of some of the tallest Himalayan peaks.",
    },

    whyChoose: [
      "Challenging summit climb experience",
      "Stunning views of Nanda Devi & Chaukhamba",
      "High-altitude snow trekking adventure",
      "Less crowded compared to popular treks",
      "Perfect for experienced trekkers",
      "Thrilling ridge walk near the summit",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Rishikesh → Joshimath",
        description:
          "Drive along the Alaknanda River via Devprayag, Rudraprayag, and Karnaprayag. Overnight stay at Joshimath.",
      },
      {
        day: "Day 2",
        title: "Joshimath → Dhak → Gulling Camp",
        altitude: "9,500 ft",
        description:
          "Drive to Dhak village and begin trek through forests and village trails to Gulling campsite.",
      },
      {
        day: "Day 3",
        title: "Gulling → Khullara",
        altitude: "11,000 ft",
        description:
          "Trek through dense oak and rhododendron forests with stunning Himalayan views.",
      },
      {
        day: "Day 4",
        title: "Khullara → Kuari Pass → Back to Camp",
        altitude: "12,516 ft",
        description:
          "Acclimatization hike to Kuari Pass with panoramic views of Nanda Devi massif. Return to camp.",
      },
      {
        day: "Day 5",
        title: "Summit Day – Pangarchulla Peak → Khullara",
        altitude: "15,069 ft",
        description:
          "Early morning steep ascent over snow and rocky ridges to reach Pangarchulla summit. Enjoy 360° Himalayan views before descending back to camp.",
      },
      {
        day: "Day 6",
        title: "Khullara → Dhak → Joshimath",
        description:
          "Descend to Dhak village and drive back to Joshimath. Overnight stay.",
      },
      {
        day: "Day 7",
        title: "Joshimath → Rishikesh",
        description:
          "Return drive to Rishikesh with memories of a successful summit.",
      },
    ],

    fitness: {
      level: "Moderate to Difficult",
      suitableFor: [
        "Experienced trekkers",
        "Adventure seekers",
        "Fit beginners with prior trekking experience",
      ],
      recommended: [
        "Jog 5–6 km in 30 minutes",
        "Strong leg strength & endurance",
        "Prior high-altitude trekking experience preferred",
      ],
    },

    packingList: [
      "Heavy down jacket",
      "Waterproof trekking shoes",
      "Gaiters & microspikes (snow season)",
      "Gloves (inner & outer)",
      "Sunglasses & sunscreen",
      "Trekking pole",
      "Personal medicines",
    ],

    trekfaqs: [
      {
        question: "Is Pangarchulla Peak suitable for beginners?",
        answer:
          "It is recommended for trekkers with prior high-altitude experience due to its steep summit climb.",
      },
      {
        question: "How difficult is the summit day?",
        answer:
          "Summit day is challenging with steep ascents and possible snow sections, requiring good stamina and balance.",
      },
      {
        question: "When is the best time to climb Pangarchulla?",
        answer:
          "April to June offers snow-covered slopes, while September to October provides clearer skies.",
      },
      {
        question: "What peaks are visible from the summit?",
        answer:
          "Nanda Devi, Dronagiri, Chaukhamba, Kamet, and Hathi-Ghoda peaks are visible.",
      },
      {
        question: "Is snowfall common on this trek?",
        answer:
          "Yes, especially in April and early May when snow remains on the summit slopes.",
      },
      {
        question: "Are permits required?",
        answer:
          "Yes, forest permits are required and arranged by the trek operator.",
      },
    ],
  },
  {
    id: "nag-tibba-trek",
    title: "Nag Tibba Trek",
    subtitle: "Best Weekend Himalayan Trek",
    price: "₹2,999",
    rating: "4.7 (15k)",
    location: "Pantwari, Tehri Garhwal, Uttarakhand",
    duration: "2–3 Days",
    altitude: "9,915 ft",
    difficulty: "Easy",
    startingPoint: "Dehradun",

    bestSeason: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "October",
      "November",
      "December",
    ],
    trekType: ["Weekend Trek", "Beginner Friendly", "Snow Trek"],

    image: [nagtibba, nag1, nag2, nag3, nag4],

    intro: `Nag Tibba Trek is the perfect weekend Himalayan getaway near Dehradun and Mussoorie. Standing at 9,915 ft, it is the highest peak in the lower Himalayan region of Uttarakhand. Ideal for beginners, this short trek offers beautiful forest trails, snow in winter, and stunning views of Bandarpoonch, Swargarohini, and Gangotri ranges.`,

    about: {
      location: "Pantwari, Tehri Garhwal, Uttarakhand",
      altitude: "9,915 ft (3,022 meters)",
      duration: "2–3 Days",
      difficulty: "Easy",
      bestSeason: "October to June (Snow from December to February)",
      startingPoint: "Dehradun",
      description:
        "Nag Tibba, also known as the 'Serpent’s Peak', is a beginner-friendly trek offering breathtaking summit views without requiring high-altitude experience. The trail passes through dense oak and rhododendron forests and opens into scenic clearings with panoramic Himalayan views.",
    },

    whyChoose: [
      "Perfect weekend trek near Delhi & Dehradun",
      "Beginner-friendly Himalayan experience",
      "Snow trek in winter season",
      "Panoramic views of Bandarpoonch & Swargarohini",
      "Short duration with rewarding summit views",
      "Ideal for first-time trekkers & groups",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun → Pantwari → Nag Tibba Base Camp",
        altitude: "8,000 ft",
        description:
          "Drive to Pantwari village and begin trek through forest trails. Reach base camp by evening. Overnight camping.",
      },
      {
        day: "Day 2",
        title: "Base Camp → Nag Tibba Summit → Pantwari",
        altitude: "9,915 ft",
        description:
          "Early morning summit climb for sunrise views of Himalayan ranges. Descend back to Pantwari village.",
      },
      {
        day: "Day 3 (Optional)",
        title: "Return to Dehradun",
        description:
          "Leisure breakfast and drive back to Dehradun. (Can be completed in 2 days depending on itinerary.)",
      },
    ],

    fitness: {
      level: "Easy",
      suitableFor: [
        "Beginners",
        "Weekend travelers",
        "College groups",
        "Corporate teams",
      ],
      recommended: [
        "Walk 3–4 km comfortably",
        "Basic stamina",
        "No prior trekking experience required",
      ],
    },

    packingList: [
      "Light down jacket",
      "Comfortable trekking shoes",
      "Gloves & woolen cap (winter)",
      "Sunglasses & sunscreen",
      "Rain jacket/poncho",
      "Personal medicines",
    ],

    trekfaqs: [
      {
        question: "Is Nag Tibba Trek suitable for beginners?",
        answer:
          "Yes, Nag Tibba is one of the best beginner-friendly weekend treks in Uttarakhand.",
      },
      {
        question: "Is snowfall available on Nag Tibba?",
        answer: "Yes, snowfall is common from December to February.",
      },
      {
        question: "Can Nag Tibba be completed in 2 days?",
        answer:
          "Yes, the trek can be completed in 2 days, making it ideal for a weekend trip.",
      },
      {
        question: "What peaks are visible from the summit?",
        answer:
          "Bandarpoonch, Swargarohini, Gangotri, and Kedarnath ranges are visible on clear days.",
      },
      {
        question: "Do we need prior trekking experience?",
        answer: "No prior trekking experience is required for Nag Tibba Trek.",
      },
      {
        question: "Are permits required?",
        answer:
          "Local forest permissions may be required and are arranged by the trek operator.",
      },
    ],
  },
  {
    id: "benog-hill-trek",
    title: "Benog Hill Trek",
    subtitle: "Hidden Gem Near Mussoorie",
    price: "₹1,999",
    rating: "4.6 (3k)",
    location: "Benog Wildlife Sanctuary, Mussoorie, Uttarakhand",
    duration: "1–2 Days",
    altitude: "7,500 ft",
    difficulty: "Easy",
    startingPoint: "Mussoorie",

    bestSeason: [
      "March",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
    ],
    trekType: ["Nature Walk", "Weekend Trek", "Beginner Friendly"],

    image: [binoghill, binog1, binog2, binog3, binog4],

    intro: `Benog Hill Trek, located inside the Benog Wildlife Sanctuary near Mussoorie, is a peaceful and less crowded trail perfect for beginners and nature lovers. Surrounded by dense forests and panoramic Himalayan views, this short trek is ideal for a quick mountain escape.`,

    about: {
      location: "Benog Wildlife Sanctuary, Mussoorie, Uttarakhand",
      altitude: "7,500 ft (2,286 meters)",
      duration: "1–2 Days",
      difficulty: "Easy",
      bestSeason: "March to June & September to November",
      startingPoint: "Mussoorie",
      description:
        "Benog Hill offers scenic forest trails, birdwatching opportunities, and stunning views of the Bandarpoonch and Chaukhamba ranges on clear days. The trail is calm and ideal for beginners, families, and weekend travelers seeking a nature retreat.",
    },

    whyChoose: [
      "Peaceful & less crowded trail",
      "Perfect short weekend getaway",
      "Beautiful Himalayan views",
      "Rich flora & birdlife",
      "Ideal for beginners & families",
      "Close to Mussoorie",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Mussoorie → Benog Hill → Return",
        altitude: "7,500 ft",
        description:
          "Short drive to Benog Wildlife Sanctuary entry point. Trek through forest trails to Benog Hill summit and enjoy panoramic views before returning.",
      },
      {
        day: "Day 2 (Optional)",
        title: "Explore Mussoorie",
        description:
          "Optional exploration of nearby attractions like Cloud’s End and George Everest Peak before departure.",
      },
    ],

    fitness: {
      level: "Easy",
      suitableFor: [
        "Beginners",
        "Families",
        "Nature lovers",
        "Weekend travelers",
      ],
      recommended: [
        "Comfortable walking for 2–3 hours",
        "Basic stamina",
        "No prior trekking experience required",
      ],
    },

    packingList: [
      "Comfortable walking shoes",
      "Light jacket",
      "Water bottle",
      "Sunglasses & sunscreen",
      "Small daypack",
      "Personal medicines",
    ],

    trekfaqs: [
      {
        question: "Is Benog Hill Trek suitable for beginners?",
        answer: "Yes, it is an easy trek suitable for beginners and families.",
      },
      {
        question: "Is permission required for this trek?",
        answer:
          "Yes, entry to Benog Wildlife Sanctuary may require a small entry fee.",
      },
      {
        question: "How long does the trek take?",
        answer:
          "The trek can be completed in a few hours, making it ideal for a day trip.",
      },
      {
        question: "What can we see from the summit?",
        answer:
          "On clear days, Bandarpoonch, Chaukhamba, and surrounding Himalayan ranges are visible.",
      },
      {
        question: "Is camping allowed?",
        answer:
          "Camping inside the wildlife sanctuary is generally restricted; check local guidelines before planning.",
      },
      {
        question: "What is the best time to visit?",
        answer:
          "March to June and September to November offer the best weather and clear views.",
      },
    ],
  },
];

export const trekkingServices = [
  {
    id: 1,
    title: "Guided Himalayan Treks",
    description:
      "Expert-led trekking experiences across Uttarakhand and the Indian Himalayas, suitable for beginners to advanced trekkers.",
    points: [
      "Kedarkantha Trek",
      "Har Ki Dun Trek",
      "Brahmatal Trek",
      "Valley of Flowers Trek",
      "Kuari Pass Trek",
      "Roopkund Trek",
    ],
  },
  {
    id: 2,
    title: "Customized Trek Packages",
    description:
      "Tailor-made trekking itineraries designed according to your schedule, fitness level, group size, and budget.",
    points: [
      "Flexible duration",
      "Beginner to advanced difficulty",
      "Solo, family & group options",
      "Budget-friendly planning",
    ],
  },
  {
    id: 3,
    title: "All-Inclusive Trek Packages",
    description:
      "Complete end-to-end trekking solutions covering accommodation, meals, permits, and experienced staff.",
    points: [
      "Camps & guesthouses",
      "Healthy meals",
      "Trek permits & forest fees",
      "Guides, porters & cooks",
    ],
  },
  {
    id: 4,
    title: "Adventure & Camping Experiences",
    description:
      "Enjoy immersive outdoor adventures with high-altitude camping and nature-based experiences.",
    points: [
      "High-altitude camping",
      "Bonfire nights",
      "Star gazing",
      "Winter & snow treks",
    ],
  },
  {
    id: 5,
    title: "Safety & First Aid Support",
    description:
      "Safety-first trekking with trained professionals and essential emergency equipment.",
    points: [
      "Certified trek leaders",
      "First-aid trained staff",
      "Oxygen cylinders",
      "Emergency evacuation support",
    ],
  },
  {
    id: 6,
    title: "Group & Corporate Treks",
    description:
      "Specially designed trekking programs for organizations, institutions, and large groups.",
    points: [
      "Corporate team-building",
      "School & college groups",
      "Adventure clubs",
      "Custom group itineraries",
    ],
  },
  {
    id: 7,
    title: "Local Sightseeing & Cultural Tours",
    description:
      "Explore Himalayan culture, heritage, and local traditions alongside trekking adventures.",
    points: [
      "Village walks",
      "Local food experiences",
      "Temple visits",
      "Mussoorie, Chopta & Auli tours",
    ],
  },
  {
    id: 8,
    title: "Eco-Friendly & Sustainable Tourism",
    description:
      "Responsible trekking practices that protect nature and support local communities.",
    points: [
      "Plastic-free trekking",
      "Local employment support",
      "Leave No Trace principles",
    ],
  },
  {
    id: 9,
    title: "Transportation Assistance",
    description:
      "Convenient transportation services to and from major trekking base locations.",
    points: [
      "Pickup & drop from Dehradun",
      "Haridwar & Rishikesh transfers",
      "Shared & private vehicles",
    ],
  },
  {
    id: 10,
    title: "Equipment Rental",
    description:
      "High-quality trekking gear available on rent for a safe and comfortable journey.",
    points: ["Sleeping bags", "Trekking poles", "Jackets & gaiters", "Tents"],
  },
];

export const faqs = [
  {
    question: "What kind of treks does Northway Treks offer?",
    answer:
      "Northway Treks offers Himalayan treks ranging from beginner-friendly to challenging routes across Uttarakhand and nearby regions.",
  },
  {
    question: "Are your treks suitable for beginners?",
    answer:
      "Yes, we provide beginner-friendly treks with proper acclimatization, trained guides, and full on-ground support.",
  },
  {
    question: "What is included in the trek package?",
    answer:
      "Our packages include accommodation, meals during the trek, certified trek leaders, permits, safety equipment, and basic medical support.",
  },
  {
    question: "How experienced are your trek leaders?",
    answer:
      "All trek leaders are trained professionals with local Himalayan experience and strong knowledge of safety protocols.",
  },
  {
    question: "What is the best time to trek with Northway Treks?",
    answer:
      "We organize treks in all seasons. The best time depends on the specific trek and weather conditions.",
  },
  {
    question: "Do you provide trekking gear?",
    answer:
      "Essential safety equipment is included. Personal gear like jackets and shoes can be rented for selected treks.",
  },
  {
    question: "How do you ensure trek safety?",
    answer:
      "We follow strict safety guidelines, carry first-aid kits, oxygen cylinders, and ensure proper acclimatization.",
  },
  {
    question: "What fitness level is required?",
    answer:
      "Basic fitness is enough for beginner treks. We share fitness preparation guidelines before every trek.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy is transparent and shared at the time of booking. Refunds depend on cancellation timing.",
  },
  {
    question: "Why choose Northway Treks?",
    answer:
      "We offer local expertise, responsible trekking, personalized groups, and unforgettable Himalayan experiences.",
  },
];
