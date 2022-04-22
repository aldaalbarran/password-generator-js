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
}())