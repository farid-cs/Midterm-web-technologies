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
		if (input.innerText.length === 0) {
			input.innerText = '0';
		}
		break;
	case 'C':
		input.innerText = '0';
		break;
	case '.':
		if (input.innerText[input.innerText.length - 1] !== '.')
			input.innerText += text;
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
		input.innerText += text;
		break;
	default:
		if (input.innerText === '0' && text !== '.') {
			input.innerText = input.innerText.slice(0, -1);
		}
		input.innerText += text;
	}
}

for (const button of buttons) {
	button.addEventListener('click', callback);
}
