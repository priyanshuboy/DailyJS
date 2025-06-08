document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Madrid", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      correctAnswer: "Mars"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "None of the above"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "#", "<!-- -->", "**"],
      correctAnswer: "//"
    },
    {
      question: "What is the value of π (pi) approximately?",
      options: ["3.14", "2.71", "1.61", "1.41"],
      correctAnswer: "3.14"
    },
    {
      question: "What is 9 x 8?",
      options: ["72", "81", "63", "69"],
      correctAnswer: "72"
    }
  ];

  let currentIndex = 0;
  let score = 0;

  const questionText = document.getElementById("question-text"); // FIXED
  const optionsContainer = document.getElementById("options-container");
  const nextBtn = document.getElementById("Next");
  const submitBtn = document.getElementById("Submit");

  function showQuestion() {
    const currentQuestion = questions[currentIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ""; // clear previous options

    currentQuestion.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("Button");
      btn.onclick = () => {
        if (option === currentQuestion.correctAnswer) {
          score++;
        }
        disableOptions(option, currentQuestion.correctAnswer);
      };
      optionsContainer.appendChild(btn);
    });
  }

  function disableOptions(selected, correct) {
    const allButtons = optionsContainer.querySelectorAll("button");
    allButtons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.style.backgroundColor = "#4CAF50"; // green for correct
      } else if (btn.textContent === selected) {
        btn.style.backgroundColor = "#f44336"; // red for wrong
      }
    });
  }

  nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      questionText.textContent = "🎉 Quiz Completed!";
      optionsContainer.innerHTML = `✅ Your Score: <strong>${score}/${questions.length}</strong>`;
      nextBtn.style.display = "none";
      submitBtn.style.display = "none";
    }
  };

  submitBtn.onclick = () => {
    alert(`Your final score is ${score}/${questions.length}`);
  };

  showQuestion();
});
