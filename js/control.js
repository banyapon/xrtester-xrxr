AFRAME.registerComponent('rotate-box', {
    init: function () {
        const el = document.querySelector('#camera');
        var myElement = document.getElementById('myElement');
        var mc = new Hammer(myElement);
        mc.on('pan', (ev) => {
            let rotation = el.getAttribute("rotation");
            myElement.textContent = ev.type + " gesture detected.";
            rotate = ev.type;
            console.log("Rotate: " + rotate);
            
            switch (ev.direction) {
                case 2:
                    rotation.y = rotation.y + 4
                    break;
                case 4:
                    rotation.y = rotation.y - 4
                    break;
                case 8:
                    rotation.x = rotation.x + 4
                    break;
                case 16:
                    rotation.x = rotation.x - 4
                    break;
                default:
                    break;
            }
            el.setAttribute("rotation", rotation)
        });

        mc.on("pinch", (ev) => {
            let scale = { x: ev.scale, y: ev.scale, z: ev.scale }
            el.setAttribute("scale", scale);
        });
    }
});