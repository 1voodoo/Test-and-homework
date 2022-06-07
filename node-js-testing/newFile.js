let links = document.querySelectorAll('nav a');
let btn = document.querySelector('.btn');
let cont = document.querySelectorAll('.container p');
console.log(cont);

for (const p of cont) {
    p.addEventListener('click', () => {
        p.classList.add('active')
    })
}


btn.addEventListener('click', () => {
    btn.classList.add('active');
});

for (const link of links) {
    link.addEventListener('click', () => {
        link.classList.add('active');
    });
}
