function checkAnswers() {
    const answers = {
        q1: "11",
        q2: "Mars",
        q3: "Incan",
        q4: "Delta",
        q5: "Nike",
        q6: "3",
        q7: "True",
        q8: "42",
        q9: "Eyes",
        q10: "Mercury",
        q11: "Saturn",
        q12: "Nokia",
        q13: "South Africa",
        q14: "Hanuman",
        q15: "Vyasa"
    };

    const userAnswers = {};
    const form = document.getElementById("quiz-form");
    const feedback = document.getElementById("feedback");

    for (const input of form.elements) {
        if (input.type === "radio" && input.checked) {
            userAnswers[input.name] = input.value;
        }
    }

    let score = 0;
    for (const question in answers) {
        if (userAnswers[question] === answers[question]) {
            score++;
        }
    }

    feedback.innerHTML = `Your score: ${score} out of ${Object.keys(answers).length}`;
}
