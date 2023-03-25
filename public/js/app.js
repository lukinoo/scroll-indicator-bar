// global variables
const sections = document.querySelectorAll(".section");

// function which creates indicator a tags
const createPageIndicator = () => {
  const pageIndocator = document.createElement("div");
  pageIndocator.classList.add("page-indicator");

  for (let i = 0; i < sections.length; i++) {
    // section ids
    const sectionId = sections[i].id;

    // creating in
    const indicator = document.createElement("a");
    indicator.classList.add("indicator");
    indicator.setAttribute("href", `#${sectionId}`);

    // appending indicator in pageIndicator
    pageIndocator.appendChild(indicator);

    pageIndocator.childNodes[0].classList.add("active");
  }

  // appending page indicator in body
  document.body.appendChild(pageIndocator);
};

createPageIndicator();

const isSectionActive = (top, height) => {
  if (window.pageYOffset >= top && window.pageYOffset < top + height)
    return true;

  return false;
};

const handleSectionScroll = () => {
  const indicators = document.querySelectorAll(".indicator");

  sections.forEach((section, index) => {
    let top = section.offsetTop;
    let height = section.offsetHeight;

    if (isSectionActive(top, height)) {
      indicators[index].classList.add("active");
    } else {
      indicators[index].classList.remove("active");
    }
  });
};

const handleScroll = () => handleSectionScroll();

// events
document.addEventListener("scroll", handleScroll);
