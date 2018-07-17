var target : GameObject;
var Distance : float;
var Height : float;
var CarSpeed : int;
var FOWSpeed : float = 2;
var RotationSpeed : float = 4;
private var BackRotation : float = 0;
function Start(){
	target = GameObject.FindGameObjectWithTag("Car");
	if(CarCreator.CarCount==0){
		Distance = 26;
		Height = 7;
	}
	else if(CarCreator.CarCount==1){
		Distance = 18;
		Height = 3;
	}
}
function Update (){
	CarSpeed = Driving.currentSpeed;
	if(CarSpeed>160){
		MotionBlur.blurAmount += Time.deltaTime;
		if(MotionBlur.blurAmount>=0.42){
			MotionBlur.blurAmount = 0.42;
		}
		camera.fieldOfView = Mathf.Lerp(camera.fieldOfView,75,FOWSpeed * Time.deltaTime);
	}
	else{
		MotionBlur.blurAmount = 0;
		camera.fieldOfView = Mathf.Lerp(camera.fieldOfView,60,FOWSpeed * Time.deltaTime);
	}
	if(Input.GetKeyDown("escape")){
		Application.LoadLevel(0);
	}
}
function LateUpdate(){
	if(!target)
		return;
	//Start Position
	transform.position = target.transform.position;
	//Set Smooth
	var Smooth = Mathf.LerpAngle(transform.eulerAngles.y , target.transform.eulerAngles.y + BackRotation, RotationSpeed * Time.deltaTime);
	//Smooth Height
	var Pos = Mathf.Lerp(transform.position.y , target.transform.position.y + Height , Distance); 
	//Float to Euler
	var ToEuler = Quaternion.Euler(0,Smooth,0);
	//Set Position
	if(CarSpeed <0){
		BackRotation = 180;
	}
	else{
		BackRotation = 0;
	}
	transform.position -= ToEuler * Vector3(0,-Pos,Distance);
	transform.LookAt(target.transform);
}