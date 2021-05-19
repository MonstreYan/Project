/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 * @author yanis.wang
 * @see	http://yaniswang.com/frontend/2013/02/16/dateformat-performance/
 */
template.helper('dateFormat', function (date, format) {
    date = new Date(date);

    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
});
/**
 * 格式化树状内容标题
 * @param title 原始标题
 * @param level 节点深度
 * @param last 是否为最后一个
 * @param plast 其上级是否为最后一个
 *     一级
 *      ├ 二级
 *      │   ├三级
 *      │   ├三级
 *      │   └三级
 *      ├ 二级
 *      └ 二级
 *          ├三级
 *          └三级
 *     一级
 *      ├ 二级
 *      └ 二级
 * @return String
 * @author Mr.Li <lhb2002@qq.com>
 */
template.helper('levelText', function (title, level, last,plast) {
    if(level<1){
        return title;
    }
    else{
        var str=last ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└&nbsp;' : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;" ;
        for (var i=level; i>1 ; i-- ){
            if(plast){
                str="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+str;
            }
            else{
                str="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│"+str;
            }
        }
        return str + title;
    }

});

/*
* 扩展U方法
* */
template.helper('U', function (url, vars, suffix) {
    return window.Think.U(url, vars, suffix);
});
/*
* long转为ip信息
*
* */
template.helper('long2ip', function (proper_address) {
    proper_address = proper_address>>>0;
    var output = false;

    if ( !isNaN ( proper_address ) && ( proper_address >= 0 || proper_address <= 4294967295 ) ) {
        output = Math.floor (proper_address / Math.pow ( 256, 3 ) ) + '.' +
            Math.floor ( ( proper_address % Math.pow ( 256, 3 ) ) / Math.pow ( 256, 2 ) ) + '.' +
            Math.floor ( ( ( proper_address % Math.pow ( 256, 3 ) ) % Math.pow ( 256, 2 ) ) /
                Math.pow ( 256, 1 ) ) + '.' +
            Math.floor ( ( ( ( proper_address % Math.pow ( 256, 3 ) ) % Math.pow ( 256, 2 ) ) %
                Math.pow ( 256, 1 ) ) / Math.pow ( 256, 0 ) );
    }

    return output;
});
template.helper('JSON',JSON);

//小数保留位数
template.helper('tmpl_to_fixed',function(number,num){
    var numObj = new Number(number);
    return numObj.toFixed(num)
});