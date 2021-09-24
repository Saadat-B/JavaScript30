const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo(){
    navigator.mediaDevices.getUserMedia({video : true, audio: false})
    .then(
        localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            // video.src = window.URL.localMediaStream;
            video.play();
        }
    )
    .catch(error => {
        console.error(`OH NOOO!!!`, error);
    })
};

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;   
    canvas.width = width;
    canvas.height = height;
    // console.log(width,height);

    return setInterval(() => {
        ctx.drawImage(video, 0,0, width, height);
    }, 1);
}

function takePhoto(){
    // played the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute("download", "handsome");
    link.innerHTML = `<img src = "${data}" alt = "Hansome Man"/>`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
