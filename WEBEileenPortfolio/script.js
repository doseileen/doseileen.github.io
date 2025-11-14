// MORE button toggle
const moreBtn = document.getElementById("moreBtn");
const hiddenCards = document.querySelectorAll(".more-hidden");

moreBtn.addEventListener("click", () => {
    const isOpen = moreBtn.classList.toggle("open");

    hiddenCards.forEach(card => {
        card.style.display = isOpen ? "block" : "none";
    });

    moreBtn.textContent = isOpen ? "LESS" : "MORE";
    moreBtn.setAttribute("aria-expanded", isOpen);
});

// 默认隐藏
hiddenCards.forEach(card => card.style.display = "none");
