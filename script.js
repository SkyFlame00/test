document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.page');
    const action = document.querySelector('.action');

    action.onclick = () => {
        page.classList.toggle('page_pinned');
    };
});