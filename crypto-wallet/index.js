
const contentBoxes = document.getElementById('content-box-container');
[...contentBoxes.children].forEach((box) => {
    box.addEventListener('click', (e) => {
        e.preventDefault();

        box.classList.toggle('active');
    })
})


const footerBoxes = document.getElementById('footer-box-container');
[...footerBoxes.children].forEach((box) => {
    box.addEventListener('click', (e) => {
        e.preventDefault();

        box.classList.toggle('active');
    })
})
