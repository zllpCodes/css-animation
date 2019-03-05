import './index.scss';
import './alertInfo.scss';

window.addEventListener('scroll', () => {
    // 获取提示框元素及滚动条的滚动高度
    var alertWrapper = document.getElementsByClassName('alert-info-wrapper')[0],
        alertBox = document.getElementsByClassName('alert-info')[0],
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    // 将滚动高度与提示框距离顶部的位移进行对比
    if (scrollTop >= alertWrapper.offsetTop) {
        // 滚动高于位移则将提示框固定在屏幕顶部
        alertBox.style.position = 'fixed';
    } else {
        // 否则，使提示框处于正常流布局中
        alertBox.style.position = 'static';
    }
})
