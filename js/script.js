// Toggle Mobile Menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Form Submission Handler
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah form dari pengiriman standar
  alert(
    "Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda."
  );
  contactForm.reset(); // Mengosongkan form setelah submit
});

// Fade In Animation on Scroll
const observerOptions = {
  root: null, // relative to the viewport
  threshold: 0.1, // 10% of the element is visible
  rootMargin: "0px 0px -50px 0px", // start animation a bit earlier
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Stop observing the element once it's visible
    }
  });
}, observerOptions);

// Target all elements with the 'fade-in-up' class
const faders = document.querySelectorAll(".fade-in-up");
faders.forEach((fader) => {
  observer.observe(fader);
});

// Fungsi untuk toggle akordion
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const allContents = document.querySelectorAll(".accordion-content");
  const allIcons = document.querySelectorAll(".accordion-icon");
  const allButtons = document.querySelectorAll(".accordion-button");

  // Tutup semua konten lain
  allContents.forEach((item) => {
    if (item.id !== id) {
      item.classList.add("hidden");
    }
  });

  // Reset ikon semua tombol
  allIcons.forEach((icon) => {
    icon.classList.remove("rotate-180");
  });

  // Buka/tutup konten yang diklik
  content.classList.toggle("hidden");

  // Putar ikon jika konten terbuka
  if (!content.classList.contains("hidden")) {
    const currentIcon =
      content.previousElementSibling.querySelector(".accordion-icon");
    currentIcon.classList.add("rotate-180");
  }
}

// --- Kode JavaScript untuk Lightbox Gallery ---
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.getAttribute("src");
    lightboxImg.setAttribute("src", imgSrc);
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  });
});

// Fungsi untuk menutup lightbox
function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
}

lightboxClose.addEventListener("click", closeLightbox);

// Menutup lightbox saat klik di area luar gambar
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Fungsi untuk toggle akordion (sama dengan yang di section Layanan)
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const allContents = document.querySelectorAll(".accordion-content");
  const allIcons = document.querySelectorAll(".accordion-icon");

  // Tutup semua konten lain
  allContents.forEach((item) => {
    if (item.id !== id) {
      item.classList.add("hidden");
    }
  });

  // Reset ikon semua tombol
  allIcons.forEach((icon) => {
    icon.classList.remove("rotate-180");
  });

  // Buka/tutup konten yang diklik
  content.classList.toggle("hidden");

  // Putar ikon jika konten terbuka
  if (!content.classList.contains("hidden")) {
    const currentIcon =
      content.previousElementSibling.querySelector(".accordion-icon");
    currentIcon.classList.add("rotate-180");
  }
}
