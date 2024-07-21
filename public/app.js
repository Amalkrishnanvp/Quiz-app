document.addEventListener("DOMContentLoaded", () => {
  const questionDiv = document.querySelector(".question-div");
  const buttons = document.querySelectorAll(".btn");
  const startBtn = document.querySelector(".start-btn");
  const secTimer = document.querySelector(".sec-timer");
  const currentQuestion = document.querySelector(".current-question");
  const totalQuestion = document.querySelector(".total-question");
  const nextBtn = document.querySelector(".next-btn");
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
    option1: "America",
    option2: "China",
    option3: "India",
    option4: "Africa",
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
        questionDiv.innerText = question1.question;
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].innerText = question1[`option${i + 1}`];
        }
        break;

      case 2:
        questionDiv.innerText = question2.question;
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].innerText = question2[`option${i + 1}`];
        }
        break;

      default:
        break;
    }
  }

  question();

  // function to set the question number
  function questionNumberSetter() {
    if (questionNumber <= total) {
      currentQuestion.innerText = questionNumber;
    }
  }
  questionNumberSetter();

  // function to set the total question number;
  function totalQuestionNumberSetter() {
    totalQuestion.innerText = total;
  }
  totalQuestionNumberSetter();

  // function to check answer
  function checkAnswer() {
    switch (questionNumber) {
      case 1:
        if (userAnswer === buttons[0].id) {
          console.log("correct answer");
        } else {
          console.log("wrong answer");
          document.getElementById(userAnswer).style.backgroundColor =
            "rgb(230, 58, 58)";
        }
        break;

        case 2:
          if (userAnswer === buttons[2].id) {
            console.log("correct answer");
          } else {
            console.log("wrong answer");
            document.getElementById(userAnswer).style.backgroundColor =
              "rgb(230, 58, 58)";
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

  // function to disabling the buttons
  function disableBtn() {
    // disbaling the buttons after starting the game
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  // function to enable buttons
  function enableBtn() {
    // enabling the buttons after starting the game
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  // function to show answer
  function answerShower(questionNumber) {
    switch (questionNumber) {
      case 1:
        buttons[0].classList.add("background-green");
        break;

        case 2:
        buttons[2].classList.add("background-green");
        break;

      default:
        break;
    }
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
        answerShower(questionNumber);
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

  // event listener for moving to next question
  nextBtn.addEventListener("click", () => {
    questionNumber++;
    questionNumberSetter();
    question();
  });
});
