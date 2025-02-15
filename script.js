var form = document.querySelector('.quiz-form')
var answers = ["A","B","B","A"]

form.addEventListener('submit', e=>{
    e.preventDefault();
    let count = 0; 

    let correctAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ];
    

    console.log(correctAnswer);
    
    correctAnswer.forEach(element => {
        console.log(element);
        
    });
})   