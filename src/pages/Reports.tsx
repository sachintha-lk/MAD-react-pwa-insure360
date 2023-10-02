import { Link, useNavigate, useParams } from "react-router-dom";
import ReportCard from "../components/ReportCard";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Heading1 from "../components/Heading1";
import Button from "../components/Button";
import carImage from "./../../public/images/car-vector.jpg";

function Reports() {
  const vehicleId = useParams<{ vehicleId: string }>();
  const [vehicleData, setVehicleData] = useState<{
    id: string;
    approved: boolean;
    make: string;
    model: string;
    year: string;
    registrationNumber: string;
    imageDownloadURL?: string;
  }>();

  const [reports, setReports] = useState<
    {
      id: string;
      otherVehicleNumber: string;
      locationInCoordinates: { latitude: number; longitude: number };
      locationName: string;
      accidentDescription: string;
      accidentTimeStamp: string;
    }[]
  >([]);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getVehicleDoc();
    getReportData();
    setIsLoading(false);
  }, []);

  async function getVehicleDoc() {
    // get the details of the vehicleId given
    const docRef = doc(db, `vehicles/${vehicleId.vehicleId}`);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setVehicleData({
          id: docSnap.id,
          approved: docSnap.data().approved,
          make: docSnap.data().make,
          model: docSnap.data().model,
          registrationNumber: docSnap.data().registrationNumber,
          year: docSnap.data().year,
          imageDownloadURL: docSnap.data().imageDownloadURL,
        });

        console.log("The vehicle" + vehicleData?.id);
      } else {
        console.log("The vehicle does not exist");
        navigate("/not-found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getReportData() {
    console.log("vehicleid:", vehicleId.vehicleId);

    const subColRef = collection(db, `vehicles/${vehicleId.vehicleId}/reports`);
    console.log("subColRef:", subColRef);

    getDocs(subColRef)
      .then((reports) => {
        console.log("reports:", reports);

        reports.forEach((doc) => {
          setReports((prev) => [
            ...prev,
            {
              id: doc.id,
              otherVehicleNumber: doc.data().otherVehicleNumber,
              locationInCoordinates: doc.data().locationInCoordinates,
              locationName: doc.data().locationName,
              accidentDescription: doc.data().accidentDescription,
              accidentTimeStamp: doc.data().accidentTimeStamp,
            },
          ]);
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  console.log("reports", reports);

  return (
    <div
      className="
            flex
            h-4/5
            flex-col
            items-center
            justify-center"
    >
      {isLoading && <p>Loading...</p>}

      <Heading1 className="text-center">
        {vehicleData?.registrationNumber} Vehicle Details
      </Heading1>
      <div className="w-10/12 md:w-6/12 ">
        <div className="m-3 grid grid-cols-2 rounded-lg bg-white shadow-md">
          <a href="#!" className="block overflow-hidden rounded-t-lg">
            <img
              className="h-full w-full object-cover"
              src={vehicleData?.imageDownloadURL || carImage}
              alt="Car"
            />
          </a>
          <div className="p-4">
            <h5 className="mb-2 text-xl font-semibold text-gray-800">
              {vehicleData?.registrationNumber}
            </h5>
            Insurance Status:
            {vehicleData?.approved ? (
              <p className=" text-base font-semibold text-green-600">Covered</p>
            ) : (
              <p className=" text-base font-semibold text-red-600">
                Not Covered
              </p>
            )}
            <p className="flex gap-2 text-base text-gray-600">
              <span>{vehicleData?.make}</span>
              <span>{vehicleData?.model}</span>
              <span>{vehicleData?.year}</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link to={`/vehicles/${vehicleId.vehicleId}/reports/new`}>
                <Button variant="danger" className="w-60">
                  Report Accident
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-2 text-center text-3xl font-bold text-blue-900">
        Accident Reports
      </h2>
      {isLoading && <p className="text-center">Loading...</p>}
      {!isLoading && reports.length === 0 && (
        <p className="text-center">
          No accident reports found for this vehicle
        </p>
      )}

      <div className="mx-auto grid w-10/12 grid-cols-1 md:grid-cols-3">
        {!isLoading &&
          reports.length > 0 &&
          reports.map((report) => (
            <ReportCard
              key={report.id}
              id={report.id}
              otherVehicleNumber={report.otherVehicleNumber}
              locationInCoordinates={report.locationInCoordinates}
              locationName={report.locationName}
              accidentDescription={report.accidentDescription}
              accidentTimeStamp={report.accidentTimeStamp}
            />
          ))}
      </div>
    </div>
  );
}
export default Reports;
