//Варіант 1 https://codepen.io/Ginger_Mo/pen/qJQOYz
// функція визначає знаходження елемента в області видимості
//якщо елемент видно - повертає true
// якщо елемент не видно - повертає false
function isOnVisibleSpace(element) {
	var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset   = elemRect.top;// - bodyRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}

// глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
var listenedElements = [];
// обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements 
// на предмет попадания(выпадения) в зону видимости
window.onscroll = function() {
	listenedElements.forEach(item=>{
    // проверяем находится ли элемент в зоне видимости
  	var result = isOnVisibleSpace(item.el);
    
    // если элемент находился в зоне видимости и вышел из нее
    // вызываем обработчик выпадения из зоны видимости
    if(item.el.isOnVisibleSpace && !result){
    	item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }
    // если элемент находился вне зоны видимости и вошел в нее
    // вызываем обработчик попадания в зону видимости
    if(!item.el.isOnVisibleSpace && result){
    	item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
}

// функция устанавливает обработчики событий 
// появления элемента в зоне видимости и
// выхода из нее
function onVisibleSpaceListener(elementId, cbIn, cbOut) {
	// получаем ссылку на объект элемента
  var el = document.getElementById(elementId);
  // добавляем элемент и обработчики событий 
  // в массив отслеживаемых элементов
  listenedElements.push({
  	el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut    
  });
}

// устанавливаем обработчики для элемента "video"
onVisibleSpaceListener("video", 
	el=>{
		// функция вызываемая при попадании элемента в зону видимости
    // тут вставляем код запуска анимации
    el.innerHTML = "111111111111111111111111";
    window.alert("элемент в зоне видимости");
    
	},
	el=>{
		// функция вызываемая при выпадении элемента из зоны видимости
    // тут вставляем код остановки анимации
    el.innerHTML = "000000000000000000000000";
    window.alert("элемент вне зоны видимости");
	}
);

//ВАРІАНТ 2
// Потрібно визначити висоту сторінки, висоту елементів, висоту прокручування та відступ елемента від краю сторінки. Тут кожен дів буде підсвічуватися тільки коли він повністю опиниться в області видимості:
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>

<style type="text/css">

        div {

            width: 400px;
            height: 400px;
            margin-right: 100%;
            background: #eee;
            margin-bottom: 10px;

        }

</style>

<script type="text/javascript">
var window_height = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));

window.addEventListener('scroll', function() {

    var elements = document.querySelectorAll('div');
    var top = document.body.scrollTop;
    var find = false;
    elements.forEach(function(el) {

        var el_top = el.offsetTop;
        if(el_top > top && ((el.clientHeight + el_top) < (top + window_height))) {
            el.style.backgroundColor = "#999";
        }

    });

});
