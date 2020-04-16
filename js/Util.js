(function($, owner) {
	
	//owner.BaseUrl="http://10.61.37.30:8000/";
	owner.BaseUrl="http://10.51.77.69:8000/";
	//owner.BaseUrlWeb="http://47.108.30.209:8080/";
	owner.formatDateToString =function(value, pattern) {
        if (!isDate(value)) {
            return '';
        } 
		
        try {
            //默认为输出所有的
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_DATE_REG, function($0) {
                //如果传入一个yyyy-MM-dd 的表达式
                //实际上这个函数会分别回调多次 没符合一次匹配就回调一次
                //$0:yyyy  $0:MM $0:dd  依次类推
                //console.log('$0:'+$0);
                switch ($0.charAt(0)) {
                    case 'Y':
                        return paddingFillWith0(value.getFullYear(), $0.length);
                    case 'M':
                        return paddingFillWith0(value.getMonth() + 1, $0.length);
                    case 'D':
                        return paddingFillWith0(value.getDate(), $0.length);
                    case 'h':
                        return paddingFillWith0(value.getHours(), $0.length);
                    case 'm':
                        return paddingFillWith0(value.getMinutes(), $0.length);
                    case 's':
                        return paddingFillWith0(value.getSeconds(), $0.length);
                    case 'i':
                        return paddingFillWith0(value.getMilliseconds(), $0.length);
                    case 'w':
                        return value.getDay();
                    case 'W':
                        //自动将星期转为了大写
                        var week = ['日', '一', '二', '三', '四', '五', '六'];
                        return paddingFillWith0(week[value.getDay()], $0.length);
                    default:
                        return '';
                }
            });
        } catch (e) {
            console.log('error:' + e);
            return '';
        }
    }
	owner.getUserDept=function()
	{
		
		
	}
}(mui, window.Util = {}));