var Distance : float = 10;
var Height : float = 0;
var target : Transform;
private var i : int;
function LateUpdate (){
	i++;
	transform.position = target.position;
	var rot = Quaternion.Euler(0,target.eulerAngles.y + i,0);
	transform.position -= rot * Vector3(0,target.position.y - Height , Distance);
}