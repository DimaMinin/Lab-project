function init() {
  V1 = Math.round(50 + Math.random()*100)/1000;
  V2 = -Math.round(50 + Math.random()*100)/1000;
  digit1 = Math.round(10/(V1 - V2))/10;
  digit2 = V1/(V1 - V2);

  stopSignal = 0;
  second = 0;
  doublesecond = 0;

  x1_end = Math.round(digit2*100); // расстояние, пройденное 1 тележкой до столкновения
  x3_end = -(100-Math.round(digit2*100)); // расстояние, пройденное 2 тележкой до столкновения

} // Создание переменных

function clean() {
  second = 0;
  doublesecond = 0;
  stopSignal=1;
  document.getElementById('t1').innerHTML= '0';
  document.getElementById('x1').innerHTML= '0';
  document.getElementById('t3').innerHTML= '0';
  document.getElementById('x3').innerHTML= '0';
  document.getElementById('t2').innerHTML= '0';
  document.getElementById('x2').innerHTML= '0';
  document.getElementById('t4').innerHTML= '0';
  document.getElementById('x4').innerHTML= '0';
  document.getElementById('mob1').style.left= 21 + 'px';
  document.getElementById('mob2').style.left= 622 + 'px';
} // Сбросить все параметры

function start() {
  m1 = Number(document.getElementById('m1').value);
  m2 = Number(document.getElementById('m2').value);
  p1 = 0.001*m1*V1;
  p2 = 0.001*m2*V2;
  p3 = (p1*m1 + 2*p2*m1 - p1*m2)/(m1 + m2);
  V3 = 1000*p3/m1;
  p4 = p1 + p2 - p3;
  V4 = 1000*p4/m2;
  e1 = V1*V1*m1/2000;
  e2 = V2*V2*m2/2000;
  e3 = V3*V3*m1/2000;
  e4 = V4*V4*m2/2000;
  changeCoordinates()
} // Начать движение тележек

function changeCoordinates() {

  if(second < digit1*10) {

  document.getElementById('t1').innerHTML=(second/10);
  document.getElementById('t3').innerHTML=(second/10);
  document.getElementById('mob1').style.left=21+54.6*second*V1 +'px';
  document.getElementById('x1').innerHTML=Math.round(second*V1*10);
  document.getElementById('mob2').style.left= 622+54.6*second*V2 +'px';
  document.getElementById('x3').innerHTML=Math.round(second*V2*10);

  } // Движение тележек до столкновения

  else{
    document.getElementById('x1').innerHTML = x1_end;
    document.getElementById('x3').innerHTML = x3_end;

    if((Math.round((digit2 + (second/10 - digit1)*V3)*100) >0)&&
      (Math.round((digit2 + (second/10 - digit1)*V3)*100) < 100)) {
      document.getElementById('t2').innerHTML=Math.round(second - digit1*10)/10;
      document.getElementById('mob1').style.left= 21 + 546*(digit2 + (second/10 - digit1)*V3) +'px';
      document.getElementById('x2').innerHTML=Math.round(doublesecond*V3*10);

    } // Движение 1 тележки после удара

    if(Math.round((digit2 + (second/10 - digit1)*V3)*100) <= 0) {

      document.getElementById('mob1').style.left= 21 + 'px';
      document.getElementById('t2').innerHTML=-Math.round(digit2*10/V3)/10;
      document.getElementById('x2').innerHTML=-(x1_end);

    } // Движение 1 тележки в левую стенку

    if(Math.round((digit2 + (second/10 - digit1)*V3)*100) >= 100) {

      document.getElementById('mob1').style.left= 567 + 'px';
      document.getElementById('t2').innerHTML=Math.round((1-digit2)*10/V3)/10;
      document.getElementById('x2').innerHTML=100 - x1_end;

    } // Движение 1 тележки в правую стенку

    if((Math.round((digit2 + (second/10 - digit1)*V4)*100) >0)&&
      (Math.round((digit2 + (second/10 - digit1)*V4)*100) < 100)) {
      document.getElementById('t4').innerHTML=Math.round(second - digit1*10)/10;
      document.getElementById('mob2').style.left= 77 + 546*(digit2 + (second/10 - digit1)*V4) +'px';
      document.getElementById('x4').innerHTML=Math.round(doublesecond*V4*10);

    } // Движение 2 тележки после удара

    if(Math.round((digit2 + (second/10 - digit1)*V4)*100) <= 0) {

      document.getElementById('mob2').style.left= 76 + 'px';
      document.getElementById('t4').innerHTML=-Math.round(digit2*10/V4)/10;
      document.getElementById('x4').innerHTML=-x1_end;

    } // Движение 2 тележки в левую стенку

    if(Math.round((digit2 + (second/10 - digit1)*V4)*100) >= 100) {

      document.getElementById('mob2').style.left= 622 + 'px';
      document.getElementById('t4').innerHTML=Math.round((1-digit2)*10/V4)/10;
      document.getElementById('x4').innerHTML=100 - x1_end;

    } // Движение 2 тележки в правую стенку

    doublesecond++;

  } // Движение тележек после столкновения

    if((second===1200)||(stopSignal===1)){
      return false;
    } // Проверка stop-сигнала

    second++;

    setTimeout("changeCoordinates()", 100); // Задержка вызова метода

} // Метод, с помощью которого меняются координаты у тележек
