// Redirect to the next page on click
document.body.addEventListener("click", function () {
    const nextPage = document.body.dataset.nextPage; // Get next page from data attribute
    if (nextPage) {
        window.location.href = nextPage;
    }
});

// Show hidden message on mouse movement
document.body.addEventListener("mousemove", function () {
    const hiddenMsg = document.querySelector(".hidden-msg");
    if (hiddenMsg) {
        hiddenMsg.style.opacity = "1";
    }
});
