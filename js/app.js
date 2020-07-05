const rightAnwsers = ['a', 'b', 'a', 'b'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector(".result")

form.addEventListener('submit', e => {
    e.preventDefault();

    // Converts string type value from questions into number types


    const userAnswers = [parseInt(form.q1.value), parseInt(form.q2.value), parseInt(form.q3.value), parseInt(form.q4.value), parseInt(form.q5.value), parseInt(form.q6.value), parseInt(form.q7.value), parseInt(form.q9.value), parseInt(form.q9.value), parseInt(form.q10.value), parseInt(form.q11.value)]

    var sum = userAnswers.reduce((a, b) => a + b, 0)
    result.classList.remove('d-none')

    if (sum >= 30 ) {
        document.querySelector('.description').textContent = "You have struggled to see the light at the end of the tunnel and seen your productive hours dwindle but don't fret the end is near! Enjoy the coming freedom."
        document.querySelector('span').textContent = "Just Barely Survived"
        
    } if (sum >= 20) {
        document.querySelector('.description').textContent = "The days were long but you did some good things. You learned a lot about yourself but didn't find your best self but hope is on the horizon. Enjoy the coming freedom."
        document.querySelector('span').textContent = "Survived"
    } if (sum >= 10) {
        document.querySelector('.description').textContent = "The switch to remote work and staying home bothered you little and you thrived as a true quarantine warrior."
        document.querySelector('span').textContent = "Surviving and Thriving"
    } else {
        document.querySelector('.description').textContent = "Some have adapted to quarantine but you were made for it. The extra introspection and free time has allowed you to blossom into the cave flower you always knew you were."
        document.querySelector('span').textContent = "Thriving to the Max"
    }

    console.log(sum)
    scrollTo(0,0)

    
    
    result.classList.remove('d-none')

    
})


// window object 

