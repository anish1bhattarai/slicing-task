// JavaScript Document
var zoomButton=document.getElementById("zoom");
var lightBox=new LightBox();
zoomButton.onclick=function(){
lightBox.init();
return false;
}


function LightBox(){
	var that=this;
	this.parent=document.getElementById("wrap");
	this.closeButton;
	this.element;
	this.image;
	this.init=function(){
	that.parent.style.position="relative";
	
	that.element=document.createElement("div");
	that.parent.style.backgroundColor="grey";
	that.element.className="lightbox";
	that.element.style.position="absolute";
	that.element.style.top="45px";
	that.element.style.width="1069px";
	that.element.style.height="534px";
	that.parent.appendChild(that.element);
	console.log(that.element.style.width);
	
	that.closeButton=document.createElement("div");
	that.closeButton.className="close";
	that.closeButton.style.position="absolute";
	that.closeButton.style.height="27px";
	that.closeButton.style.width="25px";
	that.closeButton.style.left="1027px";
	that.closeButton.style.top="6px";
	that.closeButton.style.backgroundImage="url(images/close-button.png)";
	that.parent.appendChild(that.closeButton);
	
	console.log(that.closeButton);
	that.closeButton.onclick=function(){
	that.parent.style.backgroundColor="white";
	that.element.removeChild(that.image);
	that.parent.removeChild(that.element);
	that.parent.removeChild(that.closeButton);
	that.element.style.display="none";
	}
	console.log("anish");
	that.image=document.createElement("img");
	
	that.image.style.width="1009px";
	that.image.style.height="463px";
	var addImage=document.getElementsByClassName("image")[0].children[0].getAttribute("src");
	that.image.setAttribute("src",addImage);
	that.element.appendChild(that.image);
	}
}