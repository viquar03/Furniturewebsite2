document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Button
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));

    // Filter Buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                card.classList.toggle("hide", filter !== "all" && card.dataset.cat !== filter);
            });
        });
    });

    // Modal Buttons
    const modal = document.getElementById("modal");
    const modalLabel = document.getElementById("modalLabel");
    const openModal = (title) => {
        modalLabel.textContent = "Selected: " + title;
        modal.style.display = "flex";
    };

    document.querySelectorAll(".inquire-btn").forEach(btn => {
        btn.addEventListener("click", () => openModal(btn.dataset.item));
    });
    document.getElementById("bookBtn").addEventListener("click", () => openModal("Free Home Measurement"));
    document.getElementById("closeModal").addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

    document.getElementById("modalForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! We will call you back shortly.");
        e.target.reset();
        modal.style.display = "none";
    });

    // Contact Form
    document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        document.getElementById("statusMsg").textContent = `Thanks ${name}! Your request has been sent.`;
        e.target.reset();
    });

    // WhatsApp Button
    document.getElementById("waBtn").addEventListener("click", () => {
        window.open("https://wa.me/919876543210?text=Hello%20Nordic%20Timber!%20I%20want%20a%20quote%20for%20furniture.", "_blank");
    });
});