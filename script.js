const culculations = document.querySelector('.culculations')
const digits = document.querySelector('.digits')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equals = document.querySelector('.equals')
const ac = document.querySelector('.ac')

ac.addEventListener('click', function() {
  culculations.value = ''
})

digits.addEventListener('click', function (e) {
  if (e.target.classList.contains('digit')) {
    if (culculations.value == '') {
      culculations.value = e.target.innerHTML
    } else {
      culculations.value += e.target.innerHTML
    }
  }
})

plus.addEventListener('click', function() {
  equals.addEventListener('click', function() {
    let nums = culculations.value.split('+')
    const result = nums.reduce((accum, currentValue) => {return accum + +currentValue}, 0)

    culculations.value = result
  })
})


minus.addEventListener('click', function() {
  equals.addEventListener('click', function() {
    let nums = culculations.value.split('-')
    const result = nums.reduce((accum, currentValue) => {return accum - currentValue})
    
    culculations.value = result
  })
})

multiply.addEventListener('click', function() {
  equals.addEventListener('click', function() {
    let nums = culculations.value.split('*')
    const result = nums.reduce((accum, currentValue) => {return accum * currentValue})
    
    culculations.value = result
  })
})

divide.addEventListener('click', function() {
  equals.addEventListener('click', function() {
    let nums = culculations.value.split('/')
    const result = nums.reduce((accum, currentValue) => {return accum / currentValue})
    
    culculations.value = result
  })
})



