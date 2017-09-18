process.stdin.setEncoding('utf8');
var xIsCurrent = true;
var gameIsOver = false;
var boardState = new Array(9);

function promptNextPlayer(callback) {
  xIsCurrent ? console.log('X\'s turn:') : console.log('O\'s turn:');
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      if (chunk.trim().toUpperCase() === 'Q') {
        process.exit();
      } else {
        callback(chunk.trim());
      }
    }
  });
}

function handlePlayerAnswer(answer) {
  var currentPlayer = xIsCurrent ? 'X' : 'O';

  if (boardState[answer - 1] === undefined){
    boardState[answer - 1] = currentPlayer;
    printBoard(boardState);
    // checkGameState();
    xIsCurrent = !xIsCurrent;
    promptNextPlayer(handlePlayerAnswer);
  } else {
    console.log('This spave has already been played!');
    promptNextPlayer(handlePlayerAnswer);
  }

}

function checkGameState() {

  if (gameIsOver) {
    process.exit();
  }
}

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

promptNextPlayer(handlePlayerAnswer);


// sample change in dev
