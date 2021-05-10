const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit1');
const chatArea = document.querySelector('.chatbody1');
const inputElm = document.querySelector('input');


//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

var div = document.createElement("div");
div.id="user1",

div.innerHTML =`${userInput}`;
chatArea.appendChild(div);
   // let temp = `<div id="user1">${userInput}</div>`;

   // chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

})


document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("userinput");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let userInput = inputElm.value;

      var div = document.createElement("div");
      div.id="user1",
      div.innerHTML =`${userInput}`;
      chatArea.appendChild(div);
   // let temp = `<div id="user1">${userInput}</div>`;

   // chatArea.insertAdjacentHTML("beforeend", temp);
      inputElm.value = '';
      chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
      //addChat(input);
    }
  });
});
/*

function sendMsg(){
  const inputField = document.getElementById("submit");
  let input = inputElm.value;
  let temp = `<div class="user1">${input}</div>`;

  chatArea.insertAdjacentHTML("beforeend", temp);
      
  inputField.value = "";
 
 // addChat(input);
}
*/
/*
function addChat(input) {
 // const messagesContainer = document.getElementById("chatbody");

  //let userDiv = document.createElement('div');
 // userDiv.id = "user1";
 // var sheet = document.createElement('style');
  //sheet.innerHTML = "#user1{font-family: calibri;padding: 5px;float: right;margin:5px;display: table;clear: both;background-color: #4f8bf3;border-radius: 20px;}"
 // userDiv.style = "user response";
  //userDiv.innerHTML = `style="font-family: calibri;
  //  padding: 5px;
  //  float: right;
  //  margin:5px;
  //  display: table;
  //  clear: both;
   // background-color: #4f8bf3;
    //border-radius: 20px;"
 //  userDiv.innerHTML=`${input}`;
 // messagesContainer.appendChild(userDiv);

    let userInput = inputElm.value;

    let temp = `<div class="user1">${userInput}</div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';



/*
  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )
  */

