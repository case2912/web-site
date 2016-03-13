container = new THREE.Object3D();
    scene.add(container);

    geometry = new THREE.CubeGeometry(20, 20, 20, 20, 20, 20);
    material = new THREE.PointsMaterial({
        size: 0.3,
        color: 0x448866
    })
    var particles = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < 3; k++) {
                particles[i + j + k] = new THREE.Points(geometry, material);
                particles[i + j + k].position.set(25 * (i - 1), 25 * (j - 1), 25 * (k - 1));
                container.add(particles[i + j + k]);
            };
        };
    };


    camera.position.z = 90;

    function render() {
        requestAnimationFrame(render);
        container.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    render();