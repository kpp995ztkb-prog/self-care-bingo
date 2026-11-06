'use strict';
function fitGridWidth(availableWidth,viewportHeight,gridTop,tailHeight,bottomPadding){return Math.floor(Math.min(availableWidth,Math.max(180,viewportHeight-gridTop-tailHeight-bottomPadding)))}
function photoTextSize(cardWidth,textLength){var size=cardWidth*.13;if(textLength>18)size*=Math.sqrt(18/textLength);return Math.max(8,Math.min(16,Math.round(size*10)/10))}
if(typeof module!=='undefined')module.exports={fitGridWidth:fitGridWidth,photoTextSize:photoTextSize};
