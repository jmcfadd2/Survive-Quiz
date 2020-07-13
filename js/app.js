const rightAnwsers = ['a', 'b', 'a', 'b'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector(".result")
const quest3 = document.getElementById('quest-3')
const quest5 = document.getElementById('quest-5')
const quest7 = document.getElementById('quest-7')
const q3Yes = document.getElementById('q3Yes')
const q5Yes = document.getElementById('q5Yes')
const q7Yes = document.getElementById('q7Yes')
const q3No = document.getElementById('q3No')
const q5No = document.getElementById('q5No')
const q7No = document.getElementById('q7No')

// Control Flow for yes/no questions. Displays certain questions based on the answer of previous questions

quest3.addEventListener('change', (event) => {

    if (q3Yes.checked) {
        document.querySelector('#quest-4').classList.remove('d-none')
    }

    if (q3No.checked) {
        document.querySelector('#quest-4').classList.add('d-none')
    }
})

quest5.addEventListener('change', (event) => {

    if (q5Yes.checked) {
        document.querySelector('#quest-6').classList.remove('d-none')
    }

    if (q5No.checked) {
        document.querySelector('#quest-6').classList.add('d-none')
    }
})

quest7.addEventListener('change', (event) => {

    if (q7Yes.checked) {
        document.querySelector('#quest-8').classList.remove('d-none')
    }

    if (q7No.checked) {
        document.querySelector('#quest-8').classList.add('d-none')
    }
})


// Creates the methods to be completed when form is submitted

form.addEventListener('submit', e => {
    e.preventDefault();

    // Converts string type value from questions into number types in order to quantify the responses


    const userAnswers = [parseInt(form.q1.value), parseInt(form.q2.value), parseInt(form.q3.value), parseInt(form.q4.value), parseInt(form.q5.value), parseInt(form.q6.value), parseInt(form.q7.value), parseInt(form.q9.value), parseInt(form.q9.value), parseInt(form.q10.value), parseInt(form.q11.value)]

    var sum = userAnswers.reduce((a, b) => a + b, 0)

    result.classList.remove('d-none')

    // Uses the above quantification in order to determine the category of the users response


    if (sum >= 30) {
        document.querySelector('.description').textContent = "You have struggled to see the light at the end of the tunnel and seen your productive hours dwindle but don't fret the end is near! Enjoy the coming freedom."
        document.querySelector('span').textContent = "Just Barely Survived"

    }
    if (sum >= 20) {
        document.querySelector('.description').textContent = "The days were long but you did some good things. You learned a lot about yourself but didn't find your best self but hope is on the horizon. Enjoy the coming freedom."
        document.querySelector('span').textContent = "Survived"
    }
    if (sum >= 10) {
        document.querySelector('.description').textContent = "The switch to remote work and staying home bothered you little and you thrived as a true quarantine warrior."
        document.querySelector('span').textContent = "Surviving and Thriving"
    } else {
        document.querySelector('.description').textContent = "Some have adapted to quarantine but you were made for it. The extra introspection and free time has allowed you to blossom into the cave flower you always knew you were."
        document.querySelector('span').textContent = "Thriving to the Max"
    }

    console.log(sum)
    scrollTo(0, 0)



    result.classList.remove('d-none')
    document.querySelector('.intro p').classList.add('d-none')

})