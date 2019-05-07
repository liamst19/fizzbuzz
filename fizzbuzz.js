// Fizzbuzz Test

console.log('Fizzbuzz Test');

(function(){
    var text = '', t = '';
    for(let i = 1; i <= 100; i++){
	t = (i%3==0?'Fizz':'')
	  + (i%5==0?'Buzz':'');
	text+=(t==''?i:t)+'\n';
	t='';
    };
    console.log(text);
})();
