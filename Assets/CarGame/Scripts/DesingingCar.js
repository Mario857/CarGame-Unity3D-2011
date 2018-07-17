var BodyParts:GameObject[];
var FrontWheels : GameObject[];
var BackWheels : GameObject[];
var Glass : GameObject[];
var Spoiler : GameObject;
var Registration : GameObject[];
function Update (){
	Spoiler.transform.localScale = Design.SpoilerScale;
	Spoiler.renderer.material.color = Design.CarColor;
	for(var p:int;p<Registration.length;p++){
		Registration[p].renderer.enabled =  Design.HaveReg;
	}
	for(var i:int;i<BodyParts.length;i++){
		BodyParts[i].renderer.material.color = Design.CarColor;
	}
	for(var cnt:int;cnt<FrontWheels.length;cnt++){
		FrontWheels[cnt].transform.localScale.x = Design.FrontWheelsScale;
	}
	for(var cnp:int;cnp<BackWheels.length;cnp++){
		BackWheels[cnp].transform.localScale.x = Design.BackWheelsScale;
	}
	for(var cmp:int; cmp <Glass.length;cmp++){
		Glass[cmp].renderer.material.color = Design.GlassColor;
	}
}