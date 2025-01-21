function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66E8Z5ehusE":
        Script1();
        break;
      case "61xpjzSL3pe":
        Script2();
        break;
      case "5e4yoysKbrG":
        Script3();
        break;
      case "696br891YMF":
        Script4();
        break;
      case "6fQxURhcSO9":
        Script5();
        break;
      case "6dpJk3shXYI":
        Script6();
        break;
      case "5yzoeL5RAxU":
        Script7();
        break;
      case "6QCt4CvaRFk":
        Script8();
        break;
      case "6eteAbJRqH4":
        Script9();
        break;
      case "6gpIfqWYaek":
        Script10();
        break;
      case "6ixtMdTvJ8A":
        Script11();
        break;
      case "66U9Zq3enZs":
        Script12();
        break;
      case "6Ljy2hYBI9T":
        Script13();
        break;
      case "5hqQ08oi35G":
        Script14();
        break;
      case "5aUcNCr7mQS":
        Script15();
        break;
      case "6Yhyrfx1Xto":
        Script16();
        break;
      case "6UahM641NDz":
        Script17();
        break;
      case "6GVvL3WUsgG":
        Script18();
        break;
  }
}

function Script1()
{
  window.priceDisplay = function(id) {
    var player = GetPlayer();
    var piscok = player.GetVar("PiscokCount");
    var keripik = player.GetVar("KeripikCount");

    player.SetVar("TotalPrice", (piscok * 10000 + keripik * 8000).toLocaleString('id-ID'))
};


}

function Script2()
{
  var player = GetPlayer();
var item = player.GetVar("ItemCount");
var num = item + 1

window.priceDisplay("5UnzLyvrGs5")


}

function Script3()
{
  window.priceDisplay("5UnzLyvrGs5")

}

function Script4()
{
  var player = GetPlayer();
var item = player.GetVar("ItemCount");
var num = item - 1

if (item >= 0) {
    window.priceDisplay("5UnzLyvrGs5")
}


}

function Script5()
{
  var player = GetPlayer();
var item = player.GetVar("ItemCount");
var num = item + 1

window.priceDisplay("6VktobAeSWy")
}

function Script6()
{
  window.priceDisplay("6VktobAeSWy")
}

function Script7()
{
  var player = GetPlayer();
var item = player.GetVar("ItemCount");
var num = item - 1

if (item >= 0) {
    window.priceDisplay("6VktobAeSWy")
}



}

function Script8()
{
  const hide1 = document.querySelector('[data-model-id="69EY5DMeQSJ"] input[id="acc-69EY5DMeQSJ"]');
const hide2 = document.querySelector('[data-model-id="69EY5DMeQSJ"] input[role="presentation"]');

hide1.setAttribute("type", "password")
hide2.setAttribute("type", "password")
}

function Script9()
{
  var player = GetPlayer();

var username = player.GetVar("Username");
var password = player.GetVar("Password");

var userlist = player.GetVar("UsernameList");
var passlist = player.GetVar("PasswordList");

const user = userlist.split(",")
const pass = passlist.split(",")

if (user.includes(username)) {
    if (pass[user.indexOf(username)] == password) {
        console.log('NICE')
        player.SetVar("MemberName", username)
        player.SetVar("Membership", true)
    }
}
}

function Script10()
{
   var player = GetPlayer();

const open = document.querySelector('[data-model-id="6EDLBwDtYoe"]');
const close = document.querySelector('[data-model-id="6P1MivkRHaZ"]');

open.style.display = 'none'

player.SetVar('Register', false)

if (localStorage.getItem('acc')) {
    const acc = JSON.parse(localStorage.getItem('acc'));
    const userUsername = acc.username
    const userPassword = acc.password

    var userlist = player.GetVar("UsernameList");
    var passlist = player.GetVar("PasswordList");

    player.SetVar('UsernameList', ([userlist, userUsername]).join(','));
    player.SetVar('PasswordList', ([passlist, userPassword]).join(','));
}
}

function Script11()
{
  const open = document.querySelector('[data-model-id="6EDLBwDtYoe"]');
const close = document.querySelector('[data-model-id="6P1MivkRHaZ"]');

const hide1 = document.querySelector('[data-model-id="69EY5DMeQSJ"] input[id="acc-69EY5DMeQSJ"]');
const hide2 = document.querySelector('[data-model-id="69EY5DMeQSJ"] input[role="presentation"]');

if (open.style.display == 'none') {
    close.style.display = 'none'
    open.style.display = 'block'

    hide1.setAttribute("type", "text")
    hide2.setAttribute("type", "text")
} else {
    close.style.display = 'block'
    open.style.display = 'none'

    hide1.setAttribute("type", "password")
    hide2.setAttribute("type", "password")
}
}

