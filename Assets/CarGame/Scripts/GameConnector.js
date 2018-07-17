import System;
//Using System IO for saving other data
import System.IO;
enum State{
	MainMenu,
	DesignRoom,
	Game
}
//This is a simple trick for destroying my override object
var Objects : GameObject[];
//This is my state
static var _State = State.MainMenu | State.DesignRoom | State.Game;
function Start(){
	//This trying find override than destroy him
	Objects = GameObject.FindGameObjectsWithTag("Connector");
	//This holding my scripts
	DontDestroyOnLoad(this);
	//This Destroying Connector Override
	if(Objects.length > 0){
		Destroy(Objects[1]);
	}
}
function Update(){
	//This hold My Game State
	MainMenuSetUp();
	DesignRoomState();
	GameState();
}
function MainMenuSetUp(){
	if(_State == State.MainMenu){
		//Main Menu State
		CursorSetUp.ShowCursor = false;
	}
}
function DesignRoomState(){
	if(_State == State.DesignRoom){
		//Design Room State
		CursorSetUp.ShowCursor = false;
	}
}
function GameState(){
		if(_State == State.Game){
		//This is my game State
	}
}