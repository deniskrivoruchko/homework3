let a,
    b,
    time,
    price
    function Rasschet() {
	a = +prompt('Ваш Бюджет на месяц');
	while(isNaN(a) || a =='' || a == null) {
		a = +prompt('Ваш Бюджет на месяц');
	}
	b = prompt('Название магазина').toUpperCase();
    alert(a/30);
};
Rasschet();
let discount;
function disc() {
if (discount == true ) {
	price = price * 0.8;
}
}

let mainList = {
	budg:a,
	nazv:b,
	shopGoods: [],
	employers : {},
	open:false,
	discount:false,

};
function chooseGoods() {
 for (let i =0;i<5;i++) {
	let m = prompt('Какой тип товаров продаем?','Ничего');
	   price = ('Цена товара');
	while(m == 'Ничего' || m == '') {
		m = prompt('Какой тип товаров продаем?','Ничего');
		price = ('Цена товара');
	};
	
	mainList.shopGoods[i] = m;
}; 
};
disc();
function empl() {
	for (let p=0;p<5;p++) {
		mainList.employers[p] = prompt('Имя сотрудника'); 

	};
};



/* let i = 0;
do {
	let m = prompt('Какой тип товаров продаем?','Ничего');
	while(m == 'Ничего' || m == '') {
		m = prompt('Какой тип товаров продаем?','Ничего');
	};
	
	mainList.shopGoods[i] = m;
	i++;
} 

 let i = 0;
while ( i<5) {
	let m = prompt('Какой тип товаров продаем?','Ничего');
	while(m == 'Ничего' || m == '') {
		m = prompt('Какой тип товаров продаем?','Ничего');
	};
	
	mainList.shopGoods[i] = m;
	i++;

}; 



alert (a/30);*/
function workTime(time) {
if (time<0) {
	console.log('Не  может быть');
};
if (time>8 && time<20) {
	console.log('Время работать')
};
if (time>20 && time < 24 ) {
	console.log('Слишком поздно')
};
if ( time>24) {
	console.log('В сутках 24 часа')
};
}
workTime(18);






