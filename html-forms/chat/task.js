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
        let index = Math.floor(Math.random() * phrases.length)
        let date = new Date;
        let time= date.getHours()+`:`+date.getMinutes()
        if(time < "15:00") {
          answer(phras[0])
          return
        } answer(phrases[index])
    }
}

widgetInput.addEventListener('keydown',sendMessage)

const messages = document.querySelector( '.chat-widget__messages' );
function timestamp () {
    let date = new Date;
    return date.getHours()+`:`+date.getMinutes()
}


function answer(body) {  
messages.innerHTML += `
  <div class="message">
    <div class="message__time">`+timestamp()+`</div>
    <div class="message__text">
      `+body+`
    </div>
  </div>
`;
}

function question(body) {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">`+timestamp()+`</div>
    <div class="message__text">
      `+body+`
    </div>
  </div>
`;
}
let phras =[
  'Мы еще спим, не пиши сюда больше',
]
let phrases = [
    'Чё надо?',
    'Тебе лучше уйти отсюда',
    'Решай что надо и иди.',
    'Соберись духом',
]