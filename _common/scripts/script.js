/*===========================================================*/
/*追従メニューの現在地ハイライト*/
/*===========================================================*/

//基準点の準備
var elemTop = [];

//現在地を取得するための設定を関数でまとめる
function PositionCheck(){
    //headerの高さを取得
	var headerH = $("#header").outerHeight(true);
    //.scroll-pointというクラス名がついたエリアの位置を取得する設定
	$(".scroll-point").each(function(i) {//.scroll-pointクラスがついたエリアからトップまでの距離を計算して設定
		elemTop[i] =Math.round(parseInt($(this).offset().top-headerH-10));//追従するheader分の高さからさらに10px分（コンテンツの少し上で現在地にするため）を引く
	});
}


//ナビゲーションに現在地のクラスをつけるための設定
function ScrollAnime() {//スクロールした際のナビゲーションの関数にまとめる
	var scroll = Math.round($(window).scrollTop());
	var NavElem = $("#pc-nav li");//ナビゲーションのliの何番目かを定義するための準備
	$("#pc-nav li").removeClass('current');//全てのナビゲーションの現在地クラスを除去
	if(scroll >= elemTop[0] && scroll < elemTop[1]) {//.scroll-point 1つめ以上.scroll-point 2つめ未満
     $(NavElem[0]).addClass('current');//1つめのliに現在地クラスを付与
    } 
    else if(scroll >= elemTop[1] && scroll < elemTop[2]) {//.scroll-point 2つめ以上.scroll-point 3つめ未満
     $(NavElem[1]).addClass('current');//2つめのliに現在地クラスを付与
    } 
    else if(scroll >= elemTop[2] && scroll < elemTop[3]) {//.scroll-point 3つめ以上.scroll-point 4つめ未満
     $(NavElem[2]).addClass('current');//3つめのliに現在地クラスを付与
    } 
    else if(scroll >= elemTop[3] && scroll < elemTop[4]) {//.scroll-point 4つめ以上.scroll-point 5つめ未満
     $(NavElem[3]).addClass('current');//4つめのliに現在地クラスを付与
    } 
    else if(scroll >= elemTop[4]) {// .scroll-point 5つめ（area-5）以上
      $(NavElem[4]).addClass('current');//5つめのliに現在地クラスを付与
    } 
}

/*===========================================================*/
/*ナビゲーションメニュー/
/*===========================================================*/

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


/*===========================================================*/
/*ページの指定の高さを超えたら右から出現*/
/*===========================================================*/

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
		var scroll = $(window).scrollTop();
		if (scroll >= 200){//上から200pxスクロールしたら
			$('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
			$('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
		}else{
			if(
				$('#page-top').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
				$('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
				$('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
			}
		}
}

// #page-topをクリックした際の設定
$('.btn-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

/*===========================================================*/
/*アニメーション
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
  // シャッ（左から）
	
	$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
		}else{
			$(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
		}
	});	
    $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
		}else{
			$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
		}
	});
    // ふわっ（下から）
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
		$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});
	
	// パタッ（左へ）
    $('.flipLeftTrigger').each(function(){ //flipLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('flipLeft');// 画面内に入ったらflipLeftというクラス名を追記
		}else{
		$(this).removeClass('flipLeft');// 画面外に出たらflipLeftというクラス名を外す
		}
	});
    


    $('.flipRightTrigger').each(function(){ //flipRightTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipRight');// 画面内に入ったらflipRightというクラス名を追記
        }else{
        $(this).removeClass('flipRight');// 画面外に出たらflipRightというクラス名を外す
        }
    });

    $('.slideLeftInTrigger').each(function(){ //slideLeftInTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('slideLeftIn');// 画面内に入ったらslideLeftInLeftというクラス名を追記
		}else{
		$(this).removeClass('slideLeftIn');// 画面外に出たらslideLeftInというクラス名を外す
		}
	});
    
    $('.slideRightInTrigger').each(function(){ //slideRightInTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('slideRightIn');// 画面内に入ったらslideRightInLeftというクラス名を追記
		}else{
		$(this).removeClass('slideRightIn');// 画面外に出たらslideRightInというクラス名を外す
		}
	});

    $('.floatUpTrigger').each(function(){ //floatUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('floatUp');// 画面内に入ったらfloatUpというクラス名を追記
		}else{
		$(this).removeClass('floatUp');// 画面外に出たらfloatUpというクラス名を外す
		}
	});

}


/*===========================================================*/
/* 関数をまとめる*/
/*===========================================================*/


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();//機能編 8-1-3	ページの指定の高さを超えたら右から出現する関数を呼ぶ
	PositionCheck();//機能編 5-1-26 追従メニューの現在地ハイライトの関数を呼ぶ
	ScrollAnime();//機能編 5-1-26 追従メニューの現在地ハイライトの関数を呼ぶ
    fadeAnime();//アニメーションの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){

    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

     //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる  
	$("#splash").delay(1500).fadeOut('slow',function(){//背景色が伸びる（下から上）が動作した後に下記アニメーションを実行
        $('body').addClass('appear');//背景色が伸びる（下から上）
        PositionCheck();// 追従メニューの現在地ハイライトの関数を呼ぶ
        ScrollAnime();// 追従メニューの現在地ハイライトの関数を呼ぶ
        PageTopAnime();//ページの指定の高さを超えたら右から出現する関数を呼ぶ
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    /*===========================================================*/
    /*背景色が伸びる（下から上） */
    /*===========================================================*/

    //=====ここから背景が伸びた後に動かしたいJSをまとめる   
    $('.splashbg').on('animationend', function() {        
        fadeAnime();//アニメーションの関数を呼ぶ
    });  
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
	
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述