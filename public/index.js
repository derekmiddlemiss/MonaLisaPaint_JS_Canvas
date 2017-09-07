window.addEventListener( 'load', function(){

  var canvas = document.getElementById( 'main-canvas' );
  var context = canvas.getContext( '2d' );

  var img = document.createElement( 'img' );
  img.src = "http://i.imgur.com/yXEDunl.png"

  var drawLisa = function(){
    context.drawImage( img, 0, 0, canvas.width, canvas.height )
  }

  img.addEventListener( 'load', drawLisa );

  var mousePos = {
    x: 0, 
    y: 0
  };

  context.lineWidth = 2;

  canvas.addEventListener( 'mousemove', function( event ){
    mousePos.x = event.pageX;
    mousePos.y = event.pageY
  })

  canvas.addEventListener( 'mousedown', function(){
    context.beginPath();
    context.moveTo( mousePos.x, mousePos.y );
    canvas.addEventListener( 'mousemove', paint );
  })

  var paint = function(){
    context.lineTo( mousePos.x, mousePos.y )
    context.stroke();
  }

  canvas.addEventListener( 'mouseup', function(){
    canvas.removeEventListener( 'mousemove', paint );
  })

  var changeColor = function(){
      context.strokeStyle = this.value;
  }

  var colorPicker = document.querySelector( '#input-color' );
  colorPicker.addEventListener( 'change', changeColor );

  var size = document.querySelector( '#size' );
  size.addEventListener( 'change', function(event){
    context.lineWidth = event.target.value;
  })

  var clearButton = document.querySelector( '#clear-canvas' );
  clearButton.addEventListener( 'click', function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
  })

})