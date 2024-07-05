// script.js
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
    let currentlyOpenAnswer = null;

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Close the currently open answer if there is one
            if (currentlyOpenAnswer && currentlyOpenAnswer !== answer) {
                currentlyOpenAnswer.style.display = 'none';
            }

            // Toggle the clicked answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                currentlyOpenAnswer = null;
            } else {
                answer.style.display = 'block';
                currentlyOpenAnswer = answer;
            }
        });
    });
});
