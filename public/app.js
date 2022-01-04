const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({ log: true });
const transcode = async ({ target: { files } }) => {
  const file = files[0];
  var blobUrl = window.URL.createObjectURL(file);
  const sourceId = randomStr();
  const videoTag = `<video src="${blobUrl}" id="source-${sourceId}"></video>`;
  $("#source").append(videoTag);
  var videoEle = $(`#source-${sourceId}`);
  videoEle.on("loadedmetadata", function () {
    var videoDuration = videoEle[0].duration;
    source(sourceId, blobUrl, videoDuration);
    initSourceDraggable(sourceId, videoDuration);
    console.log(sources);
  });
  //   const videoDuration = $(`#source${sourceId}`).duration;
  //   console.log(videoDuration);
  //   await ffmpeg.load();
  //   ffmpeg.FS("writeFile", name, await fetchFile(files[0]));
  //   await ffmpeg.run("-i", name, "output.mp4");
  //   //await ffmpeg.run('-i', name, '-q:v', 0, 'output.mp4');
  //   const data = ffmpeg.FS("readFile", "output.mp4");
  //   const video = document.getElementById("player");
  //   video.src = URL.createObjectURL(
  //     new Blob([data.buffer], { type: "video/mp4" })
  //   );
};

document.getElementById("uploader").addEventListener("change", transcode);

$("#layer").draggable();
// $("#source").draggable();
