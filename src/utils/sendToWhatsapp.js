export const sendToWhatsApp = (phoneNumber, title, dataObject) => {
  let message = `*${title}*\n\n`;

  Object.entries(dataObject).forEach(([key, value]) => {
    message += `${key}: ${value}\n`;
  });

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};