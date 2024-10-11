const currentPage = window.location.pathname.split("/").pop();

if (currentPage === 'program_terbaru.html') {
  // dari Swiper
  const swiper = new Swiper('#daftar_program', {
    loop: true,
    
    // bullet page
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    
    // navigation arrows (panah kiri-kanan)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });

  swiper.update();  
}
  
  // let filter = document.querySelector('.filter');
  // filter.appendChild(generateDropDown());

  // function generateDropDown() {
  //   let data = [];
  //   let wors
  // }

const navLinks = document.querySelectorAll('.navbar ul a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active'); // Tambahkan kelas aktif pada link saat ini
    }
}); 

const isLoggedIn = localStorage.getItem('isLoggedIn');

if(isLoggedIn === 'true') {
  const akunMenu = document.getElementById('akun');

  // hide <ul id="akun">
  akunMenu.style.display = 'none';

  // elemen baru penggantinya
  const list = document.createElement('li');
  const akunLink = document.createElement('a');
  akunLink.href = 'akun.html';
  akunLink.innerText = 'Akun';

  const navbarAkun = list.appendChild(akunLink);
  // tambahkan elemen baru ke navbar
  document.querySelector('header .navbar ul').appendChild(navbarAkun);

  console.log('Current Page:', currentPage);
  console.log('Is Logged In:', isLoggedIn);
}
  