const widget = document.querySelector('.chat-widget')
widget.addEventListener('click', () => widgettoggle(widget))

const widgetInput = document.querySelector('.chat-widget__input')
function widgettoggle (widget) {
    widget.classList.add('chat-widget_active');
}

let sendMessage = function (event) {
    if(event.key === 'Enter'){
        question(widgetInput.value);
        widgetInput.value ='';
        let index = Math.floor(Math.random()*phrases.length)
        answer(phrases[index])
    }
}

widgetInput.addEventListener('keydown',sendMessage)

const mess = document.querySelector( '.chat-widget__messages' );
function timestamp () {
    let date = new Date;
    return date.getHours() + `:` + date.getMinutes()
}


function answer(body) {  
mess.innerHTML += `
  <div class="message">
    <div class="message__time">`+timestamp()+`</div>
    <div class="message__text">
      `+body+`
    </div>
  </div>
`;
}

function question(body) {
mess.innerHTML += `
  <div class="message message_client">
    <div class="message__time">`+timestamp()+`</div>
    <div class="message__text">
      `+body+`
    </div>
  </div>
`;
}