const THEME_KEY = "theme";
const LIGHT = true;
const LIGHT_STR = "light";
const DARK = false;
const DARK_STR = "dark";

function SetSavedTheme(theme) {
    let themeStr = LIGHT_STR;
    if(theme === DARK) {
        themeStr = DARK_STR;
    }
    localStorage.setItem(THEME_KEY, themeStr);
}

function GetSavedTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    let theme = LIGHT;
    if(savedTheme === null) {
        SetSavedTheme(LIGHT);
    }
    else {
        theme = (savedTheme === LIGHT_STR) ? LIGHT : DARK;
    }
    return theme;
}

function SetPageTheme(theme) {
    if(theme == DARK) {
        document.documentElement.setAttribute("data-theme", DARK_STR);
    }
    else {
        document.documentElement.setAttribute("data-theme", LIGHT_STR);
    }
}

function UpdateSiteTheme(theme) {
    SetSavedTheme(theme);
    SetPageTheme(theme);
}

function InitSiteTheme(theme) {
    SetPageTheme(GetSavedTheme());
}

function ThemeToggleCallback(event) {
    const themeSelected = event.target.checked ? DARK : LIGHT;
    UpdateSiteTheme(themeSelected);
    lc3editor.SetViewTheme(themeSelected);
}

window.onload = () => {
  lc3editor.SetViewTheme(GetSavedTheme());
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("theme-switch-label-id");

  // Create checkbox element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";

  // Set checked state from localStorage
  const savedTheme = GetSavedTheme();

  // Save state on change
  checkbox.addEventListener("change", ThemeToggleCallback);
  checkbox.checked = (savedTheme == DARK) ? true : false;

  // Create slider div
  const sliderDiv = document.createElement("div");
  sliderDiv.className = "slider round";

  // Add to DOM
  container.appendChild(checkbox);
  container.appendChild(sliderDiv);
});

InitSiteTheme();
