/*
 * [contact.js will send email feedback using EmailJS
 * Credit: EmailJS documentation tutorial "Sending Emails Using EmailJS"
 * The API that is used is described here: https://www.emailjs.com/]
 */

(function () {
    emailjs.init('vvPdJTW7PGVWTufFs');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number = Math.random() * 100000;
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                contactSubmitSuccess();
            }, function (error) {
                contactSubmitError();
            });
    });
};