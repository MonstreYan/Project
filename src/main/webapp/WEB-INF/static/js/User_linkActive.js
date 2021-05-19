/**
 * Created by Administrator on 2015/12/9.
 */
$.linkActive=function(url){
    if(url==undefined){
        var url=window.location.pathname;
    }
    var c = $("a[href='"+url+"']");
    c.parent().addClass("on");

};
$.linkActive();

