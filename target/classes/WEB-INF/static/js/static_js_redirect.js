/**
 * 判断浏览器类型
 */
function judeBrowserType(){
	var u = navigator.userAgent; 
	var isMobile = !!u.match(/iPhone/)||!!u.match(/Android/)||!!u.match(/iPad/);  // 必须是移动端浏览器
	if(isMobile){
	    window.location.href = "https://hy.xiaoyujia.com";
	}
}
judeBrowserType();
