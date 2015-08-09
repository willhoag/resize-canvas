import resizeCanvas from './'

let canvas = document.createElement('canvas')
canvas.width = 300
canvas.height = 200

let ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.arc(150, 100, 50, 0, 2 * Math.PI)
ctx.stroke()

document.body.appendChild(canvas)

let biggerCanvas = resizeCanvas(canvas, [320, 280], [150, 100])

document.body.innerHTML = ''
document.body.appendChild(biggerCanvas)
