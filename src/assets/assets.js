import hero from './hero.jpg';
import servicebg from './servicesbackground.jpg'

export const image = {hero, servicebg}


export const destinations = [
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

  image: [
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
],

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
      description:
        "Return drive to Dehradun with unforgettable memories.",
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
      answer:
        "Temperatures can drop to -5°C to -10°C during winter nights.",
    },
    {
      question: "Is snowfall guaranteed on this trek?",
      answer:
        "Yes, from December to February, snowfall is very common.",
    },
    {
      question: "Do we need prior trekking experience?",
      answer:
        "No prior trekking experience is required for Kedarkantha Trek.",
    },
    {
      question: "Which mobile network works in Sankri?",
      answer:
        "BSNL works intermittently; other networks are unreliable.",
    },
    {
      question: "Are permits required?",
      answer:
        "Forest permits are arranged by the trek operator.",
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

  images: [
    "/tungnath.jpg",
    "/tungnath.jpg",
    "/tungnath.jpg",
    "/tungnath.jpg",
  ],

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
      answer:
        "No special permits are required for Indian nationals.",
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
  subtitle: "Valley of Gods",
  price: "₹9,499",
  rating: "4.9 (12k)",
  location: "Sankri, Uttarkashi, Uttarakhand",
  duration: "7 Days / 6 Nights",
  altitude: "11,700 ft",
  difficulty: "Moderate",
  startingPoint: "Dehradun",
  bestSeason: ["April", "May", "June", "September", "October"],
  trekType: ["Valley Trek", "Scenic Trek"],
  images: ["/harikidun.jpg", "/harikidun.jpg", "/harikidun.jpg", "/harikidun.jpg"],
  
  intro: `Har Ki Dun Trek is a pristine Himalayan valley in Uttarkashi, Uttarakhand, offering rich flora, fauna, and traditional Garhwal village experiences. This trek is perfect for adventure seekers and nature lovers alike.`,

  about: {
    location: "Sankri, Uttarkashi, Uttarakhand",
    altitude: "11,700 ft (3,566 meters)",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate",
    bestSeason: "April to June & September to October",
    startingPoint: "Dehradun",
    description: "The Har Ki Dun valley is a U-shaped glacial valley, known as the 'Valley of Gods'. The trek passes through lush forests, rivers, and traditional villages, with stunning views of the Swargarohini and Bandarpoonch ranges.",
  },

  whyChoose: [
    "Experience the pristine Har Ki Dun Valley",
    "Moderate trek with cultural exposure",
    "Scenic Himalayan views and rivers",
    "Rich flora and fauna along the trail",
    "Ideal for both beginners and experienced trekkers",
  ],

  itinerary: [
    { day: "Day 1", title: "Dehradun → Sankri", description: "Drive from Dehradun via Mussoorie and Mori. Reach Sankri by evening. Overnight stay." },
    { day: "Day 2", title: "Sankri → Taluka", altitude: "9,500 ft", description: "Trek through pine and oak forests to Taluka. Camp overnight." },
    { day: "Day 3", title: "Taluka → Har Ki Dun Valley", altitude: "11,000 ft", description: "Trek into the valley with breathtaking Himalayan views. Overnight at camps." },
    { day: "Day 4", title: "Har Ki Dun Exploration", altitude: "11,700 ft", description: "Explore the valley, photograph glaciers, and visit nearby streams. Overnight at camps." },
    { day: "Day 5", title: "Return to Taluka", description: "Trek back to Taluka with serene surroundings. Camp overnight." },
    { day: "Day 6", title: "Taluka → Sankri", description: "Descend to Sankri. Celebration evening." },
    { day: "Day 7", title: "Sankri → Dehradun", description: "Drive back to Dehradun with unforgettable memories." },
  ],

  fitness: {
    level: "Moderate",
    suitableFor: ["Beginners with some stamina", "Nature lovers", "Solo travelers", "Group trekkers"],
    recommended: ["Ability to walk 5–6 km/day", "Basic endurance and leg strength", "Comfortable with camping"],
  },

  packingList: [
    "Trekking shoes & woolen socks",
    "Winter/summer jacket depending on season",
    "Gloves & cap",
    "Sunglasses & sunscreen",
    "Water bottle & snacks",
    "Personal medicines",
  ],

  trekfaqs: [
    { question: "Is Har Ki Dun Trek beginner-friendly?", answer: "Yes, with moderate fitness, beginners can enjoy this trek." },
    { question: "What is the best time to do this trek?", answer: "April to June and September to October." },
    { question: "Do we need trekking experience?", answer: "Basic stamina is enough; no prior experience required." },
    { question: "Are permits required?", answer: "Forest permits are arranged by the operator." },
    { question: "Which mobile network works?", answer: "BSNL works intermittently; other networks are unreliable." },
  ],
},
 {
  id: "nag-tibba-trek",
  title: "Nag Tibba Trek",
  subtitle: "Best Weekend Trek",
  price: "₹2,999",
  rating: "4.6 (10k)",
  location: "Mussoorie, Tehri, Uttarakhand",
  duration: "2 Days / 1 Night",
  altitude: "9,915 ft",
  difficulty: "Easy",
  startingPoint: "Dehradun",
  bestSeason: ["All Year"],
  trekType: ["Weekend Trek", "Beginner Trek"],
  images: ["/nagtibba.jpg", "/nagtibba.jpg", "/nagtibba.jpg", "/nagtibba.jpg"],

  intro: `Nag Tibba Trek is a short and easy Himalayan trek, ideal for beginners and weekend travelers. Located near Mussoorie, it offers panoramic views of the Garhwal Himalayas, lush forests, and a serene hilltop experience.`,

  about: {
    location: "Mussoorie, Tehri, Uttarakhand",
    altitude: "9,915 ft (3,020 meters)",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    bestSeason: "All Year",
    startingPoint: "Dehradun",
    description: "Nag Tibba is the highest peak in the Lesser Himalayan region of Garhwal. The trek is short but rewarding, passing through pine forests, charming villages, and stunning viewpoints of Bandarpoonch, Gangotri, and Kedarnath ranges.",
  },

  whyChoose: [
    "Ideal for beginners and first-time trekkers",
    "Short weekend trek from Dehradun",
    "Beautiful panoramic views of Garhwal Himalayas",
    "Trek through dense pine forests",
    "Perfect for camping under the stars",
  ],

  itinerary: [
    { day: "Day 1", title: "Dehradun → Pantwari → Nag Tibba Base", description: "Drive from Dehradun to Pantwari. Trek to Nag Tibba base or campsite. Overnight stay at tents." },
    { day: "Day 2", title: "Summit → Pantwari → Dehradun", altitude: "9,915 ft", description: "Early morning trek to Nag Tibba summit for sunrise views. Descend to Pantwari and drive back to Dehradun." },
  ],

  fitness: {
    level: "Easy",
    suitableFor: ["Beginners", "Weekend travelers", "College groups", "Solo trekkers"],
    recommended: ["Walk 3–4 km comfortably", "Basic stamina and leg strength", "No prior trekking experience required"],
  },

  packingList: [
    "Trekking shoes with good grip",
    "Warm jacket & woolens",
    "Rain jacket/poncho",
    "Cap & gloves",
    "Water bottle",
    "Personal medicines",
  ],

  trekfaqs: [
    { question: "Is Nag Tibba Trek suitable for beginners?", answer: "Yes, this is one of the easiest treks in Uttarakhand, perfect for first-time trekkers." },
    { question: "How long is the trek?", answer: "The round trip from Pantwari to Nag Tibba summit is approximately 10–12 km." },
    { question: "What is the best time to do this trek?", answer: "Nag Tibba can be trekked throughout the year; October to March is best for clear views." },
    { question: "Is camping available?", answer: "Yes, overnight camping is arranged at the base or summit." },
    { question: "Do we need trekking experience?", answer: "No prior experience is required; basic fitness is enough." },
  ],
},
  {
    id: "valley-of-flowers-trek",
    title: "Valley of Flowers Trek",
    subtitle: "UNESCO World Heritage Site",
    price: "₹8,999",
    rating: "4.9 (20k)",
    location: "Joshimath, Chamoli, Uttarakhand",
    duration: "6 Days / 5 Nights",
    altitude: "14,100 ft",
    difficulty: "Moderate",
    bestSeason: ["Jul", "Aug", "Sep"],
    trekType: ["Monsoon Trek", "Nature Trek"],
    startingPoint: "Haridwar",
    image: "/valleyofflowers.jpg",
  },
  {
    id: "roopkund-trek",
    title: "Roopkund Trek",
    subtitle: "The Mystery Lake",
    price: "₹12,499",
    rating: "4.8 (9k)",
    location: "Lohajung, Chamoli, Uttarakhand",
    duration: "8 Days / 7 Nights",
    altitude: "16,500 ft",
    difficulty: "Difficult",
    bestSeason: ["May", "Jun", "Sep"],
    trekType: ["High Altitude Trek", "Adventure Trek"],
    startingPoint: "Kathgodam",
    image: "/roopkund.jpg",
  },
  {
    id: "kuari-pass-trek",
    title: "Kuari Pass Trek",
    subtitle: "Lord Curzon Trail",
    price: "₹7,999",
    rating: "4.7 (11k)",
    location: "Joshimath, Chamoli, Uttarakhand",
    duration: "6 Days / 5 Nights",
    altitude: "12,516 ft",
    difficulty: "Moderate",
    bestSeason: ["Dec", "Jan", "Feb", "Mar", "Apr"],
    trekType: ["Winter Trek", "Classic Trek"],
    startingPoint: "Joshimath",
    image: "/kuaripass.jpg",
  },
  {
    id: "dayara-bugyal-trek",
    title: "Dayara Bugyal Trek",
    subtitle: "Alpine Meadows Paradise",
    price: "₹6,999",
    rating: "4.7 (13k)",
    location: "Uttarkashi, Uttarakhand",
    duration: "4 Days / 3 Nights",
    altitude: "11,830 ft",
    difficulty: "Easy to Moderate",
    bestSeason: ["Dec", "Jan", "Feb", "Mar", "Apr"],
    trekType: ["Meadow Trek", "Winter Trek"],
    startingPoint: "Dehradun",
    image: "/dayarabugyal.jpg",
  },
  {
    id: "brahmatal-trek",
    title: "Brahmatal Trek",
    subtitle: "Frozen Lake Winter Trek",
    price: "₹7,499",
    rating: "4.8 (14k)",
    location: "Lohajung, Chamoli, Uttarakhand",
    duration: "6 Days / 5 Nights",
    altitude: "12,250 ft",
    difficulty: "Easy to Moderate",
    bestSeason: ["Dec", "Jan", "Feb", "Mar"],
    trekType: ["Winter Trek", "Snow Trek"],
    startingPoint: "Kathgodam",
    image: "/brahmatal.jpg",
  },
  {
    id: "dodital-trek",
    title: "Dodital Trek",
    subtitle: "Sacred Lake of Lord Ganesha",
    price: "₹8,499",
    rating: "4.7 (8k)",
    location: "Uttarkashi, Uttarakhand",
    duration: "5 Days / 4 Nights",
    altitude: "10,866 ft",
    difficulty: "Moderate",
    bestSeason: ["Apr", "May", "Jun", "Sep", "Oct"],
    trekType: ["Lake Trek", "Forest Trek"],
    startingPoint: "Dehradun",
    image: "/dodital.jpg",
  },
  {
    id: "phulara-ridge-trek",
    title: "Phulara Ridge Trek",
    subtitle: "360° Ridge Walk",
    price: "₹8,999",
    rating: "4.8 (6k)",
    location: "Sankri, Uttarkashi, Uttarakhand",
    duration: "6 Days / 5 Nights",
    altitude: "12,150 ft",
    difficulty: "Moderate",
    bestSeason: ["Apr", "May", "Jun", "Sep", "Oct"],
    trekType: ["Ridge Trek", "Scenic Trek"],
    startingPoint: "Dehradun",
    image: "/phulararidge.jpg",
  },
  {
    id: "deoriatal-chandrashila-trek",
    title: "Deoriatal–Chandrashila Trek",
    subtitle: "Lakes & Summit Views",
    price: "₹6,499",
    rating: "4.9 (16k)",
    location: "Chopta, Uttarakhand",
    duration: "4 Days / 3 Nights",
    altitude: "13,000 ft",
    difficulty: "Easy to Moderate",
    bestSeason: ["Mar", "Apr", "May", "Oct", "Nov"],
    trekType: ["Lake Trek", "Weekend Trek"],
    startingPoint: "Rishikesh",
    image: "/deoriatal.jpg",
  },
  {
    id: "pindari-glacier-trek",
    title: "Pindari Glacier Trek",
    subtitle: "Classic Himalayan Glacier Trek",
    price: "₹9,999",
    rating: "4.7 (7k)",
    location: "Bageshwar, Uttarakhand",
    duration: "7 Days / 6 Nights",
    altitude: "12,300 ft",
    difficulty: "Moderate",
    bestSeason: ["Apr", "May", "Jun", "Sep", "Oct"],
    trekType: ["Glacier Trek", "Adventure Trek"],
    startingPoint: "Kathgodam",
    image: "/pindariglacier.jpg",
  },
  {
    id: "rupin-pass-trek",
    title: "Rupin Pass Trek",
    subtitle: "High-Altitude Adventure",
    price: "₹15,999",
    rating: "4.9 (10k)",
    location: "Uttarakhand–Himachal Border",
    duration: "8 Days / 7 Nights",
    altitude: "15,250 ft",
    difficulty: "Difficult",
    bestSeason: ["May", "Jun", "Sep"],
    trekType: ["High Altitude Trek", "Adventure Trek"],
    startingPoint: "Dehradun",
    image: "/rupinpass.jpg",
  },
  {
    id: "madmaheshwar-trek",
    title: "Madmaheshwar Trek",
    subtitle: "Panch Kedar Pilgrimage Trek",
    price: "₹7,999",
    rating: "4.6 (5k)",
    location: "Rudraprayag, Uttarakhand",
    duration: "5 Days / 4 Nights",
    altitude: "11,500 ft",
    difficulty: "Moderate",
    bestSeason: ["May", "Jun", "Sep", "Oct"],
    trekType: ["Spiritual Trek", "Pilgrimage Trek"],
    startingPoint: "Rishikesh",
    image: "/madmaheshwar.jpg",
  },
  {
    id: "kalindi-khal-trek",
    title: "Kalindi Khal Trek",
    subtitle: "Ultimate Expedition Trek",
    price: "₹29,999",
    rating: "4.9 (2k)",
    location: "Gangotri, Uttarakhand",
    duration: "14 Days / 13 Nights",
    altitude: "19,500 ft",
    difficulty: "Extreme",
    bestSeason: ["Jul", "Aug"],
    trekType: ["Expedition Trek", "Technical Trek"],
    startingPoint: "Gangotri",
    image: "/kalindikhal.jpg",
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
    points: [
      "Sleeping bags",
      "Trekking poles",
      "Jackets & gaiters",
      "Tents",
    ],
  },
];

