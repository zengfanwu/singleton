/* created by zfw
 * 2016-08-23
 * 单例实现类
 */

"use strict";

var Singleton = function (name) {
  // name属性
  this.name = name;
  // instance 实例
  this.instance = null;
}

Singleton.prototype.getName = function (name) {
  console.log(this.name);
}

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
a.getName();
b.getName();
console.log(a === b);
