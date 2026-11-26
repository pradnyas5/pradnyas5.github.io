// Filters project cards by category when a filter button is clicked.
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".project-filter");
  const items = document.querySelectorAll(".project-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((b) => {
        const isActive = b === button;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-pressed", isActive);
      });

      items.forEach((item) => {
        const show = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("is-hidden", !show);
        item.classList.remove("project-fade-in");
        if (show) {
          void item.offsetWidth; // restart the fade animation
          item.classList.add("project-fade-in");
        }
      });
    });
  });
});
