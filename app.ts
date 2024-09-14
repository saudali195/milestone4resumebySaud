document.getElementById("Resume")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect input data with null-checking
    const name = (document.getElementById("name") as HTMLInputElement)?.value || '';
    const email = (document.getElementById("email") as HTMLInputElement)?.value || '';
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value || '';
    const education = (document.getElementById("education") as HTMLTextAreaElement)?.value || '';
    const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value || '';
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)?.value || '';

    // Create the resume template
    const resume = `
    <div id="resumeOutput" style="font-family: Times, serif; padding: 20px; background-color: #f8f9fa;">
        <h2><span id ="edit-name" class= "editable"> ${name} </span></h2>
        <p><strong>Email:</strong> <span id ="edit-edit" class= "editable"> ${email} </span> </p>
        <p><strong>Phone:</strong> <span id ="edit-phone" class= "editable"> ${phone} </span> </p>

        <h3>Education</h3>
        <p id ="edit-education" class= "editable">${education}</p>

        <h3>Work Experience</h3>
        <p id ="edit-experience" class= "editable">${experience}</p>
        
        <h3>Skills</h3>
        <p id ="edit-skills" class= "editable">${skills}</p>
    </div>
    `;




    // Remove the previous resume if it exists
    let outputDiv = document.getElementById("resumeOutput");
    if (outputDiv) {
        outputDiv.remove();
        makeEditable();
    }
    

    // Append the new resume to the body
    outputDiv = document.createElement("div");
    outputDiv.innerHTML = resume;
    document.body.appendChild(outputDiv);
});


function makeEditable() {
    const editableElements= document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
        element.addEventListener('click',function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            //replace Content 
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN' ){
                const input = document.createElement('input')
                input.type = "text"
                input.value = currentValue
                input.classList.add('editing-input')
                
                input.addEventListener('blur' , function(){
                    currentElement.textContent = input.value
                    currentElement.style.display = 'inline'
                    input.remove()
                })



                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus();
            }
        })
    })
}