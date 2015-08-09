import add from 'gl-vec2/add'
import multiply from 'gl-vec2/multiply'
import divide from 'gl-vec2/divide'
import createCanvas from 'create-canvas'
import drawToCanvas from 'draw-to-canvas'

let divideBy2 = (x) => x / 2

/**
 * resizes the resolutions of an html5 canvas element from a desired position
 * perserving the drawn image
 * @param  {element} canvas   an html5 canvas element
 * @param  {arr} diff      [width, height] to add to the current resolution
 * @param  {arr} fromPos      [x, y] postion to scale from
 * @return {element}          a new html5 canvas element
 */
function resizeCanvas (canvas, diff=[0, 0], fromPos) {
  let size = [canvas.width, canvas.height]
  let newSize = add([], size, diff)
  if (!fromPos) fromPos = size.map(divideBy2) // scale from center by default
  let drawOrigin = multiply([], divide([], fromPos, size), diff)
  return drawToCanvas(canvas, createCanvas(...newSize), drawOrigin)
}

export default resizeCanvas
