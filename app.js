document.addEventListener("DOMContentLoaded", () => {
  const questionDiv = document.querySelector(".question-div");
  const buttons = document.querySelectorAll(".btn");
  const startBtn = document.querySelector(".start-btn");
  const secTimer = document.querySelector(".sec-timer");
  const currentQuestion = document.querySelector(".current-question");
  const totalQuestion = document.querySelector(".total-question");
  const nextBtn = document.querySelector(".next-btn");
  const endBtn = document.querySelector(".end-btn");
  const scoreShower = document.querySelector(".score-shower");
  let userAnswer = "";
  let questionNumber = 1;
  let total = 5;
  let userScore = 0;
  let globalIntervalId;

  disableBtn();
  scoreUpdater();
  secTimer.innerText = 10;

  // creating object for storing questions and answers
  const question1 = {
    question: "What is the capital city of France?",
    option1: "Paris",
    option2: "Berlin",
    option3: "Madrid",
    option4: "Rome",
  };

  const question2 = {
    question: "Who wrote the play 'Romeo and Juliet'?",
    option1: "Charles Dickens",
    option2: "Mark Twain",
    option3: "William Shakespeare",
    option4: "Jane Austen",
  };

  const question3 = {
    question: "In which year did the Titanic sink?",
    option1: "1905",
    option2: "1935",
    option3: "1912",
    option4: "1920",
  };

  const question4 = {
    question: "Which country is known as the Land of the Rising Sun?",
    option1: "China",
    option2: "Japan",
    option3: "South Korea",
    option4: "Thailand",
  };

  const question5 = {
    question: "Who painted the Mona Lisa?",
    option1: "Vincent van Gogh",
    option2: "Pablo Picasso",
    option3: "Michelangelo",
    option4: "Leonardo da Vinci",
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

      case 3:
        questionDiv.innerText = question3.question;
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].innerText = question3[`option${i + 1}`];
        }
        break;

      case 4:
        questionDiv.innerText = question4.question;
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].innerText = question4[`option${i + 1}`];
        }
        break;

      case 5:
        questionDiv.innerText = question5.question;
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].innerText = question5[`option${i + 1}`];
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

  // function to set the total question number
  function totalQuestionNumberSetter() {
    totalQuestion.innerText = total;
  }
  totalQuestionNumberSetter();

  // function to check answer
  function checkAnswer() {
    if (userAnswer != "") {
      switch (questionNumber) {
        case 1:
          if (userAnswer === buttons[0].id) {
            console.log("correct answer");
            userScore++;
          } else {
            console.log("wrong answer");
            document.getElementById(userAnswer).classList.add("background-red");
          }
          break;

        case 2:
          if (userAnswer === buttons[2].id) {
            console.log("correct answer");
            userScore++;
          } else {
            document.getElementById(userAnswer).classList.add("background-red");
          }
          break;

        case 3:
          if (userAnswer === buttons[2].id) {
            console.log("correct answer");
            userScore++;
          } else {
            document.getElementById(userAnswer).classList.add("background-red");
          }
          break;

        case 4:
          if (userAnswer === buttons[1].id) {
            console.log("correct answer");
            userScore++;
          } else {
            document.getElementById(userAnswer).classList.add("background-red");
          }
          break;

        case 5:
          if (userAnswer === buttons[3].id) {
            console.log("correct answer");
            userScore++;
          } else {
            document.getElementById(userAnswer).classList.add("background-red");
          }
          break;

        default:
          break;
      }
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

      case 3:
        buttons[2].classList.add("background-green");
        break;

      case 4:
        buttons[1].classList.add("background-green");
        break;

      case 5:
        buttons[1].classList.add("background-green");
        break;

      default:
        break;
    }
  }

  // function to end the game
  function endGame() {
    disableBtn();
    stopTimer(globalIntervalId);
    secTimer.innerText = 0;
    removeColor();
    removeBackground();
    questionNumber = 1;
    questionNumberSetter();
    question();
    userScore = 0;
    scoreUpdater();
    userAnswer = "";
    nextBtn.classList.add("invisible");
  }

  endBtn.addEventListener("click", () => {
    startBtn.style.display = "initial";
    endBtn.style.display = "none";
    endGame();
  });

  // to update the score
  function scoreUpdater() {
    scoreShower.innerText = userScore;
  }

  // to start the timer
  function startTimer() {
    secTimer.innerText = 10;
    let i = 9;
    function displaySeconds() {
      secTimer.innerText = i;
      i--;
      if (i < 0) {
        if (questionNumber < 5) {
          showNextBtn();
        }
        stopTimer(intervalId);
        disableBtn();
        answerShower(questionNumber);
        checkAnswer();
        scoreUpdater();
      }
    }
    // function for creating the timer
    const intervalId = setInterval(displaySeconds, 1000);
    globalIntervalId = intervalId;
  }

  // function to show the next button
  function showNextBtn() {
    nextBtn.classList.remove("invisible");
  }

  nextBtn.addEventListener("click", () => {
    nextBtn.classList.add("invisible");
  });

  // event listener for starting the game
  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    endBtn.style.display = "initial";
    enableBtn();
    startTimer();
  });

  // function to stop the timer
  function stopTimer(intervalId) {
    clearInterval(intervalId);
  }

  // // function to remove background of options
  function removeColor() {
    buttons.forEach((btn) => {
      if (btn.classList.contains("background-green")) {
        btn.classList.remove("background-green");
      } else if (btn.classList.contains("background-red")) {
        btn.classList.remove("background-red");
      }
    });
  }

  // event listener for moving to next question
  nextBtn.addEventListener("click", () => {
    questionNumber++;
    userAnswer = "";
    questionNumberSetter();
    question();
    removeColor();
    enableBtn();
    removeBackground();
    startTimer();
  });
});
