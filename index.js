
document.addEventListener("DOMContentLoaded", function () {
    // Konsole bei Ladezeit
    console.log("ZAL'THERA aktiviert – Frequenz empfangen.");

    // Animationsfunktion für das Titel-Element
    let title = document.querySelector('h1');
    title.style.opacity = '0';
    title.style.transition = 'opacity 2s ease-in-out';
    
    setTimeout(function() {
        title.style.opacity = '1';
    }, 500);
    
    // Interaktive Schaltfläche: Erscheinen einer Nachricht bei Klick
    let button = document.createElement('button');
    button.innerHTML = 'Erfahre mehr';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#ff66cc';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '8px';
    button.style.cursor = 'pointer';
    
    // Fügt den Button unter den Titel ein
    document.body.appendChild(button);
    
    // Zeigt eine Nachricht bei Button-Klick
    button.addEventListener('click', function() {
        alert('Willkommen bei ZAL’THERA – Dein Reich ist bereit. Besuche uns bald wieder.');
    });
});
