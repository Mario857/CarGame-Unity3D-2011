var isNight : boolean = false;
static var MinLight = 0.4;
static var MaxLight = 0.8;
function Start(){
	light.intensity = 0.4;
}
function Update (){
	if(isNight){
		light.intensity -= Time.deltaTime;
	}
	if(!isNight){
		light.intensity += Time.deltaTime;
	}
	light.intensity = Mathf.Clamp(light.intensity,MinLight , MaxLight);
	if(System.DateTime.Now.Hour > 6){
		isNight = false;
	}
	else if(System.DateTime.Now.Hour > 22){
		isNight = true;
	}
}