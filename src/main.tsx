import { define } from 'uelements'
import  App  from './app'
// import './index.css'

define(
	"f22-stories",
	(el) => <App dataURL={(el.getAttribute("dataURL") || "")}  
	/>,
	["dataURL" ],
	() => console.log("F22 Plugin cleanup")
);
