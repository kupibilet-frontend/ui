/*
MIT License


Copyright (c) 2017-present, V Kontakte, LLC.


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This file contains svg icon originally copied from https://github.com/VKCOM/VKUI
*/

import memoizeOne from 'memoize-one'

// svg copied from https://github.com/VKCOM/VKUI
const getColoredIconXmlSrc = (color: string) => `<?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="8px" viewBox="0 0 20 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">        <title>tooltip_tip</title>    <desc>Created with Sketch.</desc>    <defs></defs>    <g id="Master-Kit" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <path d="M10,0 C13.5,0 15.5,8 20,8 L0,8 C4.5,8 6.5,0 10,0 Z" id="tooltip_tip" fill="${color}" fill-rule="nonzero"></path>    </g></svg>`

export const getPopoverArrow = memoizeOne((color: string) => {
  const src = getColoredIconXmlSrc(color)
  if (typeof window !== 'undefined') {
    const base64src = window.btoa(src)
    if (base64src) {
      return `url(data:image/svg+xml;base64,${base64src})`
    }
  }
  return null
})
