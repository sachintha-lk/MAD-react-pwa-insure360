import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

// typing for vehicle data
interface VehicleData {
  make: string;
  model: string;
  year: string;
  registration: string;
  vinNumber: string;
  mileage: string;
}
function NewVehicleForm() {
  const [vehicleData, setVehicleData] = useState({} as VehicleData);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputFormWidth = "w-full";

  return (
    <div className="flex w-10/12 flex-col items-center justify-center md:w-5/12">
      <h2 className="text-2xl font-bold">Add New Vehicle</h2>
      <form onSubmit={handleSubmit} className="mt-4 w-full">
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
            label="Registration"
            name="registration"
            value={vehicleData.registration}
            onChange={handleInputChange}
            required
            placeholder={"Vehicle Registration"}
            width={inputFormWidth}
          />
        </div>
        <div className="mb-4">
          <InputField
            type="text"
            label="VIN Number"
            name="insurance"
            value={vehicleData.vinNumber}
            onChange={handleInputChange}
            required
            placeholder={"Vehicle VIN Number"}
            width={inputFormWidth}
          />
        </div>
        <div className="mb-4">
          <InputField
            type="text"
            label="Mileage"
            name="mileage"
            value={vehicleData.mileage}
            onChange={handleInputChange}
            required
            placeholder={"Vehicle Mileage"}
            width={inputFormWidth}
          />
        </div>

        <Button type="submit">Add Vehicle</Button>
      </form>
    </div>
  );
}

export default NewVehicleForm;
