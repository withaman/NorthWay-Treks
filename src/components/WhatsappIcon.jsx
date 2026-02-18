"use client";

import React from "react";

function WhatsappIcon() {
  const phoneNumber = "919634847461";

  return (
    <a
  href={`https://wa.me/${phoneNumber}`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-[100] bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-3 rounded-full shadow-lg transition"
>
      {/* WhatsApp Icon (Font Awesome) */}
      <i className="fa-brands fa-whatsapp text-white text-4xl"></i>
    </a>
  );
}

export default WhatsappIcon;
