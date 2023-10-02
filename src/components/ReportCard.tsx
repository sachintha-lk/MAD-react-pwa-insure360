// import Button from "./Button";
import carImage from "./../../public/images/car-vector.jpg";

interface ReportCardProps {
  id: string;
  accidentDescription: string;
  claimApproved?: boolean;
  otherVehicleNumber: string;
  imageDownloadURL?: string;
  locationInCoordinates: {
    latitude: number;
    longitude: number;
  };
  locationName: string;
  accidentTimeStamp: string;
}

function ReportCard({
  //   id,
  accidentDescription,
  claimApproved,
  otherVehicleNumber,
  imageDownloadURL,
  locationInCoordinates,
  locationName,
  accidentTimeStamp,
}: ReportCardProps) {
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
        <h5 className=" text-xl font-semibold text-gray-800">
          {accidentDescription}
        </h5>

        {claimApproved ? (
          <p className=" text-base font-semibold text-green-600">
            Claim Approved
          </p>
        ) : (
          <p className=" text-base font-semibold text-red-600">
            Claim Not Approved Yet
          </p>
        )}

        <div className="mt-3 grid gap-2 text-base text-gray-600">
          {otherVehicleNumber && (
            <div className="flex items-center">
              <span className="font-bold">Other Vehicle Involved: </span>
              <span>{otherVehicleNumber}</span>
            </div>
          )}

          <div className="flex items-center">
            <span className="font-bold">Location: </span>
            <span>{locationName}</span>
          </div>

          <div className="flex items-center">
            <span className="font-bold">Latitude: </span>
            <span>{locationInCoordinates.latitude}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold">Longitude: </span>
            <span>{locationInCoordinates.longitude}</span>
          </div>

          <div className="flex items-center">
            <span className="font-bold">Accident Time: </span>
            <span>{accidentTimeStamp.toString().split("T").join(" ")}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* <Button variant="secondary" className="mt-4">
            View Vehicle
          </Button>
          <Button className="mt-4">Report Accident {id}</Button> */}

          {/* <Button className="mt-4">View Image</Button> */}
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
