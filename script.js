const culculations = document.querySelector('.culculations')
const digits = document.querySelector('.digits')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equals = document.querySelector('.equals')
const ac = document.querySelector('.ac')
const persentage = document.querySelector('.persentage')

ac.addEventListener('click', function () {
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

equals.addEventListener('click', function () {

  if (culculations.value.includes('%')) {
    if (culculations.value.includes('+')) {
      const arr = culculations.value.split('+')
      const number = +arr[0]
      const percentage = +arr[1].split('%')[0]

      culculations.value = addPercentage(number, percentage)
    } else if (culculations.value.includes('-')) {
      const arr = culculations.value.split('-')
      const number = +arr[0]
      const percentage = +arr[1].split('%')[0]

      culculations.value = subtractPercentage(number, percentage)
    }
  } else {
    culculations.value = eval(culculations.value)
  }
})

function subtractPercentage(number, percentage) {
  const subtraction = number * (percentage / 100);
  const result = number - subtraction;
  return result;
}

function addPercentage(number, percentage) {
  const addition = number * (percentage / 100);
  const result = number + addition;
  return result;
}







