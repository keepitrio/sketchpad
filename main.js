function makeGrid (row, col) {
  var output = "<div class='wrapper'>";

  for(var i = 0; i < row; i++) {
    output += "<div class='row'>";
    for(var j = 0; j < col; j++) {
      output += "<div class='col'> </div>";
    }
    output += "</div>";
  }
  output += "</div>";
  return output;
}

document.body.innerHTML = makeGrid(20, 20);