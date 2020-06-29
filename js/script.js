
const btnMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav__menu');

btnMenu.addEventListener('click', function(e){
    e.preventDefault();
    btnMenu.classList.toggle('menu-active');
    menuBtn.classList.toggle('menu-active');
    navMenu.classList.toggle('menu-active'); 
});

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.244194, lng: 76.937616},
      zoom: 16
    });
  }


  43.244194, 76.937616



// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });