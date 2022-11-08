//Password for page, made with libyzxy0

username = "admin";
password = "admin123";

var hd = document.getElementsByTagName('head')[0];
var sl = document.createElement("style");
sl.innerHTML = `
  * {
      margin: 0;
      padding: 0;
      box-sizing::border-box;
  }
  .bg-v {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #121212;
      z-index: 5;
      transition: 0.5s;
  }
  .parent {
      margin-top: 10rem;
      text-align: center;
  }
  .inp1 {
      border: none;
      outline: none;
      height: 2.5rem;       
      width: 75%;
      padding: 0 1rem;
      background-color: #19191A;
      border-radius: 20px;
      border: 0.3px solid hsl(0, 0%, 22%);
      transition: 0.3s;
      font-weight: 500;
      color: gray;
   }
   .inp2 {
      border: none;
      outline: none;
      height: 2.5rem;       
      width: 75%;
      padding: 0 1rem;
      background-color: #19191A;
      border-radius: 20px;
      border: 0.3px solid hsl(0, 0%, 22%);
      transition: 0.3s;
      font-weight: 500;
      margin-top: 3rem;
      color: gray;
  }
  .submit_button {
      margin-top: 4rem;
      border: none;
      height: 2.3rem;
      width: 35%;
      background-color: #19191A;
      border: 0.3px solid hsl(0, 0%, 22%);
      border-radius: 20px;
      color: gray;
      font-weight: 500;
      transition: 0.3s;
  } .submit_button:hover {
      background: gray;
      color: #19191A;
  }
  .msg {
      color: gray;
      margin-top: 3rem;
      text-align: center;
  }
`;
hd.appendChild(sl);
var body = document.getElementsByTagName('body')[0];
var popup_login = document.createElement("div");
popup_login.className = "bg-v";
var parent = document.createElement("div");
parent.className = "parent";
var fm = document.createElement("form");
fm.id= "login-f";
var input1 = document.createElement("input");
input1.type="text";
input1.className="inp1";
input1.placeholder="Enter Username";
input1.id="username";
var input2 = document.createElement("input");
input2.type="password";
input2.className="inp2";
input2.placeholder="Enter Password";
input2.id="password";
var submit_p = document.createElement("div");
var submit_b = document.createElement("button");
submit_b.className="submit_button";
submit_b.id="submit_btn";
submit_b.type="submit";
submit_b.innerHTML="Submit";
var alert_msg = document.createElement("p");
alert_msg.className="msg"
alert_msg.innerHTML="..."
popup_login.appendChild(parent);
parent.appendChild(fm);
fm.appendChild(input1);
fm.appendChild(input2);
fm.appendChild(submit_p);
submit_p.appendChild(submit_b);
popup_login.appendChild(alert_msg);

body.appendChild(popup_login);

var f = document.getElementById("login-f");
f.addEventListener("submit", y);
function y(e) {
    e.preventDefault();
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let popup = document.querySelector(".bg-v");
    if (u == username && p == password) {
        alert_msg.innerHTML="Password match, wait..."
        setTimeout(function(){
            popup.style.background="transparent";
            fm.style.display="none";
            alert_msg.style.display="none";
            alert_msg.innerHTML="..."
            setTimeout(function(){
                popup.style.display="none";
            }, 1000);
            f.reset()
        }, 2000);
    } else if (u != username && p != password) {
        alert_msg.innerHTML="Error password and email not match!"
        setTimeout(function(){
            alert_msg.innerHTML="..."
            f.reset()
        }, 2000);
    } else {
        alert_msg.innerHTML="An error occurred!"
        setTimeout(function(){
            alert_msg.innerHTML="..."
        }, 2000);
    }
}
