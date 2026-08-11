document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 80
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});
