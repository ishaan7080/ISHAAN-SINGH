const passwordInput = document.getElementById('password');
const strengthPara = document.getElementById('strength');
const checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    strengthPara.textContent = `Password Strength: ${strength}`;
    strengthPara.className = getStrengthClass(strength);
});

function checkPasswordStrength(password) {
    let strength = 0;

    // Check for length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check for uppercase letter
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check for lowercase letter
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Check for number
    if (/\d/.test(password)) {
        strength += 1;
    }

    // Check for special character
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
    }

    if (strength === 0) {
        return 'Very Weak';
    } else if (strength <= 2) {
        return 'Weak';
    } else if (strength <= 3) {
        return 'Average';
    } else {
        return 'Strong';
    }
}

function getStrengthClass(strength) {
    if (strength === 'Very Weak' || strength === 'Weak') {
        return 'weak';
    } else if (strength === 'Average') {
        return 'average';
    } else {
        return 'strong';
    }
}