document.addEventListener("DOMContentLoaded", () => {
  const questionDiv = document.querySelector(".question-div");
  const buttons = document.querySelectorAll(".btn");
  const startBtn = document.querySelector(".start-btn");
  const secTimer = document.querySelector(".sec-timer");
  const timer = document.querySelector(".timer");
  const btnDiv = document.querySelector(".btn-div");

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
  function checkAnswer(option) {}

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      buttons.forEach((btn) => {
        if (btn.classList.contains("background")) {
          btn.classList.remove("background");
          console.log("hi");
        } else {
          if (event.target.nodeName === "BUTTON") {
            const userOption = event.target.id;
            event.target.classList.add("background");
            console.log("hello");
          }
        }
      });
    });
  });

  // event listener for starting the game
  startBtn.addEventListener("click", () => {
    let i = 9;
    function displaySeconds() {
      secTimer.innerText = i;
      i--;
      if (i < 0) {
        stopTimer(intervalId);
        secTimer.style.fontWeight = "bold";
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
