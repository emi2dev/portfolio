// Mensajes para el efecto máquina de escribir
const messages = [
    "Hola, soy Emilio Martín Torres.",
    "Técnico de soporte y sistemas.",
    "Me encanta montar y administrar servidores."
];

let msgIndex = 0;
let charIndex = 0;
const speed = 80; // ms por carácter

const typewriterElement = document.getElementById("typewriter");

// Animación de texto tipo máquina de escribir
function type() {
    if (!typewriterElement) return;

    const current = messages[msgIndex];
    typewriterElement.textContent = current.slice(0, charIndex);

    charIndex++;

    if (charIndex <= current.length) {
        setTimeout(type, speed);
    } else {
        // Pausa y pasa al siguiente mensaje
        setTimeout(() => {
            charIndex = 0;
            msgIndex = (msgIndex + 1) % messages.length;
            type();
        }, 1400);
    }
}

// Animar métricas tipo contador
function animateMetrics() {
    const metrics = document.querySelectorAll(".metric-value");
    metrics.forEach(metric => {
        const target = parseInt(metric.getAttribute("data-target"), 10);
        let value = 0;
        const increment = Math.max(1, Math.floor(target / 40)); // 40 pasos aprox

        function update() {
            value += increment;
            if (value >= target) {
                value = target;
                metric.textContent = value;
            } else {
                metric.textContent = value;
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

// Año automático en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Protección de email contra bots (Click to reveal whole card)
function setupContactReveal() {
    const card = document.getElementById("contact-card");
    const emailElement = document.getElementById("contact-email");

    if (card) {
        card.addEventListener("click", function () {
            if (this.classList.contains("encrypted")) {
                this.classList.remove("encrypted");

                // Revelar email si aún no está puesto
                if (emailElement && emailElement.textContent === '"..."') {
                    const user = "emiliomartintorres2";
                    const domain = "gmail.com";
                    emailElement.textContent = `"${user}@${domain}"`;
                }
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
    animateMetrics();
    setupContactReveal();
});
