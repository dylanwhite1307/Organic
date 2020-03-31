/////////////// BURGER

$(document).ready(function() {
   $('.header__burger').click(function() {
       $('.header__burger,.header__nav').toggleClass('active');
       $('body').toggleClass('lock')
   });
});

/////////////// SLIDER

let slides = document.getElementsByClassName('content-quote-text__item'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    slideIndex = 1;


showSlides(slideIndex);


function showSlides (n) {
    if (n < 1){
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    
}

function plusSlides (n){
    showSlides(slideIndex += n);
}
prevBtn.onclick = function () {
    plusSlides(-1);
}
nextBtn.onclick = function () {
    plusSlides(1);
}

/////////////// SPOILER

        $(document).ready(function() {
            $('.sections__title').click(function(event) {
                if($('.sections').hasClass('one')){
                    $('.sections__title').not($(this)).removeClass('active');
                    $('.sections__list').not($(this).next()).slideUp(300);
                }
                $(this).toggleClass('active').next().slideToggle(300);
            });
        });
   