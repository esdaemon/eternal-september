const dormantList = document.querySelectorAll('.dormant');

dormantList.forEach(dormant => {
    dormant.addEventListener('click', () => {
        //get active version
        const id = dormant.id
        const name = id.split('dormant')[0]
        const active = document.getElementById(name + "active")
        const info = document.getElementById(name + "info")

        //set active version display to its default (block?)
        active.style.display = 'flex'
        info.style.display = 'block'

        //set dormant element display to hidden
        dormant.style.display = 'none'

        active.addEventListener('click', () => {
    
            //set dormant version display to its default
            dormant.style.animationName = 'collapse'
            dormant.style.display = 'flex'
    
            //set active element display to hidden
            active.style.display = 'none'
            info.style.display = 'none'
        })
    })
})

let toggle = 0
const hamburger = document.getElementById('hamburger')
const menu = document.querySelector('.menu')
console.log(menu.style.width)
menuWidth = window.innerWidth > 600 ? '-50vw' : '-90vw'
hamburger.addEventListener('click', () => {
    toggleMenu()
})

menu.addEventListener('touchmove', toggleMenu)

function toggleMenu() {
    if (!toggle) {
        menu.style.transform = `translateX(${menuWidth})`
        toggle = 1
    } else {
        menu.style.transform = 'translateX(-1vw)'
        toggle = 0
    }
}



// let currIndex = 0
// let startPos = 0;
// let prevTranslate = 0;
// let currTranslate = 0;
// let animationID

// document.addEventListener('touchstart', (e) => {
//     startPos = e.touches[0].clientX
//     animationID = requestAnimationFrame(animation)
// })

// document.addEventListener('touchmove', (e) => {
//     const currPos = e.touches[0].clientX
//     currTranslate = prevTranslate + currPos - startPos

//     // menu.style.display = 'block'
// })

// document.addEventListener('touchend', (e) => {
//     cancelAnimationFrame(animationID)

//     console.log(currTranslate)
//     const movedBy = currTranslate - prevTranslate
//     if (movedBy < -(1 * (menuWidth/2)) && currIndex < 1) {
//         currTranslate = menuWidth
//         currIndex += 1
//     }

//     if (movedBy > (menuWidth/2) && currIndex > 0) {
//         currTranslate = menu.style.width
//         currIndex -= 1
//     }

//     prevTranslate = currTranslate
//     menu.style.width = `${currTranslate}`
// })

function animation() {
    slideMenu()
    requestAnimationFrame(animation)
}

function slideMenu() {
    menu.style.transform = `translateX(${currTranslate})`
}