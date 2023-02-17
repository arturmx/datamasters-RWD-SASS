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
    const button = document.querySelector(".header__button");
    const header = document.querySelector(".header");

    if (window.scrollY > 0 || window.pageYOffset > 0) {
      header.classList.add("header__color");
      header.classList.remove("header__transparent");
      button.classList.remove("white");
      button.classList.remove("whiteborder");
      button.classList.add("grey");
      button.classList.add("greyborder");
      document.querySelector(".header__nav_links.white").classList.add("grey");
      document.querySelector(".header__nav_links.white").classList.remove("white");
    } else {
      header.classList.remove("header__color");
      header.classList.add("header__transparent");
      button.classList.remove("grey");
      button.classList.remove("greyborder");
      button.classList.add("white");
      button.classList.add("whiteborder");
      document.querySelector(".header__nav_links").classList.add("white");
      document.querySelector(".header__nav_links").classList.remove("grey");
    }
  };
  activeHeader();
    window.addEventListener("scroll", activeHeader)

  // const activeHeader = function() {
  //   const button = document.querySelector(".header__button");
  //   const header = document.querySelector(".header");

  //   if (window.scrollY > 0 || window.pageYOffset > 0) {
  //     header.classList.add("header__color");
  //     header.classList.remove("header__transparent");
  //     button.classList.remove("white");
  //     button.classList.remove("whiteborder");
  //     button.classList.add("grey");
  //     button.classList.add("greyborder");
  //     document.querySelector(".header__nav_links.white").classList.add("grey");
  //     document.querySelector(".header__nav_links.white").classList.remove("white");
  //   } else {
  //     header.classList.remove("header__color");
  //     header.classList.add("header__transparent");
  //     button.classList.remove("grey");
  //     button.classList.remove("greyborder");
  //     button.classList.add("white");
  //     button.classList.add("whiteborder");
  //     document.querySelector(".header__nav_links").classList.add("white");
  //     document.querySelector(".header__nav_links").classList.remove("grey");
  //   }
  // };
  // activeHeader();
  //   window.addEventListener("scroll", activeHeader)


