let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

document.querySelector('.searchInput').oninput = function() {
	let val = this.value.trim();
	let list = document.querySelector('.item p');
}

let close = document.querySelector('.closeSvg');

close.addEventListener('click', function() {
	document.querySelector('.searchInput').value = '';
	close.style.display = "none";
})


const search = document.querySelector('.searchInput');
		const allLinks = document.querySelectorAll('.item');
		search.onkeyup = function (event) {
		close.style.display = "block";	
   		const regex = new RegExp(event.target.value.toLowerCase());
    	allLinks.forEach(element => {
	        if (regex.test(element.textContent.toLowerCase())) {
	            element.style.display = '';
	        } else {
	            element.style.display = 'none';
	        }
    	})
	};

const filterItem = document.querySelectorAll('.item');
document.querySelector('.sections').addEventListener('click', (event)=> {
	if (event.target.class !== '.telegram') return false;

	let filterClass = event.target.dataset['f'];

	filterItem.forEach( elem => {
		if (!elem.classList.contains(filterClass)) {
			elem.classList.add('hide');
		}
	})
});




let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let BuyDiv = document.querySelector('.buy_div');
let ItemName = document.querySelector('.ItemName');
let ItemPrice = document.querySelector('.ItemPrice');


btn1.addEventListener("click", function(){
	BuyDiv.style.display = "block";
	ItemName.textContent = "Подписчики телеграм";
	ItemPrice.textContent = "36 рублей за 1000 штук";
	item = "1";
});

btn2.addEventListener("click", function(){
	BuyDiv.style.display = "block";
	ItemName.textContent = "Просмотры Instagram";
	ItemPrice.textContent = "27 рублей за 1000 штук";
	item = "2";
});

// btn3.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Перейти в корзину");
// 		item = "3";
// 		tg.MainButton.show();
// 	}
// });

// btn4.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Перейти в корзину");
// 		item = "4";
// 		tg.MainButton.show();
// 	}
// });

// btn5.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Перейти в корзину");
// 		item = "5";
// 		tg.MainButton.show();
// 	}
// });

// btn6.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Перейти в корзину");
// 		item = "6";
// 		tg.MainButton.show();
// 	}
// });


// Telegram.WebApp.onEvent("mainButtonClicked", function(){
// 	tg.sendData(item);
// });


// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

// usercard.appendChild(p);






