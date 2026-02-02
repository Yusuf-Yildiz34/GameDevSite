const bg = document.getElementById("bg");
const info = document.getElementById("info");
const area = document.getElementById("area");
const entry = document.getElementById("entry");
const main = document.getElementById("main");
const hepsi = document.getElementById("hepsi");
const engineer = document.getElementById("engineer");

const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");


window.addEventListener("load", () => {
        bg.style.opacity = "0.2";
        info.style.opacity = "1";
        entry.style.opacity = "1";
});

entry.addEventListener("click", () => {
        hepsi.style.display = "none";
        main.style.display = "block";
});

function showTitles(show) {
        engineer.style.filter = show ? "brightness(0.3)" : "brightness(1)";
        [title1, title2, title3, title4].forEach(t =>
                t.classList.toggle("show", show)
        );
}

engineer.addEventListener("mouseenter", () => showTitles(true));
engineer.addEventListener("mouseleave", () => showTitles(false));

[title1, title2, title3, title4].forEach(t => {
        t.addEventListener("mouseenter", () => showTitles(true));
        t.addEventListener("mouseleave", () => showTitles(false));
});

const endDate = new Date("2026-02-08T14:00:00");

function updateCountdown() {
        const diff = endDate - new Date();

        if (diff <= 0) {
                document.getElementById("sayac").innerText = "Süre doldu";
                return;
        }

        const s = Math.floor(diff / 1000);
        const days = Math.floor(s / 86400);
        const hours = Math.floor((s % 86400) / 3600);
        const minutes = Math.floor((s % 3600) / 60);
        const seconds = s % 60;

        document.getElementById("sayac").innerText =
                `${days} gün ${hours} saat ${minutes} dk ${seconds} sn`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.querySelectorAll(".s").forEach(item => {
        item.addEventListener("click", () => {
                const icon = item.querySelector(".plusicon");
                const open = icon.textContent === "➕";
                icon.textContent = open ? "➖" : "➕";
                icon.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
        });
});

const menus = [
        document.getElementById("m1"),
        document.getElementById("m2"),
        document.getElementById("m3"),
        document.getElementById("m4"),
        document.getElementById("m5")
];

const buttons = [
        document.getElementById("bir"),
        document.getElementById("iki"),
        document.getElementById("uc"),
        document.getElementById("dort"),
        document.getElementById("bes")
];

buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {

                const clickedMenu = menus[index];

                const openedMenu = menus.find(
                        (menu, i) => menu.style.display === "block" && i !== index
                );

                if (openedMenu) {
                        alert("Aynı anda sadece 1 menü açılabilir");
                        return;
                }

                const opening = clickedMenu.style.display !== "block";
                clickedMenu.style.display = opening ? "block" : "none";

                for (let i = index + 1; i < buttons.length; i++) {
                        buttons[i].style.marginTop = opening ? "72px" : "0px";
                }
        });
});
