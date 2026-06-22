/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const targetDate = new Date("2026-12-31T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "La date est atteinte !";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
            `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

function toggleCard() {
  const card = document.getElementById("inviteCard");
  const arrow = document.getElementById("arrowBtn");

  card.classList.toggle("open");
  arrow.classList.toggle("open");
}
