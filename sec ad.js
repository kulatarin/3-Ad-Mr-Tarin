// Show welcome alert when page loads
window.addEventListener('DOMContentLoaded', () => {
  alert("🍌 Welcome to Mr. Tarin Muffins! Ready to order some banana joy?");
  updateClock();
});

// Confirm before making a call or sending a WhatsApp message
function confirmAction(action) {
  return confirm(`Are you sure you want to ${action} Mr. Tarin Muffins?`);
}

// Attach event handlers to buttons
document.addEventListener('DOMContentLoaded', () => {
  const callBtn = document.querySelector('.btn.call');
  const whatsappBtn = document.querySelector('.btn.whatsapp');

  callBtn.addEventListener('click', (e) => {
    if (!confirmAction('call')) {
      e.preventDefault();
    }
  });

  whatsappBtn.addEventListener('click', (e) => {
    if (!confirmAction('message on WhatsApp')) {
      e.preventDefault();
    }
  });
});

// Clock for footer
function updateClock() {
  const footer = document.querySelector('.footer');
  const now = new Date();
  const ugandaTime = now.toLocaleTimeString('en-UG', { timeZone: 'Africa/Kampala' });
  footer.innerHTML = `&copy; 2025 Mr. Tarin Muffins – Baked with Heart, Delivered with Care | Time: ${ugandaTime}`;
  setTimeout(updateClock, 1000);
}
