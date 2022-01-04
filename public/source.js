var sources = [];

const source = (id, url, duration, images) => {
  const sourceNum = sources.length;
  const object = {
    sourceId: id,
    url: url,
    order: sourceNum,
    duration: duration,
    images: [], //blob
  };
  sources.push(object);
};
