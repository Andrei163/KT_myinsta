let toggle = document.querySelector('.hamburger');
let heart = document.querySelector('.content__heart');
let likes = document.querySelector('.content__likes-number');

toggle.addEventListener('click', function(){
    if (toggle.classList.contains('is-active')){
        toggle.classList.remove('is-active');
    }
    else {
        toggle.classList.add('is-active');  
    }
});

heart.addEventListener('click', function(){
    if (heart.classList.contains('content__heart')){
        heart.classList.remove('content__heart');
        heart.classList.add('content__added');
        likes.textContent++;

    }
    else {
        heart.classList.remove('content__added');
        heart.classList.add('content__heart');
        likes.textContent--;
    }
});