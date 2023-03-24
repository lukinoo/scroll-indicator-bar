const sections = document.querySelectorAll(".section");
const indicators = document.querySelectorAll(".indicator");

setSectionHeights();

function handleRemoveActive() {
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }
}

function setSectionHeights() {
  let sectionHeight = 0;

  for (let i = 0; i < sections.length; i++) {
    let { height } = sections[i].getBoundingClientRect();

    sectionHeight = height * i;

    sections[i].setAttribute("data-scrollheight", sectionHeight);
  }
}

function handleSections(yPos) {
  for (let i = 0; i < sections.length; i++) {
    let heightSet = parseInt(sections[i].dataset.scrollheight);

    if (yPos + 100 >= heightSet) {
      handleRemoveActive();
      indicators[i].classList.add("active");
    }
  }
}

function handleScroll() {
  let scrollYPos = Math.round(window.scrollY);

  handleSections(scrollYPos);
}

document.addEventListener("scroll", handleScroll);
