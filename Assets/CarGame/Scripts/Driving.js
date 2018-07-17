var flWheelCollider : WheelCollider;
var frWheelCollider : WheelCollider;
var rlWheelCollider : WheelCollider;
var rrWheelCollider : WheelCollider;
var maxTorque = 150.0;
var MaxBrakeTorque = 500.0;
var MaxSteerAngle = 30.0;
var steerStep : float = 1.0;
var GuiSpeed : GUIText;
var guiSpeedPointer : Texture2D;
var guiSpeedDisplay : Texture2D;
var flWheel : Transform;
var frWheel : Transform;
var rrWheel : Transform;
var rlWheel : Transform;
var gearSpeed : int[];
var MaxSpeed :float= 200;
var SpeedPanelPosition : Rect = new Rect(0,0,140,140);
static var currentSpeed : float = 0.0;
private var IsBraking = false;
private var currentGear : int;

function Start()
{
	GuiSpeed.material.color = Color.black;
	rigidbody.centerOfMass += Vector3(0, 0, 2);
}
function FixedUpdate ()
{
	currentSpeed =(Mathf.PI * 2 * flWheelCollider.radius) *  flWheelCollider.rpm * 60/1000;
	currentSpeed = Mathf.Round(currentSpeed);
	
	if (((currentSpeed> 0) && (Input.GetAxis("Vertical") <0)) || ((currentSpeed< 0) && (Input.GetAxis("Vertical") >0)))
	{
		IsBraking = true;
	}
	else
	{
		IsBraking = false;
		flWheelCollider.brakeTorque = 0;
		frWheelCollider.brakeTorque = 0;
	}
	if(IsBraking == false) {
	if(currentSpeed < MaxSpeed){
	flWheelCollider.motorTorque = maxTorque * Input.GetAxis("Vertical");
	frWheelCollider.motorTorque = maxTorque * Input.GetAxis("Vertical");
	}
	else{
			flWheelCollider.motorTorque = 0;
			frWheelCollider.motorTorque = 0;
		}
	}
	else
	{
			flWheelCollider.brakeTorque = MaxBrakeTorque;
			frWheelCollider.brakeTorque = MaxBrakeTorque;
			flWheelCollider.motorTorque = 0;
			frWheelCollider.motorTorque = 0;
	}
	
	if(IsBraking == true)
	{
	flWheelCollider.brakeTorque = MaxBrakeTorque;
	frWheelCollider.brakeTorque = MaxBrakeTorque;
	}
	
	flWheelCollider.steerAngle = MaxSteerAngle * Input.GetAxis("Horizontal");
    frWheelCollider.steerAngle = MaxSteerAngle* Input.GetAxis("Horizontal");
	
	GuiSpeed.text = currentSpeed.ToString();
	SetCurrentGear();
	GearSound();
	
}
function Update()
{
	SpeedPanelPosition.y = Screen.height - 140;
	RotateWheels();
	SteelWheels();
}

function OnGUI()
{
	GUI.Window(0,SpeedPanelPosition,SpeedPanel,"KMH");
}
function RotateWheels()
{
	flWheel.Rotate(flWheelCollider.rpm / 60 * 360 * Time.deltaTime,0,0);
	frWheel.Rotate(flWheelCollider.rpm / 60 * 360 * Time.deltaTime,0,0);
	rrWheel.Rotate(flWheelCollider.rpm / 60 * 360 * Time.deltaTime,0,0);
	rlWheel.Rotate(flWheelCollider.rpm / 60 * 360 * Time.deltaTime,0,0);
}

function SteelWheels()
{
	flWheel.localEulerAngles.y = flWheelCollider.steerAngle - flWheel.localEulerAngles.z;
	frWheel.localEulerAngles.y = frWheelCollider.steerAngle - frWheel.localEulerAngles.z;
}

function SetCurrentGear()
{
	var gearNumber : int;
	gearNumber = gearSpeed.length;
	
	for (var i=0; i< gearNumber; i++)
	{
	if(gearSpeed[i]>currentSpeed)
		{
		currentGear = i;
		break;
		}
	}
}
function GearSound()
{
	var tempMinSpeed : float=0.00;
	var tempMaxSpeed : float=0.00;
	var currentPitch : float = 0.00;
	
	switch(currentGear)
	{
	case 0:
	tempMinSpeed = 0.00;
	tempMaxSpeed = gearSpeed[currentGear];
	break;
	default:
	tempMinSpeed = gearSpeed[currentGear -1];
	tempMaxSpeed = gearSpeed[currentGear];
	}
	currentPitch =((currentSpeed-tempMinSpeed)/(tempMaxSpeed- tempMinSpeed)) +0.8;
	audio.pitch = currentPitch;
}
function SpeedPanel(ID : int){
	GUI.Box(Rect(0.0,0.0,140.0,140.0),guiSpeedDisplay);
	GUIUtility.RotateAroundPivot(currentSpeed +40,Vector2(70  ,70));
	GUI.DrawTexture(Rect(0.0,0.0,140.0,140.0),guiSpeedPointer , ScaleMode.StretchToFill,true,0);
}