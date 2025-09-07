// Product tab
const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".product_content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[index].classList.add("active");
  });
});

// Hamburger menu

const hamMenus = document.querySelectorAll(".ham_menu");
const offScreenMenus = document.querySelectorAll(".off_screen_menu");

hamMenus.forEach((hamMenu, index) => {
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenus[index].classList.toggle("active");
  });
});

// next page function

const pages = document.querySelectorAll(".page");

pages.forEach((page) => {
  page.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.remove("active");
    });
    page.classList.add("active");
  });
});

// filters

const filters = document.querySelectorAll(".filter");
const offScreenFilter = document.querySelectorAll(".off_screen_filter");
const cutMark = document.querySelectorAll(".cut_filter");

filters.forEach((filter, index) => {
  filter.addEventListener("click", () => {
    offScreenFilter[index].classList.add("active");
  });
});
cutMark.forEach((cut, index) => {
  cut.addEventListener("click", () => {
    console.log("kkkk");
    offScreenFilter[index].classList.remove("active");
  });
});

// price range input function

const rangeInput = document.querySelectorAll(".range_input input");
const priceInput = document.querySelectorAll(".price input");
const progress = document.querySelector(".progress_bar");

let priceGap = 60000;

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range_min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);

    if (maxVal - minVal >= priceGap && maxVal <= 1000000) {
      if (e.target.className === "number_min") {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[0].max) * 100 + "%";
      }
    }
  });
});

// product image function

const slideImage = document.querySelectorAll(".prod_image_left img");
const mainImage = document.querySelectorAll(".prod_image_right img");

slideImage.forEach((img, index) => {
  img.addEventListener("click", () => {
    slideImage.forEach((img) => {
      img.classList.remove("active");
    });
    img.classList.add("active");

    mainImage.forEach((imageMain) => {
      imageMain.classList.remove("active");
    });
    mainImage[index].classList.add("active");
  });
});
