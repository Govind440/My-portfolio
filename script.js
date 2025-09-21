// JavaScript for dynamic skill buttons and certificate display

document.addEventListener('DOMContentLoaded', () => {
  const skillButtons = document.querySelectorAll('.skill-btn');
  const certificates = document.querySelectorAll('.skill-certificate');

  skillButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      skillButtons.forEach((b) => b.classList.remove('active'));
      // Hide all certificates
      certificates.forEach((cert) => (cert.style.display = 'none'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Show related certificate
      const skill = btn.getAttribute('data-skill');
      const certToShow = document.getElementById(`certificate-${skill}`);
      if (certToShow) {
        certToShow.style.display = 'block';
      }
    });
  });

  // Power BI file upload handling
  const uploadBtn = document.getElementById('upload-powerbi-btn');
  const fileInput = document.getElementById('powerbi-upload');
  const fileNameDisplay = document.getElementById('powerbi-file-name');

  if (uploadBtn && fileInput && fileNameDisplay) {
    uploadBtn.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileNameDisplay.textContent = `Uploaded file: ${file.name}`;
      } else {
        fileNameDisplay.textContent = '';
      }
    });
  }

  // Optionally, activate the first skill button on load
  if (skillButtons.length > 0) {
    skillButtons[0].click();
  }
});
