import Button from "./Button";
import carImage from "./../../public/images/car-vector.jpg";

interface VehicleCardProps {
  id: string;
  registrationNumber: string;
  approved?: boolean;
  model: string;
  year: string;
  make: string;
}

function VehicleCard({
  id,
  registrationNumber,
  approved,
  model,
  year,
  make,
}: VehicleCardProps) {
  return (
    <div className="m-3 rounded-lg bg-white shadow-md">
      <a href="#!" className="block overflow-hidden rounded-t-lg">
        <img className="h-40 w-full object-cover" src={carImage} alt="Car" />
      </a>
      <div className="p-4">
        <h5 className="mb-2 text-xl font-semibold text-gray-800">
          {registrationNumber}
        </h5>

        {approved ? (
          <p className=" text-base font-semibold text-green-600">Covered</p>
        ) : (
          <p className=" text-base font-semibold text-red-600">Not Covered</p>
        )}

        <p className="flex gap-2 text-base text-gray-600">
          <span>{make}</span>
          <span>{model}</span>
          <span>{year}</span>
        </p>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="secondary" className="mt-4">
            View Vehicle
          </Button>
          <Button className="mt-4">Report Accident {id}</Button>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;
