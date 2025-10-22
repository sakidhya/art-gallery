// Optional: Add interactivity if needed in the future
console.log("Page loaded");
// Select all filter buttons and gallery cards
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(button => button.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    galleryCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const uploadBox = document.getElementById('upload-box');
  const fileInput = document.getElementById('artwork-image');

  uploadBox.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      uploadBox.querySelector('p').textContent = `Selected file: ${fileName}`;
      uploadBox.style.borderColor = '#2563eb';
      uploadBox.style.color = '#2563eb';
    } else {
      uploadBox.querySelector('p').innerHTML = `Click to upload image<br>PNG, JPG, or WEBP up to 10MB`;
      uploadBox.style.borderColor = '#9ca3af';
      uploadBox.style.color = '#6b7280';
    }
  });

  const form = document.getElementById('artwork-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation - file input is required (already HTML required)
    if (fileInput.files.length === 0) {
      alert('Please upload an artwork image.');
      return;
    }

    // Here you can add further validation or send the form data to a server
    alert('Artwork submitted successfully! Thank you.');

    // Optionally reset form
    form.reset();
    uploadBox.querySelector('p').innerHTML = `Click to upload image<br>PNG, JPG, or WEBP up to 10MB`;
    uploadBox.style.borderColor = '#9ca3af';
    uploadBox.style.color = '#6b7280';
  });
});
