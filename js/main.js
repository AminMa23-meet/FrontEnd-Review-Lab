	hi = false;
function changeBackgroundColor(color,color1) {
	if(hi == true){
		document.getElementsByTagName('body')[0].style.backgroundColor = color;
		hi = false;
	}
	else if(hi == false){
		document.getElementsByTagName('body')[0].style.backgroundColor = color1;
		hi = true;
	}
	console.log(hi)

}