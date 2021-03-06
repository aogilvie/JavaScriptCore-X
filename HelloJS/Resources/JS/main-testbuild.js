try {
    debug.log("onEnter jsc.");
	var scene = new CCScene();

	var curTime = Date.now();
	for (var i=0; i < 10; i++)
	{
		var sprite = new CCSprite("mapletree.png");
		sprite.setPosition(30 + i*40, 70);
		if (i % 3 === 0) {
			sprite.setOpacity(128);
		}
		if (i % 2 === 0) {
			sprite.setColor(0, 255, 0);
		}
		scene.addChild(sprite);
	}
	CCDirector.runWithScene(scene);
	var endTime = Date.now();
	debug.log("js delta\t" + (endTime - curTime) / 1000.0);

	var sprite = new CCSprite("mapletree.png");
	sprite.setPosition(160, 320);
	sprite.registerAsTouchHandler();
	sprite.touchesBegan = function (points) {
		debug.log("began: " + points.length);
		debug.log("first point: " + points[0][0] + "," + points[0][1]);
	};
	sprite.touchesMoved = function (points) {
		debug.log("moved: " + points.length);
		debug.log("first point: " + points[0][0] + "," + points[0][1]);
	};
	sprite.touchesEnded = function (points) {
		debug.log("ended: " + points.length);
		debug.log("first point: " + points[0][0] + "," + points[0][1]);
	};
	scene.addChild(sprite);

	var sumTime = 0.0;
	scene.schedule("update", function (delta) {
		sumTime += delta;
		if (sumTime > 2.0) {
			exit(0);
		}
		debug.log(sumTime);
	});
} catch (e) {
	debug.log("error: " + e);
}
