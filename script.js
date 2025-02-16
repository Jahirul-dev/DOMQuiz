var form = document.querySelector(".quiz-form");
var answers = ["A", "B", "B", "B"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let count = 0;
  let winPer = 25;

  let correctAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  console.log(correctAnswer);
  console.log(answers);
  for (let i = 0; i < correctAnswer.length; i++) {
    if (correctAnswer[i] === answers[i]) {
      console.log("yes");
      count++;
    } else {
      console.log("no");
    }
  }
  console.log(count);
  let per = document.querySelector(".showPer");
  per.innerHTML = "Your winning percentage is " + winPer * count;
});
