const video = document.querySelector('video');
const audioTracks = video.audioTracks;

// Create a slider for each audio track
audioTracks.forEach((audioTrack, index) => {
  const audioTrackSlider = document.createElement('input');
  audioTrackSlider.type = 'range';
  audioTrackSlider.min = 0;
  audioTrackSlider.max = 100;
  audioTrackSlider.value = audioTrack.volume * 100;
  audioTrackSlider.id = `audio-track-slider-${index}`;

  // Update the volume of the audio track when the slider is changed
  audioTrackSlider.addEventListener('input', () => {
    audioTrack.volume = audioTrackSlider.value / 100;
  });

  // Append the slider to the DOM
  document.querySelector('body').appendChild(audioTrackSlider);
});

// Create a checkbox for each audio track
audioTracks.forEach((audioTrack, index) => {
  const audioTrackCheckbox = document.createElement('input');
  audioTrackCheckbox.type = 'checkbox';
  audioTrackCheckbox.checked = audioTrack.enabled;
  audioTrackCheckbox.id = `audio-track-checkbox-${index}`;

  // Update the enabled state of the audio track when the checkbox is changed
  audioTrackCheckbox.addEventListener('change', () => {
    audioTrack.enabled = audioTrackCheckbox.checked;
  });

  // Append the checkbox to the DOM
  document.querySelector('body').appendChild(audioTrackCheckbox);
});
