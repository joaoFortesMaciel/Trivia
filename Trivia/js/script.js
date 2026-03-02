document.addEventListener('DOMContentLoaded', function() {
    
    const buttons = document.querySelectorAll('.choice');
    const feedback1 = document.querySelector('#feedback1');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => {
                btn.classList.remove('correct', 'incorrect');
            });

            if (this.dataset.correct === "true") {
                this.classList.add('correct');
                feedback1.textContent = "Correto!";
            } else {
                this.classList.add('incorrect');
                feedback1.textContent = "Incorreto";
            }
        });
    });

    const checkBtn = document.querySelector('#check-btn');
    const inputField = document.querySelector('#free-answer');
    const feedback2 = document.querySelector('#feedback2');

    checkBtn.addEventListener('click', function() {
        const answer = inputField.value.trim().toLowerCase();
        
        if (answer === "suíça" || answer === "suica" || answer === "switzerland") {
            inputField.classList.remove('incorrect');
            inputField.classList.add('correct');
            feedback2.textContent = "Correto!";
        } else {
            inputField.classList.remove('correct');
            inputField.classList.add('incorrect');
            feedback2.textContent = "Incorreto!";
        }
    });
});