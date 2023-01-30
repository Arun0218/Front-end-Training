const formDate = new Date();
document.getElementById("dob").setAttribute("max", ((formDate.getFullYear() - 18) + "-" + formDate.getMonth() + 1 + "-" +
    formDate.getDate()).toString());
document.getElementById("dob").setAttribute("min", ((formDate.getFullYear() - 80) + "-" + formDate.getMonth() + 1 + "-" +
    formDate.getDate()).toString());

function myFunction(form) {
    const gender = document.getElementsByClassName("radioCheck");
    let sex;
    for (let index = 0; index < gender.length; index++) {
        if (gender[index].checked) {
            sex = gender[index].value;
        }
    }
    const lang = document.getElementsByClassName("lang");
    const Language = [];
    for (let index = 0; index < lang.length; index++) {
        if (lang[index].checked) {
            Language.push(lang[index].value);
        }
    }
    const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("mail").value,
        phoneNumber: document.getElementById("PhoneNumber").value,
        dateOfBirth: document.getElementById("dob").value,
        gender: sex,
        designation: document.getElementById("designation").value,
        knownLanguage: Language
    };
    if (0 >= Language.length) {
        alert('Atleast select one language');
        return false;
    }

    const firstNamePattern = data.firstName.match(/^([A-Za-z]{3,30}[ ]?){1,3}$/g);
    const lastNamePattern = data.lastName.match(/^[A-Za-z]{1,30}$/g);
    const mailPattern = data.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g);
    const phoneNumberPattern = data.phoneNumber.match(/^[6-9][0-9]{9}$/g);

    if (firstNamePattern != data.firstName) {
        alert('Enter the First Name minimum 3 characters and no Special Charaters allowed');
        return false;
    }

    if (lastNamePattern != data.lastName) {
        alert('Enter the Last Name minimum 1 characters and no Special Charaters allowed');
        return false;
    }

    if (mailPattern != data.email) {
        alert('Enter the Proper mail id ex: sample@gmail.com');
        return false;
    }

    if (phoneNumberPattern != data.phoneNumber) {
        alert('Enter a valid phone number with 10 digits and no special Charaters allowed ex: 9876543210');
        return false;
    }

    if (data.designation == "") {
        alert('Please Select your designation');
        return false;
    }

    display(data);
}
function display(data) {
    console.dir(data);
    document.write("First Name = " + data.firstName + "<br>" +
        "Last Name = " + data.lastName + "<br>" +
        "PhoneNumber = " + data.phoneNumber + "<br>" +
        "Email-Id = " + data.email + "<br>" +
        "DateOfBirth = " + data.dateOfBirth + "<br>" +
        "Gender = " + data.gender + "<br>" +
        "Designation = " + data.designation + "<br>" +
        "Language Known = " + data.knownLanguage
    );
}