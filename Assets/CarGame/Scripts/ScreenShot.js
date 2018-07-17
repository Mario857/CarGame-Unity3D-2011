function Update (){
	var i : int;
	if(Input.GetKeyDown("c")){
		i++;
		Application.CaptureScreenshot(i + ".png");
	}
}