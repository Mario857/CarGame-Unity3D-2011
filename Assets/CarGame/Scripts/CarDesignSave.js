function Awake(){
	CarCreator.CarCount = PlayerPrefs.GetInt("Car");
	CarDesign.isEnabled = PlayerPrefsX.GetBool("Have Reg");
	CarDesign.SpoilerScale = PlayerPrefsX.GetVector3("SpoilerScale");
	CarDesign.GlassColor = PlayerPrefsX.GetColor("GlassColor");
	CarDesign.BodyColor = PlayerPrefsX.GetColor("BodyColor");
	CarDesign.BackTireScale = PlayerPrefs.GetFloat("BackTireScale");
	CarDesign.FrontTireScale = PlayerPrefs.GetFloat("FrontTireScale");
}