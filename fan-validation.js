document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('fanForm');
    const nameField = document.getElementById('fanName');
    const emailField = document.getElementById('fanEmail');
    const teamField = document.getElementById('favoriteTeam');
    const errorBox = document.getElementById('formError');

    if (!form || !nameField || !emailField || !teamField || !errorBox) {
        return;
    }

    form.addEventListener('submit', function (event) {
        let errors = [];

        if (nameField.value.trim().length < 2) {
            errors.push('Name must be at least 2 characters.');
        }

        if (!emailField.value.includes('@') || !emailField.value.includes('.')) {
            errors.push('Please enter a valid email address.');
        }

        if (teamField.value.trim() === '') {
            errors.push('Favorite team cannot be empty.');
        }

        if (errors.length > 0) {
            event.preventDefault();
            errorBox.textContent = errors.join(' ');
            console.log('Form invalid:', errors);
        } else {
            errorBox.textContent = '';
            console.log('Form submitted successfully');
        }
    });
});
