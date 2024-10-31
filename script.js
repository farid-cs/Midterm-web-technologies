let input = document.getElementsByClassName('input')[0];
let previous = document.getElementsByClassName('previous')[0];

function append_digit(digit)
{
	if (input.innerText === '0')
		input.innerText = input.innerText.slice(0, -1);

	switch (input.innerText[input.innerText.length - 1]) {
	case '+':
	case '-':
	case 'x':
	case '/':
	case '%':
		input.innerText += ` ${digit}`;
		return;
	}
	input.innerText += digit;
}

function append_dot()
{
	let offset = input.innerText.length - 1;

	while (offset >= 0) {
		switch (input.innerText[offset]) {
		case '.':
			return;
		case ' ':
			input.innerText += '.';
			return;
		case '+':
		case '-':
		case 'x':
		case '/':
		case '%':
			input.innerText += ' .';
			return;
		default:
			offset--;
			continue;
		}
	}
	input.innerText += '.';
}

function append_operator(operator)
{
	switch (input.innerText[input.innerText.length - 1]) {
	case '+':
	case '-':
	case 'x':
	case '/':
	case '%':
		input.innerText = input.innerText.slice(0, -1);
	default:
		calculate();
	}
	input.innerText = input.innerText + ' ' + operator + ' ';
}

function backspace()
{
	input.innerText = input.innerText.slice(0, -1);
	if (input.innerText.length === 0)
		input.innerText = '0';
}

function calculate()
{
	switch (input.innerText[input.innerText.length - 1]) {
	case '+':
	case '-':
	case 'x':
	case '/':
	case '%':
		alert("Missing operand");
		return;
	}

	let expression = input.innerText
		.replace('x', '*')
		.replace('%', '/100*');
	input.innerText = eval(expression);
}

function toggle_sign()
{
	let token_num = Array.from(
		input.innerText
		.replace(/[\+\-x\/%]/g, ' ')
		.matchAll(/[^ ]+/g)
	).length;

	if (token_num > 1) {
		let is_negative = / -[^ ]+$/;
		if (is_negative.test(input.innerText)) {
			input.innerText = input.innerText
				.replace(/ -(.+)$/, ' $1');
			return;
		}
		input.innerText = input.innerText
			.replace(/([\+\-x\/%]) (.+)$/, '$1 -$2');
		return;
	}
	if (input.innerText[0] === '-') {
		input.innerText = input.innerText.slice(1);
		return;
	}
	input.innerText = '-' + input.innerText;
}

function clear_input()
{
	input.innerText = "0";
}
