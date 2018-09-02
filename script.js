$(function(){
    canvas=document.getElementById('MyCanvas');
    context=canvas.getContext('2d');
    var y=150;
    context.strokeStyle='red';

    for (x=0;x<=450;x+=3) {
        if (x % 6 == 0) {
            context.moveTo(225, 0);
        } else if ( x % 3 == 0 ) {            
            context.moveTo(225, 300);
        }
        context.lineTo(x,y);
    }   
    context.stroke();
});