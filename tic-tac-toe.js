process.stdin.setEncoding('utf8');
var xIsCurrent = true;



function promptNextPlayer(callback) {
  xIsCurrent ? console.log('X\'s turn:') : console.log('O\'s turn:');
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      callback(chunk);
    }
  });
}


// process.stdin.on('readable', function() {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(chunk);
//   }
// });

// var boardState = new Array(9);


function printBoard(board) {
  var output = '\n';
  for (var i = 0; i < 9; i++) {

    output += ' ';
    output += board[i] ? board[i] : ' ';
    output += ' ';

    if (i !== 2 || i !== 5 || i !== 8) {
      output += '|'; // TODO debug exta pole
    }

    if (i === 2 || i === 5) {
      output += '\n---|---|---\n'
    }

    if (i === 8) {
      output += '\n'
    }
  }

  console.log(output);
}

console.log('Welome to tic-tac-toe!');
console.log('Use the following numbers to play the board:\n\n' +
' 1 | 2 | 3 \n' +
'---|---|---\n' +
' 4 | 5 | 6 \n' +
'---|---|---\n' +
' 7 | 8 | 9 \n');

promptNextPlayer((answer) => {
  var thePlayer = xIsCurrent ? 'X' : 'Y';
  console.log(thePlayer, 'chose', answer);
  xIsCurrent = !xIsCurrent;
  process.exit();
});
