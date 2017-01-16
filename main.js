var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

//Creates grid if not supported by browser
var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', '500px');
canvas.setAttribute('height', '300px');
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
  canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

//Mouse events.. When mouse is clicked and moved, it will draw.
canvas.addEventListener('mousedown', function(e) {
  console.log("mousedown");
  var mouseX = e.pageX - this.offsetLeft;
  var mounseY = e.pageY - this.offsetTop

  paint = true;
  //addClick will record mouse location data
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  //redraw will draw the data
  redraw();
});

canvas.addEventListener('mousemove', function(e){
  if(paint) {
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true)
    redraw();
    }
});

canvas.addEventListener('mouseup', function(e){
  paint = false;
});

canvas.addEventListener('mouseleave', function(e){
  paint = false;
});

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

  context.strokeStyle = "#A3CEF1";
  context.lineJoin = "round";
  context.lineWidth = 5;

  for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}

var clear = document.getElementById('clear');
clear.addEventListener('click', function(e){

});

context.clearRect(0, 0, 500, 300);