// Fade‑in on scroll
const faders = document.querySelectorAll(".fade");
const appear = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);
faders.forEach(f => appear.observe(f));

// Placeholder certificate popup (can be extended)
function openCert(cert) {
  if (cert === "shrm") {
    window.open("https://www.shrm.org/foundation/employing-abilities-at-work", "_blank");
  } else if (cert === "pwc") {
    window.open("https://www.theforage.com/simulations/pwc-ch/audit-vety", "_blank");
  }
}