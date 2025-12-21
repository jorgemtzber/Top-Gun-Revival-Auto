(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // If you want to add your Instagram:
  // Replace the "#" with your real link in index.html or set it here:
  const ig = document.getElementById("igLink");
  if (ig) {
    // ig.href = "https://instagram.com/YOURHANDLE";
    // ig.textContent = "@YOURHANDLE";
  }

  // --- QR on homepage (auto points to the live domain) ---
  const canvas = document.getElementById("qrCanvas");
  const urlEl = document.getElementById("qrUrl");
  const copyBtn = document.getElementById("copyLinkBtn");

  const siteUrl = (window.location.origin || "").replace(/\/$/, "") + "/";

  if (urlEl) urlEl.textContent = siteUrl;

  if (canvas && window.QRCode) {
    window.QRCode.toCanvas(canvas, siteUrl, { margin: 1, width: 240 }, function (err) {
      if (err) console.error(err);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(siteUrl);
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy Link"), 1000);
      } catch {
        alert("Copy failed. Your link is: " + siteUrl);
      }
    });
  }

  // --- QR download page ---
  const dlCanvas = document.getElementById("qrDownloadCanvas");
  const dlUrl = document.getElementById("qrDownloadUrl");
  const dlBtn = document.getElementById("downloadBtn");

  if (dlUrl) dlUrl.textContent = siteUrl;

  if (dlCanvas && window.QRCode) {
    window.QRCode.toCanvas(dlCanvas, siteUrl, { margin: 1, width: 360 }, function (err) {
      if (err) console.error(err);
    });
  }

  if (dlBtn && dlCanvas) {
    dlBtn.addEventListener("click", () => {
      dlCanvas.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Local-Precision-Detailing-QR.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(a.href);
      });
    });
  }
})();
