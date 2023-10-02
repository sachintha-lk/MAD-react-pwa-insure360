import Button from "./Button";
import carImage from "./../../public/images/car-vector.jpg";
import { Link } from "react-router-dom";

interface VehicleCardProps {
  id: string;
  registrationNumber: string;
  approved?: boolean;
  model: string;
  year: string;
  make: string;
  imageDownloadURL?: string;
}

function VehicleCard({
  id,
  registrationNumber,
  approved,
  model,
  year,
  make,
  imageDownloadURL,
}: VehicleCardProps) {
  return (
    <div className="m-3 rounded-lg bg-white shadow-md">
      <a href="#!" className="block overflow-hidden rounded-t-lg">
        <img
          className="h-40 w-full object-cover"
          src={imageDownloadURL || carImage}
          alt="Car"
        />
      </a>
      <div className="p-4">
        <h5 className="mb-2 text-xl font-semibold text-gray-800">
          {registrationNumber}
        </h5>
        <p>Insurance Status:</p>

        {approved ? (
          <span className="inline-block text-base font-semibold text-green-600">
            Covered
          </span>
        ) : (
          <span className=" text-base font-semibold text-red-600">
            Not Covered
          </span>
        )}
        <p className="flex gap-2 text-base text-gray-600">
          <span>{make}</span>
          <span>{model}</span>
          <span>{year}</span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link to={`/vehicles/${id}/reports/`}>
            <Button variant="secondary" className="mt-4">
              View Vehicle
            </Button>
          </Link>

          <Link to={`/vehicles/${id}/reports/new`}>
            <Button variant="danger" className="mt-4">
              Report Accident
            </Button>
          </Link>

          {/* <Button className="mt-4">View Image</Button> */}
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;
