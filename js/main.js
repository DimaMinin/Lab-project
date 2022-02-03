
ans0 = new Array(4,2,2,1234,2, 0,0.3);
ball = new Array(1,1,1,1,1,1,1);
ans = new Array();
testName = '2018';
showCorrWrong = true;
maxAttempts = 0;
startDoc = testName;
testDoc = testName+'1';
maxScore = 0;
nmax = ans0.length;



regname='';
score=0;
score0=0;
attempt=0;
n=0;
W=100;
m1 = 100;
m2 = 100;

function init() {
  V1 = Math.round(50 + Math.random()*100)/1000;
  V2 = -Math.round(50 + Math.random()*100)/1000;
  tvstr = Math.round(10/(V1 - V2))/10;
  xvstr = V1/(V1 - V2);

  sto = 0;
  second = 0;
  doublesecond = 0;
}


function clean() {
  doublesecond = 0;
  second = 0;
  sto=1;
  document.getElementById('t1').innerHTML= '0.0';
  document.getElementById('x1').innerHTML= '00';
  document.getElementById('t3').innerHTML= '0.0';
  document.getElementById('x3').innerHTML= '00';
  document.getElementById('t2').innerHTML= '0.0';
  document.getElementById('x2').innerHTML= '00';
  document.getElementById('t4').innerHTML= '0.0';
  document.getElementById('x4').innerHTML= '00';
  document.getElementById('mob1').style.left= 21 + 'px';
  document.getElementById('mob2').style.left= 622 + 'px';
  var trolley1 = document.getElementById("mob1");
  var trolley2 = document.getElementById("mob2");
  trolley1.setAttribute("src", "img/StonesTrolley.gif")
  trolley2.setAttribute("src", "img/StonesTrolley.gif")
}

function start() {
  m1 = Number(document.getElementById('m1').value);  m2 = Number(document.getElementById('m2').value);
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
  tiktak()
}

function changeImages() {
  if (m1 < m2) {
    var trolley = document.getElementById("mob1");
    trolley.setAttribute("src", "img/EmptyTrolley.gif");
    trolley.setAttribute("width", "56");
    trolley.setAttribute("height", "56");
  }

  if (m1 > m2) {
    var trolley = document.getElementById("mob2");
    trolley.setAttribute("src", "img/EmptyTrolley.gif");
    trolley.setAttribute("width", "56");
    trolley.setAttribute("height", "56");
  }

  if (m1 == m2) {
    var trolley1 = document.getElementById("mob1");
    trolley1.setAttribute("src", "img/EmptyTrolley.gif");
    trolley1.setAttribute("width", "56");
    trolley1.setAttribute("height", "56");
    var trolley2 = document.getElementById("mob2");
    trolley2.setAttribute("src", "img/EmptyTrolley.gif");
    trolley2.setAttribute("width", "56");
    trolley2.setAttribute("height", "56");
  }
}

function tiktak() {

  if(second < tvstr*10) {
  document.getElementById('t1').innerHTML=(second/10);
  document.getElementById('t3').innerHTML=(second/10);
  document.getElementById('mob1').style.left=21+54.6*second*V1 +'px';
  document.getElementById('x1').innerHTML=Math.round(second*V1*10);
  document.getElementById('mob2').style.left= 622+54.6*second*V2 +'px';
  document.getElementById('x3').innerHTML=Math.round(second*V2*10);
  }


else{
  document.getElementById('x1').innerHTML=Math.round(xvstr*100);
  document.getElementById('x3').innerHTML=-(100 - document.getElementById('x1').innerHTML);
  changeImages();


//--m1 posle

  if((Math.round((xvstr + (second/10 - tvstr)*V3)*100) >0)&&(Math.round((xvstr + (second/10 - tvstr)*V3)*100) < 100)) {
    document.getElementById('t2').innerHTML=Math.round(second - tvstr*10)/10;
    document.getElementById('mob1').style.left= 21 + 546*(xvstr + (second/10 - tvstr)*V3) +'px';

    document.getElementById('x2').innerHTML=Math.round(doublesecond*V3*10);
  }

  if(Math.round((xvstr + (second/10 - tvstr)*V3)*100) <= 0) { //-- первая тележка в левую стенку
    document.getElementById('mob1').style.left= 21 + 'px';
    document.getElementById('t2').innerHTML=-Math.round(xvstr*10/V3)/10;
    document.getElementById('x2').innerHTML=-(document.getElementById("x1").innerHTML);
  }

  if(Math.round((xvstr + (second/10 - tvstr)*V3)*100) >= 100) { //-- первая тележка в правую стенку
    document.getElementById('mob1').style.left= 567 + 'px';
    document.getElementById('t2').innerHTML=Math.round((1-xvstr)*10/V3)/10;
    document.getElementById('x2').innerHTML=100 - document.getElementById("x1").innerHTML;
  }


//--m2 posle
  if((Math.round((xvstr + (second/10 - tvstr)*V4)*100) >0)&&(Math.round((xvstr + (second/10 - tvstr)*V4)*100) < 100)) {
    document.getElementById('t4').innerHTML=Math.round(second - tvstr*10)/10;
    document.getElementById('mob2').style.left= 77 + 546*(xvstr + (second/10 - tvstr)*V4) +'px';
    document.getElementById('x4').innerHTML=Math.round(doublesecond*V4*10);
  }
  if(Math.round((xvstr + (second/10 - tvstr)*V4)*100) <= 0) { //-- вторая тележка в левую стенку
    document.getElementById('mob2').style.left= 76 + 'px';
    document.getElementById('t4').innerHTML=-Math.round(xvstr*10/V4)/10;
    document.getElementById('x4').innerHTML=-document.getElementById("x1").innerHTML;
  }
  if(Math.round((xvstr + (second/10 - tvstr)*V4)*100) >= 100) { //-- вторая тележка в правую стенку
    document.getElementById('mob2').style.left= 622 + 'px';
    document.getElementById('t4').innerHTML=Math.round((1-xvstr)*10/V4)/10;
    document.getElementById('x4').innerHTML=100 - document.getElementById("x1").innerHTML;
  }
  doublesecond++;
}
  if((second==1200)||(sto==1)){
    return false;
  }

  second++;
  setTimeout("tiktak()", 100);

}

