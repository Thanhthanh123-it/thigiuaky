document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scroll-to-projects");
  const target = document.getElementById("projects-section");

  if (scrollBtn && target) {
    scrollBtn.addEventListener("click", function () {
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
});
/*let talk*/
document.addEventListener("DOMContentLoaded", function () {
  const btnProjects = document.getElementById("scroll-to-projects");
  const btnContact = document.getElementById("scroll-to-contact");

  function setActive(button) {
    btnProjects.classList.remove("active");
    btnContact.classList.remove("active");
    button.classList.add("active");
  }

  btnProjects.addEventListener("click", function () {
    setActive(btnProjects);
    document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" });
  });

  btnContact.addEventListener("click", function () {
    setActive(btnContact);
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
  });
});


/*trang giới thiệu trc khj vào web*/
document.addEventListener("DOMContentLoaded", function () {
  const enterBtn = document.getElementById("enter-btn");
  const introScreen = document.getElementById("intro-screen");

  if (enterBtn) {
    enterBtn.addEventListener("click", function () {
      introScreen.style.transition = "opacity 0.8s ease";
      introScreen.style.opacity = "0";
      setTimeout(() => {
        introScreen.style.display = "none";
      }, 800);
    });
  }
});
/*JAVA CỦA CV */
document.addEventListener("DOMContentLoaded", () => {
    const sections = [
      "about-section",
      "projects-section",
      "contact-section",
      "cv-section"
    ];

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1); // Bỏ dấu #

        // Ẩn tất cả các section
        sections.forEach(id => {
          const section = document.getElementById(id);
          if (section) {
            section.style.display = "none";
          }
        });

        // Hiện đúng section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = "block";
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });