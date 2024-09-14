var _a;
(_a = document.getElementById("Resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault(); // Prevent form from submitting
    // Collect input data with null-checking
    var name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || '';
    var email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || '';
    var phone = ((_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value) || '';
    var education = ((_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value) || '';
    var experience = ((_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value) || '';
    var skills = ((_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value) || '';
    // Create the resume template
    var resume = "\n    <div id=\"resumeOutput\" style=\"font-family: Times, serif; padding: 20px; background-color: #f8f9fa;\">\n        <h2><span id =\"edit-name\" class= \"editable\"> ".concat(name, " </span></h2>\n        <p><strong>Email:</strong> <span id =\"edit-edit\" class= \"editable\"> ").concat(email, " </span> </p>\n        <p><strong>Phone:</strong> <span id =\"edit-phone\" class= \"editable\"> ").concat(phone, " </span> </p>\n\n        <h3>Education</h3>\n        <p id =\"edit-education\" class= \"editable\">").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p id =\"edit-experience\" class= \"editable\">").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p id =\"edit-skills\" class= \"editable\">").concat(skills, "</p>\n    </div>\n    ");
    // Remove the previous resume if it exists
    var outputDiv = document.getElementById("resumeOutput");
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
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace Content 
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
