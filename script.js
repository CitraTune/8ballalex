var otcmtext = " "
var otcm= 1;
var cdiv = document.createElement("div");
cdiv.id = "cdiv";
document.body.appendChild(cdiv);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function otcmgen() {
  otcm= getRandomInt(21);
  switch (otcm) {
  case 1:
   otcmtext="no"
    break;
  case 2:
     otcmtext="yes alex do it or katinka will kiss your bootycheeks"
    break;
  case 3:
    otcmtext="NOOOOOOOOO"
    break;
  case 4:
     otcmtext="welll......"
    break;
  case 5:
     otcmtext="😗idk yes"
    break;
  case 6:
    otcmtext=":3 yes"
    break;
  case 7:
    otcmtext=":3 no..."
    break;
 case 8:
    otcmtext="grow balls!"
    break;
   case 9:
    otcmtext="WHY NOT?"
    break;
   case 10:
    otcmtext="its better to shave your hair"
    break;
   case 11:
    otcmtext="maybe tommorow"
    break;
    case 12:
    otcmtext="yes"
    break;
    case 13:
    otcmtext="alternatively, hang yourself"
    break;
    case 14:
    otcmtext="No Alex thats stupid"
    break;
    case 15:
    otcmtext="yes Alex do it"
    break;
    case 16:
    otcmtext="eat later"
    break;
    case 17:
    otcmtext="Go eat"
    break;
    case 18:
    otcmtext="sleep"
    break;
    case 19:
    otcmtext="explosion boom wow"
    document.body.appendChild(expng);
   
    break;
    case 20:
    otcmtext="kiss cj"
    break;
    case 21:
    otcmtext="Go abuse someone"
    break;  
  }
  tchat.innerHTML = otcmtext;
}
var tdiv = document.createElement("div");
tdiv.id = "tdiv";
document.body.appendChild(tdiv);
var tchat = document.createElement("para");
tchat.id = "tchat";
tchat.style.fontFamily= "cursive"
tchat.innerHTML=otcmtext;
document.body.appendChild(tchat);
var expng= document.createElement("IMG");
expng.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3-SC029-TCjP5C5WlQ_JiQHaE7%26pid%3DApi&f=1&ipt=025df9f9d58d2fc4086457eeb59e03fe2b061e879c6acffbdaa744cb291a8f06&ipo=images';
expng.id = "expng";

tdiv.addEventListener("click", otcmgen);