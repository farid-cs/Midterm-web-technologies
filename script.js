const buttons = document.getElementsByTagName('button');
let input = document.getElementsByClassName('input')[0];

function callback(event) {
	let text = event.target.innerText;

	switch (text) {
	case '=':
		input.innerText = 'Result';
		break;
	case '←':
		input.innerText = input.innerText.slice(0, -1);
		break;
	case 'C':
		input.innerText = '';
		break;
	case '+':
	case '-':
	case 'X':
	case '/':
	case '%':
		switch (input.innerText[input.innerText.length - 1]) {
		case '+':
		case '-':
		case 'X':
		case '/':
		case '%':
			input.innerText = input.innerText.slice(0, -1);
		}
	default:
		input.innerText += text;
	}
}

for (const button of buttons) {
	button.addEventListener('click', callback);
}
