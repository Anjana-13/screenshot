//const saveAs = require("./filesaver");

function screenshot(){
	html2canvas(document.querySelector("#capture")).then(canvas => {
		document.body.appendChild(canvas)
	});
}

let btnDownload= document.getElementById('download');
btnDownload.addEventListener("click",function(){
var link = document.createElement('a');
link.href = 'pic1.png';
link.download = 'Download.png';
document.body.appendChild(link);
link.click();
//document.body.removeChild(link);
});

/*let btnDownload = document.getElementById('download');
let img = document.getElementById('image');
 
btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
 
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}


/*$("#download").click(function(){
	html2canvas($('#image'),
	{
		onRendered:function(canvas){
			var a = document.createElement('a');
			a.href=canvas.toDataURL("image/png");
			a.download = "image.png";
			a.click();
		}
	});
});*/