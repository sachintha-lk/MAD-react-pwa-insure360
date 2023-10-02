import { useContext, useEffect, useState } from "react";
import Heading1 from "../components/Heading1";
import VehicleCard from "../components/VehicleCard";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { AuthContext } from "../context/AuthProvider";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Vehicles() {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState<
    {
      id: string;
      approved: boolean;
      make: string;
      model: string;
      year: string;
      registrationNumber: string;
      imageDownloadURL?: string;
    }[]
  >([]);

  const { user } = useContext(AuthContext)!;

  const getVehicles = async () => {
    const vehicleRef = collection(db, "vehicles");

    const q = query(vehicleRef, where("userId", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setVehicles((prev) => [
        ...prev,
        {
          id: doc.id,
          approved: doc.data().approved,
          make: doc.data().make,
          model: doc.data().model,
          year: doc.data().year,
          registrationNumber: doc.data().registrationNumber,
          imageDownloadURL: doc.data().imageDownloadURL,
        },
      ]);
    });
  };

  useEffect(() => {
    getVehicles();
    setIsLoading(false);
  }, []);

  return (
    <div
      className="

    flex
    h-4/5
    flex-col
    items-center
    justify-center
  "
    >
      <Heading1 className="text-center">Vehicles</Heading1>
      <Link to="/vehicles/new">
        <Button>Add a Vehicle</Button>
      </Link>
      <div className=" mx-auto grid w-10/12 grid-cols-1 md:grid-cols-5">
        {isLoading && (
          <div className="col-span-5 flex items-center justify-center">
            Loading...
          </div>
        )}
        {vehicles &&
          vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              id={vehicle.id}
              approved={vehicle.approved}
              make={vehicle.make}
              model={vehicle.model}
              year={vehicle.year}
              registrationNumber={vehicle.registrationNumber}
              imageDownloadURL={vehicle.imageDownloadURL}
            />
          ))}
      </div>
    </div>
  );
}

export default Vehicles;
