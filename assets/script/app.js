/*
var mousePoint = view.center;
var amount = 25;
var colors = ['white', 'transparent'];

for (var i = 0; i < amount; i++) {
	var triangle = new Path.RegularPolygon(new Point(80, 70), 3, 50)
	triangle.center = mousePoint;
	triangle.fillColor = colors[i % 4];
}

function onMouseMove(event) {
	mousePoint = event.point;
}

var children = project.activeLayer.children;
function onFrame(event) {
	for (var i = 0, l = children.length; i < l; i++) {
		var item = children[i];
		var delta = (mousePoint - item.position) / (i + 5);
		item.rotate(Math.sin((event.count + i) / 10) * 7);
		if (delta.length > 0.1)
			item.position += delta;
	}
}
*/
