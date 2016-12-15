Object.defineProperty(Date.prototype, 'ago', {
    get: function () {
        var diff = (((new Date().getTime() - this.getTime())) / 1000)
        var dayDiff = Math.floor(diff / 86400)
        return (
            diff < 60 && '刚刚' ||
            diff < 120 && '一分钟之前' ||
            diff < 3600 && Math.floor(diff / 60) + '分钟之前' ||
            diff < 7200 && '一小时之前' ||
            diff < 86400 && Math.floor(diff / 3600) + '小时之前' ||

            dayDiff == 1 && 'Yesterday' ||
            dayDiff < 7 && dayDiff + '天之前' ||
            Math.ceil(dayDiff / 7) + '周之前'
        )
    }
})
var a = new Date('7/12/2016')
a.ago