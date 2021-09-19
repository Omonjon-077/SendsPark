let header__title = document.querySelector('.header__title');
let h1Text = header__title.innerHTML
header__title.innerHTML = ''
let i = 0;

function txt() {
    if (i < h1Text.length) {
        header__title.innerHTML += h1Text[i]
        i++
        setTimeout(() => {
            txt()
        }, 50);
    }
}
txt()

// ====================================================

let vlog__title = document.querySelector('.vlog__title');
let h1Text1 = vlog__title.innerHTML
let j = 0;

function txt1() {
    if (j < h1Text1.length) {
        vlog__title.innerHTML += h1Text1[j]
        j++
        setTimeout(() => {
            txt1()
        }, 50);
    }
}
let check = false;
let height = vlog__title.clientHeight;
window.addEventListener('scroll', (e) => {
    if (!check && ((window.scrollY + 8*height) > (vlog__title.offsetTop - height))) {
        vlog__title.innerHTML = ''
        check = true;
        txt1()
    }
})

// ====================================================

function updateClockOne() {
    const timer = document.querySelector('.frame__txt span');
    let i = timer.innerHTML++;
    if (i <=  170) {
        setTimeout(() => {
            updateClockOne()
        }, 50)
    } else if (i <= 190) {
        var clear = setTimeout(() => {
            updateClockOne()
        }, 100)
    } else if (i < 199) {
        var clear = setTimeout(() => {
            updateClockOne()
        }, 300)
    } else {
        clearTimeout(clear)
    }
}
updateClockOne()

// ======================================================================

function updateClock() {
    const timer = document.querySelector('.frame__txt-1 span');
    let k = timer.innerHTML++;
    if (k <=  70) {
        setTimeout(() => {
            updateClock()
        }, 50)
    } else if (k <= 90) {
        var clear = setTimeout(() => {
            updateClock()
        }, 100)
    } else if (k < 97) {
        var clear = setTimeout(() => {
            updateClock()
        }, 300)
    } else {
        clearTimeout(clear)
    }
}
updateClock()

// ======================================================================

function updateClockTwo() {
    const timer = document.querySelector('.frame__txt-2 span');
    let j = timer.innerHTML++;
    if (j <=  170) {
        setTimeout(() => {
            updateClockTwo()
        }, 50)
    } else if (j <= 190) {
        var clear = setTimeout(() => {
            updateClockTwo()
        }, 100)
    } else if (j < 198) {
        var clear = setTimeout(() => {
            updateClockTwo()
        }, 300)
    } else {
        clearTimeout(clear)
    }
}
updateClockTwo()

// ===============================================================

let vlog__liniya = document.querySelectorAll('.vlog__lini');


vlog__liniya.forEach(el => {
    window.addEventListener('scroll', function () {
        let winScroll = window.scrollY;
        let cloudSpeed = el.getAttribute('data-speed');
        el.style.transform = `translateX(${winScroll * cloudSpeed}px)`;
    })
});

// ==================================================

let upper__title = document.querySelector('.upper__txt');
let h7Text = upper__title.innerHTML
upper__title.innerHTML = ''
let r = 0;

function text() {
    if (r < h7Text.length) {
        upper__title.innerHTML += h7Text[r]
        r++
        setTimeout(() => {
            text()
        }, 50);
    }
}
text()
  
// ======================================================================

const vlogicons = document.querySelectorAll('.vlog-icons'),
    vlogtxt = document.querySelectorAll('.vlog__txt');


for (let i = 0; i < vlogicons.length; i++) {

    vlogicons[i].addEventListener('mouseover', function () {
        vlogicons[i].style = "transform: translateX(20px)"

    })

    vlogicons[i].addEventListener('mouseout', function () {
        vlogicons[i].style = "transform: translateX(0)"

    })

}

