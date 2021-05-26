// const tabData = [
//     {
//         id: 1,
//         name: 'Branding',
//         images: [
//             {
//                 id: 111,
//                 src: 'slider1.jpg',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },
//             {
//                 id: 112,
//                 src: 'slider1.jpg',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },
//             {
//                 id: 113,
//                 src: 'slider1.jpg',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },
//             {
//                 id: 114,
//                 src: 'slider1.jpg',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },


//         ]
//     },
//     {
//         id: 2,
//         name: 'Creative Marketing',
//         images: [
//             {
//                 id: 221,
//                 src: 'slider3.jpg',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },
//             {
//                 id: 222,
//                 src: 'slider3.jpg',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },
//             {
//                 id: 223,
//                 src: 'slider3.jpg',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },

//         ]
//     },
//     {
//         id: 3,
//         name: 'Social Media',
//         images: [
//             {
//                 id: 111,
//                 src: '..//',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },
//             {
//                 id: 112,
//                 src: '..//',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },
//             {
//                 id: 113,
//                 src: '..//',
//                 title: 'Key Visual',
//                 content: 'Lat Wrks'
//             },

//         ]
//     },
// ]



// function getDefaultTab() {
//     const btnList = document.querySelector('.product__button')
//     const listImage = document.querySelector('.product__img-item')
//     let btnHTML = ""
//     let imgHTML = ""
//     tabData.forEach((item, index) => {
//         if (index === 0) {
//             btnHTML += `<a href="#" class="btnmore active" data-id=${item.id}>${item.name}</a>`
//             item.images.forEach(imgItem => {
//                 imgHTML += `   <a href="#" class="card">
//                 <img src="img/${imgItem.src}" alt="">
//                 <div class="card__content">
//                     <div class="title">KEY VISUAL</div>
//                     <div class="des">LATS WRKS</div>
//                 </div>
//                 <div class="overlay"></div>
//             </a>`
//                 // imgHTML += `<img src="img/${imgItem.src}" alt="">`
//             })
//             listImage.innerHTML = `<div class="slick-slider">${imgHTML}</div>`;
//         } else {

//             btnHTML += `<a href="#" class="btnmore" data-id=${item.id}>${item.name}</a>`
//         }
//     });

//     btnList.innerHTML = btnHTML;
// }



// getDefaultTab()

// function slickInit() {
//     $('.slick-slider').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed: 300,
//         arrows: false
//     });
//     $('.products .product .product__img .product__control .--next').on('click', function () {
//         $('.slick-slider').slick('slickNext');
//     });

//     $('.products .product .product__img .product__control .--prev').on('click', function () {
//         $('.slick-slider').slick('slickPrev');
//     });
// }


// window.addEventListener("DOMContentLoaded", function () {
//     //Loaded dom event? => DOMContentLoaded
//     slickInit()
//     //Click tab change!
//     const btnMore = document.querySelectorAll('.product__button .btnmore')
//     btnMore.forEach(function (item, index) {
//         item.addEventListener("click", function (e) {
//             btnMore.forEach(btn => {
//                 btn.classList.remove('active')
//             })
//             e.preventDefault()
//             //return 1 mảng mới phù hợp với điều kiện
//             //find return first result ....;
//             this.classList.add('active')
//             const result = tabData.find(m => m.id == item.getAttribute('data-id'));
//             let imgHTML = ""
//             result.images.forEach(function (item) {
//                 imgHTML += `<img src="img/${item.src}" alt="">`
//             })
//             document.querySelector('.product__img-item').innerHTML = `<div class="slick-slider">
//             ${imgHTML}
//         </div>`;
//             slickInit();
//         })
//     })
// })

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
        productImg[index].classList.add('active')
        item.classList.add('active')
    })
})