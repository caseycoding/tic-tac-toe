
// var currentPlayer;

// var boardState = new Array(9).fill('   ')


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


// var topLeft = ''
// ' 0 | 1 | 2 '
// '---|---|---'
// ' 3 | 4 | 5 '
// '---|---|---'
// ' 6 | 7 | 8 '