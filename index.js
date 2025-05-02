const blogScroll = document.getElementById("blogScroll");
  const dots = document.querySelectorAll(".dot");

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      const cardWidth = blogScroll.querySelector(".blog-card").offsetWidth + 20; // +gap
      const scrollTo = index * (cardWidth * 2); // 2 cards per scroll

      blogScroll.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });

      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  blogScroll.addEventListener("scroll", () => {
    const cardWidth = blogScroll.querySelector(".blog-card").offsetWidth + 20;
    const index = Math.round(blogScroll.scrollLeft / (cardWidth * 2));
    dots.forEach(d => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });