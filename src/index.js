import './index.scss';
import './alertInfo.scss';

window.addEventListener('scroll', () => {
    var alertWrapper = document.getElementsByClassName('alert-info-wrapper')[0],
        alertBox = document.getElementsByClassName('alert-info')[0],
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop >= alertWrapper.offsetTop) {
        alertBox.style.position = 'fixed';
    } else {
        alertBox.style.position = 'static';
    }
})