canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");

color="lime";
document.getElementById("color_input").value=color;
width = 5;
document.getElementById("width_input").value=width;
var mouseEvent="empty";
console.log(mouseEvent); 
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
 color = document.getElementById("color_input").value;
 width = document.getElementById("width_input").value;
 mouseEvent = "mouseDown";
 console.log(mouseEvent);
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
 
 mouseEvent = "mouseup";
 console.log(mouseEvent);
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
 
 mouseEvent = "mouseleave";
 console.log(mouseEvent);
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX -canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {

        console.log("mousedown + mousemove");
         ctx.beginPath();
          ctx.strokeStyle = color; 
          ctx.lineWidth = width;
          ctx.moveTo(last_position_of_x, last_position_of_y);
          console.log("Last position of x and y coordinates = ");
           console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
           //ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);//
           ctx.arc(100, 100, 50, 0, 2 * Math.PI);
            console.log("Current position of x and y coordinates = "); 
            console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;

}
function clearArea() { 
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}