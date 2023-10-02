import { useContext, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import notificationIcon from "./../../public/icons/pwa-512x512.png";
import { sendNotification } from "./../sendNotification";

import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthProvider";
import TakePhoto from "./TakePhoto";
import {
  getStorage,
  ref,
  StorageReference,
  uploadString,
} from "firebase/storage";

// typing for vehicle data
interface VehicleData {
  make: string;
  model: string;
  year: string;
  registrationNumber: string;
  vinNumber: string;
  mileage: string;
}

// Add a new document in collection "cities"

function NewVehicleForm() {
  const [vehicleData, setVehicleData] = useState({
    make: "",
    model: "",
    year: "",
    registrationNumber: "",
    vinNumber: "",
    mileage: "",
  } as VehicleData);

  const { user } = useContext(AuthContext)!;

  // insurance
  // registration
  // inspection
  // title
  // bill of sale
  // loan documents
  // warranty
  // maintenance records
  // repair records
  // accident reports
  // police reports
  // rental agreements
  // lease agreements
  // recall notices

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: value,
    });
  };

  const [imageData, setImageData] = useState<string>("" as string);

  const handleImageCaptured = (imageData: string) => {
    // Handle the captured image data here, e.g., set it in state
    console.log("Captured image data:", imageData);
    setImageData(imageData);
  };

  const handleImageUpload = async () => {
    const base64ImageString = imageData;
    const folderName = "vehicles";
    const fileName = `${
      vehicleData.registrationNumber
    }-${user?.uid}-${Math.floor(Math.random() * 100000000)}.png`;

    const storage = getStorage();
    const storageRef = ref(storage);
    const imageRef: StorageReference = ref(
      storageRef,
      `${folderName}/${fileName}`
    );

    try {
      await uploadString(imageRef, base64ImageString, "data_url");
      console.log("Uploaded the image successfully!");
      return fileName;
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  const handleSubmitClick = async () => {
    // save image to storage
    if (imageData === "") {
      alert("Please take a photo of your vehicle");
      return;
    }

    const imageFileName = await handleImageUpload();

    await addDoc(collection(db, "vehicles"), {
      creationTimeStamp: Timestamp.now(),
      userId: user?.uid,
      make: vehicleData.make,
      model: vehicleData.model,
      year: vehicleData.year,
      registrationNumber: vehicleData.registrationNumber,
      vinNumber: vehicleData.vinNumber,
      mileage: vehicleData.mileage,
      imageFileName: imageFileName,
    })
      .then(() => {
        sendNotification("Vehicle Added", {
          body: "Vehicle has been added successfully",
          icon: notificationIcon,
        })
          .then(() => {
            console.log("Notification sent");
          })
          .catch((error) => {
            console.error("Error sending notification:", error);
          })
          .finally(() => {
            setVehicleData({
              make: "",
              model: "",
              year: "",
              registrationNumber: "",
              vinNumber: "",
              mileage: "",
            });
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const inputFormWidth = "w-full";
  return (
    <div className="flex w-10/12 flex-col items-center justify-center md:w-5/12">
      <h2 className="text-2xl font-bold">Add New Vehicle</h2>
      <div className="mt-4 w-full">
        <div className="mb-4">
          <InputField
            type="text"
            label="Make"
            name="make"
            value={vehicleData.make}
            onChange={handleInputChange}
            required
            placeholder={"Vehicle Make"}
            width={inputFormWidth}
          />
        </div>
        <div className="mb-4">
          <InputField
            type="text"
            label="Model"
            name="model"
            value={vehicleData.model}
            onChange={handleInputChange}
            required
            placeholder={"Vehicle Model"}
            width={inputFormWidth}
          />
        </div>
        <div className="mb-4">
          <InputField
            type="text"
            label="Year"
            name="year"
            value={vehicleData.year}
            onChange={handleInputChange}
            required
            placeholder={"Vehicle Year"}
            width={inputFormWidth}
          />
        </div>
        <div className="mb-4">
          <InputField
            type="text"
            label="Registration Number"
            name="registrationNumber"
            value={vehicleData.registrationNumber}
            onChange={handleInputChange}
            required
            placeholder={"Registration Number"}
            width={inputFormWidth}
          />
        </div>
        <div className="mb-4">
          <InputField
            type="text"
            label="VIN Number"
            name="vinNumber"
            value={vehicleData.vinNumber}
            onChange={handleInputChange}
            required
            placeholder={"Vehicle VIN Number"}
            width={inputFormWidth}
          />
        </div>
        <div className="mb-4">
          <InputField
            type="number"
            label="Mileage"
            name="mileage"
            value={vehicleData.mileage}
            onChange={handleInputChange}
            required
            placeholder={"Vehicle Mileage Km"}
            width={inputFormWidth}
          />
        </div>
        <TakePhoto onImageCaptured={handleImageCaptured} />

        <Button onClick={handleSubmitClick}>Add Vehicle</Button>

        <Button
          onClick={() =>
            sendNotification("Test Notification", {
              body: "Notification body",
              icon: notificationIcon,
            })
          }
        >
          Display notification
        </Button>
      </div>
    </div>
  );
}

export default NewVehicleForm;
