// Fades page sections in as they scroll into view.
// Content stays fully visible if JS is off or the browser lacks IntersectionObserver.
document.addEventListener("DOMContentLoaded", () => {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const content = document.querySelector(".post article .clearfix");
  const blocks = [];

  // Group the about text into sections: the intro, then each h3 with the elements under it.
  if (content) {
    let group = document.createElement("div");
    content.insertBefore(group, content.firstChild);
    blocks.push(group);

    Array.from(content.children)
      .slice(1)
      .forEach((el) => {
        if (el.tagName === "H3") {
          group = document.createElement("div");
          content.insertBefore(group, el);
          blocks.push(group);
        }
        group.appendChild(el);
      });
  }

  document.querySelectorAll(".reveal-block").forEach((el) => blocks.push(el));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  blocks.forEach((el) => {
    if (!el.children.length) return;
    el.classList.add("reveal");
    observer.observe(el);
  });
});
