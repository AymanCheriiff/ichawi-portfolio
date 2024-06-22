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