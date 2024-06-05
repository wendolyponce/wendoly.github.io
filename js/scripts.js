function sendEmail() {
    window.location.href = 'mailto:' + document.getElementById('email').innerText;
}

function copyEmail() {
    const email = document.getElementById('email').innerText;
    navigator.clipboard.writeText(email).then(() => {
        alert('Correo copiado al portapapeles');
    });
}
