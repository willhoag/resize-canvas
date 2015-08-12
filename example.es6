import resizeCanvas from './'

let canvas = document.createElement('canvas')

// set height and width
canvas.width = 300
canvas.height = 200

// add to dom
document.body.appendChild(canvas)

// draw a circle
let ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.arc(150, 100, 50, 0, 2 * Math.PI)
ctx.stroke()

// change size from [300, 200] to [300, 250] from center
resizeCanvas({
  canvas: canvas,
  size: [100, 50] // absolute size adjustment
})

// or by size difference adding to the top and left sides
resizeCanvas({
  canvas: canvas,
  diff: [-50, 150], // relative size adjustment
  from: [canvas.width, canvas.height]
})

canvas.width // 50
canvas.height // 200
