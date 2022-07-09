/**
 * [contact.js will send email using EmailJS
 * Credit: EmailJS documentation tutorial "Sending Emails Using EmailJS"
 * The API that is used is described here: https://www.emailjs.com/]
 */

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.init('vvPdJTW7PGVWTufFs');
        // generate a five digit number for the contact_number variable
        this.contact_number = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
        contactSubmitSuccess();
    });
}