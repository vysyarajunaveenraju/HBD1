// Function to open the modal
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Function to handle message submission
document.getElementById("messageForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const messageDisplay = document.getElementById("messageDisplay");
    
    const newMessage = document.createElement("div");
    newMessage.textContent = `${name}: ${message}`;
    messageDisplay.appendChild(newMessage);
    
    this.reset(); // Clear the form
});
