document.getElementById('copyEmailBtn').addEventListener('click', copyEmail);
document.getElementById('copyEmailBtnContact').addEventListener('click', copyEmail);

function sendEmail() {
    window.location.href = 'mailto:' + document.getElementById('email').innerText;
}

function copyEmail() {
    const email = document.getElementById('email').innerText;
    navigator.clipboard.writeText(email);
}
