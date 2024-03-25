let textEl = document.getElementById("input")
let btnEl = document.getElementById("btn")
let paraEl = document.getElementById("para")


btnEl.addEventListener("click", function() {
    let input = textEl.value
    textEl.value = " "
    paraEl.innerHTML = input
})