var GlobalManage = {}; // 全局共享对象
var basePath = basePath || "";
// 网站导航菜单显示代码
$(window).scroll(function(event) {
	var winPos = $(window).scrollTop();
	if(winPos >= 80) {
		$(".header-wrap-fixed").show();
	} else {
		$(".header-wrap-fixed").hide();
	}
});

//友情链接
$(".footer-yqlj").on("click", ".btn-tab-group .btn-tab", function() {
	$(this).addClass("active").siblings().removeClass("active");
	var index = $(this).index();
	$(".footer-yqlj .btn-tab-con .page").eq(index).show().siblings().hide();
});

// 服务类型
$(".service-type-group").on("mouseover", ".tab-item-group .tab-item", function() {
	$(this).addClass("active").siblings().removeClass("active");
	var index = $(this).index();
	$(".service-species-wrap .tab-con .page").eq(index).show().siblings().hide();
});

/**
 * 网站相关属性配置
 */
GlobalManage.config = {
	//businessHttpPrefix:"http://192.168.1.226:8080/"		// 商家端跨域请求前缀(测试)
	businessHttpPrefix: "http://vip.lb-dj.com/" // 商家端跨域请求前缀(正式)
	//businessHttpPrefix:"http://test.pre.replease.lb-dj.com/" // 预生产环境
	//businessHttpPrefix:"http://127.0.0.1:8081/"		   // 本机电脑（测试）
}
/**
 * 网站通用正则表达式
 */
GlobalManage.regExp = {
	phone: /^[1][3,4,5,6,7,8,9][0-9]{9}$/ // 手机号码验证
}
/**
 * 工具方法集合
 */
GlobalManage.utilsFun = {
	/**
	 * 图片缩放位移居中
	 * @param ImgD -- 图片对象
	 * @param w
	 * @param h
	 * @param type
	 */
	moveImageCenter: function(ImgD, w, h, type) {
		var image = new Image();
		image.src = ImgD.src;
		if(image.width > 0 && image.height > 0) {
			if(image.width / image.height >= w / h) {
				ImgD.style.width = (ImgD.width * h) / ImgD.height + type;
				ImgD.style.height = h + type;
				ImgD.style.marginLeft = -((ImgD.width * h) / ImgD.height - w) / 2 + type;
			} else {
				ImgD.style.height = (ImgD.height * w) / ImgD.width + type;
				ImgD.style.width = w + type;
				ImgD.style.marginTop = -((ImgD.height * w) / ImgD.width - h) / 2 + type;
			}
		}
	}
}

/**
 * 翻页控件方法
 * @id 元素id
 * @call 回调函数
 */
