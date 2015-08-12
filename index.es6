import add from 'gl-vec2/add'
import subtract from 'gl-vec2/subtract'
import multiply from 'gl-vec2/multiply'
import divide from 'gl-vec2/divide'
import copyCanvas from 'copy-canvas'
import drawToCanvas from 'draw-to-canvas'

 /**
 * resizes the resolutions of an html5 canvas element from a desired position
 * perserving the drawn image
  * @param  {canvas} {canvas  an html5 canvas element
  * @param  {array} size      [width, height] to add to the current resolution
  * @param  {array} diff      [width, height] of new resolution
  * @param  {array} from}     [x, y] postion to scale from
  * @return none
  */
function resizeCanvas ({canvas, size, diff, from}) {

  let oldSize = [canvas.width, canvas.height]

  if (diff) {
    size = add([], oldSize, diff)
  } else {
    diff = subtract([], size, oldSize)
  }

  // leave it there isn't a new size or diff
  if (!size || !diff) return

  // defaults
  from = from || oldSize.map((x) => x / 2) // scale from center by default

  // find where to move drawing to once resized
  let drawOrigin = multiply([], divide([], from, oldSize), diff)

  // cache image data
  let copy = copyCanvas(canvas)

  // resize size
  canvas.width = size[0]
  canvas.height = size[1]

  // restore image data at proper location
  drawToCanvas(copy, canvas, drawOrigin)
}

export default resizeCanvas
