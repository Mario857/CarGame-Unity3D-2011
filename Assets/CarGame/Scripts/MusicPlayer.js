var Music : AudioClip[];
function Start(){
	for (var i : int; i<Music.length;i++){
		audio.clip = Music[i];
		if(audio.clip){
			audio.Play();
			yield WaitForSeconds(audio.clip.length);
		}
		else{
			audio.Stop();
			yield;
		}
	}
}
function Update (){

}