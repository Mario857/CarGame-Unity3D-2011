static var IsEnabled : boolean = true;
var Type : String = "";
var WindowPosition : Rect;
var BoxPosition : Rect;
var LabelPosition : Rect;
var TextFieldPosition : Rect;
var BoxText : String = "";
function Start(){
	IsEnabled = false;
}
function Update (){
	if(Input.GetKeyDown(KeyCode.Tab) && Messages.IsEnabled==false){
		if(!IsEnabled){
			IsEnabled = true;
		}
		else{
			IsEnabled = false;
		}
	}
	if(IsEnabled){
		Time.timeScale = 0;
		CursorSetUp.ShowCursor = false;
	}
	else{
		Time.timeScale = 1;
		CursorSetUp.ShowCursor = true;
	}
}
function OnGUI(){
	if(IsEnabled){
	GUI.Window(1,WindowPosition,Console,"Console");
	}
}
function Console(ID : int){
	GUI.Box(BoxPosition,"");
	GUI.Label(LabelPosition,BoxText);
	Type = GUI.TextField(TextFieldPosition,Type);
	if(Input.GetKeyDown(KeyCode.Return)){
		if(Type != ""){
			if(Type == "Moreligthing"){
				DayNightLight.MaxLight = 2.2;
			}
			if(Type == "MoreLigthingDouble"){
				DayNightLight.MaxLight = 4.4;
			}
			if(Type == "Normalligthing"){
				DayNightLight.MaxLight = 0.8;
			}
			if(Type == "DateTime"){
				BoxText += System.DateTime.Now;
				BoxText += "\n";
				Type = "";
			}
			else if(Type == "GameVersion"){
				BoxText += "1.5";
				BoxText += "\n";
				Type = "";
			}
			else if(Type == "OperatingSystem"){
				BoxText += SystemInfo.operatingSystem;
				BoxText += "\n";
				Type = "";
			}
			else if(Type == "GraphicsDeviceID"){
				BoxText += SystemInfo.graphicsDeviceID;
				BoxText += "\n";
				Type = "";
			}
			else if(Type == "GraphicsMemorySize"){
				BoxText += SystemInfo.graphicsMemorySize;
				BoxText += "\n";
				Type = "";
			}
			else if(Type == "WebPage"){
				BoxText += "Sites.google.com/site/unity3dlearning/turtorials";
				BoxText += "\n";
				Type = "";
			}
			else if(Type == "AutorName"){
				BoxText += "Mario";
				BoxText += "\n";
				Type = "";
			}
			else{
				BoxText += Type;
				BoxText += "\n";
				Type = "";
			}
		}
	}
} 
