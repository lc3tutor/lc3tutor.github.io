// Properties must also be in globals.css.
var lightDarkProps = [];
// Main site.
lightDarkProps = lightDarkProps.concat(["text-color", "h1-color", "bg-color", "bg-nav-color"]);
// Codesnip.
lightDarkProps = lightDarkProps.concat(["opcode-color", "comment-color", "directive-color", "oscall-color", "number-color", "label-color", "unknown-color", "register-color", "linenumber-bgc", "lc3code-bgc"]);

function toggleLightDark (theme) {
    let mode = "";
    if (theme === 0) mode = "light"; else mode = "dark";

    for(let prop of lightDarkProps){
        document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-${mode})`);
    }
}

const state = JSON.parse(localStorage.getItem(":fontState"));
toggleLightDark(state.theme);
