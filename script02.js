function updateTime()
{



function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}




var ter = document.getElementById("ter");
var tter = document.getElementById("tter");

var houu = document.getElementById("houu");
var minn = document.getElementById("minn");
var secc = document.getElementById("secc");
// объявляем наши даты
var current = new Date(); // сегодня
var old = new Date("2022-09-03"); // !!! год-месяц-день !!!



    // сначала находим количество дней между датами
    var daysall = Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24) ;  //дни с погрешностью
    var days = Math.ceil(Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24) + 0.125 ); //   дни
    
    var hourall = Math.abs(old.getTime() - current.getTime()) / (1000 * 3600); //часы с погрешностью
    // var hour = Math.ceil(Math.abs((days * 24) - hourall) + 3);
    let hou = current.getHours(); //  часы


 

    let min = current.getMinutes(); // минуты
    
    let sec = current.getSeconds(); //секунды 
    
    
    var year = Math.floor(days / 365); // вычисляем кол-во лет. Math.floor убирает остаток.
    var months = Math.floor((days - (year * 365)) / 30); // отняв года, вычисляем месяцы
    let dayss = current.getDate();
    let monn = current.getMonth();// отняв года, вычисляем месяцы

    var chismes = 0;

    switch (monn) {
        case 1:
          monn = 31
          break;
        case 2:
          monn = 31
          break;
        case 3:
          monn = 28
          break;
        case 4:
          monn = 31
          break;
        case 5:
          monn = 30
          break;
        case 6:
          monn = 31
          break;
        case 7:
          monn = 30
          break;
        case 8:
          monn = 31
          break;
        case 9:
          monn = 31
          break;
        case 10:
          monn = 30
          break;
        case 11:
          monn = 31
          break;
        case 12:
          monn = 30
          break;

        default:
        //   alert( "Нет таких значений" );
      }





   // ///////////////// правилно выщитуем часы
    if (hou > 13) {
        hou = hou - 13;

    } else {
        hou = hou + 11;
    }
    
    if (dayss > 3) {
        dayss = dayss - 3;
    } else if (dayss = 3) {
        dayss = monn - 3 + 3
    } else if (dayss = 2) {
        dayss = monn - 3 + 2
    } else if (dayss = 1) {
        dayss = monn - 3 + 1
    }
    



    // осталось вывести полученную информацию в контейнер:
    ter.innerHTML = ' <span class="text-w">Day: </span>' + '<br>' + days ;
    tter.innerHTML = '<span class="text-w">We together for: </span>' + '<br>' + zero_first_format(year) + ' year ' + zero_first_format(months) + ' months ' + zero_first_format(dayss) + ' days ';

    houu.innerHTML = zero_first_format(hou) + ':';
    minn.innerHTML = zero_first_format(min) + ':';
    secc.innerHTML = zero_first_format(sec); 
}

setInterval(updateTime, 1000);


// function test() {
//   let d = document.getElementById("div1");
//   d.classList.add("vid");
// }