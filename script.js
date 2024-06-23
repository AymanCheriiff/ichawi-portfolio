const navBarBtn = document.querySelector('#nav-barBtn');
const navBarMobile = document.querySelector('#bav-bar-mobile');
const listBar = document.querySelector('#list');
let expended = false;

function expend() {
    if (expended === false) {
        navBarMobile.style.display = 'flex !important';
        navBarMobile.style.height = '300px';
        expended = true;
    } else {
        navBarMobile.style.display = 'none !important';
        navBarMobile.style.height = '0px';
        expended = false;

    }
}

navBarBtn.addEventListener('click', expend);

const contactBtn = document.querySelector('#contactRef');
const contactSection = document.querySelector('.contact-section');
const bi = document.querySelectorAll('.bi-c');
const cn = document.querySelectorAll('.cn');

function shine() {
    contactSection.style.backgroundColor = 'white';
    contactSection.style.color = 'black';
    bi.forEach(i => {
        i.style.color = '#28ae60';
    })
    cn.forEach(c => {
        c.style.color = 'black';
    })

    setTimeout(()=>{
        contactSection.style.backgroundColor = 'rgba(0, 0, 0, 0.06)';
        bi.forEach(i => {
            i.style.color = 'white';
        })
        cn.forEach(c => {
            c.style.color = 'white';
        })
    },700)
}

contactBtn.addEventListener('click', shine);