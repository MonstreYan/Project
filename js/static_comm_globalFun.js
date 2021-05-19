/**
 * @des: 全网站通用方法	
 * @author: liheng
 * @date: 2018年03月05日 下午09:05:00
 */
(function($, W){
	
	/**
	 * @des:jquery统一get方法请求	
	 * @author: liheng
	 * @date: 2018年03月05日 下午10:05:00
	 */
	W.getReq = function($url,$data,$succ,$error,$async){	
		$.ajax({
				url : $url,		
				type : "get",	
				dataType : "json",		
				data :$data,	
				async:$async==undefined?true:$async,
				success : function(dat){
					if($succ)$succ(dat);	
				}, error : function(err){
					if($error)$error(err);		
				}
		});
	}
	/**
	 * @des: jquery统一post方法请求		
	 * @author: liheng
	 * @date: 2018年03月05日 下午10:05:00
	 */
	W.postReq = function($url,$data,$succ,$error,$async){	
		$.ajax({
			url : $url,			
			type : "post",	
			dataType : "json",
			data :$data,	
			async:$async==undefined?true:$async,
			success : function(dat){
				if($succ)$succ(dat);	
			}, error : function(err){
				if($error)$error(err);		
			}
		});
	}
	
	/**
	 * @des: 将url地址参数转换成json对象
	 * @param {Object} href 地址参数,不传参数即获取当前地址栏的路径
	 */
	W.getUrlParamsObj = function(href){	
		var tempUrl = href;
		if(href == undefined){
			tempUrl = W.location.href;		
		}
	    var url = decodeURI(tempUrl);		
	    var result = new Object();	
	    var startIndex = url.indexOf("?");
	    if (startIndex != -1) {
	        var str = url.substr(startIndex+1);
	        var strs = str.split("&");
	        for (var i = 0; i < strs.length; i++) {
	            result[strs[i].split("=")[0]] = strs[i].split("=")[1];
	        }
	    }
	    return result;
	}
	
	/**
	 * @des: 图片缩放位移居中	
	 * @param ImgD 图片元素对象
	 * @param w 容器的宽度
	 * @param h 容器的高度
	 */ 
	W.moveImageCenter = function(ImgD,w,h){
		var image=new Image();
		image.src=ImgD.src;	
		if(image.width>0 && image.height>0){
			if(image.width/image.height>= w/h){
				ImgD.style.width=(ImgD.width*h)/ImgD.height+"px";
				ImgD.style.height=h+"px";
				ImgD.style.marginLeft=-((ImgD.width*h)/ImgD.height-w)/2+"px";
			}else{
				ImgD.style.height=(ImgD.height*w)/ImgD.width+"px";
				ImgD.style.width=w+"px";
				ImgD.style.marginTop=-((ImgD.height*w)/ImgD.width-h)/2+"px";
			}
		}
	}
	
	/**
	 * @des: 图片等比缩放
	 * @param ImgD 图片元素对象
	 * @param w 容器的宽度
	 * @param h 容器的高度
	 */
    W.proportionZoomImg = function(ImgD,w,h){	
        var image=new Image();
        image.src=ImgD.src;
        var _currentWidth = image.width;
        var _currentHeight = image.height;
        if(_currentWidth>0 && _currentHeight>0){	
            var t_w;
            var t_h;
            if(_currentWidth/_currentHeight > w/h ){
                t_w = w;
                t_h = _currentHeight/_currentWidth*w;
            }else{
                t_h = h;
                t_w = _currentWidth/_currentHeight*h;
            }
            ImgD.style.width = t_w +"px";
            ImgD.style.height = t_h +"px";
            ImgD.style.left = (w - t_w)/2 +"px";
            ImgD.style.top = (h - t_h)/2 +"px";	
        }
    }
	
})(window.jQuery, window)
