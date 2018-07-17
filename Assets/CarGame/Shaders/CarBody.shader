Shader "Custom/CarBody" {
 	Properties {
       _SpecColor ("Spec Color",Color) = (1,1,1,1)
       _Color ("Main Color", Color) = (0,0,0,0)
       _Shininess ("Shininess", Color) = (0,0,0,0)
       _AmbColor ("Amb Color",Color) = (0,0,0,0)
       _Blend ("Blend", Range(0.0,1.0)) = 0.5
       _Texture ("Base(RGB)",2D) = "white" {}
       _Texture2 ("Base(RBG)",2D) = "white" {}
    }
SubShader {
	Material {
		Emission[_Color]
		Shininess [_Shininess]
		Ambient[_AmbColor]
		Specular [_SpecColor]
	}
	Fog {Mode Off}
	Lighting On
	Color [_Color]
	Pass {
        SetTexture [_Texture] { combine texture }
        SetTexture [_Texture2] { constantColor (0,0,0,[_Blend]) combine texture lerp(constant) previous }
        SetTexture [_Texture2] { combine previous +- primary, previous * primary }
    }
    Pass {
        SetTexture [_Texture2] { combine texture }
        SetTexture [_Texture] { constantColor (0,0,0,[_Blend]) combine texture lerp(constant) previous }
        SetTexture [_Texture] { combine previous +- primary, previous * primary }
    }
}
Fallback "Custom/CarBody", 1
}