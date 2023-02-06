addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('span.number')
    const form = document.querySelector('form')
    const main = document.querySelector('main')
    const thankScreen = document.querySelector('.postRate')
    let count = 0
    const rating = document.querySelector('.ratingText')

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

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('submitted')
        main.style.display = 'none'
        thankScreen.style.display = 'block'
        rating.innerHTML = `You selected ${count} out of 5`
    })
})


