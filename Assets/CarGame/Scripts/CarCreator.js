var Cars : Transform[];
static var CarCount : int;
function Start(){
	if(CarCount==0){
	Instantiate(Cars[CarCount],transform.position,Quaternion.identity);
	}
	if(CarCount==1){
	Instantiate(Cars[CarCount],transform.position,Quaternion.identity);
	}
}