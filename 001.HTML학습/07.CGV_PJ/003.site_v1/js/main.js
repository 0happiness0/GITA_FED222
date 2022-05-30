// CGV 메인 페이지 JS - main.js
/* 
  함수명: chgMV
  기능 : 영화 예고편 선택하여 플레이
*/
function chgMV(vid){  /* vid는 동영상 아이디 */
  // 1. 함수호출확인 + 전달값 확인
  console.log("바꿔",vid);

  // 2. 변경대상: #screen iframe
  var tg = document.querySelector("#screen iframe");

  // 3. 변경내용: src속성 재설정
  // 선택요소.src = 변경할 값;
  tg.src= `https://www.youtube.com/embed/${vid}?autoplay=1&loop=1&playlist=${vid}&playsinline=1`;
}