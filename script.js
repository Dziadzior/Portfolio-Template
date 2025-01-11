// Inicjalizacja AOS (animacje przewijania)
AOS.init({
  duration: 1000,
  once: true,
});

// Tryb ciemny/jasny
const themeSwitcher = document.getElementById("themeSwitcher");
themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeSwitcher.textContent = document.body.classList.contains("light-theme")
    ? "🌞 Tryb Jasny"
    : "🌙 Tryb Ciemny";
});

// Dynamiczne liczniki
document.querySelectorAll(".counter").forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-count");
    const current = +counter.innerText;

    const increment = Math.ceil(target / 100);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Dane do sekcji Timeline
const timelineData = [
  {
    year: 2015,
    icon: "fa-graduation-cap",
    title: "Początek programowania",
    description:
      "Rozpocząłem naukę podstaw programowania z HTML, CSS i JavaScript.",
    image: "https://via.placeholder.com/600x300",
  },
  {
    year: 2018,
    icon: "fa-laptop-code",
    title: "Pierwsza praca",
    description: "Rozpocząłem pracę jako Frontend Developer.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    year: 2021,
    icon: "fa-rocket",
    title: "Start własnej firmy",
    description:
      "Założyłem własną działalność, oferując usługi tworzenia stron i aplikacji internetowych.",
    image: "https://via.placeholder.com/600x300",
  },
];

const timelineContainer = document.querySelector(".timeline");
timelineData.forEach((item, index) => {
  const timelineItem = `
    <div class="timeline-item" data-aos="fade-${
      index % 2 === 0 ? "right" : "left"
    }">
      <div class="timeline-icon pulse" title="${
        item.title
      }" data-bs-toggle="modal" data-bs-target="#timelineModal${index}">
        <i class="fas ${item.icon}"></i>
      </div>
      <div class="timeline-content">
        <h5>${item.year}</h5>
        <p>${item.title}</p>
      </div>
    </div>
    <div class="modal fade" id="timelineModal${index}" tabindex="-1" aria-labelledby="timelineModal${index}Label" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="timelineModal${index}Label">${
    item.title
  }</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Zamknij"></button>
          </div>
          <div class="modal-body">
            ${
              item.image
                ? `<img src="${item.image}" alt="${item.title}" class="img-fluid mb-3">`
                : ""
            }
            ${
              item.video
                ? `<iframe width="100%" height="315" src="${item.video}" frameborder="0" allowfullscreen></iframe>`
                : ""
            }
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  timelineContainer.insertAdjacentHTML("beforeend", timelineItem);
});

// Wskaźnik aktywności osi czasu
window.addEventListener("scroll", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const icon = item.querySelector(".timeline-icon");

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      icon.style.background = "#f76c5e";
      icon.style.transform = "scale(1.2)";
    } else {
      icon.style.background = "#f9a826";
      icon.style.transform = "scale(1)";
    }
  });
});

window.addEventListener("scroll", () => {
  const timelineLine = document.querySelector(".timeline-line");
  const timelineSection = document.getElementById("timeline");
  const { top, height } = timelineSection.getBoundingClientRect();

  if (top < window.innerHeight && top + height > 0) {
    const progress = Math.min(1, (window.innerHeight - top) / height);
    timelineLine.style.height = `${progress * 100}%`;
  }
});

const portfolioData = [
  {
    id: 1,
    category: "web",
    title: "Nowoczesna strona WWW",
    description: "Responsywny projekt strony internetowej.",
    image: "/images/nowoczesna.png",
  },
  {
    id: 2,
    category: "app",
    title: "Aplikacja mobilna",
    description: "Intuicyjna aplikacja mobilna zaprojektowana z myślą o UX.",
    image: "/images/aplikacja.png",
  },
  {
    id: 3,
    category: "design",
    title: "Kreatywny projekt graficzny",
    description: "Projekt UI/UX dla platformy e-commerce.",
    image: "/images/kreatywny.png",
  },
  {
    id: 4,
    category: "web",
    title: "Portfolio online",
    description: "Moje własne portfolio w pełni responsywne.",
    image: "/images/portfolioO.png",
  },
  {
    id: 5,
    category: "app",
    title: "Aplikacja fitness",
    description: "Aplikacja do monitorowania zdrowia i fitnessu.",
    image: "/images/fitness.png",
  },
  {
    id: 6,
    category: "design",
    title: "Projekt marki",
    description: "Projektowanie logo i identyfikacji wizualnej.",
    image: "/images/marka.png",
  },
  {
    id: 7,
    category: "web",
    title: "Strona korporacyjna",
    description: "Projekt strony dla dużej firmy.",
    image: "/images/korporacja.png",
  },
  {
    id: 8,
    category: "app",
    title: "Aplikacja e-commerce",
    description: "Aplikacja do zakupów online.",
    image: "/images/ecommerce.png",
  },
  {
    id: 9,
    category: "design",
    title: "Projekt graficzny aplikacji",
    description: "Design aplikacji mobilnej dla start-upu.",
    image: "/images/startup.png",
  },
  {
    id: 10,
    category: "web",
    title: "Blog tematyczny",
    description: "Responsywna strona blogowa.",
    image: "/images/blogt.png",
  },
  {
    id: 11,
    category: "app",
    title: "Aplikacja zdrowotna",
    description: "Aplikacja do monitorowania zdrowia użytkownika.",
    image: "/images/zdrowie.png",
  },
  {
    id: 12,
    category: "design",
    title: "Projekt wizytówki",
    description: "Minimalistyczny projekt wizytówki.",
    image: "/images/wizytowka.png",
  },
];

const portfolioContainer = document.querySelector(".portfolio-container");
const loadMoreButton = document.getElementById("loadMoreBtn");
const filterButtons = document.querySelectorAll(".filter-btn");
let visibleProjects = 6;
let currentCategory = "all";
let isShowingAll = false;

function renderPortfolio(category = "all") {
  portfolioContainer.innerHTML = "";
  const filteredProjects = portfolioData.filter(
    (project) => category === "all" || project.category === category
  );

  const projectsToRender = isShowingAll
    ? filteredProjects
    : filteredProjects.slice(0, visibleProjects);

  projectsToRender.forEach((project) => {
    const projectHTML = `
      <div class="col-md-4 portfolio-item">
        <div class="card">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
          </div>
        </div>
      </div>
    `;
    portfolioContainer.insertAdjacentHTML("beforeend", projectHTML);
  });

  if (filteredProjects.length <= visibleProjects) {
    loadMoreButton.textContent = "Pokaż mniej";
    isShowingAll = true;
  } else {
    loadMoreButton.textContent = "Załaduj więcej";
    isShowingAll = false;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.getAttribute("data-filter");
    visibleProjects = 6;
    isShowingAll = false;
    renderPortfolio(currentCategory);
  });
});

loadMoreButton.addEventListener("click", () => {
  if (isShowingAll) {
    visibleProjects = 6;
    isShowingAll = false;
  } else {
    visibleProjects += 6;
  }
  renderPortfolio(currentCategory);
});

// Renderuj początkowe portfolio
document.addEventListener("DOMContentLoaded", () => renderPortfolio());
