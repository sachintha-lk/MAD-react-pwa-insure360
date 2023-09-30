import Heading1 from "../components/Heading1";
import NewVehicleForm from "../components/NewVehicleForm";

function NewVehicle() {
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
      <Heading1 className="text-center">Add New Vehicle</Heading1>
      <NewVehicleForm />
    </div>
  );
}

export default NewVehicle;
