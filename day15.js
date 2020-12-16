const input = ['8', '13', '1', '0', '18', '9'];

function part1(input, limit) {
  let lastNumber = null;
  const memory = {};
  let counter = 1;

  for (const number of input) {
    memory[number] = [counter];
    lastNumber = number;
    counter++;
  }

  do {
    switch(memory[lastNumber].length) {
      case 1:
        lastNumber = '0';
        break;
      case 2:
        lastNumber = (parseInt(memory[lastNumber][1]) - parseInt(memory[lastNumber][0])).toString();
        break;
    }

    if (lastNumber in memory) {
      memory[lastNumber].push(counter);
      if (memory[lastNumber].length > 2) memory[lastNumber].shift();
    } else {
      memory[lastNumber] = [counter];
    }

    counter++;
  } while (counter <= limit);

  console.log(lastNumber);
}

part1(input, 2020);
part1(input, 30000000);
