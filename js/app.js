'use strict'

window.addEventListener('load',()=>{
    let questions = document.querySelectorAll('.card__question');
    let question = document.querySelectorAll('.card__question_content');
    
    questions.forEach((element,index) => {
        console.log(index);
        let title = questions[index].querySelector('h2');
        element.addEventListener('click',()=>{
        
            console.log(question[index]);           
            if (question[index].classList.contains('mh')) {
                question[index].classList.remove('mh');
                title.style.fontWeight = 400;
            } else {
                question.forEach(elementQ => {
                    if(elementQ.classList.contains("mh")){
                        elementQ.classList.remove("mh");
                        title.style.fontWeight = 400;
                    }
                });
                question[index].classList.add('mh');
                title.style.fontWeight = 700;


            }
        })
    });

    // for(let i = 0; i <= questions.length; i++){
    //     questions[i].addEventListener('click',()=>{
    //         let questionChild = questions[i].firstChild;
    //         console.log(questionChild);
    //         if(question[i].classList.contains('mh')){
    //             question[i].classList.remove('mh');
    //         }else{
    //             question[i].classList.add('mh');
    //         }
    //     });
    // }
});