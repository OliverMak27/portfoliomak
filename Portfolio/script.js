
const parentContainer = document.querySelector('.card');

parentContainer.addEventListener('click', event=>{
    const current = event.target;

    const isButton = current.className.includes('button');

    if(!isButton) return;

    const currentText = event.target.parentNode.querySelector('read-more--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read Less..." : "Read More...";
})