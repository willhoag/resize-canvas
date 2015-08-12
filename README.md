# resize-canvas

[![Build Status](https://travis-ci.org/willhoag/resize-canvas.svg)](https://travis-ci.org/willhoag/resize-canvas)
[![npm version](https://badge.fury.io/js/resize-canvas.svg)](http://badge.fury.io/js/resize-canvas)

Change dimensions of an html5 canvas element, resizing from a relative position on canvas (center by default) and preserving image data

## Details
Similar to how you can change resolution of an image in photoshop, but with granular control of the `from` position. Adjust with an absolute new size or a relative change. This new version resizes the canvas in place instead of returning you a new canvas with the different size. To get a new canvas, supply a copy of the original.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install resize-canvas --save
```

## Usage
```js
import resizeCanvas from 'resize-canvas'

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
  from: [canvas.width, canvas.height] // from bottom right
})

canvas.width // 50
canvas.height // 200
```

## API
resizeCanvas( { canvas, diff, size, from } )

Arguments
- canvas : canvas - An html5 canvas element to resize and draw from
- size : array - New size of the canvas ex: [200, 300]
- diff : array - Pixels to add/remove to the canvas ex: [-20, 30]
- from : array - Point on the canvas to resize from. The lower right is the width and height of the canvas [canvas.width, canvas.height]. Top left is [0, 0]. It is center by default [canvas.width/2, canvas.height/2].


## License

ISC
