document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.page');
    const sticky = document.querySelector('.sticky');
    const placeholder = document.querySelector('.placeholder');
    const action = document.querySelector('.action');

    document.addEventListener('scroll', () => {
        console.log(window.pageYOffset)
        page.classList.add('page_pinned');
        // if (window.pageYOffset > 0) {
        //     page.classList.add('page_pinned');
        // } else {
            // page.classList.remove('page_pinned');
        // }
    });

    action.onclick = () => {
        page.classList.remove('page_pinned');
    };

    window.addEventListener('orientationchange', () => {
        // page.classList.remove('page_pinned');
    });
});