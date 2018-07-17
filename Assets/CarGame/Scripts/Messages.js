static var IsEnabled = false;
static var HaveMessage = false;
static var Message = "";
var Position : Rect;
function Start(){
	IsEnabled=false;
	Message += "Welcome";
	Message += "\n";
	Message += "You can use your Console Key : Tab";
	Message += "\n";
	Message += "Console Manual";
	Message += "\n";
	Message += "Moreligthing";
	Message +="\n";
	Message +="MoreLigthingDouble";
	Message +="\n";
	Message +="Normalligthing";
	Message +="\n";
	Message +="DateTime";
	Message +="\n";
	Message +="GameVersion";
	Message +="\n";
	Message +="OperatingSystem";
	Message +="\n";
	Message +="GraphicsDeviceID";
	Message +="\n";
	Message +="GraphicsMemorySize";
	Message +="\n";
	Message +="WebPage";
	Message +="\n";
	Message +="AutorName";
}
function Update (){
	if(Message != ""){
		HaveMessage = true;
	}
	else{
		HaveMessage = false;
	}
	if(Input.GetKeyDown("2") && Console.IsEnabled==false){
		if(!IsEnabled){
			IsEnabled = true;
		}
		else{
			IsEnabled = false;
		}
	}
}
function OnGUI(){
	if(IsEnabled){
		GUI.Window(2,Position,SetMessages,"Messages");
	}
}
function SetMessages(ID : int){
	if(!HaveMessage){
	GUI.Box(new Rect(20,20,360,360),"You Dont Have Messages");
	}
	else{
	GUI.Box(new Rect(20,20,360,360),Message);
	}
}