const sideMenu = document.querySelector("#sideMenu");
const navbar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
   sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
   sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
   if (scrollY > 50) {
      navbar.classList.add(
         "bg-white",
         "bg-opacity-50",
         "backdrop-blur-lg",
         "shadow-sm",
         "dark:bg-darkTheme",
         "dark:shadow-white/20"
      );
      navLinks.classList.remove(
         "bg-white",
         "bg-opacity-50",
         "backdrop-blur-lg",
         "shadow-sm",
         "dark:bg-darkTheme",
         "dark:shadow-white/20"
      );
   } else {
      navbar.classList.remove(
         "bg-white",
         "bg-opacity-50",
         "backdrop-blur-lg",
         "shadow-sm"
      );
      navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
   }
});

// lightmode

if (
   localStorage.theme === "dark" ||
   (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
   document.documentElement.classList.add("dark");
} else {
   document.documentElement.classList.remove("dark");
}

function toogleTheme() {
   document.documentElement.classList.toggle("dark");

   // Store the theme preference in the local storage
   if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
   } else {
      localStorage.theme = "light";
   }
}
