button = document.getElementById("countButton");

button.addEventListener('click', () => {
    let input = document.getElementById("input").value;
    let count = input.length;
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h1>${count}</h1>`
    
})