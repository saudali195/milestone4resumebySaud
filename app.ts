document.getElementById("Resume")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect input data with null-checking
    const name = (document.getElementById("name") as HTMLInputElement)?.value || '';
    const email = (document.getElementById("email") as HTMLInputElement)?.value || '';
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value || '';
    const education = (document.getElementById("education") as HTMLTextAreaElement)?.value || '';
    const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value || '';
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)?.value || '';
    
    // Handle profile picture
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    let profilePictureURL = '';
    
    if (profilePictureInput && profilePictureInput.files && profilePictureInput.files[0]) {
        const profilePictureFile = profilePictureInput.files[0];
        profilePictureURL = URL.createObjectURL(profilePictureFile); // Create a URL for the image
        console.log("Profile picture file found: ", profilePictureURL); // Debugging line
    
        
        // URL.revokeObjectURL(profilePictureURL); 
    } else {
        console.log("No profile picture file selected.");
    }
    

    // Create the resume template with the profile picture
    const resume = `
    <div id="resumeOutput" style="font-family: Times, serif; padding: 20px; background-color: #f8f9fa;">
        <h2><span id="edit-name" class="editable">${name}</span></h2>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>

        <h3>Work Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>

        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" style="max-width: 150px; max-height: 150px;"/>` : ''}
    </div>
    `;

    // Insert the resume into the DOM
    const resumeContainer = document.getElementById("resumeOutputContainer");
    if (resumeContainer) {
        resumeContainer.innerHTML = resume;

        // Clean up object URL after use to release memory
        if (profilePictureURL) {
            URL.revokeObjectURL(profilePictureURL);
        }
    }
});