function Script12()
{
  let pos = {}

const elem = document.querySelectorAll('[data-acc-text="Image 9.png"]');

window.removeEventListener('mousemove', move)
window.addEventListener('mousemove', move)

elem.forEach((e, i) => {
    pos[i] = { x: e.getBoundingClientRect().x, y: e.getBoundingClientRect().y, sz: e.getBoundingClientRect().height / 20 };
})

function move(e) {
    let x = e.clientX
    let y = e.clientY

    const sumbuX = window.innerWidth / 2;
    const sumbuY = window.innerHeight / 2;

    x -= sumbuX
    y -= sumbuY

    const wrap = document.querySelector('#wrapper');

    let xWrap = wrap.getBoundingClientRect().x;
    let yWrap = wrap.getBoundingClientRect().y;

    elem.forEach((el, i) => {
        let lf = pos[i].x - xWrap - 0 + (x * pos[i].sz) / 10+ 'px';
        let tp = pos[i].y - yWrap - 0 + (y * pos[i].sz) / 10 + 'px';
        console.log(lf, tp)
        console.log(-80 + (x * pos[i].sz) / 10, -50 + (y * pos[i].sz) / 10)
        console.log(pos[i].x, pos[i].y)
        el.style.transform = `translate(${lf}, ${tp})`
    })
}

function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




}

function Script13()
{
  var player = GetPlayer();

var username = player.GetVar("RegisterUsername");
var password = player.GetVar("RegisterPassword");

if (!localStorage.getItem("acc")) {
    localStorage.setItem("acc", JSON.stringify({
        username: username,
        password: password
    }))
}

const acc = JSON.parse(localStorage.getItem("acc"));
const userUsername = acc.username.split(",");
const userPassword = acc.password.split(",");

if (!userUsername.includes(username)) {
    userUsername.push(username);
    userPassword.push(password);

    localStorage.setItem('acc', JSON.stringify({
        username: userUsername.join(','),
        password: userPassword.join(',')
    }))

    player.SetVar('Register', true);
}
}

function Script14()
{
  const open = document.querySelector('[data-model-id="5wkQRRnW2Zb"]');
const close = document.querySelector('[data-model-id="6gLO39OjekG"]');

const hide1 = document.querySelector('[data-model-id="6kNNJVGPviW"] input[id="acc-6kNNJVGPviW"]');
const hide2 = document.querySelector('[data-model-id="6kNNJVGPviW"] input[role="presentation"]');

if (open.style.display == 'none') {
    close.style.display = 'none'
    open.style.display = 'block'

    hide1.setAttribute("type", "text")
    hide2.setAttribute("type", "text")
} else {
    close.style.display = 'block'
    open.style.display = 'none'

    hide1.setAttribute("type", "password")
    hide2.setAttribute("type", "password")
}
}

function Script15()
{
  const open = document.querySelector('[data-model-id="5wkQRRnW2Zb"]');
const close = document.querySelector('[data-model-id="6gLO39OjekG"]');

open.style.display = 'none'

const hide3 = document.querySelector('[data-model-id="6kNNJVGPviW"] input[id="acc-6kNNJVGPviW"]');
const hide4 = document.querySelector('[data-model-id="6kNNJVGPviW"] input[role="presentation"]');

hide3.setAttribute("type", "password")
hide4.setAttribute("type", "password")
}

function Script16()
{
  var player = GetPlayer();

var username = player.GetVar("Username");

if (username.length > 0) {
    console.log('NICE')
    player.SetVar("CustomerName", username)
    player.SetVar("Membership", true)
}
}

function Script17()
{
  var player = GetPlayer();

const waktu = new Date();

function formatTanggal(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
}

const hour = String(waktu.getHours()).padStart(2, '0'); 
const minute = String(waktu.getMinutes()).padStart(2, '0'); 
const second = String(waktu.getSeconds()).padStart(2, '0');

player.SetVar("Date", formatTanggal(waktu))
player.SetVar("Time", `${hour}:${minute}:${second}`); 

const piscok = player.GetVar("PiscokCount");
const keripik = player.GetVar("KeripikCount");

player.SetVar("PiscokPrice", (piscok * 10000).toLocaleString('id-ID'))
player.SetVar("KeripikPrice", (keripik * 8000).toLocaleString('id-ID'))

const Member = player.GetVar("Membership");
const mem = player.GetVar("MemberName");
const cus = player.GetVar("CustomerName");

const memberName = document.querySelector('[data-model-id="5Yhi3rGqVfN"]');
const customerName = document.querySelector('[data-model-id="6oPQzN2V1Wr"]')
const discountPrice = document.querySelector('[data-model-id="606xU0NgkXz"]')
const discountTag = document.querySelector('[data-model-id="5wRlgIHTW81"]')

if (!Member) {
    memberName.style.display = 'none'
    customerName.style.display = 'none';
    discountPrice.style.display = 'none';
    discountTag.style.display = 'none';
} else {
    if (mem.length == 0) {
        memberName.style.display = 'none';
        discountPrice.style.display = 'none';
        discountTag.style.display = 'none';
    } else {
        customerName.style.display = 'none';
    }
}

var total = piscok * 10000 + keripik * 8000;

player.SetVar("DiscountPrice", (total - total * 20 / 100).toLocaleString('id-ID'))

}

function Script18()
{
  var player = GetPlayer();

player.SetVar("Membership", false);
player.SetVar("MemberName", "");

player.SetVar("Username", "");
player.SetVar("Password", "");

player.SetVar("ItemCount", 0);
player.SetVar("PiscokCount", 0);
player.SetVar("KeripikCount", 0);

}

