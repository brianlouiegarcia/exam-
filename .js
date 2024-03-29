!function(a){"use strict";function b(a){this.callback=a,this.ticking=!1}function c(a,d){d=d||c.options,this.lastKnownScrollY=0,this.elem=a,this.debouncer=new b(this.update.bind(this)),this.tolerance=d.tolerance,this.classes=d.classes,this.offset=d.offset,this.initialised=!1}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,b.prototype={constructor:b,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.update.bind(this)),this.ticking=!0)},handleEvent:function(){this.requestTick()}},c.prototype={constructor:c,init:function(){this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100)},destroy:function(){this.initialised=!1,window.removeEventListener("scroll",this.debouncer,!1),this.elem.classList.remove(this.classes.unpinned,this.classes.pinned,this.classes.initial)},attachEvent:function(){this.initialised||(this.initialised=!0,window.addEventListener("scroll",this.debouncer,!1))},unpin:function(){this.elem.classList.add(this.classes.unpinned),this.elem.classList.remove(this.classes.pinned)},pin:function(){this.elem.classList.remove(this.classes.unpinned),this.elem.classList.add(this.classes.pinned)},getScrollY:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},update:function(){var a=this.getScrollY(),b=Math.abs(a-this.lastKnownScrollY)>=this.tolerance;0>a||(b&&(a>this.lastKnownScrollY&&a>=this.offset?this.unpin():a<this.lastKnownScrollY&&this.pin()),this.lastKnownScrollY=a)}},c.options={tolerance:0,offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",initial:"headroom"}},a.Headroom=c}(this);

var headroom = new Headroom(elem, {
  "tolerance": 5,
  "offset": 205,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
headroom.init();

// to destroy
headroom.destroy();