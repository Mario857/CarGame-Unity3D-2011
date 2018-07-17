var yourCursor : Texture2D;
var cursorSizeX : int = 50;  
var cursorSizeY : int = 50;
var RelativeCursor : float = 2.0;  
static var ShowCursor : boolean = false;
var Depth : float = 0;
function Start()
{
	RelativeCursor = 2.84;
	if(!ShowCursor){
    Screen.showCursor = false;
    }
    else{
    Screen.showCursor = false;
    }
}
function OnGUI()
{
	if(!ShowCursor){
	GUI.depth = Depth;
    GUI.DrawTexture (Rect(Event.current.mousePosition.x-cursorSizeX/RelativeCursor, Event.current.mousePosition.y-cursorSizeY/2, cursorSizeX, cursorSizeY), yourCursor);
	}
}