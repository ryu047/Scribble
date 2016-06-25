Date.prototype.ddmm = function() {
  let that = this,
  	mm = that.getMonth(),
  	dd  = that.getDate().toString(),
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return  dd + ' ' + months[mm] + ' ' + (that.getHours() + ':' + that.getMinutes());
};