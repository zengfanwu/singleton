"use strict";

class LoginWinSingleton {
  constructor() {
    // instance 实例
    this.instance = null;
    this.appendWin();
    this.attchEvent();
  }

  static getInstance(){
    if (!this.instance) {
      this.instance = new LoginWinSingleton();
    }
    return this.instance;
  }

  appendWin(){
    // alert("win");
    this.containerElement = document.createElement('div');
    this.containerElement.className = 'layer';
    this.containerElement.innerHTML = '我是登录悬浮窗';
    this.containerElement.style.display = 'none';
    document.body.appendChild(this.containerElement);
  }

  attchEvent(){
    var that = this;
    this.containerElement.addEventListener('click',function () {
      that.hide();
    },false);
  }

  hide(){
    this.containerElement.style.display = 'none';
  }

  show(){
    this.containerElement.style.display = 'block';
  }
}
