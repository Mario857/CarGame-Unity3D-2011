var levelToLoad : String;
var ShowOptions : boolean = false;
var Volume : float = 10;
var POSX : float = 200;
var POSY : float = 100;
var Position : Rect;
var Quality : int;
function Start(){
	Volume = PlayerPrefs.GetFloat("Volume");
}
function OnMouseEnter(){
	renderer.material.color = Color.red;
}
function OnMouseExit(){
	renderer.material.color = Color.white;
}
function OnMouseUp(){
	ShowOptions = true;
}
function OnGUI(){
	if(ShowOptions){
		Position = GUI.Window(0,Position,SetOptions,"Options");
		PlayerPrefs.SetFloat("Volume",Volume);
		if(Quality == 2){
			QualitySettings.antiAliasing = 2;
			QualitySettings.shadowDistance = 0;
		}
		else if(Quality == 3){
			QualitySettings.shadowDistance = 5;
		}
		else if(Quality == 4){
			QualitySettings.antiAliasing = 4;
			QualitySettings.shadowDistance = 10;
		}
		else if(Quality == 5){
			QualitySettings.shadowDistance = 50;
		}
		else if(Quality == 6){
			QualitySettings.softVegetation = true;
		}
		else if(Quality == 7){
			 QualitySettings.shadowDistance = 100;
		}
		else if(Quality == 8){
			 QualitySettings.antiAliasing = 8;
			 QualitySettings.shadowDistance = 250;
		}
	}
}
function SetOptions(windowID : int){
	GUI.Label(Rect(0,20,100,20),"Volume");
	GUI.Label(Rect(0,40,100,20),"Quality");
	Volume = GUI.HorizontalSlider(Rect(50,20,100,20),Volume,0,1);
	Quality = GUI.HorizontalSlider(Rect(50,40,100,20),Quality,0,8);
	GUI.DragWindow (Rect (0,0, 200, 200));
}