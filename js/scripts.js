document.getElementById('copyEmailIcon').addEventListener('click', function() {
    copyEmail('email', 'copyEmailIcon', 'tooltipText');
});
document.getElementById('copyEmailIconContact').addEventListener('click', function() {
    copyEmail('email-contact', 'copyEmailIconContact', 'tooltipTextContact');
});

function sendEmail() {
    window.location.href = 'mailto:' + document.getElementById('email').innerText;
}

function copyEmail(emailId, iconId, tooltipId) {
    const email = document.getElementById(emailId).innerText;
    navigator.clipboard.writeText(email).then(() => {
        const icon = document.getElementById(iconId);
        const tooltip = document.getElementById(tooltipId);
        icon.src = 'img/icons/check.png';
        tooltip.innerText = 'Copiado!';
        
        setTimeout(() => {
            icon.src = 'img/icons/copy.png';
            tooltip.innerText = 'Copiar correo';
        }, 2000);
    });
}
