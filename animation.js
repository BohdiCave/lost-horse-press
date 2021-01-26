const element = document.getElementById("logo");
const newsLink = document.getElementById("news");
const catLink = document.getElementById("cat");
const aboutLink = document.getElementById("about");
const subLink = document.getElementById("sub");
const siteMap = document.getElementById("site-map");

// element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", () => {
    newsLink.setAttribute("style", "font-size: 2px;");
    catLink.setAttribute("style", "font-size: 2px;");
    subLink.setAttribute("style", "font-size: 2px;");
    aboutLink.setAttribute("style", "font-size: 2px;");
    siteMap.setAttribute("style", "font-size: 2px;");
    newsLink.classList.remove("hide");
    catLink.classList.remove("hide");
    subLink.classList.remove("hide");
    aboutLink.classList.remove("hide");
    siteMap.classList.remove("hide");
});

newsLink.addEventListener("animationend", () => {
    newsLink.removeAttribute("style");
    catLink.removeAttribute("style");
    subLink.removeAttribute("style");
    aboutLink.removeAttribute("style");
    siteMap.removeAttribute("style");
});
