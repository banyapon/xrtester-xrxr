AFRAME.registerComponent('movement-view', {
  init: function () {
    const el = document.querySelector('#camera');
    var isRotation = false;
    var scale = 1;
    var posX_start = 0;
    var posY_start = 0;
    var posX = 0;
    var posY = 0;
    var posX_current = 0;
    var posY_current = 0;
    var _newPosY = 0;
    var _newPosX = 0;

    let rotation = el.getAttribute('rotation');
    var sceneEl = this.el.sceneEl;

    sceneEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.ctrlKey) {
        //scale -= e.deltaY * 0.01;
        console.log(rotation);
        //el.setAttribute('rotation', { x: 0, y: 1, z: (posY_start + scale) });
      } else {

        console.log("X",e.deltaX);
        console.log("Y",e.deltaY);
        posX -= e.deltaX * 2;
        posY -= e.deltaY * 2;
        _newPosX = (posX / 100);
        _newPosY = (posY / 100);

        posY_current = _newPosY;
        posX_current = _newPosX;
        
        if (e.altKey) {
          console.log("Rotate Move");
          
        } else {
          console.log("current Y:", posY_current, "new Y", _newPosY, "current X:", posX_current, "new X", _newPosX);
          el.setAttribute('position', { x: (posX_start + _newPosX), y: 1, z: (posY_start + _newPosY) });
        }
      }
    });
  }
});