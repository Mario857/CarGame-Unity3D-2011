var Rotation : float = 0;
function Update (){
	if(Input.GetMouseButton(1)){
		Rotation -= Input.GetAxis("Mouse X") * 2;
		transform.Rotate(Vector3.up * Rotation * Time.deltaTime);
	}
	else{
		Rotation = 0;
		transform.Rotate(Vector3.up * 8 * Time.deltaTime);
	}
}