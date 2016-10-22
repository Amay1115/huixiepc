// JavaScript Document
if (window !== window.top && location.hash !== '#dontkillanim') {
window.is_webkit = /(webkit)[ \/]([\w.]+)/.exec(window.navigator.userAgent.toLowerCase())

window.max_timer = window.is_webkit ? 2000 : 20

var pauseCSSAnimations = function() {

var stopCSSAnimations = function() {
// Get the Body Element
var body = document.getElementsByTagName('body')[0];

body.addEventListener('webkitAnimationStart', stopAnimation, false);
body.addEventListener('webkitAnimationIteration', stopAnimation, false);
body.addEventListener('animationstart', stopAnimation, false);
body.addEventListener('animationiteration', stopAnimation, false);
};

// e is the event object bro ;)
var stopAnimation = function(e) {
// e.srcElement? lulz...
var target_el = e.target;
var e_type = e.type.toLowerCase();

if (e_type.indexOf('animationstart') !== -1 || e_type.indexOf('animationiteration') !== -1) {
// LOL, we need to stop the animation now!
// setInterval? lulz...

setTimeout(false, function() {

if (target_el.style.webkitAnimationPlayState !== 'paused')
target_el.style.webkitAnimationPlayState = 'paused';

if (target_el.style.MozAnimationPlayState !== 'paused')
target_el.style.MozAnimationPlayState = 'paused';

if (target_el.style.animationPlayState !== 'paused')
target_el.style.animationPlayState = 'paused';

}, window.max_timer);
}
}

stopCSSAnimations();

};

// Next we need to pause/stop JS Animations

var pauseJSAnimations = function() {


window.setInterval = (function(oldSetInterval) {
var registered = [];

var f = function() {
var id;
// .. this!
var $this = this;
// setInterval accepts n no. of args
var args = arguments;
// What if someone used the awesome Function.bind() ?
// I am sure we want the awesome apply() then ;)

// this is my awesome brain usage. if first val is nonsense,
// then don't register, heh.
if (typeof args[0] !== 'function' && args[0] === false) {
args = Array.prototype.slice.call(arguments);
args = args.slice(1);

id = oldSetInterval.apply($this, args)
}
else {
id = oldSetInterval.apply($this, args);
registered.push(id);
}

//console.log(registered);
// Need to return the Interval ID
return id;
};

f.clearAll = function() {
var r;
while (r = registered.pop()) {
clearInterval(r);
}
};

return f;
})(window.setInterval);

window.setTimeout = (function(oldSetTimeout) {
var registered = [];

var f = function() {
var id;
// .. this!
var $this = this;
// setInterval accepts n no. of args
var args = arguments;
// What if someone used the awesome Function.bind?
// I am sure we want the awesome apply then ;)

// this is my awesome brain usage. if first val is nonsense,
// then don't register, heh.
if (typeof args[0] !== 'function' && args[0] === false) {
args = Array.prototype.slice.call(arguments);
args = args.slice(1);

id = oldSetTimeout.apply($this, args)
}
else {
//console.log('lolzzzzz');
id = oldSetTimeout.apply($this, args);
registered.push(id);
}

//console.log(registered);
// Need to return the Timeout ID
return id;
};

f.clearAll = function() {
var r;
while (r = registered.pop()) {
clearTimeout(r);
}
};

return f;
})(window.setTimeout);

setTimeout(false, function() {
setTimeout.clearAll();
setInterval.clearAll();
}, window.max_timer);


// Time to Cancel rAF's Bro :)
// You know things are harder when people are actually
// using shims for rAF :/ So we need to test for vendors!

window.__requestAnimFrame = window.requestAnimationFrame || undefined;
window.__cancelAnimFrame = window.cancelAnimationFrame || undefined;
window.__vendors = ['webkit', 'moz', 'ms', 'o'];
window.__registered_rafs = [];

// I can't think of a good way to cancel rAF's
// So maybe lets use something similar to our other canceller's

window.__requestFrame = function(cb) {
if (!window.__requestAnimFrame) return;

var req_id = window.__requestAnimFrame(cb);
__registered_rafs.push(req_id);

return req_id;
};

// Determine the proper VendorPrefixedFunctionName
if (!window.__requestAnimFrame) {
for (var x = 0; x < window.__vendors.length; x++) {
if (!window.__requestAnimFrame) {
window.__requestAnimFrame = window[window.__vendors[x]+'RequestAnimationFrame'];
window[window.__vendors[x]+'RequestAnimationFrame'] = __requestFrame;
}

if(!window.__cancelAnimFrame) {
// I came across webkitCancelAnimationFrame and webkitCancelRequestAnimationFrame
// No idea about the difference, so maybe lets ||'fy it

window.__cancelAnimFrame = window[window.__vendors[x]+'CancelAnimationFrame'] ||
window[window.__vendors[x]+'CancelRequestAnimationFrame'];
}
}
}

// We have our proper vendor prefixed raf objects now :)
// So let's go mad!!!
// Let's Cancel our rAF's
setTimeout(false, function() {
if (!window.__requestAnimFrame) return;

var r;
while (r = window.__registered_rafs.pop()) {
window.__cancelAnimFrame(r);
}
}, window.max_timer);

};

// Had to place outside pauseAnimations to work properly
// else it was getting called afterwards code setTimeout/Interval executed
if (window !== window.top)
pauseJSAnimations();

var __pauseAnimations = function() {
if (window !== window.top)
pauseCSSAnimations();
};
}
else {
__pauseAnimations = function() {};
}