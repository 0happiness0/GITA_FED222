// 도깨비 PJ 공통 JS

/* 
  함수명: showBNB
  기능: GNB메뉴를 보였다 숨기는 기능
*/
function showGNB(){
  // 1. 함수호출확인
  console.log("나야나!");

  // 2. 변경대상: .top
  var tg = document.querySelector(".top");
  
  // 3. 클래스 on 넣고 빼기
  tg.classList.toggle("on");
  

  /* 
    [ 클래스 넣기/빼기 객체 ]
    classList
    1) add(클래스명) -> 클래스 넣기
    2) remove(클래스명) -> 클래스 빼기
    3) toggle(클래스명) -> 존재 여부로 클래스 변경
  
  */


}