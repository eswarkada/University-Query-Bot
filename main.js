const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit1');
const chatArea = document.querySelector('.chatbody1');
const inputElm = document.querySelector('input');


//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})


// send message when click on submit button
submitBtn.addEventListener('click', ()=>{


	var aa = inputElm.value;
	if( aa === ''){return false;}
	else{
    let userInput = inputElm.value;
    var div = document.createElement("div");
    div.id="user1";
    div.innerHTML =`${userInput}`;
    chatArea.appendChild(div);
   // let temp = `<div id="user1">${userInput}</div>`;

   // chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;}

});


//sedn message when press the Enter
document.addEventListener("DOMContentLoaded", () => {
	

  const inputField = document.getElementById("userinput");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
    	var bb = inputElm.value;
	    if( bb === ''){return false;}
	    else{
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
    }}
  });
});



var x = bot();

function bot(){
  
  let botInputField = "Hi! I'm a Query Bot. Let me know if you have any questions regarding our university!"
  var botDiv = document.createElement("div");
  botDiv.id = "bot1";
  botDiv.innerHTML =`${botInputField}`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

 // var botBtn = document.createElement("button");
 // botBtn.id="botbutton";
  var userInput = "Admissions";
  let temp = `<button id="botbutton" onclick="sendAdmissionMsg()">${userInput}</button>`;

  chatArea.insertAdjacentHTML("beforeend", temp);
  //botBtn.innerHTML="Admissions";
  //chatArea.appendChild(botBtn);

  var botBtn = document.createElement("button");
  botBtn.id="botbutton";
  botBtn.innerHTML="Student";
  chatArea.appendChild(botBtn);

  var botBtn = document.createElement("button");
  botBtn.id="botbutton";
  botBtn.innerHTML="Faculty";
  chatArea.appendChild(botBtn);

  var botBtn = document.createElement("button");
  botBtn.id="botbutton";
  botBtn.innerHTML="Academics";
  chatArea.appendChild(botBtn);



  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
}

function sendAdmissionMsg(){
  var admValue = "Admissions";
  var div = document.createElement("div");
  div.id="user1",
  div.innerHTML =`${admValue}`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;





  var botBtn = document.createElement("button");
  botBtn.id="botbutton";
  botBtn.innerHTML="New Updates";
  chatArea.appendChild(botBtn);
  var botBtn = document.createElement("button");
  botBtn.id="botbutton";
  botBtn.innerHTML="How to Apply";
  chatArea.appendChild(botBtn);
  var botBtn = document.createElement("button");
  botBtn.id="botbutton";
  botBtn.innerHTML="Important Dates";
  chatArea.appendChild(botBtn);
  var botBtn = document.createElement("button");
  botBtn.id="botbutton";
  botBtn.innerHTML="Documents";
  chatArea.appendChild(botBtn);
  var botBtn = document.createElement("button");
  botBtn.id="botbutton";
  botBtn.innerHTML="College Website";
  chatArea.appendChild(botBtn);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

}


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

