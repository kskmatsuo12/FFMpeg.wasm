const TIMELINE_GRID_X = 1; // x軸の移動単位 (px)
const TIMELINE_GRID_Y = 75; // y軸の移動単位 (px)
const SNAP_TOLERANCE = 10; // 周囲１０px以内に他のオブジェクトがあったら、ピタッとくっつく

// $(layer.timelineId).draggable({
//   grid: [TIMELINE_GRID_X, TIMELINE_GRID_Y],
//   containment: "parent", // 親要素を超えてドラッグはできない
//   scroll: "false", // ドラッグ中はスクロールさせない
//   snap: true,
//   snapMode: "both",
//   snapTolerance: SNAP_TOLERANCE,
//   drag: (ev, ui) => {
//     console.log(ev);
//     // ドラッグ中のイベント
//   },
//   stop: (ev, ui) => {
//     // ドラッグ終了時のイベント
//     // レイヤーオブジェクトの positionInformationを更新
//     layer.positionInformation.startPosition = ui.position.left;
//     layer.positionInformation.endPosition =
//       ui.position.left - ui.originalPosition.left;
//   },
// });

const initSourceDraggable = (sourceId, videoDuration) => {
  console.log(sourceId);
  $(`#source-${sourceId}`).draggable({
    grid: [TIMELINE_GRID_X, TIMELINE_GRID_Y],
    containment: "#timeline", // 親要素を超えてドラッグはできない
    scroll: "false", // ドラッグ中はスクロールさせない
    snap: true,
    snapMode: "both",
    helper: "clone", //タイムラインにコピーするため
    snapTolerance: SNAP_TOLERANCE,
    drag: (ev, ui) => {
      //   console.log(ev);
      // ドラッグ中のイベント
    },
    stop: (ev, ui) => {
      // ドラッグ終了時のイベント
      // レイヤーオブジェクトの positionInformationを更新
      //   layer.positionInformation.startPosition = ui.position.left;
      //   layer.positionInformation.endPosition =
      //     ui.position.left - ui.originalPosition.left;
    },
  });
  var layerId = randomStr();
  var newLayer = layer(sourceId, layerId);
  //   console.log(newLayer);
  $("#timeline").droppable({
    // accept: `#source-${sourceId}`,
    drop: function (ev, ui) {
      console.log(ui);
      var elementWidth = videoDuration * 30; //追加するcanvasの横幅
      newLayer.positionInformation.startPosition = ui.position.left;
      newLayer.positionInformation.endPosition =
        ui.position.left + elementWidth;
      //     ui.position.left - ui.originalPosition.left;
      //   console.log(newLayer);
      //   layers.push(newLayer);
      //   console.log(layers);
      var positionX = ui.position.left;
      outputTimelineCanvas(sourceId, elementWidth, layerId);
      //   ui.draggable.remove();
    },
  });
};

function outputTimelineCanvas(sourceId, elementWidth, layerId) {
  var video = document.getElementById(`source-${sourceId}`);
  var i = 0;
  const setIntervalNum = 4;
  var timer_id = setInterval(() => {
    console.log(i + "B");
    video.currentTime = i * 5;
    console.log(video);
    var bufferCanvas = $(
      `<canvas id="${layerId}" width="${elementWidth}" height="100"></canvas>`
    );
    // var bufferOfflineCanvas = bufferCanvas.get(0).transferControlToOffscreen();
    var bufferContext = bufferCanvas.get(0).getContext("2d");
    // bufferContext.save();
    // var canvas = document.createElement("canvas");

    // bufferContext.id = `layer-${layerId}`;
    // canvas.width = elementWidth;
    // canvas.height = 100;
    console.log(elementWidth);
    bufferContext.drawImage(
      video,
      0,
      0,
      bufferContext.canvas.width,
      bufferContext.canvas.height
    );
    console.log(bufferContext);
    $("#timeline").append(bufferContext.canvas);
    i++;
    if (i == setIntervalNum) {
      clearInterval(timer_id);
    }
  }, 1000);

  //   canvas.style = `object-fit:cover;`;
  //   canvas.setAttribute("width", elementWidth);
  //   canvas.setAttribute("height", 100);
}
