/*jslint browser: true */
/*globals declareTest, compareImages, toImageData, $ */

declareTest({
    name: "Geodots - ground truth match",
    url: "/examples/geodots",
    imageFiles: {
        geodots: "${CMAKE_BINARY_DIR}/tangelo/web/examples/geodots/geodots.png"
    },
    test: function (info) {
        "use strict";

        var screencap,
            diff,
            diffMag;

        // Get a screenshot of the canvas element.
        screencap = new CanvasImage();
        screencap.drawFromElement($("canvas").get(0));
        screencap.savePNG("geodots-test.png");

        // Compute a diff image against the baseline.
        diff = diffImage(screencap, info.image.geodots);
        diff.savePNG("geodots-diff.png");
        diffMag = L2(diff);

        // Print the L2 difference.
        console.log("image difference (L2): " + diffMag);

        cdashImage("TestImage", "geodots-test.png");
        cdashImage("DifferenceImage", "geodots-diff.png");
        cdashImage("ValidImage", info.imageFiles.geodots);

        // Compare the diff magnitude to the tolerance.
        return diffMag < 1e-8;
    }
});
