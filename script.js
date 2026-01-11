(function () {
  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Basic event tracking hook (fires if GA gtag exists)
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-event]");
    if (!el) return;
    var name = el.getAttribute("data-event");
    if (typeof window.gtag === "function") {
      window.gtag("event", name, { page_location: window.location.href });
    }
  });

  // Quote form -> opens SMS with a clean formatted message
  var sendBtn = document.getElementById("sendQuoteBtn");
  if (sendBtn) {
    sendBtn.addEventListener("click", function () {
      var name = (document.getElementById("qName") || {}).value || "";
      var vehicle = (document.getElementById("qVehicle") || {}).value || "";
      var pkg = (document.getElementById("qPackage") || {}).value || "Package";

      var msg =
        "Hi Local Brothers - quick quote.\n" +
        (name ? "Name: " + name + "\n" : "") +
        (vehicle ? "Vehicle: " + vehicle + "\n" : "Vehicle: ____\n") +
        "Package: " + pkg + "\n" +
        "Add-ons: ____\n" +
        "Preferred day/time: ____\n" +
        "Photos: (attach 2)";

      // iOS likes sms:+1##########&body= ; some Android likes ?body=
      var phone = "+14692078693";
      var url = "sms:" + phone + "?&body=" + encodeURIComponent(msg);
      window.location.href = url;
    });
  }
})();
