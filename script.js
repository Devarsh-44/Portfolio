// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
  
  // Section Animation on Scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Form Submission
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const feedback = document.querySelector(".form-feedback");
    feedback.textContent = "Message sent! Thank you!";
    feedback.classList.add("success-message");
    this.reset();
  
    setTimeout(() => {
      feedback.textContent = "";
      feedback.classList.remove("success-message");
    }, 3000);
  });
  
  // Loader
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  });
  