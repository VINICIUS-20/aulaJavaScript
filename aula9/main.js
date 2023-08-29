const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const posicaoX = Math.random() * (window.innerWidth - 100);
    const posicaoY = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${posicaoX}px`;
    noBtn.style.top = `${posicaoY}px`;
});

yesBtn.addEventListener("click", () => {

    const container = document.querySelector(".container");
    const textNew = document.createElement("p");
    textNew.textContent = "Thank you!";
    textNew.classList.add("textNew");
    container.appendChild(textNew);
    
    setTimeout(() => {
        textNew.remove();
    },2000);
})