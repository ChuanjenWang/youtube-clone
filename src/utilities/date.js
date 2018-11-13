export const dateDiff = {
    inSeconds: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(1000));
    },
    inMinutes: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(60*1000));
    },
    inHours: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(3600*1000));
    },
    inDays: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

export const dateDiffText = (d1, d2) => {
    const diffYear = dateDiff.inYears(d1, d2);
    const diffMonth = dateDiff.inMonths(d1, d2);
    const diffWeek = dateDiff.inWeeks(d1, d2);
    const diffDay = dateDiff.inDays(d1, d2);
    const diffHour = dateDiff.inHours(d1, d2);
    const diffMinute = dateDiff.inMinutes(d1, d2);
    const diffSecond = dateDiff.inSeconds(d1, d2);

    if(dateDiff.inYears(d1, d2) > 0) {
        
        return diffYear > 1 ? diffYear + ' years ago' : '1 year ago';
    }else if(dateDiff.inMonths(d1,d2)) {
    
        return diffMonth > 1 ? diffMonth + ' months ago' : '1 month ago';
    }else if(dateDiff.inWeeks(d1, d2)) {
    
        return diffWeek > 1 ? diffWeek + ' weeks ago' : '1 week ago';
    }else if(dateDiff.inDays(d1, d2)) {
    
        return diffDay > 1 ? diffDay + ' days ago' : '1 day ago';
    }else if(dateDiff.inHours(d1, d2)) {
        
        return diffHour > 1 ? diffHour + ' hours ago' : '1 hour ago';
    }else if(dateDiff.inMinutes(d1, d2)) {
       
        return diffMinute > 1 ? diffMinute + ' minutes ago' : '1 minute ago';
    }else if(dateDiff.inSeconds(d1, d2)) {
       
        return diffSecond > 1 ? diffSecond + ' seconds ago' : '1 second ago';
    }
} 