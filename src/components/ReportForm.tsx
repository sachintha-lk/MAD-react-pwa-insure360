import React, { useState } from "react";
import InputField from "./InputField";
import GetLocation from "./GetLocation";
import Button from "./Button";

interface AccidentData {
  otherVehicleNumber: string;
  date: string;
  time: string;
  accidentLocation: string;
  accidentDescription: string;
}

function ReportForm() {
  const [accidentData, setAccidentData] = useState<AccidentData>({
    otherVehicleNumber: "",
    date: "",
    time: "",
    accidentLocation: "",
    accidentDescription: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAccidentData({
      ...accidentData,
      [name]: value,
    });
  };

  const handleLocationFetch = (latitude: number, longitude: number) => {
    setAccidentData({
      ...accidentData,
      accidentLocation:
        "lat: " + latitude.toString() + " long: " + longitude.toString(),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-10/12 flex-col items-center justify-center md:w-5/12">
      <h2 className="text-2xl font-bold text-blue-800">Report Accident</h2>
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <div className="mb-4">
          <InputField
            type="text"
            label="Other Vehicle Number"
            name="make"
            value={accidentData.otherVehicleNumber}
            onChange={handleInputChange}
            placeholder="Other vehicle number"
            width="md"
          />
        </div>
        <div className="mb-4">
          <InputField
            type="date"
            label="Accident Date"
            name="date"
            value={accidentData.date}
            onChange={handleInputChange}
            placeholder="Accident Date"
            required
          />
        </div>
        <div className="mb-4">
          <InputField
            type="time"
            label="Accident Time"
            name="accidentTime"
            value={accidentData.time}
            onChange={handleInputChange}
            placeholder="Accident Time"
            required
          />
        </div>
        <div className="mb-4">
          <InputField
            type="text"
            label="Accident Location"
            name="accidentLocation"
            value={accidentData.accidentLocation}
            onChange={handleInputChange}
            placeholder="Accident Location"
            width="md"
          />
        </div>
        <div
          className="
        mt-2
        "
        >
          Or Fill with Current GPS coordinates
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
            width="md"
          />
        </div>
        <div className="flex gap-4">
          <Button className="w-48" variant="secondary">
            Cancel
          </Button>
          <Button className="w-48" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ReportForm;
