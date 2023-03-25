const sections = document.querySelectorAll(".section");
const indicators = document.querySelectorAll(".indicator");

function handleScroll() {
  sections.forEach((section, index) => {
    let top = section.offsetTop;
    let height = section.offsetHeight;

    if (window.pageYOffset >= top && window.pageYOffset < top + height) {
      indicators[index].classList.add("active");
    } else {
      indicators[index].classList.remove("active");
    }
  });
}

document.addEventListener("scroll", handleScroll);
