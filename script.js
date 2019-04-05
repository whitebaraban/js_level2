"use strict"

const GOODS = [
	{title: 'Book', price: '230$'},
	{title: 'T-short', price: '50$'},
	{title: 'Milk', price: '0.99$'},
	{title: 'Potato', price: '0.20$'},
	{title: 'Duck', price: '1.99$'},
	{title: 'Iphone', price: '200$'},
	{title: 'Pen', price: '0.20$'},
	{} // Для проверки значений по умолчанию
];

// function renderGoods(title, price) {
// 	return '<div class="item"><h2>' + title + '</h2><br>' + '<b>' + price + '<b>' + '</div>'
// }

// function renderGoodItems(GOODS) {
// 	var new_arr = GOODS.map(function (rec) { 
//		ЗДЕСЬ Я СКОРАТИЛ ЗАПИСЬ ФУНКЦИИ УБРАВ ЛИШНЮЮ ПЕРЕМЕННУЮ GOODS_LIST
// 		document.querySelector('.goods').innerHTML += renderGoods(rec.title, rec.price); }); 
// }	


const renderGoods = (title  = 'Not found', price = "0$") => `<div class="item"><h2>${title}</h2>${price}
	<button class="addToCartBtn">Добавить</button></div>`;

const renderGoodItems = goods => {
	let goods_list = goods.map(item => renderGoods(item.title, item.price));
	// От запятых помог избавиться вывод массива по элементу, а не содержание массива целиком с запятыми
	for (let i = 0; i < goods_list.length; i++) { 
		document.querySelector('.goods').innerHTML += goods_list[i];
	}
	
}

renderGoodItems(GOODS);