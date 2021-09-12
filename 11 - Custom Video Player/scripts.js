//  Get our Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')

// Build our functions

function togglePlay(){
    const method = video.paused ? 'play': 'pause';
    video[method]();
}
function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;

}

function skip(){
    // this.dataset.skip is a string therefore we need to parse it as a float
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangUpdate(){
    video[this.name] = this.value;
};


function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
};

function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
    


};

// Hook up the Event listeners 

video.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate',handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangUpdate));


let mouseDown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
