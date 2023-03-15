console.log('connecté !');

//Au hover sur la partie gauche, la partie gauche s'étend jusqu'à 75% de la page, l'autre partie se réduit tout en restant visible

const left = document.querySelector('.left');
console.log(left);

const right = document.querySelector('.right');
console.log(right);

left.addEventListener('mouseenter', () => {
    console.log('mouse on left');
    right.classList.add('not-hover');
})

left.addEventListener('mouseleave', () => {
    console.log('mouse no more on left')
    right.classList.remove('not-hover');
})

right.addEventListener('mouseenter', () => {
    console.log('mouse on right');
    left.classList.add('not-hover');
})

right.addEventListener('mouseleave', () => {
    console.log('mouse no more on right')
    left.classList.remove('not-hover');
})