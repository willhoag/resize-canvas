# resize-canvas

[![Build Status](https://travis-ci.org/willhoag/resize-canvas.svg)](https://travis-ci.org/willhoag/resize-canvas)
[![npm version](https://badge.fury.io/js/resize-canvas.svg)](http://badge.fury.io/js/resize-canvas)

Change size of an html5 canvas element without scaling or data loss - size down to crop.

## Details
It returns a new canvas with the requested dimension change, resizing from a point on the canvas (center by default). It doesn't operate on the canvas directly.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install resize-canvas --save
```

## Usage
```js
let resizeCanvas = require('resize-canvas')

let canvas = document.createElement('canvas')
canvas.width = 300
canvas.height = 200

// draw an arc
// var ctx = canvas.getContext('2d')
// ctx.beginPath()
// ctx.arc(150, 100, 50, 0, 2 * Math.PI)
// ctx.stroke()

// resized canvas adding to the right and bottom sides (from the top left corner)
resizeCanvas(canvas, [320, 280], [0, 0])

// resized canvas adding to the left and top sides (from the bottom right corner)
resizeCanvas(canvas, [320, 280], [canvas.width, canvas.height])

// resized canvas adding equally on all sides (from the center - default)
let biggerCanvas = resizeCanvas(canvas, [320, 280])

biggerCanvas.width // 640
biggerCanvas.height // 480
```

## API
resizeCanvas( canvas `canvas`, diff `array`, point `array` ):canvas

Arguments
- canvas : `canvas` - An html5 canvas element to resize and draw from
- diff : `array` - Pixels to add/remove to the canvas ex: [-20, 30]
- point : `array` - Point on the canvas to resize from. The lower right is the width and height of the canvas [canvas.width, canvas.height]. Top left is [0, 0]. It is center by default [canvas.width/2, canvas.height/2].


## License

ISC
