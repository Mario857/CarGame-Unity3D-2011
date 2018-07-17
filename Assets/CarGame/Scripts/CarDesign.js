var BodyParts : GameObject[];
var FrontTires : GameObject[];
var BackTires : GameObject[];
var Glass : GameObject[];
var Spoiler : GameObject;
var Registration : GameObject[];
static var SpoilerScale : Vector3;
static var GlassColor : Color;
static var BackTireScale : float;
static var FrontTireScale : float;
static var BodyColor : Color;
static var isEnabled : boolean = true;
function Start(){
	for(var p:int;p<Registration.length;p++){
		Registration[p].renderer.enabled = isEnabled;
	}
	Spoiler.transform.localScale = SpoilerScale;
	Spoiler.renderer.material.color = BodyColor;
	for(var i : int;i<BodyParts.length;i++){
		BodyParts[i].renderer.material.color = BodyColor;
	}
	for(var cnt : int;cnt <FrontTires.length;cnt++){
		FrontTires[cnt].transform.localScale.x = FrontTireScale;
	}
	for(var cnp : int;cnp <BackTires.length;cnp++){
		BackTires[cnp].transform.localScale.x = BackTireScale;
	}
	for(var cmp : int;cmp<Glass.length;cmp++){
		Glass[cmp].renderer.material.color = GlassColor;
	}
}