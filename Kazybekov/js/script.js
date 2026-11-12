const themeSwitch = document.querySelector("#theme");

const savedTheme = localStorage.getItem("theme") || "dark";

document.documentElement.dataset.theme = savedTheme;

if (themeSwitch) {

    themeSwitch.checked = savedTheme === "dark";

    themeSwitch.addEventListener("change", function () {

        const theme = themeSwitch.checked ? "dark" : "light";

        document.documentElement.dataset.theme = theme;

        localStorage.setItem("theme", theme);

    });
}