var Car : GameObject[];
static var UsingCar : int = 0;
function Update (){
	for(var i : int;i<Car.length;i++){
		if(UsingCar==i){
			Car[i].SetActiveRecursively(true);
		}
		else{
			Car[i].SetActiveRecursively(false);
		}
	}
}