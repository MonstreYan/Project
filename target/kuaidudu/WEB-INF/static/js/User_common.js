$(function(){
	//图标隐藏菜单
	$(".entrance").hover(function(){
		$(this).children(".user-menu").show();
	},function(){
		$(this).children(".user-menu").hide();
	});

	$('.action .detailed').each(function(){
		$(this).click(function() {
        	detailed_content();
        	return false;
        });
  	});

	$('.action .thinkbox-image').each(function(){
		$(this).click(function() {
        	thinkbox_image();
        	return false;
        });
  	});



	(function(){
		var $nav = $("#nav"), $current = $nav.children("[data-key=" + $nav.data("key") + "]");
		if($nav.length){
			$current.addClass("current");
		} else {
			$("#nav").children().first().addClass("current");
		}
	})();

	var $window = $(window),
		Ww = $window.width(),
		Wh = $window.height(),
		$body = $("body");
	$window.load(function(){
		var $wh = document.body.scrollHeight;
		//导航漂浮
		var top = $(".top"),
			nav_button = top.find(".nav-button"),
			top1 = top.find(".top1"),
			nav = top.find(".nav");
		if(Ww>768){
			//右在线漂浮
			var com_fixed = $(".com-fixed");
			com_fixed.on("click",".single-fixed:last-child",function(){
				var self  = $(this);
				self.siblings(".fixed-show-hide").toggle().animate({opacity:1},500);
				com_fixed_H ();
			});
			com_fixed_H();

			$window.scroll(function(){
				var scroll_top = $window.scrollTop();
				if(scroll_top>200){
					nav.addClass("nav-fixed")
				}else {
					nav.removeClass("nav-fixed")
				}
			});

		}
		if(Ww<769){
			//	导航
			nav_button.on("click",function(e){
				e.stopPropagation();
				nav.toggle();
				var nav_css1 = nav.css("display");
				if(nav_css1 == "block"){
					var top1_h = top1.height(),
						nav_h = Wh - top1_h;
					nav.css({height:nav_h,overflow:"auto"});
					$body.css({overflow: "hidden",height:"100%"});
					$("html").css({height:"100%",overflow:"hidden"})
				}else {
					nav.css({ height:"auto"});
					$body.css({overflow:"inherit",height:"auto"});
					$("html").css({height:"auto",overflow:"inherit"});
				}
			});
			nav.on("click",function(e){
				e.stopPropagation();
			});
			$body.on("click",function(){
				nav.hide();
			});
			$window.scroll(function(){
				var scroll_top = $window.scrollTop();
				if(scroll_top>200){
					top.addClass("top-fixed");
				}else {
					top.removeClass("top-fixed");
				}
			});
		}


	});

	function com_fixed_H (){
		var com_fixed = $(".com-fixed"),
			com_fixed_H = com_fixed.height();
		com_fixed.animate({marginTop:-com_fixed_H/2},500);

	}
});
