// スリックスライダーを付ける
$(function () {
  $("#bars").on("click", function () {
    $("#menu").slideToggle(300);
  });
  $("#totop").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 500, "swing");
  });
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
  });
  // ↓ここからスクロールの場所の値を取る
  $(window).scroll(function () {
    let scroll = $("body,html").scrollTop();
    console.log(scroll);
    // ↓ここからもし～なら文
    if (scroll < 300) {
      $("#totop").fadeOut(200);
    } else {
      $("#totop").fadeIn(200);
    }
  });
  // ドロップダウンメニュー
  $("nav").prepend('<div class="toggle">menu</div>');
  $(".toggle").css({
    width: "100%",
    height: "50px",
    "background-color": "#999",
    color: "#fff",
    "text-align": "center",
    "line-height": "50px",
  });
  $(window).on("load resize", function () {
    var winWidth = $(window).width();
    if (winWidth < 700) {
      $(".toggle").show();
      $("nav>ul").hide();
    } else {
      $(".toggle").hide();
      $("nav>ul").show();
    }
  });
  $(".toggle").on("click", function () {
    $(this).next("ul").slideToggle();
    $(".open").removeClass("open");
    $("nav>ul>li>a").next("ul").slideUp();
    operner = close;
  });

  var opener = close; //flagでクリックしたときのアコーディオンの開くまでの時間を調節
  //ウィンドウサイズ640px以下の時の動作
  $("nav>ul>li>a").on("click", function () {
    var winWidth = $(window).width();
    if (winWidth < 700) {
      //ウィンドウサイズ640px以上なら
      if ($(this).hasClass("open")) {
        //クリックした要素がopenクラスを持っているなら
        $(this).removeClass("open");
        $(this).next("ul").slideUp();
        opener = close;
      } else {
        //クリックした要素がopenクラスを持っていないなら
        var timer; //アコーディオンが開くまでの遅延時間
        console.log(opener);
        if (opener !== close) {
          timer = 500;
        } else {
          timer = 0;
        }
        $(".open").removeClass("open");
        $("nav>ul>li>a").next("ul").slideUp();
        setTimeout(() => {
          $(this).addClass("open");
          $(this).next("ul").slideDown();
        }, timer);
        opener = open;
      }
      event.preventDefault();
    } else {
      //ウィンドウサイズ640px以下なら
      return false;
    }
  });

  //ウィンドウサイズ640px以上の時の動作
  $("nav>ul>li")
    .on("mouseover", function () {
      //マウスをのせたとき
      var winWidth = $(window).width();
      if (winWidth > 700) {
        //ウィンドウサイズ640px以上なら
        if (!$(this).children("a").hasClass("open")) {
          $(this).children("a").addClass("open");
          $(this).children("ul").stop().slideDown();
        }
      } else {
        //ウィンドウサイズ640px以下なら
        return false;
      }
    })
    .on("mouseout", function () {
      var winWidth = $(window).width();
      if (winWidth > 700) {
        //ウィンドウサイズ640px以上なら
        $(this).children("a").removeClass("open");
        $(this).children("ul").stop().slideUp();
      } else {
        //ウィンドウサイズ640px以下なら
        return false;
      }
    });
  $("nav>ul>li>a").on("click", function () {
    event.preventDefault();
  });

  // 　フワッと現れる
  var scloll = {
    delay: 800, //アニメーションの発生タイミング

    distance: "500px", //要素の移動距離

    origin: "right", //要素が移動してくる方向

    //例では、徐々に縮小しながら表示されます。
    // scale: 0.5,
  };

  ScrollReveal().reveal(".container", scloll);
});
