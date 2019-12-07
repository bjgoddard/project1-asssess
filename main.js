
let plusBtn = document.getElementById('plus')
let minusBtn = document.getElementById('minus')
let totalCount = document.getElementById('totalCount')
var input = parseInt(document.getElementById("numberInput").value);
var count = 0

totalCount.textContent = count
console.log(numberInput.value)

console.log(input)

plusBtn.addEventListener('click', () => {

count += Number(numberInput.value)

totalCount.textContent = count


})
minusBtn.addEventListener('click', () => {

count -= Number(numberInput.value)

totalCount.textContent = count

})

