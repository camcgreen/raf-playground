const moveToHotspot = () => {
  const modelViewer = document.querySelector('#viewer');
  // console.log(modelViewer);

  const annotationClicked = (annotation) => {
    // const cameraOrbit = modelViewer.getCameraOrbit();
    const country = annotation.id;
    const radius = '1.0975154094665978m';
    const orbits = {
      england: `1.5917402778188294rad 0.8482300164692436rad ${radius}`,
      australia: `3.895574890451342rad 2.1258110289290912rad ${radius}`,
      us: `-0.15707963267948974rad 1.0053096491487334rad ${radius}`,
    };
    modelViewer.cameraOrbit = orbits[country];
  };

  modelViewer.querySelectorAll('button').forEach((hotspot) => {
    // console.log('hello hotspot', hotspot);
    hotspot.addEventListener('click', () => annotationClicked(hotspot));
  });
};

setTimeout(moveToHotspot, 200);
