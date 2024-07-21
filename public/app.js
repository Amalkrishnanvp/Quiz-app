document.addEventListener("DOMContentLoaded", () => {
  const questionDiv = document.querySelector(".question-div");
  const buttons = document.querySelectorAll(".btn");
  const startBtn = document.querySelector(".start-btn");
  const secTimer = document.querySelector(".sec-timer");
  const timer = document.querySelector(".timer");
  const btnDiv = document.querySelector(".btn-div");
  const currentQuestion = document.querySelector(".current-question");
  const totalQuestion = document.querySelector(".total-question");
  let userAnswer;
  let questionNumber = 1;
  let total = 3;

  disableBtn();
  // creating object for storing questions and answers
  const question1 = {
    question: "What is the color of the sky?",
    option1: "Blue",
    option2: "Red",
    option3: "Pink",
    option4: "Green",
  };

  const question2 = {
    question: "Which country has highest population?",
    answer: "India",
    option1: "China",
    option2: "America",
    option3: "Africa",
  };

  const question3 = {
    question: "How many states in kerala?",
    answer: "14",
    option1: "12",
    option2: "13",
    option3: "15",
  };

  // for adding questions and answers
  function question() {
    switch (questionNumber) {
      case 1:
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].innerText = question1[`option${i + 1}`];
        }
        break;

      default:
        break;
    }
  }
  question();
  currentQuestion.innerText = questionNumber;
  totalQuestion.innerText = total;

  // function to check answer
  function checkAnswer() {
    switch (questionNumber) {
      case 1:
        if ((userAnswer = buttons[0].id)) {
          console.log("correct answer");
        } else {
          console.log("wrong answer");
        }
        break;

      default:
        break;
    }
  }

  buttons.forEach((button) => {
    disableBtn();
    button.addEventListener("click", (event) => {
      removeBackground();
      // adding background for only the selected option
      if (event.target.nodeName === "BUTTON") {
        userOption = event.target.id;
        event.target.classList.add("background");
        userAnswer = event.target.id;
      }
    });
  });

  // to remove background of other options when selecting one option
  function removeBackground() {
    buttons.forEach((btn) => {
      btn.classList.remove("background");
    });
  }

  function disableBtn() {
    // enabling the buttons after starting the game
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  function enableBtn() {
    // enabling the buttons after starting the game
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  // event listener for starting the game
  startBtn.addEventListener("click", () => {
    enableBtn();
    let i = 9;
    function displaySeconds() {
      secTimer.innerText = i;
      i--;
      if (i < 0) {
        stopTimer(intervalId);
        disableBtn();
        checkAnswer();
      }
    }
    // function for creating the timer
    const intervalId = setInterval(displaySeconds, 1000);
  });

  // function to stop the timer
  function stopTimer(intervalId) {
    clearInterval(intervalId);
  }
});
