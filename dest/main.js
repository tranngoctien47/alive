
$('.product__img-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrows: false
});
$('.products .product .product__img .product__control .--next').on('click', function () {
    $('.slick-slider').slick('slickNext');
});

$('.products .product .product__img .product__control .--prev').on('click', function () {
    $('.slick-slider').slick('slickPrev');
});



//active product
let product = document.querySelectorAll('.products .product .product__button a')
let productImg = document.querySelectorAll('.products .product .product__img .product__img-item')
let getid = 0;


function remove() {
    product.forEach((element) => {
        element.classList.remove('active');
    })
    productImg.forEach(item => {
        item.classList.remove('active')
    })
}

product.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        remove();
        document.querySelector('.--next').click();
        productImg[index].classList.add("active");
        item.classList.add('active')
    })
})




// responsive
let select = document.querySelector('.products .product .select')
let selectCurrent = document.querySelector('.products .product .select .select__current span')
let selectOp = document.querySelectorAll('.products .product .select .select__option a')
let selectImg = document.querySelectorAll('.products .product .responsive__img ')


select.addEventListener('click', () => {
    select.classList.toggle('active')
})
function removeCard() {
    selectImg.forEach(item => {
        item.classList.remove('active')
    })
}
selectOp.forEach((item, index) => {
    item.addEventListener('click', () => {
        let text = item.innerHTML
        selectCurrent.innerHTML = text;
        removeCard();
        selectImg[index].classList.add('active')
    })
})