GlobalManage.flipPage = function(id, call) {
	if($(id).length > 0) {
		var cur = parseInt($(id).attr("data-cur-page"));
		var total = parseInt($(id).attr("data-total-page"));
		$(id).paging({
			pageNo: cur,
			totalPage: total,
			callback: function(num) {
				call(num);
			}
		})
	}
}
$(function() {
	$("body").on("focusin", "input[type='text'],input[type='password'],select,textarea", function() {
		$(this).removeClass("focusin hover")
	});
	$("select").each(function() {
		var val = $(this).find("option:selected").val();
		if(val == "") {
			$(this).addClass("placeholder");
		}
	});
	$("body").on("change", "select", function() {
		var val = $(this).find("option:selected").val();
		if(val == "") {
			$(this).addClass("placeholder");
		} else {
			$(this).removeClass("placeholder");
		}
	});

	//判断是否是IE浏览器，包括Edge浏览器
	function getIEVersion() {
		var userAgent = navigator.userAgent;
		var isOpera = userAgent.indexOf("Opera") > -1;
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
		var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE;
		if(isIE) {
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);
			var fIEVersion = parseFloat(RegExp["$1"]);
			if(fIEVersion == 7) {
				return "IE7";
			} else if(fIEVersion == 8) {
				return "IE8";
			} else if(fIEVersion == 9) {
				return "IE9";
			} else if(fIEVersion == 10) {
				return "IE10";
			} else if(fIEVersion == 11) {
				return "IE11";
			} else {
				return "0"
			} //IE版本过低
		} else if(isEdge) {
			return "Edge";
		} else {
			return "-1"; //非IE
		}
	}

	function checkBrowserVersion() {
		var curVersion = getIEVersion();
		if(curVersion == "IE7" || curVersion == "IE8" || curVersion == "IE9" || curVersion == "IE10" || curVersion == "0") {
			if(window.location.href.indexOf("/browser") == -1) {
				window.location.href = "/browser";
			}
		}
	}
	checkBrowserVersion();

	// 顶部菜单导航
	$(".nav-right li").on("mouseover", function() {
		if($(this).hasClass("active")) {
			return false;
		} else {
			$(this).css("borderBottom", "3px solid red");
		}
	});
	$(".nav-right li").on("mouseout", function() {
		if($(this).hasClass("active")) {
			return false;
		} else {
			$(this).css("borderBottom", "none");
		}
	});

	// 浮窗相关控制
	$(".fixed-kefu-window").on("mouseover", ".phone", function() {
		$(".fixed-kefu-window .phone-zk-con").show();
		$(".fixed-kefu-window .phone-zk").stop().animate({
			"right": 0
		})
	});
	$(".fixed-kefu-window").on("mouseout", ".phone", function() {
		$(".fixed-kefu-window .phone-zk").stop().animate({
			"right": -145
		}, function() {
			$(".fixed-kefu-window .phone-zk-con").hide();
		})
	});

	$(".fixed-kefu-window").on("mouseover", ".xiadan", function() {
		$(".fixed-kefu-window .xiadan-zk-con").show();
		$(".fixed-kefu-window .xiadan-zk").stop().animate({
			"right": 0
		})
	});
	$(".fixed-kefu-window").on("mouseout", ".xiadan", function() {
		$(".fixed-kefu-window .xiadan-zk").stop().animate({
			"right": -145
		}, function() {
			$(".fixed-kefu-window .xiadan-zk-con").hide();
		})
	});

	$(".fixed-kefu-window").on("click", ".back-top", function() {
		$("html,body").animate({
			scrollTop: 0
		}, 300);
	});
	$(".fixed-kefu-window").on("mouseover", ".liuyan", function() {
		if($(".fixed-kefu-window .liuyan-pane").is(":hidden")) {
			$(".fixed-kefu-window .liuyan-pane").show();
		}
	});
	$(".fixed-kefu-window").on("mouseover", ".kefu,.phone,.xiadan,.back-top", function() {
		if(!$(".fixed-kefu-window .liuyan-pane").is(":hidden")) {
			$(".fixed-kefu-window .liuyan-pane").hide();
		}
	});
	$(".fixed-kefu-window").on("mouseleave", ".liuyan-pane", function() {
		$(".fixed-kefu-window .liuyan-pane").hide();
	});
	$(document).bind("click", function(e) {
		var target = $(e.target);
		if(target.closest(".fixed-kefu-window .liuyan,.fixed-kefu-window .liuyan-pane").length == 0) {
			$(".fixed-kefu-window .liuyan-pane").hide();
		}
	});
	$(window).scroll(function() {
		changeFloatQQWindow();
	});
	$(window).resize(function() {
		changeFloatQQWindow();
	});

	function changeFloatQQWindow() {
		var w_h = $(window).height();
		var curPos = (w_h - 277) / 2 + 35;
		$('.fixed-kefu-window').css({
			"top": curPos + "px"
		});
	}
	changeFloatQQWindow();

	$(".liuyan-pane .btn").click(function() {
		basePath = $(".fixed-kefu-window").attr("data-requestUrl");
		//校验 是否电话或者手机号码
		var mydh = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
		var myphone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
		var phone = $(".fixed-kefu-window input[name='phone']").val();
		if(!myphone.test(phone) && !mydh.test(phone)) {
			layer.msg("手机号码有误，请重填");
			return;
		}
		var content = $(".fixed-kefu-window textarea[name='content']").val();
		if(content.trim().length == 0) {
			layer.msg("亲！留言内容不能为空哦");
			return;
		}
		$.ajax({
			type: "post",
			url: basePath + "/api/addleavenote",
			dataType: "json",
			data: {
				phone: phone,
				content: content
			},
			success: function(data) {
				if(data.code == 200) {
					layer.msg("亲！恭喜留言成功");
					$(".fixed-kefu-window input[name='phone']").val("");
					$(".fixed-kefu-window textarea[name='content']").val("");
					$(".fixed-kefu-window .liuyan-pane").hide();
				}
			}
		});
	});

});

