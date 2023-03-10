const hamburger = document.querySelector("#hamburger");
const mobilenav = document.querySelector("#mobilenav");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

  hamburger.addEventListener("click", function(){
    if (mobilenav.classList.contains("header__hide")) {
      mobilenav.classList.remove("header__hide");
      line1.classList.remove("rotate3");
      line2.classList.remove("rotate4");
      line1.classList.add("rotate1");
      line2.classList.add("rotate2");
    }
    else {
      mobilenav.classList.add("header__hide");
      line1.classList.remove("rotate1");
      line2.classList.remove("rotate2");
      line1.classList.add("rotate3");
      line2.classList.add("rotate4");
    }
  })

  // change header background and links color on scroll

  const activeHeader = function() {
    const header = document.querySelector(".header");

    if (window.scrollY > 0 || window.pageYOffset > 0) {
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  };
  activeHeader();
    window.addEventListener("scroll", activeHeader)



