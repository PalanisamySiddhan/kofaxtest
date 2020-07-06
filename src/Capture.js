import { KfxWebSDK } from 'kfx-html5-plugin';

export function Capture() {
    console.log(KfxWebSDK.getoptions());
    alert("test");
  var cameraOptions = {
    containerId: "ID_CAMERA_DIV",
    preference: "camera",
    preview: true,
    useVideoStream: true,
    frameAspectRatio: 0.629,
    framePadding: 5,
    frameCornerHeight: 10,
    frameCornerWidth: 60,
    frameCornerColor: '#00FF00',
    outOfFrameTransparency: 0.5,
    showEdges: false,
    edgesColor: '#FFFF00',
    edgesWidth: 4,
    guidanceSize: 150,
    useTargetFrameCrop: false,
    criteria: {
      minFillFraction: 0.65,
      maxFillFraction: 1.8,
      longAxisThreshold: 85,
      shortAxisThreshold: 60,
      centerToleranceFraction: 0.19,
      captureTimeout: 1700,
      turnSkewAngleTolerance: 10,
      pitchThreshold: 15,
      rollThreshold: 15
    },
    lookAndFeel: {
      documentSample: 'http://example.com/images/document_sample.jpg',
      forceCapture: 10,
      gallery: true
    }
  };

  KfxWebSDK.Capture.create(cameraOptions, function (createSuccess) {
    KfxWebSDK.Capture.takePicture(function (imageData) {
      //success, user get the captured image in the ImageData format .
    }, function (error) {
      alert("error");
      // error while taking the picture
    });
  }, function (error) {
    alert("error");
    // error while creating the capture control
  });
}
