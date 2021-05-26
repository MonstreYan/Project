define(function(require, exports) {
    function hideLoading(){
      $("#page-loading").remove();
    }
   var timer = window.setTimeout(hideLoading, 3000);
   exports.init = function () {
     $(document).ready(function(){
       $(window).load(hideLoading);
     });
     $(document).ready(function(){
       var percent = $(".pic-customize").data("percent");
       var position = $(".pic-customize").data("position");
       var type = $(".pic-customize").data("type");
       var height = $(".pic-customize img").height();
       var opacity = $(".ui-form .bg-settings").data("opacity");
       var blurry = $(".ui-form .bg-settings").data("blurry");
       var display = $(".ui-form .bg-settings").data("display");
       var backgroundDefault = $(".ui-title").data("backgroundDefault");
       if ($(".ui-field.center").length > 0) {
         $(".ui-field.center").each(function(){
           var maxWidth = $(".ui-content").width();
           var curWidth = $(this).find(".split-line span").width();
           if(curWidth == 0) {
             $(this).find(".split-line .left").css("width",'0px');
             $(this).find(".split-line .right").css("width",maxWidth+'px');
           } else {
             $(this).find(".split-line .left").css("width",(maxWidth-curWidth-10)/2+'px');
             $(this).find(".split-line .right").css("width",(maxWidth-curWidth-10)/2+'px');
           }
 
         });
       }
       if ($(".ui-field.left").length > 0) {
         $(".ui-field.left").each(function(){
           var maxWidth = $(".ui-content").width();
           var curWidth = $(this).find(".split-line span").width();
           console.log(maxWidth+'left');
           console.log(curWidth+'left');
           if(curWidth == 0){
             $(this).find(".split-line .right").css("width",maxWidth+'px');
           } else {
             $(this).find(".split-line .right").css("width",(maxWidth-curWidth-5)+'px');
           }
         });
       }
       //鑷畾涔夐厤鍥�
       if (type == "define") {
         $(".ui-form .pic-customize").css("height",height*percent/100+'px');
         $(".ui-form .pic-customize img").css("margin-top",(-(height + 21)*position/100)+'px');
       }
       //璋冩暣绾枃瀛楁儏鍐典笅鎻愪氦璁板綍鐨勪綅缃�
       if ($(".submit-record").length > 0) {
         if (!($(".ui-form.hasMatchImg").length > 0)){
           $(".ui-form .ui-title").css("padding","12px 70px 12px 16px");
         }
       }
       //鑷畾涔夎儗鏅浘鐗�
       if(display == "scroll")
         $(".ui-form .bg-settings").css("position","absolute");
       else
         $(".ui-form .bg-settings").css("position","fixed");
       $(".ui-form .bg-settings").css({"opacity": opacity/100,"filter":"blur(" + 50*blurry/100 + "px)"});
       $(".ui-form.back-color-default.customize").css("background",backgroundDefault+"08");
 
       $(".upload-file-trigger").each(function () {
         var id = $(this).data("id")
         var fileSelector = "input[name=file" + id + "]"
         var form = $(fileSelector).parents("form")
         console.log(form);
         form.css({
           top: $(this).offset().top,
           left: $(this).offset().left
         });
       })
     });
   }
 });