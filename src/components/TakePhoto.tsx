import { useRef, useState } from "react";
import Button from "./Button";

declare global {
  interface Window {
    localStream?: MediaStream | undefined; // Define the 'localStream' property
  }

  interface TakePhotoProps {
    onImageCaptured: (imageData: string) => void;
  }
}

function TakePhoto({ onImageCaptured }: TakePhotoProps) {
  const width = 320;
  let height = 0;

  const [isCameraOn, setIsCameraOn] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const photo = useRef<HTMLImageElement>(null);

  async function handleCamera() {
    try {
      navigator.vibrate([45, 100, 82, 96]);

      window.localStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
        } as MediaTrackConstraints,
        audio: false,
      });

      if (video.current) {
        video.current.srcObject = window.localStream;
        video.current.play();
        setIsCameraOn(true);
      }
    } catch (error) {
      // document.querySelector('#get-access').setAttribute('hidden', true);
      if (error instanceof Error) {
        alert(`${error.name}`);
        console.error(error);
      }
    }
  }

  function takepicture() {
    if (!isCameraOn) {
      handleCamera();
      console.log("on");
    } else {
      console.log("taking pic");

      if (canvas.current !== null) {
        const context = canvas.current.getContext("2d");

        height =
          video.current?.videoHeight && video.current?.videoWidth
            ? video.current?.videoHeight / (video.current?.videoWidth / width)
            : 200;
        video.current?.videoHeight &&
          video.current?.videoWidth &&
          video.current?.videoHeight / (video.current?.videoWidth / width);
        if (width && height) {
          canvas.current.width = width;
          canvas.current.height = height;
          console.log("here");

          if (video.current !== null) {
            context?.drawImage(video.current, 0, 0, width, height);
            const data = canvas.current.toDataURL("image/png");
            if (photo.current !== null) {
              photo.current.setAttribute("src", data);

              // Turn off the camera
              onImageCaptured(data);
              window.localStream?.getTracks().forEach((track) => {
                track.stop();
                console.log("stop");
              });

              window.localStream?.getVideoTracks()[0].stop();

              video.current.srcObject = null;
              setIsCameraOn(false);
            }
          }
        }
      }
    }
  }

  function clearphoto() {
    if (canvas.current !== null) {
      const context = canvas.current.getContext("2d");
      if (context !== null) {
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.current.width, canvas.current.height);

        const data = canvas.current.toDataURL("image/png");
        photo.current?.setAttribute("src", data);

        // turn off camera
      }
    }
  }

  return (
    <div>
      <div>
        <div>
          <video ref={video} autoPlay></video>
          <canvas ref={canvas}></canvas>
          <>
            {photo && <img ref={photo} />}
            {photo.current?.src && (
              <Button variant="danger" onClick={clearphoto}>
                Clear Photo
              </Button>
            )}
          </>
          <Button onClick={takepicture} variant="secondary">
            📸
          </Button>
        </div>
      </div>

      <div className="flex gap-2"></div>
    </div>
  );
}
export default TakePhoto;
