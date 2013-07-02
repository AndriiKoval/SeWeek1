var fs = require('fs');

var quantity = 100;
var list = [ 2 ];
var number = 1;
while (list.length < quantity)
{
	number += 2;
	if (number > 10 && number % 10 == 5)
	{
		continue;
	}

	var add = true;
	for (var i = 0; i < list.length; i++)
	{
		var value = list[i];
		if (value * value - 1 > number)
		{
			list.push(number);
			add = false;
			break;
		}

		if (number % value != 0)
		{
			continue;
		}

		add = false;
		break;
	}

	if (add)
	{
		list.push(number);
	}
}

var out = "";
for (var i = 0; i < quantity - 1; i++)
{
	out += list[i] + ",";
}

out += list[quantity - 1];

fs.writeFileSync("prime.txt", out);
console.log(out);
