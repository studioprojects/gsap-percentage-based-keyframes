
console.log(gsap.version) // need 3.9+

gsap.set(".demo", {autoAlpha:1})

const slimes = gsap.utils.toArray(".slime")

const tl = gsap.timeline()
tl.to(".slime", {
	keyframes:{
		"25%":{y:0},
		"50%":{y:-100, ease:"sine"},
		"75%":{y:0, ease:"sine.in"},
		"100%":{x:320, ease:"none"}
	},
	duration:2
})

play.addEventListener("click", ()=> tl.restart())

// GSDevTools.create({animation:tl})