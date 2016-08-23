/* created by zfw
 * 2016-08-23
 * 单例实现类
 */

"use strict";

class Singleton {
  constructor(name) {
    // name属性
    this.name = name;
    // instance 实例
    this.instance = null;
  }

  getName(name){
    console.log(this.name);
  }

  static getInstance(name){
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
}


let a = Singleton.getInstance('sven1');
let b = Singleton.getInstance('sven2');
a.getName();
b.getName();
