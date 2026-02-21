// ==================== DARK MODE TOGGLE ====================
const darkModeToggle = document.querySelectorAll("#darkModeToggle");
const body = document.body;

// Cek preferensi tersimpan
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

darkModeToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark") ? "dark" : "light",
    );
  });
});

// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// ==================== FAQ ACCORDION ====================
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("active");
    const icon = header.querySelector(".icon");
    if (item.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});

// ==================== FILTER KURSUS (courses.html) ====================
const filterButtons = document.querySelectorAll(".filter-btn");
const coursesGrid = document.getElementById("courses-grid");

// Data kursus (bisa diambil dari API, untuk demo hardcode)
const coursesData = [
  {
    category: "web",
    title: "Full Stack Web Development",
    badge: "Web",
    price: "Rp 1.200.000",
    image: "assets/images/course-thumbnail.jpg",
  },
  {
    category: "web",
    title: "React.js Mastery",
    badge: "Web",
    price: "Rp 900.000",
    image: "assets/images/course-thumbnail.jpg",
  },
  {
    category: "data",
    title: "Data Science with Python",
    badge: "Data",
    price: "Rp 1.500.000",
    image: "assets/images/course-thumbnail.jpg",
  },
  {
    category: "data",
    title: "Machine Learning Dasar",
    badge: "Data",
    price: "Rp 1.300.000",
    image: "assets/images/course-thumbnail.jpg",
  },
  {
    category: "design",
    title: "UI/UX Design Fundamental",
    badge: "Design",
    price: "Rp 1.000.000",
    image: "assets/images/course-thumbnail.jpg",
  },
  {
    category: "design",
    title: "Figma untuk Pemula",
    badge: "Design",
    price: "Rp 750.000",
    image: "assets/images/course-thumbnail.jpg",
  },
];

function renderCourses(category = "all") {
  if (!coursesGrid) return;
  const filtered =
    category === "all"
      ? coursesData
      : coursesData.filter((c) => c.category === category);
  coursesGrid.innerHTML = filtered
    .map(
      (course) => `
    <div class="course-card">
      <img src="${course.image}" alt="${course.title}" onerror="this.src='https://placehold.co/300x160/2563eb/white?text=Course'">
      <div class="course-info">
        <span class="course-badge">${course.badge}</span>
        <h3>${course.title}</h3>
        <p class="course-price">${course.price}</p>
        <button class="btn btn-primary">Enroll</button>
      </div>
    </div>
  `,
    )
    .join("");
}

if (filterButtons.length) {
  renderCourses("all");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderCourses(category);
    });
  });
}

// ==================== LOGIN FORM (login.html) ====================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Demo: redirect ke dashboard
    window.location.href = "dashboard.html";
  });
}

// ==================== DASHBOARD INTERAKSI ====================
// (Opsional: bisa ditambahkan interaksi lain)
