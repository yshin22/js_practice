function loadScript(src) {
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)
}

function darkMode() {
    var element = document.body;
    var btn_mode = document.getElementById("btn1");
    if (btn_mode.value=="light mode") {
        btn_mode.value="dark mode"
        btn_mode.style.backgroundImage = "url(../styles/crescent-moon.png)"
    }
    else {
        btn_mode.value="light mode"
        btn_mode.style.backgroundImage = "url(../styles/sun_symbol.png)"
    }
    element.classList.toggle("dark-mode");
}





