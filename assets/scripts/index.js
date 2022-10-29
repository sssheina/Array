const input = document.querySelector('.array');
const error = document.querySelector('.error');
const result = document.querySelector('.resultBtn');
const total = document.querySelector('.total');
const arrayNumbers = document.querySelector('.arrayNumbers');
let array = [];

input.addEventListener('change', () => {
	error.innerHTML = '';
	if (input.value !== '' && !/[^0-9\.]/g.test(input.value)) {
		array.push(Number(input.value));
		input.value = '';
	} else {
		error.innerHTML = 'Enter a numeric value';
		input.value = '';
	}
});

result.addEventListener('click', () => {
	array.sort((a, b) => {
		return a - b;
	});
	arrayNumbers.innerHTML = `Sorted by increasing: ${array}`;
	let sumArray = (array) => {
		let sum = 0;
		for (let i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	};
	total.innerHTML = ` Sum: ${sumArray(array)}`;
});

function sumInput() {
	let array = [];

	while (true) {
		if (number == '') break;
		array.push(+number);
	}
	array.sort();

	let sum = 0;

	for (let number of array) {
		sum = sum + number;
	}

	console.log(array[0]);
	result.innerHTML = `Итого ${sum}`;
}

