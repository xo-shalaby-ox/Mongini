// كود تفعيل الواتساب
function openWhatsApp(phoneNumber, message) {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  }
  