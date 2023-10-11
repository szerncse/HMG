AOS.init()

let k = 0;


let selectFlag;
$('.custom-select').on('click', function() {
  $(this).toggleClass('selected');
  if($(this).hasClass('selected')) {
    $('.custom-select-list').show();
  } else {
    $('.custom-select-list').hide();
  }
})

$('.custom-select').on('focusin', function() {
  $('.custom-select-list').show();
});

$('.custom-select').on('focusout', function() {
  if(!selectFlag) {
    $('.custom-select-list').hide();
  }
  $(this).removeClass('selected');
});

$('.custom-select-option').on('mouseenter', function() {
  selectFlag = true;
});

$('.custom-select-option').on('mouseout', function() {
  selectFlag = false;
});

$('.custom-select-option').on('click', function() {
  let value = $(this).attr('value');

  $('.custom-select-text').text($(this).text());
  $('.select-origin').val(value);
  $('.custom-select-list').hide();

  $('.select-origin').find('option').each(function(index, el) {
    if($(el).attr('value') == value) {
      $(el).attr('selected', 'selected');
    } else {
      $(el).removeAttr('selected');
    }
  });
});



// 예약하기 고정
$(".info2").on('click', function(e){
    e.preventDefault()
    $(this).toggleClass("stop")
})

$(".info").on('click', function(e){
    e.preventDefault()
    $(this).toggleClass("stop")
})

$(".reservation").on('click', function(e){
    e.preventDefault()
    $(this).toggleClass("stop")
})

$(".sns-btn ").on('click', function(e){
    e.preventDefault()
    $(this).toggleClass("stop")
})




AOS.init({
    once: true
 })


// 버튼 클릭 시 맨 위로 이동
const $topBtn = document.querySelector(".TopBtn");
$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}

// 나타나게
document.addEventListener("scroll", function(){
    let pos =window.scrollY;
    console.log(pos)
        if(pos >= 250){
         document.querySelector(".TopBtn").classList.add("on")
        }else{
        document.querySelector(".TopBtn").classList.remove("on")
    }
    if(pos > 2695){
        document.querySelector(".TopBtn").classList.add("one")
    }else{
        document.querySelector(".TopBtn").classList.remove("one")
    }

})



// 헤드바 스크롤시 색상고정
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".nav").css("background" , "#000");
      }
      else{
        $(".nav").css("background" , "");   
      }
    })
  })


// 스크롤
// document.querySelector(".aside").addEventListener("click", function()
// {
//     /*스크롤값 변경하는 코드  alert() */
//      wondow.scrollTo({
//         top: 0,
//         behaior: "smooth"
//      })       
// }) 



// 네비 아래로
let main_index = 0;
$(".nav .nav-wrap > ul li").mouseover(function(){
    $(".nav").addClass("on")
    $(".submenu").addClass("on")
    k = $ (this).index()
    if(k == 1){
        setTimeout(() => {
            $(".submenu-two ul").eq(1).addClass("on")
            $(".submenu .submenu-wrap").eq(1).find(".submenu-one ul li").eq(1).addClass("on")
            // $(".submenu-one ul li").eq(1).addClass("on")
        }, 300);
    }
    if(k != 3 ){
        $(".submenu .submenu-wrap").removeClass("on").eq(k).addClass("on")
        setTimeout(() => {
            $(".submenu .submenu-wrap").addClass("vv")
        }, 300);
    }else{
        $(".submenu .submenu-wrap").removeClass("on vv")
        
$(".nav").removeClass("on")
    }
    if(k == 4){
        setTimeout(() => {
            $(".submenu .submenu-wrap").addClass("vv")
        }, 300);
        $(".submenu .submenu-wrap").removeClass("on").eq(3).addClass("on")
        $(".submenu").addClass("on")
    }
    main_index = k;
})
let sub_i = 0;
$(".submenu-wrap").mouseover(function(){
    $(".nav,.submenu").addClass("on")
    $(".submenu-wrap").removeClass("on vv")
    $(this).addClass("on vv")
})
$(".submenu-one ul").mouseover(function(){
    sub_i = $(".submenu-one ul").index(this)
})
let sub_index = -1;
$(".submenu-one ul li").mouseover(function(){
    sub_index = $(this).index();
    console.log(sub_index)
    $(".submenu-two ul").eq(1).removeClass("on")
    $(".submenu .submenu-wrap").eq(1).find(".submenu-one ul li").eq(1).removeClass("on")
    if(main_index == 1){

        $(".submenu-two ul ,.submenu").removeClass("on")
        $(".submenu-two ul ,.submenu").eq(sub_index+1).addClass("on")
    }
    
    if(main_index == 4){

        $(".submenu .submenu-wrap").eq(main_index-1).find(".submenu-two ul").removeClass("on").eq(sub_index).addClass("on")
            // $(".submenu-two ul ,.submenu").eq(sub_index).addClass("on")
    }
})
$(".submenu-one").mouseover(function(){
        $(".submenu-two ul ,.submenu").eq(sub_index+1).addClass("on")
})
$(".submenu-one ul li").mouseout(function(){
    $(".submenu-two ul,.submenu ").removeClass("on")
})
$(".submenu").mouseout(function(){
    $(".submenu .submenu-wrap,.submenu").removeClass("on vv")
    $(".nav,.submenu").removeClass("on")
})
// $(".nav .nav-wrap").mouseout(function(){
//     $(".submenu .submenu-wrap").removeClass("on")
//     $(".nav").removeClass("on")
// })


