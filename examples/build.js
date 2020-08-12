/*
const urlParams = new URLSearchParams(window.location.search);

var gltf;
if(urlParams.has("avatar") === true ){
	var result = urlParams.get("avatar");
	if(result == "1"){ gltf = "url(./avatars/joyce.glb)";
	}else{
		gltf = "#DefaultAvatar";
	}
	var elem = document.getElementById("playerhead");
	elem.setAttribute("bla", gltf);
	elem.setAttribute("position", '0 -2.5 0');
	elem.setAttribute("rotation", '0 180 0');
	elem.setAttribute("scale", '4 4 4');
}else{
	
	gltf = "#DefaultAvatar";
	var elem = document.getElementById("playerhead");
	if(elem){
		elem.setAttribute("gltf-model", gltf);
	}else{
		console.log("nee");
	}
	
}*/


AFRAME.registerComponent('pick-model', { 
	schema: {},

update: function() {

  const urlParams = new URLSearchParams(window.location.search);

	var gltf;
	if(urlParams.has("avatar") === true ){
		var result = urlParams.get("avatar");
		if(result == "1"){ 		 gltf = "url(./avatars/avatar_joyce_noHands.glb)";
		}else if(result == "2"){ gltf = "url(./avatars/avatar_Josephine_noHands.glb)";
		}else if(result == "3"){ gltf = "url(./avatars/avatar_robert_noHands.glb)";
		}else{
			gltf = "#DefaultAvatar";
		}
		this.el.setAttribute("gltf-model", gltf);
		//this.el.setAttribute("position", '0 -2.5 0');
		//this.el.setAttribute("rotation", '0 180 0');
		//this.el.setAttribute("scale", '4 4 4');
	}else{
	
		gltf = "#DefaultAvatar";
		this.el.setAttribute("gltf-model", gltf);
		
	
	}

  }
});