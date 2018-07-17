var Hour : int;
var Min : float = 0;
var GameMin : float;
var WIDTH : int= 80;
var HEIGHT : int= 40;
var BoxY : int = WIDTH; 
var BoxX : int = HEIGHT;
var LabTimeY : int = 10;
var LabTimeX : int = 10;
var LabTimeScaleY : int = 0;
var LabTimeScaleX : int = 0;
var BoxStyle : GUIStyle;
var TimeLabStyle : GUIStyle;
function Update (){
	Hour = System.DateTime.Now.Hour;
	Min = System.DateTime.Now.Minute;	
	GameMin = Mathf.Round(Min);
}
function OnGUI(){
	GUI.Box(Rect(Screen.width - WIDTH,Screen.height - HEIGHT ,BoxX,BoxY),"",BoxStyle);
	GUI.Label(Rect(Screen.width - WIDTH + LabTimeX,Screen.height - HEIGHT + LabTimeY,WIDTH + LabTimeScaleX,HEIGHT + LabTimeScaleY),Hour+":"+GameMin,TimeLabStyle);
}