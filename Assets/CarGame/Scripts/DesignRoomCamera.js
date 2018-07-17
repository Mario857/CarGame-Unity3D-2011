var Distance : float;
var Heigth : float;
var Car : Transform;
var CameraHeigthStep : float = 2;
function LateUpdate (){
	transform.position = Car.position;
	if(Input.GetKey(KeyCode.G)){
		Heigth -= Input.GetAxis("Mouse Y") *  CameraHeigthStep;
		if(Heigth>22){
			Heigth += 1;
			Heigth = 22;
		}
		if(Heigth<3){
			Heigth -= 1;
			Heigth = 3;
		}
	}
	else{
		
	}
	transform.position -= new Vector3(0,Car.position.y - Heigth,Distance);
	transform.LookAt(Car);
}