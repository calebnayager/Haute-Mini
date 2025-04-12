<script>
  document.addEventListener("DOMContentLoaded", function () {
    const ratings = document.querySelectorAll(".rating");

    ratings.forEach(rating => {
      const stars = rating.querySelectorAll("i");

      stars.forEach(star => {
        star.addEventListener("mouseenter", () => {
          const val = star.getAttribute("data-value");
          stars.forEach(s => {
            s.classList.toggle("fas", s.getAttribute("data-value") <= val);
            s.classList.toggle("far", s.getAttribute("data-value") > val);
          });
        });

        star.addEventListener("click", () => {
          rating.setAttribute("data-rating", star.getAttribute("data-value"));
        });

        rating.addEventListener("mouseleave", () => {
          const val = rating.getAttribute("data-rating");
          stars.forEach(s => {
            s.classList.toggle("fas", s.getAttribute("data-value") <= val);
            s.classList.toggle("far", s.getAttribute("data-value") > val);
          });
        });
      });
    });
  });
</script>




