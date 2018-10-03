var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var modalWin = document.getElementById('modal-win');
var modalOver = document.getElementById('modal-over');
var main = document.getElementById("snake");

var i = 0, 
	b = 0, 
	blocks = 0,
 	move = "",
 	right = 0,
	bottom = 0,
	rightBef = 0,
 	bottomBef = 0,
 	elem,
 	speed = 150,
 	win = 10;

btn.onclick = function(){
	 modal.style.display = 'none';
	 var click = window.event;
	 createNext();
	 create();
	 var elem1 = document.getElementById("snake-head");
	 elem = elem1;
	 return move = "click";
}

function create(){
		var elee = document.createElement('div');
		elee.id = "snake-head";
		main.appendChild(elee);
	}	

function createNext(){
		function random(){
     	return Math.floor(Math.floor(Math.random()*(450-50+1)+50) / 50) * 50;
		}
	    var food = document.createElement('div');
		food.id = "food";
		food.style= "background-color: #D35F52; z-index: 0; top: "+random()+"px; left: "+random()+"px";
		main.appendChild(food);
}	
window.onkeydown = function(){
	if(window.event.key == "d" || window.event.key == "в" ||  window.event.key == "ArrowRight"){	
	 return move = "d";
	 }else if (window.event.key == "s" || window.event.key == "ы" || window.event.key == "і" ||  window.event.key == "ArrowDown") {
	 return move = "s";	
	}else if (window.event.key == "a" || window.event.key == "ф" ||  window.event.key == "ArrowLeft") {	
	 return move = "a";
	}else if (window.event.key == "w" || window.event.key == "ц" ||  window.event.key == "ArrowUp") {	
	 return move = "w";
	}
} 


var go = setInterval(fun, speed);

	function fun(){
		if(move == "d"){
			moveTo();
		}else if(move == "a"){
			moveTo();
		}else if(move == "s"){
			moveTo();
		}else if(move == "w"){
			moveTo();
		}else if(move == "click"){
			moveRight();
		}
	}

			function moveTo(){
				if( move == "d" ){
					moveRight();					
				}else if ( move == "s" ) {
					moveBottom();					
				}
				else if ( move == "a" ) {
					moveLeft();					
				}
				else if ( move == "w" ) {
					moveUp();
				}
			}

			function moveBottom(){
				bottomBef = bottom;
				rightBef = right;
				bottom = bottom + 25;
				elem.style.top = bottom +"px";
       			movePrevious(rightBef, bottomBef);
			}
			function moveUp(){
				bottomBef = bottom;
				rightBef = right;
				bottom = bottom - 25;
				elem.style.top = bottom +"px";
       			movePrevious(rightBef, bottomBef);
			}
			function moveRight(){
				rightBef = right;
				bottomBef = bottom;
				right = right + 25;
				elem.style.left = right +"px";
       			movePrevious(rightBef, bottomBef);
			}
			
			function moveLeft(){
				rightBef = right;
				bottomBef = bottom;
				right = right - 25;
				elem.style.left = right +"px";
       			movePrevious(rightBef, bottomBef);
			}	

function movePrevious(rigthB, bottomB){
		if(move == "a" || move == "d" || move == "click" ){
		moveCreateElem(rigthB, bottomB);
		}else if(move == "w" || move == "s"){
		moveCreateElem(rigthB, bottomB);
		}
}

function moveCreateElem(rigthB, bottomB){
	var element = document.createElement('div');
				element.id = "box" + i;
				element.style.top = bottomB +"px";
				element.style.left = rigthB +"px";
				main.appendChild(element);
				i++;
		var element = document.getElementById('box' + i);
	remov(element);
}
	
function remov(nod){
	if(i > 2){
	var food = document.getElementById('food');
	var head = document.getElementById('snake-head');
	
	if(head.style.top == food.style.top && head.style.left == food.style.left){
		food.remove();
		createNext();
        return blocks++;
        };
		blocks = i-b;
	if(blocks == win){
		win += 5;
		speed = speed -25;
		modalWin.style.display = "block";
		clearInterval(go);
	}	
	if(i-b == blocks){
		document.getElementById('box'+b).style = "z-index: 1";
		main.removeChild(document.getElementById('box'+b))
		b++;
		 };

	if(head.style.top == 500 + "px" || head.style.top == -25 + "px" || head.style.left == -25 + "px" || head.style.left == 500 + "px" ){
				modalOver.style.display = "block";
				clearInterval(go);
			}
	var n = b;
		 for(var j = 0; j < blocks-1; j++){
			if(elem.style.top == document.getElementById('box'+n).style.top && elem.style.left == document.getElementById('box'+n).style.left ){
				modalOver.style.display = "block";
				clearInterval(go);
			}
			n++;
		 } 
	}	
}