// 예약하기
let clickCnt = 0;
document.querySelectorAll(".reservation")[0].addEventListener("click", function(){
clickCnt++;

if(clickCnt == 1){
    document.querySelector(".tab").classList.add("on")
}else{
    document.querySelector(".tab").classList.replace("on","on2")
    setTimeout(() => {
        document.querySelector(".tab").classList.remove("on2")
        clickCnt = 0;
    }, 600);    
}
})







// 화면 슬라이드
let slide_num = 0;
$slide = $(".main-slide > ul > li")
$txt_content_wrap=  $(".main-slide .main-txt .txt-content-wrap");
$txt_content=  $(".main-slide .main-txt .txt-content");

function auto_play(){
    $slide.eq(slide_num).stop().animate({
        opacity: 0
    }, 1000)
    setTimeout(() => {
        $txt_content_wrap.eq(slide_num).removeClass("on")
    }, 600);
    $txt_content.eq(slide_num).removeClass("on")
    slide_num++;
    if(slide_num > $slide.length-1){
        slide_num = 0;
    }
    txt_chk = true;
        $slide.eq(slide_num).css("left", "100%").css("opacity", "1").delay(1300).animate({
            left: 0 
        }, 400, function(){
            $txt_content_wrap.eq(slide_num).addClass("on")
            $slide_indicator.removeClass("on").eq(slide_num).addClass("on")        
            setTimeout(() => {
                $txt_content.eq(slide_num).addClass("on")
                txt_chk = false
            }, 600);
        })
        
}

let timer = setInterval(auto_play, 6000);


let txt_chk =true;

$txt_content_wrap.eq(0).addClass("on")
setTimeout(() => {
    $txt_content.eq(0).addClass("on")
    txt_chk = false;
}, 1000);
$slide_indicator_btn = $(".main-slide .indicator .btn img");
$slide_indicator = $(".main-slide .indicator ul li");
$slide_indicator.eq(0).addClass("on")
$slide_indicator_btn.click(function(){
    $slide_indicator_btn.eq(0).toggle()
    $slide_indicator_btn.eq(1).toggle().toggleClass("play")
    if($slide_indicator_btn.eq(1).hasClass("play")){
        clearInterval(timer);
        timer = setInterval(auto_play, 6000);
    }
})
$slide_indicator.click(function(){
    if(txt_chk){return;}
    let i = $(this).index();
    clearInterval(timer);
    $slide_indicator_btn.eq(0).hide()
    $slide_indicator_btn.eq(1).show()
    if(slide_num == $(this).index()){
        return;
    }
    $slide.eq(slide_num).stop().animate({
        opacity: 0
    }, 1000)
    setTimeout(() => {
        $txt_content_wrap.eq(slide_num).removeClass("on")
    }, 600);
    $txt_content.eq(slide_num).removeClass("on")
    if(slide_num < $(this).index()){
        txt_chk = true;
        $slide.eq(i).css("left", "100%").css("opacity", "1").delay(1300).animate({
            left: 0 
        }, 400, function(){
            $txt_content_wrap.eq(i).addClass("on")
            setTimeout(() => {
                $txt_content.eq(i).addClass("on")
                txt_chk = false
            }, 600);
        })
    }else{
        txt_chk = true;
        $slide.eq(i).css("left", "-100%").css("opacity", "1").delay(1300).animate({
            left: 0 
        }, 400, function(){
            $txt_content_wrap.eq(i).addClass("on")
            setTimeout(() => {
                $txt_content.eq(i).addClass("on")
                txt_chk = false
            }, 600);
        })
    }
    $slide_indicator.removeClass("on").eq(i).addClass("on")
    slide_num = i;
})

// 아이콘
$(".two-nav .sns-btn").click(function(){
    $(this).toggleClass("on")
    if($(this).hasClass("on")){
        for(let i = 0; i < 3; i++){
            $(".two-nav .sns-nav ul li").eq(i).css("top",58 * i + "px");
        }
    }else{
        for(let i = 0; i < 3; i++){
            $(".two-nav .sns-nav ul li").eq(i).css("top", "176px");
        }
    }
})

// ---------
















// 국내 최대 규모의 HMG 드라이빙 익스피리언스 센터

$(".slick.nav-slick").slick({
    asNavFor:".content-item3",
    slidesToShow: 4,
    variableWidth: true
})

$(".slick.content-item3").slick({
    asNavFor:".nav-slick",
    fade: true,
    slidesToShow: 1,
})

$(".content-item33 .slick-slide").removeClass("on").eq(0).addClass("on")

  
 $(".content-item33 .slick-slide").click(function (e){
     e.preventDefault()
     let i = $(this).index()
     
    $(".slick.nav-slick").slick("slickGoTo", i)
    
 $(".content-item33 .slick-slide").removeClass("on").eq(i).addClass("on")
 })


 $(".slick.content-item3").on('afterChange', function(event, slick, currentSlide, nextSlide){
    console.log(currentSlide);
    $(".content-item33 .slick-slide").removeClass("on").eq(currentSlide).addClass("on")
  });

// -------