$(document).ready(function(){
    menu()
    slide()
    tab_advanced()
    popup()
})

function menu(){
    $(".gnb>li").hover(
        //mouseover시에 실행할 코드
        function(){
            $(".lnb").stop().slideDown() //stop() - 대상의 이전의 움직임 멈춤.
            //stop을 안 쓰면 명령이 큐에 쌓인다. (slideDown이 0.4초 안에 다 되기 전에 mouseout 상태가 되면 slideDown() 다음에 큐에 slideUp()이 쌓여, slideDown()이 끝나야 slideUp()이 실행된다.)
            //그래서 움직임이 부자연스럽고.
            //★stop을 쓰면 slideDown()하기 전에 다른 명령 제거
            //움직임이 자연스워진다.
        },
        //mouseout시에 실행할 코드
        function(){
            $(".lnb").stop().slideUp()
        }
    )
}

function slide(){
    setInterval(slide_move,3000)

}

var cur_Top = 0
function slide_move(){
    cur_Top -= 300
    if(cur_Top<-600){//if(cur_Top == -900){
        cur_Top = 0
    }
    $('#slide_contents').animate({"top":cur_Top},400,'swing')
    //위로 300, 위로 300, 제자리
    //top:-300, top:-600, top 0


}

function tab(){
    $(".tab_btn>a").eq(0).click(function(){
        $(".tab_contents>div").eq(1).hide();
        $(".tab_contents>div").eq(0).show();
    })
    $(".tab_btn>a").eq(1).click(function(){
        $(".tab_contents>div").eq(0).hide();
        $(".tab_contents>div").eq(1).show();
    })
}


//.tab_btn 산하의 a태그가 많아도 일일이 click 이벤트를 설정하지 않고 탭 전환을 할 수 있다.
// function tab_advanced(){
//     var idx=0
//     $(".tab_btn>a").click(function(){
//         var tab_btn_a_li = $(".tab_btn>a").get()
//         console.log(tab_btn_a_li.length)
//         for(var i=0; i< tab_btn_a_li.length; i++){
//             $(".tab_contents>div").eq(i).hide()
//         }

//         idx = $(this).index() //몇번째 앵커(anchor, a태그)인가?
//         alert(idx) // 0,1
//         $(".tab_contents>div").eq(idx).show()
//     })
// }
function tab_advanced(){
    var idx=0
    $(".tab_btn>a").click(function(){
        idx = $(this).index() //몇번째 앵커(anchor, a태그)인가?
        //alert(idx) // 0,1
        $(".tab_contents>div").hide()
        //탭컨텐츠 밑에 있는 div다 숨긴다.
        $(".tab_contents>div").eq(idx).show()
        //탭컨텐츠 밑에 있는 div 중에 idx번째 보여준다.
        //클릭한 a태그의 div만 show()보이게 한다.
    })
}

function popup(){
    if ($.cookie("popup")=='none'){
        //popup이라는 이름의 쿠키 값이 none이라면
        $("#popup").hide()
        return // 하지 않으면 아래 코드를 계속 읽고 실행하기 때문에 show()가 되어 popup창이 쿠키가 생성되었음에도 뜬다.
    }
    
    $('#popup').show() //아니면 css에서 display : none을 없애면 됨.
    //팝업은 시작하자마자 보여주게...하고
    //체크박스와 닫기 버튼에 이벤트 걸기
    $('.pop').click(function(){
        $('#popup').show()
    })
    
    $('#popup-check').click(function(){
        $.cookie('popup', 'none',{ //쿠키는 웹서버가 생성하기 때문에 웹서버 동작하는 환경에서 작성해야 하므로 웹브라우저에서 여는 것만으로 확인할 수 없고 배포를 해줘야 한다.
            expires: 7,
            path:'/'
        })
        $('#popup').hide()
    })
    

    $('#closeBtn').click(function(){
        $('#popup').hide()
    })

    
}