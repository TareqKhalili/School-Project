/* 
When the user clicks the “Submit” button,
 the JavaScript code must verify that all required fields are filled (non-empty), 
 if not, an Alert message would be displayed to the user listing the input fields that
 are empty, in addition,
 the borders of these fields must be highlighted.
*/

const form = document.getElementsByTagName('form')[0];
const required = document.getElementsByClassName('required');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let empty = [];
    for (let i = 0; i < required.length; i++) {
        if (required[i].value == ' ' || required[i].value == '') {
            empty.push(required[i].name);
            required[i].classList = "required red-border";
        }
        else {
            required[i].classList = "required";
        }
    }
    if (empty.length == 0) {
        form.submit()
        alert("form has been submited");
        reload()
    }
    else {
        let err = empty.join('\n');
        alert('these fieilds are required: \n' + err);    
    }
})


/* 
When the user starts typing into a highlighted input field,
the JavaScript should remove the highlight.
*/

/* 
3. The required fields must be filled in order, 
if the user tried to skip a required field and jump into the next field,
 the JavaScript code should not let him/her type into the next field.*/
for (let i = 0; i < required.length; i++) {
    required[i].addEventListener('keypress', () => {
        required[i].classList = 'required';
        required[i+1].removeAttribute('readonly');
    })
}


/* 

When the user clicks the “Save” button,
 the JavaScript code extracts the username from the email address (e.g. myemail@gmail.com, 
in this example, the user name is myemail) 
and displays the following message: “The application of [user name] is saved!]
*/

document.getElementById('save').addEventListener('click', () => {
    const name = required[2].value.split('@')[0];
   alert(`The application of ${name} is saved!`);
})



document.getElementById('reseter').addEventListener('click', () => {
    location.reload();

})


/* The graduation date should be within year from the date the application is submitted */



window.onload = function() {
    let date = new Date();
    let day = date.getDay().toString();
    day.length == 1 ? day = '0' + day: "";
    let month = date.getMonth().toString();
    month.length == 1 ? month = '0' + month: "";
    let yearMin = date.getFullYear();
    let yearMax = yearMin + 1;
    yaerMin = yearMin.toString();
    yearMax = yearMax.toString();
    let dateInput = document.getElementById('date');
    dateInput.max = `${yearMax}-${month}-${day}`;
    dateInput.min = `${yearMin}-${month}-${day}`;
}