var Timer : float = 0.1;
function Update (){
	Timer -= Time.deltaTime;
	if(Timer<0){
		Timer = 0.1;
		light.enabled = false;
	}
	else{
		light.enabled = true;
	}
}