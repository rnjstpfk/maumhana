// script.js
$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open'); // 햄버거 애니메이션
    $('.gnb').toggleClass('mobile-active'); // 메뉴
    $('.m_show').toggleClass('active');     // 로그인 박스
  });
});
