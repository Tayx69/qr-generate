const QRcode = require("qrcode");

// Data yg ingin dijadikan QR
const data = "https://youtu.be/OWR3zMaRKis?si=2wdzFwOY-4Bmm9iV";

QRcode.toFile(
  "qr_output.png",
  data,
  {
    color: {
      dark: "#000",
      light: "#FFF",
    },
  },
  function (err) {
    if (err) throw err;
    console.log("QR code berhasil dibuat ✅");
  }
);
