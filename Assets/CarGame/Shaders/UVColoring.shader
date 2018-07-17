Shader "Custom/UVColoring" {
	Properties {
		_FrontTex ("Base (RGB)", 2D) = "white" {}
		_Color ("Main Color", Color) = (0,0,0,0)
	}
	SubShader {
		Pass{
			Material {
				Diffuse [_Color]
			}
			Lighting On
		}
		Pass {
			SetTexture[FrontTex]{
				combine texture * primary double, texture * primary
			}	
		}
	} 
	//FallBack "Diffuse"
}
