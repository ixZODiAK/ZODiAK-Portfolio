 const textElement = document.getElementById('typewriter');
        const phrases = [
            "Web Pentisting",
            "Pentist System", 
            "Testing Firewalls...",
             "Checking OWASP Top 10...", 
             "Python Script Loaded...", 
             "Welcome to ZODiAK World."
            ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 2000); // انتظر قبل المسح
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }

        document.addEventListener('DOMContentLoaded', type);

        function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// إغلاق القائمة عند الضغط على أي لينك
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

