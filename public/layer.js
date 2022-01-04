// layerに追加する情報
var layers = [];
const PIXEL_PER_SEC = 30; // 30fps
const layer = (sourceId, layerId) => {
  var layerNum = layers.length;
  return {
    order: layerNum,
    layerId: layerId,
    timelineId: "", //#timeline-id
    mediaInformation: {
      sourceId: sourceId,
      height: 1080,
      width: 1920,
      startTime: 0,
      endTime: 0,
      //   duration: duration,
    },
    positionInformation: {
      startPosition: 0,
      endPosition: 10 * PIXEL_PER_SEC,
      leftRemain: null,
      rightRemain: null,
    },
    effects: [],
  };
};
//   order: 0,
//   layerId: "#layer-id",
//   timelineId: "#timeline-id",
//   mediaInformation: {
//     url: "blob:******************.mp4",
//     height: 1080,
//     width: 1920,
//     startTime: 0,
//     endTime: 10,
//     duration: 10,
//   },
//   positionInformation: {
//     startPosition: 0,
//     endPosition: 10 * PIXEL_PER_SEC,
//     leftRemain: null,
//     rightRemain: null,
//   },
//   effects: [],
// };

// layers.push(layer);
