AFRAME.registerComponent('movement-view', {

    init: function () {
        const camera = document.querySelector('#camera');
        const rig = document.querySelector('#rig');
        var isRotation = false;
        let rotation = rig.getAttribute('rotation');
        let position = rig.getAttribute('position');
        var sceneEl = this.el.sceneEl;

        var posX = 0;
        var posY = 0;
        var _newPosY = 0;
        var _newPosX = 0;

        var rotX = 0;
        var rotY = 0;
        var _newRotX = 0;
        var _newRotY = 0;

        var currentX, currentY;

        sceneEl.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Click");
            isRotation = true;
            rotX += e.deltaX * 2;
            rotY += e.deltaY * 2;
            _newRotX = (rotX / 50);
            _newRotY = (rotY / 50);
            currentX = _newRotX;
            currentY = _newRotY;
        });

        sceneEl.addEventListener('wheel', (e) => {
            e.preventDefault();
            console.log("Rotation",rotation);
            console.log("Position",position);
            if (e.ctrlKey) {
                isRotation = true;
                rotX += e.deltaX * 2;
                rotY += e.deltaY * 2;
                _newRotX = (rotX / 50);
                _newRotY = (rotY / 50);
                currentX = _newRotX;
                currentY = _newRotY;
            } else {
                isRotation = false;
                posX -= e.deltaX * 2;
                posY -= e.deltaY * 2;
                _newPosX = (posX / 100);
                _newPosY = (posY / 100);
            }
            
            if (isRotation) {
                console.log("currentX", currentX, "currentY", currentY);
                camera.getAttribute('position', { x: currentX, y: this.y, z: currentY });
                rig.getAttribute('position', { x: currentY, y: currentX, z: 0 });
                //Set Rotateion
                rig.setAttribute('rotation', { x: currentY, y: currentX, z: this.z });
            } else {
                rig.getAttribute('rotation', { x: currentY, y: currentX, z: 0 });
                camera.setAttribute('position', { x: _newPosX, y: this.y, z: _newPosY });
                rig.setAttribute('position', { x: _newPosX, y: this.y, z: _newPosY });
            }
        });
    }
});