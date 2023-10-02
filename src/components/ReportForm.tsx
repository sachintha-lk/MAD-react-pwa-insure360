import React, { useState } from "react";
import InputField from "./InputField";
import GetLocation from "./GetLocation";
import Button from "./Button";
import notificationIcon from "./../../public/icons/pwa-512x512.png";

import { Timestamp, addDoc, collection, doc } from "firebase/firestore";
import TakePhoto from "./TakePhoto";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import {
  StorageReference,
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { db } from "../firebase";
import { sendNotification } from "../sendNotification";

interface AccidentData {
  reportTimeStamp: Timestamp;
  otherVehicleNumber: string;
  accidentTimeStamp: string;
  locationName: string;
  locationInCoordinates: {} | undefined;
  accidentDescription: string;
}

function ReportForm() {
  const navigate = useNavigate();

  const { vehicleId } = useParams<{ vehicleId: string }>();
  console.log("vehicleId:", vehicleId);

  // get the vehicle data from the firestore
  const vehicleDocRef = doc(db, "vehicles", vehicleId!);

  const [accidentData, setAccidentData] = useState<AccidentData>({
    reportTimeStamp: Timestamp.now(),
    otherVehicleNumber: "",
    accidentTimeStamp: "",
    locationName: "",
    locationInCoordinates: {},
    accidentDescription: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target);
    const { name, value } = e.target;
    setAccidentData({
      ...accidentData,
      [name]: value,
    });
  };

  const [location, setLocation] = useState({});

  const handleLocationFetch = (latitude: number, longitude: number) => {
    setLocation({ latitude, longitude });
  };

  const [imageData, setImageData] = useState<string>("" as string);

  const handleImageCaptured = (imageData: string) => {
    console.log("captured image data:", imageData);
    setImageData(imageData);
  };

  const handleSubmitBtnClick = async () => {
    // check if the required fields are filled
    if (
      // accidentData.otherVehicleNumber === "" ||
      accidentData.accidentTimeStamp === "" ||
      accidentData.locationName === "" ||
      accidentData.accidentDescription === ""
    ) {
      console.log("Please fill all the required fields");
      toast.error("Please fill all the required fields");

      return;
    }

    if (imageData === "") {
      console.log("Please take a photo of the accident");
      toast.error("Please take a photo of the accident");
      return;
    }

    // confirm alert
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to submit this accident report?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log("Yes");
            handleMakeReport();
          },
        },
        {
          label: "No",
          onClick: () => {
            console.log("No");
          },
        },
      ],
    });
  };

  const handleImageUpload = async () => {
    const base64ImageString = imageData;

    const folderName = "accidents";
    // const fileName = `${
    //   vehicleData.registrationNumber
    // }-${user?.uid}-${Math.floor(Math.random() * 100000000)}.png`;

    const fileName = `accident-${vehicleId}-${Math.floor(
      Math.random() * 100000000
    )}.png`;

    const storage = getStorage();
    const storageRef = ref(storage);
    const imageRef: StorageReference = ref(
      storageRef,
      `${folderName}/${fileName}`
    );

    try {
      console.log("check");
      await uploadString(imageRef, base64ImageString, "data_url");
      console.log("Uploaded the image successfully!");

      const downloadURL = await getDownloadURL(imageRef);

      console.log("Download URL:", downloadURL);

      return downloadURL;
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  async function handleMakeReport() {
    if (imageData === "") {
      console.log("Please take a photo of the accident");
      toast.error("Please take a photo of the accident");
      return;
    }
    const imageDownloadUrl = await handleImageUpload();
    console.log(" File uploaded : imageDownloadUrl:", imageDownloadUrl);

    const reportsRef = collection(vehicleDocRef, "reports");
    addDoc(reportsRef, {
      otherVehicleNumber: accidentData.otherVehicleNumber,
      accidentTimeStamp: accidentData.accidentTimeStamp,
      locationName: accidentData.locationName,
      locationInCoordinates: location,
      accidentDescription: accidentData.accidentDescription,
      imageDownloadUrl: imageDownloadUrl,
      reportTimeStamp: Timestamp.now(),
    })
      .then(() => {
        toast.success("The accident report has been created successfully");
        sendNotification("Accident Reported", {
          body: "The accident report has been added successfully",
          icon: notificationIcon,
        })
          .then(() => {
            console.log("Notification sent");
          })
          .catch((error) => {
            console.error("Error sending notification:", error);
          })
          .finally(() => {
            setAccidentData({
              reportTimeStamp: Timestamp.now(),
              otherVehicleNumber: "",
              accidentTimeStamp: "",
              locationName: "",
              locationInCoordinates: {},
              accidentDescription: "",
            });
          });

        setImageData("");

        // navigate to reports page
        navigate("/reports");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  const inputFormWidth = "w-full";
  return (
    <div className="flex w-10/12 flex-col items-center justify-center md:w-5/12">
      <h2 className="text-2xl font-bold text-blue-800">Report Accident</h2>
      <div className="mt-4 w-full">
        <div className="mt-4">
          <InputField
            type="text"
            label="Other Vehicle Number"
            name="otherVehicleNumber"
            value={accidentData.otherVehicleNumber}
            onChange={handleInputChange}
            placeholder="Other vehicle number"
            width={inputFormWidth}
          />
        </div>

        <div className="mb-4">
          <InputField
            type="datetime-local"
            label="Accident Time"
            name="accidentTimeStamp"
            value={accidentData.accidentTimeStamp}
            onChange={handleInputChange}
            placeholder="Accident Time"
            width={inputFormWidth}
            required
          />
        </div>
        <div className="mb-4">
          <InputField
            type="text"
            label="Accident Location Name "
            name="locationName"
            value={accidentData.locationName}
            onChange={handleInputChange}
            placeholder="Accident Location Name"
            width={inputFormWidth}
          />
        </div>
        <div
          className="
        mt-2
        "
        >
          Get the Current GPS coordinates
        </div>
        <GetLocation onLocationFetch={handleLocationFetch} />

        <div className="mb-4">
          <InputField
            type="textarea"
            label="Accident Description"
            name="accidentDescription"
            value={accidentData.accidentDescription}
            onChange={handleInputChange}
            required
            placeholder="Accident Description"
            width={inputFormWidth}
          />
        </div>
        <TakePhoto onImageCaptured={handleImageCaptured} />
        <div className="flex gap-4">
          <Link to="/vehicles">
            <Button className="w-48" variant="secondary">
              Cancel
            </Button>
          </Link>
          <Button onClick={handleSubmitBtnClick} className="w-48" type="submit">
            Submit
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ReportForm;
