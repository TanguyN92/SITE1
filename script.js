
document.addEventListener('DOMContentLoaded', function () {
    const correctAnswers = {
        "question1": "Brasilia",
        "question2": "Lisbon",
        "question3": "Rabbat",
        "question4": "Kinshasa",
        "question5": "Paris",
        "question6": "Canberra",
        "question7": "Belgrade",
        "question8": "Houlan Bator",
        "question9": "Astana",
        "question10": "Naypyidaw"
    };

    const validateBtn = document.getElementById('validate-btn');
    const correctBtn = document.getElementById('correct-btn');

    correctBtn.addEventListener('click', function () {
        let score = 0;

        for (let questionId in correctAnswers) {
            const selectedAnswer = document.querySelector(`.question${questionId} input[type="radio"]:checked`);
            
            if (selectedAnswer) {
                const selectedValue = selectedAnswer.value;
                
                if (selectedValue === correctAnswers[questionId]) {
                    score++;
                    document.querySelector(`.question${questionId}`).style.color = 'green';
                } else {
                    document.querySelector(`.question${questionId}`).style.color = 'red';
                }
            }
        }

        alert(`Votre score est de ${score} sur ${Object.keys(correctAnswers).length}`);
    });
});