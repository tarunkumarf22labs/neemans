import { define } from 'uelements'
import  App  from './app'
// import './index.css'

define(
	"f22-plugin",
	(el) => <App dataURL={(el.getAttribute("dataURL") || "")}  
	/>,
	["dataURL" ],
	() => console.log("F22 Plugin cleanup")
);
let el = document.createElement('f22-plugin')
el.setAttribute('dataUrl', "https://f22videoplugin.s3.ap-northeast-1.amazonaws.com/exhibitionexperts/f22exhibition.json")
document.body.append(el)
