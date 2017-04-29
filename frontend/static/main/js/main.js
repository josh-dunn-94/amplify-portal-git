var canvas;
var ctx;
var max_height;
var num_of_cars;
var xScale;
var yScale;
var y;
var step_size;
var column_height;
var row_width;
var margin;
var yLabel;	

var car_makes = [];
var car_make_counts = [];

window.onload = function() {
	// Intialize values for each variables
	init();

	// Stage the bar graph
	stageGraph();

	// Graph the data
	graphData();

}

function init(){
	// Set the canvas
	canvas = document.getElementById("bar_graph");
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "black";

	canvas.width = 800;
	canvas.height = 500;
	
	// Get the values from the hidden spans for data to be graphed
	car_elements = document.getElementsByClassName('car-makes');
	for(index = 0; index < car_elements.length; index++)
		car_makes[index] = car_elements[index].innerHTML;

	count_elements = document.getElementsByClassName('car-counts');
	for(index = 0; index < count_elements.length; index++)
		car_make_counts[index] = count_elements[index].innerHTML;

	// Initialize variables
	num_of_cars = car_makes.length;
	max_height = Math.max.apply(null, car_make_counts);

	step_size = 1;
	column_height = 50;
	row_width = 60;
	margin = 30;
	yLabel = "# of Cars" 
	
	yScale = (canvas.height - column_height - margin) / (max_height);
	xScale = (canvas.width - row_width) / (num_of_cars + 1);
}

function stageGraph(){
	ctx.strokeStyle="black";
	ctx.beginPath();

	// Make Y-axis Label
	ctx.fillText(yLabel, 10,column_height - margin);

	// Draw horizontal black lines
	for(scale = max_height, count =  0; scale >= 0; scale = scale - step_size, count++){
		y = column_height + (yScale * count * step_size); 
		ctx.fillText(scale, margin,y);
		ctx.moveTo(row_width,y);
		ctx.lineTo(canvas.width - row_width,y);
	}
	ctx.stroke();
}

function graphData(){
	// Draw the car names
	ctx.textBaseline="bottom";
	for(index = 0; index < num_of_cars; index++){
		y = canvas.height - car_make_counts[index] * yScale ;
		ctx.fillText(car_makes[index], xScale * (index+1),y - margin);
	}
	
	// Reset to bottom of graph 
  	ctx.translate(0,canvas.height - margin);
	ctx.scale(xScale,-1 * yScale);
	
	ctx.fillStyle = "#80BFFF";
  
	// Draw bars
	for(index = 0; index < num_of_cars; index++){
		ctx.fillRect(index+1, 0, 0.3, car_make_counts[index]);
	}
}