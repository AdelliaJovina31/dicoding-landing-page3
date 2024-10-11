  // let filter = document.querySelector('.filter');
  // filter.appendChild(generateDropDown());

  // function generateDropDown() {
  //   let data = [];
  //   let wors
  // }

  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.navbar ul a');

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active'); // Tambahkan kelas aktif pada link saat ini
      }
  });

  const searchBar = document.getElementById('searchBar');
  const challengeList = document.querySelector('.challenge-list');
  const challengeItems = challengeList.getElementsByClassName('challenge');

  searchBar.addEventListener('input', function() {
    const keyword = searchBar.value.toLocaleLowerCase();

    Array.from(challengeItems).forEach(function(item) {
      const title = item.querySelector('h4').textContent.toLocaleLowerCase();
      const description = item.querySelector('p').textContent.toLocaleLowerCase();

      // tampilkan berita kalau keyword ditemukan
      if(title.includes(keyword) || description.includes(keyword)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });