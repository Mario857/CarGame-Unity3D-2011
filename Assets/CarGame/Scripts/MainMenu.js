var levelToLoad : String;
var QuitButton : boolean = false;
function OnMouseEnter(){
	renderer.material.color = Color.red;
}
function OnMouseExit(){
	renderer.material.color = Color.white;
}
function OnMouseUp(){
	if(QuitButton){
	Application.Quit();
	}
	else{
	Application.LoadLevel(levelToLoad);
	}
}