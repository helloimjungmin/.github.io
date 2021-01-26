/* 로딩 */

setTimeout(function() {
  showPage();
}, 3000);

function showPage() {
  $(".loadbg").css("display","none");
  $(".main").css("display","block");
}
/* 마우스 커서*/
$(document).mouseenter(function(e){
	win_h=$(window).height();
	win_w=$(window).width();
	$x=e.clientX
	$y=e.clientY
	$(".cursor").css({left:win_w*0.5,top:win_h*0.5})
})
var win_h
var win_w
$(document).mouseleave(function(e){
	 win_h=$(window).height();
	 win_w=$(window).width();
	$x=e.clientX
	$y=e.clientY
	$(".cursor").css({left:win_w*0.5,top:win_h*0.5})
})
$(document).mousemove(function(e){
	$x=e.clientX
	$y=e.clientY
	$(".cursor").css({left:$x,top:$y})
})

$(".button, button, .close, .art1 img, .section3 .ani").mouseenter(function(){
	$(".cursor").addClass("cursor1")
})
$(".button, button, .close, .art1 img, .section3 .ani").mouseleave(function(){
	$(".cursor").removeClass("cursor1")
})
    
// 햄버거버튼attr
//default, menu-open, page-open 
$(".ham-btn").click(function(){
	body_name=$("body").attr("class");
	console.log("body_name:"+body_name)
	//슬라이드 화면일때
	if(body_name == "default"){
		$("body").attr({class:"menu-open"});
		$(".menu-page").stop().fadeIn();
	}
	//메뉴화면이 보여지는 상태
	else if(body_name == "menu-open"){
		$("body").attr({class:"default"})
		$(".menu-page").stop().fadeOut();
	}
	//슬라이드속 디자인컨셉이 보여지고 있을때
	else if(body_name == "page-open"){
		$("body").attr({class:"default"});
		$("html,.item").stop().animate({scrollTop:0},function(){

			$(".item").removeClass("active")
			$(".item").css({overflow:"hidden"})//css
			$(".indicator").stop().delay(400).fadeIn()
			$(".item").stop().delay(400).fadeIn()

			item_size()

		})
	}
})

/* 메뉴 글씨 클릭시 */
$(".menu-page .wrap .menu-li > a, .menu-page .sub-li > a").click(function(){
    $("body").attr({class:"default"})
    $(".menu-page").stop().fadeOut();
})

/* 휠 이벤트*/
var page = 0;

function wheel(){
win_h = $(window).height();
$("html,body").stop().animate({scrollTop:page*win_h},1000)
}
    
$("*").on("mousewheel",function(event){
    event.preventDefault();
    delta=event.originalEvent.wheelDelta;
    ani = $("html").is(":animated");
    if( !ani && delta<1 && page<7){
        page++;
        wheel()
    }else if(!ani && delta>0 && page>0){
        page--;
        wheel()
    }
})
    
    /* 레이어 팝업 */
    
    /* notice */
    
    $(".notice button").click(function(){
    $(".notice").css("display","none")
    $(".notice-bg").css("display","none")
    });
    
    /* 메인 이미지 */
    var myIndex=0;
    setInterval(function(){
        if(myIndex<5){
            myIndex++;
        }else{
            myIndex=0;
        }
        $(".intro .img-box img").eq(myIndex).siblings().fadeOut();
        $(".intro .img-box img").eq(myIndex).fadeIn();
    },2000);
    
    
    /* 페이지 더보기 */
    
    /* 돌체 */
    $(".section2 .dolce").click(function(){
        $(".event-bg").css("display","block")
        $(".dolce-page").css("display","block")
    });
    
    $(".section2 .dolce-page .close").click(function(){
        $(".event-bg").css("display","none")
        $(".dolce-page").css("display","none")
    }); 
    
    /* 포드 */
    $(".section2 .ford").click(function(){
        $(".event-bg").css("display","block")
        $(".ford-page").css("display","block")
    });
    
    $(".section2 .ford-page .close").click(function(){
        $(".event-bg").css("display","none")
        $(".ford-page").css("display","none")
    }); 
    
    /* 시그니엘 */
    $(".section2 .signiel").click(function(){
        $(".event-bg").css("display","block")
        $(".signiel-page").css("display","block")
    });
    
    $(".section2 .signiel-page .close").click(function(){
        $(".event-bg").css("display","none")
        $(".signiel-page").css("display","none")
    }); 
    
    
    /* 아트 팝업 */
    
    /* 커피 */
    $(".art1 .coffee").click(function(){
        $(".event-bg").css("display","block")
        $(".coffee-p").css("display","block")
    });
    
    $(".coffee-p .close").click(function(){
    $(".event-bg").css("display","none")
    $(".coffee-p").css("display","none")
    }); 
    
    /* 커피 윈도우 팝업 */
    $(".coffee-p .coffee1").click(function(e){
        e.preventDefault();
        window.open("portfolio/img/s4/coffee/coffee1.html","event-banner","width=800, height=800, left=480, top=100, scrollbars=0, toolbar=0, menubar=0");
    });
    
    $(".coffee-p .coffee2").click(function(e){
        e.preventDefault();
        window.open("portfolio/img/s4/coffee/coffee2.html","event-banner","width=800, height=800, left=480, top=100, scrollbars=0, toolbar=0, menubar=0");
    });
    
    $(".coffee-p .coffee3").click(function(e){
        e.preventDefault();
        window.open("portfolio/img/s4/coffee/coffee3.html","event-banner","width=800, height=800, left=480, top=100, scrollbars=0, toolbar=0, menubar=0");
    });
    
    
    /* 일러스트 */
    $(".art1 .illust").click(function(){
        $(".event-bg").css("display","block")
        $(".illust-p").css("display","block")
    });
    
    $(".illust-p .close").click(function(){
    $(".event-bg").css("display","none")
    $(".illust-p").css("display","none")
    }); 
    
    /* 프로모션 */
    $(".art1 .promotion").click(function(){
        $(".event-bg").css("display","block")
        $(".promotion-p").css("display","block")
    });
    
    $(".promotion-p .close").click(function(){
    $(".event-bg").css("display","none")
    $(".promotion-p").css("display","none")
    }); 