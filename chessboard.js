var board = ""
var size = 8

for (var total = 0; total < size; total += 2) {

for (var counter = 0; counter <= size; counter += 2) {
  board = board + " #"
}
board = board + "\n";
for (var counter = 0; counter <= size; counter += 2) {
  board = board + "# "
}
board = board + "\n";
}
console.log(board)
