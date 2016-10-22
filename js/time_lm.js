// JavaScript Document
/*时间*/
function  getDate01()
                            {
                            var time = new Date();
                                var myYear = time.getFullYear();
                                var myMonth = time.getMonth()+1;
                                var myDay = time.getDate();
                                if(myMonth < 10){
                                    myMonth = "0" + myMonth;
                                }
                            document.getElementById("yue_fen").innerHTML =  myYear + "." + myMonth;
                            document.getElementById("day_day").innerHTML =  myYear + "." + myMonth + "." + myDay;
                        }
                      