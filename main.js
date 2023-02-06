addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('span.number')
    let count = 0
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', (e) => {
            //change checkbox class name
            if (checkbox.className === 'number') {
                checkbox.className = 'number checked'
                count++
            } else if (checkbox.className === 'number checked') {
                checkbox.className = 'number'
                count--
            }
            console.log(count)
        })
    })
})


