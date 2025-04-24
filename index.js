
  const blogScroll = document.getElementById("blogScroll");
  const dots = document.querySelectorAll(".dot");

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      const cardWidth = blogScroll.querySelector(".blog-card").offsetWidth + 20; // +gap
      blogScroll.scrollTo({
        left: index * cardWidth * 2, // show 2 cards per view approx
        behavior: "smooth"
      });

      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  // Optional: Auto update active dot based on scroll
  blogScroll.addEventListener("scroll", () => {
    const scrollLeft = blogScroll.scrollLeft;
    const cardWidth = blogScroll.querySelector(".blog-card").offsetWidth + 20;
    const index = Math.round(scrollLeft / (cardWidth * 2));
    dots.forEach(d => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });

