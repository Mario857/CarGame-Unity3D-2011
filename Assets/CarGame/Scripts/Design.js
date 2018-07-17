var Position : Rect[];
var SliderPos : Rect[];
var Text : String[];
var SliderValue : float[];
var MaxSliderValue : float[];
var ButtonText : String = "Glass Color";
var Show : int;
var ButtonStyle : GUIStyle[];
static var CarColor : Color;
static var GlassColor : Color;
static var FrontWheelsScale : float;
static var BackWheelsScale : float;
static var isCarColor : boolean = true;
static var SpoilerScale : Vector3;
static var HaveReg : boolean;
private var Window2 : Rect = new Rect(100,0,200,200);
private var Window1 : Rect = new Rect(100,0,200,200);
private var Window3 : Rect = new Rect(100,0,200,200);
private var Window4 : Rect = new Rect(100,0,200,200);
function Update(){
	if(!isCarColor){
		ButtonText = "Body Color";
		GlassColor = Color (SliderValue[0],SliderValue[1],SliderValue[2]);
	}
	else{
		ButtonText = "Glass Color";
		CarColor = Color (SliderValue[0],SliderValue[1],SliderValue[2]);
	}
	SpoilerScale.x = SliderValue[5];
	SpoilerScale.z = SliderValue[6];
	SpoilerScale.y = SliderValue[7];
	FrontWheelsScale = SliderValue[3];
	BackWheelsScale = SliderValue[4];
	if(SliderValue[3]<0.6){
		SliderValue[3] = 0.6;
	}
	if(SliderValue[4]<0.6){
		SliderValue[4] = 0.6;
	}
	if(SliderValue[5]<0.8){
		SliderValue[5] = 0.8;
	}
	if(SliderValue[6]<0.4){
		SliderValue[6] = 0.4;
	}
	if(SliderValue[6]<0.2){
		SliderValue[6] = 0.2;
	}
}
function OnGUI(){
	if(GUI.Button(Position[0],Text[0])){
		Application.LoadLevel(2);
		//Save Car Custromize
		PlayerPrefs.SetInt("Car",CarSwitch.UsingCar);
		PlayerPrefsX.SetBool("Have Reg",HaveReg);
		PlayerPrefsX.SetColor("GlassColor",GlassColor);
		PlayerPrefsX.SetColor("BodyColor",CarColor);
		PlayerPrefs.SetFloat("FrontTireScale",FrontWheelsScale);
		PlayerPrefs.SetFloat("BackTireScale",BackWheelsScale);
		PlayerPrefsX.SetVector3("SpoilerScale",SpoilerScale);
	}
	if(GUI.Button(Position[6],Text[6])){
	Show = 4;
	}
	if(GUI.Button(Position[5],Text[5])){
	Show = 3;
	}
	if(GUI.Button(Position[4],Text[4])){
	Show = 2;
	}
	if(GUI.Button(Position[3],Text[3])){
	Show = 1;
	}
	if(GUI.Button(Position[2],Text[2])){
		Application.LoadLevel(2);
	}
	if(GUI.Button(Position[1],Text[1])){
		Application.LoadLevel("MainMenu");
	}
	if(Show==1){
	Window1 = GUI.Window(0,Window1,SetColorSliders,"Color");
	}
	else if(Show==2){
	Window2 = GUI.Window(1,Window2,SetSpoilerSliders,"Spoiler");
	}
	else if(Show==3){
	Window3 = GUI.Window(2,Window3,SetWheels,"Wheels");
	}
	else if(Show==4){
	Window4 = GUI.Window(3,Window4,SetCars,"Cars");
	}
}
function SetColorSliders(ID : int){
	GUI.Label(Rect(0,20,100,20),"Red");
	GUI.Label(Rect(0,40,100,20),"Green");
	GUI.Label(Rect(0,60,100,20),"Blue");
	SliderValue[0] = GUI.HorizontalSlider(SliderPos[0],SliderValue[0],0,MaxSliderValue[0]);
	SliderValue[1] = GUI.HorizontalSlider(SliderPos[1],SliderValue[1],0,MaxSliderValue[1]);
	SliderValue[2] = GUI.HorizontalSlider(SliderPos[2],SliderValue[2],0,MaxSliderValue[2]);
	if(GUI.Button(Rect(0,80,100,20),ButtonText)){
		if(isCarColor){
			isCarColor = false;
		}
		else
		{
			isCarColor = true;
		}
	}
	if(GUI.Button(Rect(100,80,60,20),"Reg")){
		if(!HaveReg){
			HaveReg = true;
		}
		else{
			HaveReg = false;
		}
	}
}
function SetSpoilerSliders(ID : int){
	GUI.Label(Rect(5,20,100,20),"X");
	GUI.Label(Rect(5,40,100,20),"Y");
	GUI.Label(Rect(5,60,100,20),"Z");
	SliderValue[5] = GUI.HorizontalSlider(SliderPos[5],SliderValue[5],0,MaxSliderValue[5]);
	SliderValue[6] = GUI.HorizontalSlider(SliderPos[6],SliderValue[6],0,MaxSliderValue[6]);
	SliderValue[7] = GUI.HorizontalSlider(SliderPos[7],SliderValue[7],0,MaxSliderValue[7]);
}
function SetWheels(ID : int){
	GUI.Label(Rect(5,20,100,20),"Back");
	GUI.Label(Rect(5,40,100,20),"Front");
	SliderValue[3] = GUI.HorizontalSlider(SliderPos[3],SliderValue[3],0,MaxSliderValue[3]);
	SliderValue[4] = GUI.HorizontalSlider(SliderPos[4],SliderValue[4],0,MaxSliderValue[4]);
}
function SetCars(ID : int){
	//GUI.Label(Rect(5,20,100,20),"Coming Soon");
	if(GUI.Button(Rect(5,20,190,30),"CarNissanMarch")){
		CarSwitch.UsingCar = 0;
	}
	if(GUI.Button(Rect(5,50,190,30),"CarNissanFairLady")){
		CarSwitch.UsingCar = 1;
	}
}