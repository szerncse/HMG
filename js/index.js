AOS.init()
let k = 0;

$(".nav .nav-wrap > ul li").mouseover(function(){
    $(".nav").addClass("on")
    k = $ (this).index()
    if(k != 3 ){
        $(".submenu .submenu-wrap").removeClass("on").eq(k).addClass("on")
    }else{
        $(".submenu .submenu-wrap").removeClass("on")
$(".nav").removeClass("on")
    }
    if(k == 4){
        $(".submenu .submenu-wrap").removeClass("on").eq(3).addClass("on")
    }

})
let sub_i = 0;
$(".submenu-wrap").mouseover(function(){
    $(".nav").addClass("on")
    $(".submenu-wrap").removeClass("on")
    $(this).addClass("on")
})
$(".submenu-one ul").mouseover(function(){
    sub_i = $(".submenu-one ul").index(this)
})
$(".submenu-one ul li").mouseover(function(){
    let i = $(this).index();

    if(k == 1){
        $(".submenu-two ul").removeClass("on").eq(i-1).addClass("on")
    }
    if(k == 4){
        $(".submenu-two ul").removeClass("on").eq(i-3).addClass("on")
        
    }
})
$(".submenu").mouseout(function(){
    $(".submenu .submenu-wrap").removeClass("on")
    $(".nav").removeClass("on")
})
// $(".nav .nav-wrap").mouseout(function(){
//     $(".submenu .submenu-wrap").removeClass("on")
//     $(".nav").removeClass("on")
// })


let clickCnt = 0;
document.querySelectorAll(".login ul li")[2].addEventListener("click", function(){
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