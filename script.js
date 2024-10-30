let input = document.getElementsByClassName('input')[0];

function append_digit(digit)
{
	if (input.innerText === '0')
		input.innerText = input.innerText.slice(0, -1);
	input.innerText += digit;
}

function append_dot()
{
	let offset = input.innerText.length - 1;

	while (offset >= 0) {
		switch (input.innerText[offset]) {
		case '.':
			return;
		case '+':
		case '-':
		case '*':
		case '/':
		case '%':
			break;
		default:
			offset--;
			continue;
		}
		break;
	}
	input.innerText += '.';
}

function append_operator(operator)
{
	switch (input.innerText[input.innerText.length - 1]) {
	case '+':
	case '-':
	case 'X':
	case '/':
	case '%':
		input.innerText = input.innerText.slice(0, -1);
	}
	input.innerText += operator;
}

function backspace()
{
	input.innerText = input.innerText.slice(0, -1);
	if (input.innerText.length === 0)
		input.innerText = '0';
}

function clear_input()
{
	input.innerText = "0";
}
