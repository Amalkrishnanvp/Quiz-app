document.addEventListener("DOMContentLoaded", () => {
  const questionDiv = document.querySelector(".question-div");
  const buttons = document.querySelectorAll(".btn");
  const startBtn = document.querySelector(".start-btn");
  const secTimer = document.querySelector(".sec-timer");
  const timer = document.querySelector(".timer");
  const btnDiv = document.querySelector(".btn-div");
  let userOption;
  let questionNumber;

  disableBtn();
  // creating object for storing questions and answers
  const question1 = {
    question: "What is the color of the sky?",
    answer: "Blue",
    option1: "Red",
    option2: "Pink",
    option3: "Green",
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

  // for question 1
  questionDiv.innerText = question1.question;
  buttons[0].innerText = question1.answer;
  buttons[1].innerText = question1.option1;
  buttons[2].innerText = question1.option2;
  buttons[3].innerText = question1.option3;

  // function to check answer
  function checkAnswer() {}

  buttons.forEach((button) => {
    disableBtn();
    // to remove background of other options when selecting one option
    button.addEventListener("click", (event) => {
      buttons.forEach((btn) => {
        btn.classList.remove("background");
        // adding background for only the selected option
        if (event.target.nodeName === "BUTTON") {
          userOption = event.target.id;
          event.target.classList.add("background");
        }
      });
    });
  });

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
