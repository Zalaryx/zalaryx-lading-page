const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function updateImages(theme) {
    const images = document.querySelectorAll('.theme-image');
    images.forEach(image => {
        const lightSrc = image.getAttribute('data-light');
        const darkSrc = image.getAttribute('data-dark');
        if (theme === 'dark' && darkSrc) {
            image.src = darkSrc;
        } else if (theme === 'light' && lightSrc) {
            image.src = lightSrc;
        }
    });
}

function setLightIcon() {
    const img = document.getElementById("darkmodeImage");
    if (img) img.src = "/assets/images/sun.svg";
}

function setDarkIcon() {
    const img = document.getElementById("darkmodeImage");
    if (img) img.src = "/assets/images/moon.svg";
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        setDarkIcon();
        updateImages('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setLightIcon();
        updateImages('light');
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    if (savedTheme === 'dark') {
        if (toggleSwitch) toggleSwitch.checked = true;
        setDarkIcon();
        updateImages('dark');
    } else {
        if (toggleSwitch) toggleSwitch.checked = false;
        setLightIcon();
        updateImages('light');
    }
} else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        if (toggleSwitch) toggleSwitch.checked = true;
        setDarkIcon();
        updateImages('dark');
    } else {
        if (toggleSwitch) toggleSwitch.checked = false;
        setLightIcon();
        updateImages('light');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? "dark" : "light";
        document.documentElement.setAttribute('data-theme', newColorScheme);
        if (toggleSwitch) toggleSwitch.checked = event.matches;
        if (event.matches) {
            setDarkIcon();
            updateImages('dark');
        } else {
            setLightIcon();
            updateImages('light');
        }
    });
}

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}