// 定制VIP处理相关 start------------------------------------------------------------------------------------------
var vipcustomPageType; // 定制VIP跳转页面类型     0：外部页面，  1：个人中心内页面
var gotoVipSystemFlag; // 区分是否是外部按钮点击进入商家端页面
var newWindow = null; // 新窗口页面，解决新窗口打开拦截问题

// 申请定制VIP
function quickRegistr(phone, token) {
	if(phone == '') {
		layer.confirm("亲!先去登录后再申请吧。", {
				btn: ['确定', '取消'],
				shade: false
			},
			function(index) {
				location.href = basePath + "/login";
			},
			function() {
				layer.close();
			});
		return;
	}
	if(token == '') {
		layer.msg("您是通过第三方登录用户，请先使用找回密码功能设置密码，然后再申请");
		return false;
	}
	quickRegistrByJsonp(phone, token);
}

function successCallback(data) {
	// 外部链接直接进入商家端
	if(gotoVipSystemFlag == true) {
		gotoVipSystemHandler(data);
		return;
	}

	// 活动页面申请按钮进入
	if(data.code == 200) {
		location.href = GlobalManage.config.businessHttpPrefix + "erp/merchant/order/manageadd.do?source=newplatform";
	} else if(data.code == 100) {
		location.href = GlobalManage.config.businessHttpPrefix + "erp/merchant/indexinfo.do?type=1";
	} else if(data.code == -1) {
		layer.msg("您的账号信息有误或账号不一致，请联系小羽佳平台");
	} else if(data.code == -2) {
		layer.msg("请您先登陆后在申请，或直接访问网址http://vip.lb-dj.com注册账号");
	}
}

// 已经定制过的VIP用户直接跳转到商家端系统 判断
function gotoVipSystem(phone, token, pagetype) {
	vipcustomPageType = pagetype;
	gotoVipSystemFlag = true;
	if(phone == '' || token == '') { // 跳到活动详情页
		if(vipcustomPageType == 0) {
			window.open(basePath + "/activity/maxvipcustom");
		} else if(vipcustomPageType == 1) {
			// location.href = basePath+"/activity/vipcustom";
			window.open(basePath + "/activity/maxvipcustom"); // 统一体验新窗口，主要是为了解决新窗口打开拦截问题
		} else if(vipcustomPageType == 2) {
			window.open("http://vip.lb-dj.com/erp/merlogin.html");
		}
		return;
	}

	newWindow = window.open('about:blank');
	quickRegistrByJsonp(phone, token);
}

function quickRegistrByJsonp(phone, token) {
	$.ajax({
		type: "GET",
		url: GlobalManage.config.businessHttpPrefix + "erp/merchant/quickRegistr.do?phone=" + phone + "&token=" + token,
		dataType: 'JSONP',
		jsonpCallback: 'successCallback',
		success: function(data) {
			console.info("调用success");
		},
		error: function() {
			layer.msg("系统错误");
		}
	});
}

