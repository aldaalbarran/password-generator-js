(function(){
	var app = document.getElementById('app');
	var inputCharacters = document.getElementById('number-characters');

	var config = {
		characters: parseInt(inputCharacters.value),
		symbols: true,
		numbers: true,
		capitalLetters: true,
		lowercaseLetters: true
	}

	var characters = {
		numbers: '0 1 2 3 4 5 6 7 8 9',
		symbols: '< > , ; . : - _ { } [ ] + * ~ ^ ¿ ? ¡ ! " # $ % & / ( ) =',
		capitalLetters: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		lowercaseLetters: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
	}

	/* ---------------------------------------- Events ------------------------------ */
	//Evitar refresh en la página
	app.addEventListener('submit', function(e){
		e.preventDefault();
	});

	//Aumentar 1 cada que se presiona el botón +
	app.elements.namedItem('btn-plus').addEventListener('click', function(){
		config.characters++;
		inputCharacters.value = config.characters;
	});

	//Disminuir 1 cada que se presiona el botón -
	app.elements.namedItem('btn-minus').addEventListener('click', function(){
		if (config.characters > 1) {
			config.characters--;
			inputCharacters.value = config.characters;
		}
	});

	//Botón de símbolos dinámico
	app.elements.namedItem('btn-symbols').addEventListener('click', function(){
		btnToggle(this);
		config.symbols = !config.symbols;
	});

	//Botón de numeros dinámico
	app.elements.namedItem('btn-numbers').addEventListener('click', function(){
		btnToggle(this);
		config.numbers = !config.numbers;
	});

	//Botón de mayúsculas dinámico
	app.elements.namedItem('btn-capital-letters').addEventListener('click', function(){
		btnToggle(this);
		config.capitalLetters = !config.capitalLetters;
	});

	//Botón para generar contraseña
	app.elements.namedItem('btn-generate').addEventListener('click', function(){
		generatePassword();
	});

	/* ---------------------------------------- Functions ---------------------------------------- */
	function btnToggle(element){
		element.classList.toggle('false');
		element.childNodes[0].classList.toggle('fa-check');
		element.childNodes[0].classList.toggle('fa-times');
	}

	function generatePassword() {
		var finalCharacters = '';
		var password = '';

		for(property in config){
			if (config[property] == true) {
				finalCharacters += characters[property] + ' ';
			}
		}
		console.log(finalCharacters);
	}
}())