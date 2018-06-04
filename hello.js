let a,
    b,
    time
	a = +prompt('Ваш Бюджет на месяц');
	b = prompt('Название магазина');
	time = 21;
    alert(a/30);


let mainList = {
	budg:a,
	nazv:b,
	shopGoods: [],
	employers : {},
	open:false

};
/* for (let i =0;i<5;i++) {
	let m = prompt('Какой тип товаров продаем?','Ничего');
	while(m == 'Ничего' || m == '') {
		m = prompt('Какой тип товаров продаем?','Ничего');
	};
	
	mainList.shopGoods[i] = m;
}; 


 let i = 0;
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