function gotoVipSystemHandler(data) {
	if(data.code == 100) {
		var url = GlobalManage.config.businessHttpPrefix + "erp/merchant/order/manageadd.do?source=newplatform";
		//window.open(basePath+"/activity/transfer?redirect="+url);			// 失败告终
		newWindow.location.href = url;
	} else {
		if(vipcustomPageType == 0) {
			newWindow.location.href = basePath + "/activity/maxvipcustom";
		} else if(vipcustomPageType == 1) {
			//location.href = basePath+"/activity/vipcustom";
			newWindow.location.href = basePath + "/activity/maxvipcustom"; // 统一体验新窗口，主要是为了解决新窗口打开拦截问题
		} else if(vipcustomPageType == 2) {
			newWindow.location.href = "http://vip.lb-dj.com/erp/merlogin.html";
		}
	}
}

//定制VIP处理相关end------------------------------------------------------------------------------------------

// 下单需要登录处理 start -----------------------
/**
 * 判断用户是否登录
 */
GlobalManage.checkUserLogin = function(fun) {
	var b = false;
	$.ajax({
		type: "post",
		url: basePath + "/user/getUserInfo",
		async: false,
		dataType: "json",
		success: function(data) {
			if(data.errCode == 200) {
				if(fun) {
					fun(true);
				}
				b = true;
			} else {
				if(fun) {
					fun(false);
				}
				b = false;
			}
		}
	});
	return b;
}

$(".js-place-order-enter").on("click", function() {
	var type = $(this).attr("data-type");
	var target = $(this).attr("target");
	var b = GlobalManage.checkUserLogin();
	var redirect = "";
	if(b) {
		if(type == 0) {
			if(target == "_blank") {
				window.open(basePath + "/order/placeOrder");
			} else {
				location.href = basePath + "/order/placeOrder";
			}
		} else if(type == 1) {
			if(target == "_blank") {
				window.open(basePath + "/order/placeOrder");
			} else {
				location.href = basePath + "/order/placeOrder";
			}
		} else {
			if(target == "_blank") {
				window.open(basePath + "/order/placeOrder");
			} else {
				location.href = basePath + "/order/placeOrder";
			}
		}
	} else {
		if(type == 0) { // 一口价下单
			redirect = basePath + "/order/placeOrder";
		} else if(type == 1) { // 报价下单
			redirect = basePath + "/order/placeOrder";
		} else { // 悬赏下单
			redirect = basePath + "/order/placeOrder";
		}
		if(target == "_blank") {
			window.open(basePath + "/login?redirect=" + encodeURIComponent(redirect));
		} else {
			location.href = basePath + "/login?redirect=" + encodeURIComponent(redirect);
		}
	}
});

// 下单需要登录处理end

// 页面按钮埋点
$("body").on("click", ".js-burying-point", function() {
	var viewCode = $(this).attr("data-viewCode");
	var viewName = $(this).attr("data-viewName");
	var buttonCode = $(this).attr("data-buttonCode");
	var buttonName = $(this).attr("data-buttonName");
	$.ajax({
		type: "post",
		url: basePath + "/burialPoint/addBurialPoint.do",
		data: {
			viewCode: viewCode,
			viewName: viewName,
			buttonCode: buttonCode,
			buttonName: buttonName
		},
		dataType: "json",
		success: function(data) {

		}
	});
});

// 页面埋点
function pageBuryingPoint(viewId) {
	$.ajax({
		type: "post",
		url: basePath + "/user/buryingPoint",
		data: {
			viewId: viewId,
			level: 1,
		},
		dataType: "json",
		success: function(data) {

		}
	});
}

$(window).on('ready , scroll', function() {
	if($(window).scrollTop() > 30) {
		$('.blete-main-menu').addClass('minified');
	} else {
		$('.blete-main-menu').removeClass('minified');
	}
});

/* xiaoyujia */

document.body.oncontextmenu = function() {
	return false
};
document.body.ondragstart = function() {
	return false
};
document.body.onkeydown = function() {
	var e = window.event || arguments[0];
	if(e.keyCode == 123) {
		return false;
	} else if(e.ctrlKey && e.shiftKey && e.keyCode == 73) {
		return false;
	} else if(e.shiftKey && e.keyCode == 121) {
		return false;
	}
};