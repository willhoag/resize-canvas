import tape from 'tape'
import resizeCanvas from './'
import createCanvas from 'create-canvas'

let canvas = null
let compareCanvas = null

function drawTriangle (ctx, start=[0, 0]) {
  ctx.beginPath()
  ctx.moveTo((10 + start[0]), (10 + start[1]))
  ctx.lineTo((10 + start[0]), (16 + start[1]))
  ctx.lineTo((14 + start[0]), (13 + start[1]))
  ctx.closePath()
  ctx.stroke()
}

// init vars
function test (description, fn) {
  tape(description, function (t) {

    // beforeEach
    canvas = createCanvas(200, 300)
    compareCanvas = createCanvas(200, 200)

    // test
    fn(t)

    // AfterEach
    canvas = compareCanvas = null
  })
}

test('should return a canvas', function (t) {
  resizeCanvas({canvas: canvas, diff: [20, 40]})
  t.equal(canvas.tagName, 'CANVAS')
  t.end()
})

test('should resize be the correct size', function (t) {

  t.equal(canvas.width, 200)
  t.equal(canvas.height, 300)

  resizeCanvas({canvas: canvas, diff: [20, 40]})

  t.equal(canvas.width, 220)
  t.equal(canvas.height, 340)

  resizeCanvas({canvas: canvas,
    diff: [-10, 20],
    from: [20, 40]
  })

  t.equal(canvas.width, 210)
  t.equal(canvas.height, 360)

  resizeCanvas({
    canvas: canvas,
    diff: [-40, 0],
    from: [10, 0]
  })

  t.equal(canvas.width, 170)
  t.equal(canvas.height, 360)

  t.end()
})

test('should draw previous canvas in correct location resizing from top left', function (t) {

  drawTriangle(canvas.getContext('2d'), [0, 0])
  drawTriangle(compareCanvas.getContext('2d'), [0, 0])

  resizeCanvas({
    canvas: canvas,
    diff: [20, 40],
    from: [0, 0]
  })

  t.deepEqual(
    canvas.getContext('2d').getImageData(0, 0, 200, 300),
    compareCanvas.getContext('2d').getImageData(0, 0, 200, 300))

  t.end()
})

test('should draw previous canvas in correct location resizing from bottom right', function (t) {

  drawTriangle(canvas.getContext('2d'), [0, 0])
  drawTriangle(compareCanvas.getContext('2d'), [20, 40])

  resizeCanvas({
    canvas: canvas,
    diff: [20, 40],
    from: [canvas.width, canvas.height]
  })

  t.deepEqual(
    canvas.getContext('2d').getImageData(20, 40, 28, 48).data,
    compareCanvas.getContext('2d').getImageData(20, 40, 28, 48).data)

  t.end()
})
