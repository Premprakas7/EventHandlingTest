import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";



const Dashboard = ({screen,audio,video, downloadRecordingPath, downloadRecordingType, emailToSupport}) => {
 
  const [recordingNumber, setRecordingNumber] = useState(0);
   const RecordView = () => {
    const {
      status,
      startRecording: startRecord,
      stopRecording: stopRecord,
      mediaBlobUrl
    } = useReactMediaRecorder({ screen, audio, video });

const startRecording = () => {
      return startRecord();
    };

const stopRecording = () => {
      const currentTimeStamp = new Date().getTime();
      setRecordingNumber(currentTimeStamp);
      return stopRecord();
    };

const viewRecording = () => {
      window.open(mediaBlobUrl, "_blank").focus();
    };

const downloadRecording = () => {
      const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;
      try {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
        } else {
          const link = document.createElement("a");
          link.href = mediaBlobUrl;
          link.download = pathName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (err) {
        console.error(err);
      }
    };

const mailRecording = () => {
      try {
        window.location.href = `mailTo:${emailToSupport}?subject=Screen recording for an Issue number ${recordingNumber}&body=Hello%20Team,%0D%0A%0D%0A${mediaBlobUrl}`;
      } catch (err) {
        console.error(err);
      }
    };
return (
      <div>
        <div span="12" style={{ lineHeight: "24px" }}>
          {status && status !== "stopped" && (
            <p>
              Screen Recording Status: {status && status.toUpperCase()}
            </p>
          )}
          {status && status === "recording" && (
            <div
              className="screen-recording-badge"
              color="#faad14"
              status="processing"
              offset={[2, 0]}
              style={{
                marginLeft: "5px"
              }}
            />
          )}
        </div>
        <div span="12" style={{ textAlign: "right" }}>
          {status && status !== "recording" && (
            <button
              onClick={startRecording}
              className="text-[white] bg-[#780000] w-[10rem] h-[2rem] m-[1rem]"
            >
              {mediaBlobUrl ? "Record again" : "Record  your screen"}
            </button>
          )}
          {status && status === "recording" && (
            <button
              onClick={stopRecording}
              className="text-[white] bg-[#780000] w-[10rem] h-[2rem] m-[1rem]"
            >
              Stop Recording
            </button>
          )}
          {mediaBlobUrl && status && status === "stopped" && (
            <button
              onClick={viewRecording}
              className="text-[white] bg-[#780000] w-[10rem] h-[2rem] m-[1rem]"
            >
              View
            </button>
          )}
          {downloadRecordingType &&
            mediaBlobUrl &&
            status &&
            status === "stopped" && (
              <button
                onClick={downloadRecording}
                className="text-[white] bg-[#780000] w-[10rem] h-[2rem] m-[1rem]"
              >
                Download
              </button>
            )}
          {emailToSupport && mediaBlobUrl && status && status === "stopped" && (
            <button
              onClick={mailRecording}
              className="text-[white] bg-[#780000] w-[10rem] h-[2rem] m-[1rem]"
            >
              Email To Support
            </button>
          )}
        </div>
      </div>
    );
  };
return (
    <div className="Scren-Record-Wrapper" style={{ padding: "5px 20px" }}>
      {RecordView()}
    </div>
  );
};
export default Dashboard;