let form = document.querySelector('.quiz-form')
const answers = ["A","B","c"]

form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;

    let submitAnswers = [form.q1.value, form.q2.value]
})   