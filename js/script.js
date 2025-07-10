$(function () {
  // 오버레이 한 번만 생성
  if ($('.menu-overlay').length === 0) {
    $('body').append('<div class="menu-overlay"></div>');
  }

  const $hamburger = $('.hamburger');
  const $gnb = $('.gnb');
  const $mShow = $('.m_show');
  const $overlay = $('.menu-overlay');
  const $body = $('body');

  $hamburger.on('click', function () {
    $(this).toggleClass('open');           // 햄버거 버튼 애니메이션 토글
    $gnb.toggleClass('mobile-active');     // 모바일 메뉴 토글
    $mShow.toggleClass('active');           // 로그인 박스 토글
    $overlay.toggleClass('active');         // 오버레이 토글
    $body.toggleClass('menu-open');         // body 스크롤 막기 토글
  });

  // 오버레이 클릭하면 메뉴 닫히도록
  $overlay.on('click', function () {
    $hamburger.removeClass('open');
    $gnb.removeClass('mobile-active');
    $mShow.removeClass('active');
    $overlay.removeClass('active');
    $body.removeClass('menu-open');
  });
});

$(window).on('resize', function() {
  if (window.innerWidth > 768) {
    // 화면이 768px 초과면 메뉴 닫기!
    $('.hamburger').removeClass('open');
    $('.gnb').removeClass('mobile-active');
    $('.m_show').removeClass('active');
    $('.menu-overlay').removeClass('active');
    $('body').removeClass('menu-open');
  }
});


var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });