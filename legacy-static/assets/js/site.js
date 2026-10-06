/* BNC Brancom — configurable data + interactions (no dependencies) */
window.BNC = {
  phone: "+254 700 000 000", // configurable until BNC confirms official number
  email: "info@bnc.co.ke",
  homePlans: [
    { speed: 15, price: 1500 },
    { speed: 25, price: 2000 },
    { speed: 30, price: 3000 },
    { speed: 50, price: 4000 }
  ],
  // Wholesale tiers: only base rate confirmed. Higher tiers stay configurable (null = contact sales).
  wholesale: { baseRate: 161, tiers: [{ minMbps: 1, rate: 161, label: "Starting rate" }], gbpsNote: "1 Gbps+ — configured on quote" },
  coverage: {
    "Nairobi": { "Westlands": ["Westlands Town", "Parklands", "Kitisuru"], "Kasarani": ["Kasarani Town", "Githurai", "Roysambu"] },
    "Kiambu": { "Thika": ["Thika Town", "Makongeni"], "Ruiru": ["Ruiru Town", "Juja Farm Rd"] },
    "Mombasa": { "Mvita": ["Mvita Town", "Tudor"], "Nyali": ["Nyali Town", "Bamburi"] }
  }
};
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  // Year + phone placeholders
  $$("[data-bnc-phone]").forEach(function (el) { el.textContent = window.BNC.phone; });
  var y = $("#yr"); if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var burger = $("#burger"), menu = $("#mmenu");
  if (burger && menu) burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Reveal on scroll
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  $$(".rv").forEach(function (el) { if (io) io.observe(el); else el.classList.add("in"); });

  // FAQ accordion (accessible)
  $$(".faq-item").forEach(function (item) {
    var q = $(".faq-q", item), a = $(".faq-a", item);
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var open = item.classList.contains("open");
      $$(".faq-item.open").forEach(function (o) { o.classList.remove("open"); $(".faq-a", o).style.maxHeight = null; $(".faq-q", o).setAttribute("aria-expanded", "false"); });
      if (!open) { item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; q.setAttribute("aria-expanded", "true"); }
    });
  });

  // Wholesale calculator: Monthly = Mbps × applicable rate
  var bw = $("#bw"), unitSeg = $("#unitSeg"), rateOut = $("#rateOut"), costOut = $("#costOut"), mbpsOut = $("#mbpsOut");
  function calc() {
    if (!bw) return;
    var val = parseFloat(bw.value) || 0;
    var unit = unitSeg && $(".on", unitSeg) ? $(".on", unitSeg).dataset.unit : "Mbps";
    var mbps = unit === "Gbps" ? val * 1000 : val;
    var rate = window.BNC.wholesale.baseRate; // single confirmed tier
    if (rateOut) rateOut.textContent = "KSh " + rate.toLocaleString("en-KE") + " / Mbps";
    if (mbpsOut) mbpsOut.textContent = mbps.toLocaleString("en-KE") + " Mbps";
    if (costOut) costOut.innerHTML = "KSh " + Math.round(mbps * rate).toLocaleString("en-KE") + " <small>/ month est.</small>";
  }
  if (bw) {
    bw.addEventListener("input", calc);
    if (unitSeg) $$("button", unitSeg).forEach(function (b) {
      b.addEventListener("click", function () { $$("button", unitSeg).forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); calc(); });
    });
    var slider = $("#bwRange");
    if (slider) {
      var sync = function () { bw.value = slider.value; calc(); };
      slider.addEventListener("input", sync);
      bw.addEventListener("input", function () { slider.value = Math.min(10000, parseFloat(bw.value) || 0); });
    }
    calc();
  }

  // Coverage checker (configurable data, no invented claims)
  var c1 = $("#covCounty"), c2 = $("#covTown"), c3 = $("#covArea"), cMsg = $("#covMsg");
  function fill(sel, items, ph) {
    if (!sel) return; sel.innerHTML = "";
    var o = document.createElement("option"); o.value = ""; o.textContent = ph; sel.appendChild(o);
    items.forEach(function (t) { var e = document.createElement("option"); e.value = t; e.textContent = t; sel.appendChild(e); });
  }
  if (c1 && c2 && c3) {
    fill(c1, Object.keys(window.BNC.coverage), "Select county");
    c1.addEventListener("change", function () {
      var towns = c1.value ? Object.keys(window.BNC.coverage[c1.value]) : [];
      fill(c2, towns, "Select town"); fill(c3, [], "Select area"); if (cMsg) cMsg.textContent = "";
    });
    c2.addEventListener("change", function () {
      var areas = (c1.value && c2.value) ? window.BNC.coverage[c1.value][c2.value] : [];
      fill(c3, areas, "Select area");
    });
    var btn = $("#covBtn");
    if (btn) btn.addEventListener("click", function () {
      if (!cMsg) return;
      if (!(c1.value && c2.value && c3.value)) { cMsg.textContent = "Please select county, town and area to check coverage."; return; }
      cMsg.textContent = "Good news — " + c3.value + ", " + c2.value + " falls inside the BNC configurable coverage footprint. Our team will confirm availability for your exact building.";
    });
  }

  // Fake-submit contact/quote forms gracefully
  $$("form[data-fake]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var done = $(".form-done", f);
      if (done) { done.hidden = false; done.focus && done.focus(); }
      f.reset();
    });
  });
})();
