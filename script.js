(function () {
  // Paste your booking link here if you want the QR to open booking directly.
  // If left blank, QR will open the website homepage.
  // Example:
  // const BOOKING_URL = "https://square.site/book/XXXXXXXX";
  const BOOKING_URL = "";

  const qrTarget =
    BOOKING_URL && BOOKING_URL.trim().length > 0
      ? BOOKING_URL.trim()
      : new URL("./", window.location.href).toString();

  const canvas = document.getElementById("qrCanvas");
  if (!canvas || !window.QRCode) return;

  window.QRCode.toCanvas(canvas, qrTarget, { margin: 1, width: 240 }, function (err) {
    if (err) console.error(err);
  });
})();
