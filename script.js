var typed = new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'Digital Marketing'],
    typeSpeed: 50,
    backspeed: 25,
    loop: true
});

function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 30000);
}
setInterval(createStar, 100);


// Hamburger menu toggle
function toggleMenu() {
    let menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
}

// Page reload hone ke baad bhi mode yaad rahe
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("dark-mode");
    }
};


function changeColor() {
    const colors = ["#1f1f2e", "#0a0a1a", "#1a1a2e", "#000021", "#121212", "#2d2d44"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.querySelector('.img-item').style.backgroundColor = randomColor;
}