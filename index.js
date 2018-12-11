(function () {
    // setTimeout(() => location.reload(!!0x666), 0xfff);
    const hamburgerElement = document.getElementById("hamburger");
    hamburgerElement.addEventListener("click", () => {
        const headerElement = document.getElementById("header");
        if (headerElement.classList.contains("hide")) {
            headerElement.classList.remove("hide");
            headerElement.classList.add("show");
        } else if (headerElement.classList.contains("show")) {
            headerElement.classList.remove("show");
            headerElement.classList.add("hide");
        }
    });

    const hintElement = document.getElementById("hint");
    const STORAGE_KEY_DISABLE_HINT = "disable-hint";
    const checkEducation = () => localStorage.getItem(STORAGE_KEY_DISABLE_HINT) !== STORAGE_KEY_DISABLE_HINT;
    const startEducation = () => setTimeout(() => {
        hintElement.className = "hint show";
        setTimeout(() => hintElement.className = "hint hide", 6666);
    }, 0x666);

    checkEducation() && startEducation();
}());