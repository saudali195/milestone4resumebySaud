document.getElementById('ResumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Handle Profile Picture
    const profilePictureInput = document.getElementById('profilePicture');
    let profilePictureURL = '';

    if (profilePictureInput && profilePictureInput.files && profilePictureInput.files[0]) {
        const profilePictureFile = profilePictureInput.files[0];
        profilePictureURL = URL.createObjectURL(profilePictureFile); // Create a URL for the image
    }

    // Generate resume output
    const resumeContainer = document.getElementById('resumeOutputContainer');
    resumeContainer.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Profile Picture</h4>
        <img src="${profilePictureURL}" alt="Profile Picture" style="width: 150px; height: 150px; object-fit: cover; border: 2px solid #ccc;">
    `;
});