export const faqs = [
  {
    question: "What kind of treks does Northway Treks offer?",
    answer:
      "Northway Treks offers Himalayan treks ranging from beginner-friendly to challenging routes across Uttarakhand and nearby regions."
  },
  {
    question: "Are your treks suitable for beginners?",
    answer:
      "Yes, we provide beginner-friendly treks with proper acclimatization, trained guides, and full on-ground support."
  },
  {
    question: "What is included in the trek package?",
    answer:
      "Our packages include accommodation, meals during the trek, certified trek leaders, permits, safety equipment, and basic medical support."
  },
  {
    question: "How experienced are your trek leaders?",
    answer:
      "All trek leaders are trained professionals with local Himalayan experience and strong knowledge of safety protocols."
  },
  {
    question: "What is the best time to trek with Northway Treks?",
    answer:
      "We organize treks in all seasons. The best time depends on the specific trek and weather conditions."
  },
  {
    question: "Do you provide trekking gear?",
    answer:
      "Essential safety equipment is included. Personal gear like jackets and shoes can be rented for selected treks."
  },
  {
    question: "How do you ensure trek safety?",
    answer:
      "We follow strict safety guidelines, carry first-aid kits, oxygen cylinders, and ensure proper acclimatization."
  },
  {
    question: "What fitness level is required?",
    answer:
      "Basic fitness is enough for beginner treks. We share fitness preparation guidelines before every trek."
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy is transparent and shared at the time of booking. Refunds depend on cancellation timing."
  },
  {
    question: "Why choose Northway Treks?",
    answer:
      "We offer local expertise, responsible trekking, personalized groups, and unforgettable Himalayan experiences."
  }
];
