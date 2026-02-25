import { image } from "@/assets/assets";
import Image from "next/image";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

export default function ContactPage() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={image.contactus} // replace with your image
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl md:text-5xl font-semibold">Contact</h1>
          <p className="text-sm mt-2 opacity-80">Home / Contact</p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Call Us On", value: "+91 98765 43210" },
            { title: "Email Us", value: "support@example.com" },
            { title: "Our Location", value: "Dehradun, Uttarakhand" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-yellow-300 rounded-xl shadow-lg p-6 text-center"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-green-600 font-semibold mb-2">CONTACT US</p>
          <h2 className="text-3xl font-bold mb-4">
            Get 100% Free Course Contact With Us!
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions? Our travel experts are ready to help you plan your
            next adventure.
          </p>

          <div className="flex gap-4">
            <div className="flex gap-4">
              <a className="social-icon">
                <RiFacebookFill />
              </a>

              <a className="social-icon">
                <RiTwitterFill />
              </a>

              <a className="social-icon">
                <RiInstagramFill />
              </a>

              <a className="social-icon">
                <RiYoutubeFill />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="bg-gray-100 rounded-xl shadow-xl p-6 space-y-4">
          <input className="input outline-none" placeholder="Full Name" />
          <input className="input outline-none" placeholder="Email" />
          <select className="input">
            <option>Select Tour</option>
            <option>Kedarkantha</option>
            <option>Tungnath</option>
          </select>
          <textarea rows="4" className="input" placeholder="Your message" />

          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" />
            <span>I agree to all terms and policies</span>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition">
            Send Now →
          </button>
        </form>
      </section>

      {/* MAP SECTION */}
      <section className="w-full h-[400px] mb-10">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps?q=Dehradun&output=embed"
          loading="lazy"
        />
      </section>
    </main>
  );
}
