import Button from "../components/Button";
import Heading1 from "../components/Heading1";

function Dashboard() {
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
      <Heading1 className="text-center">Dashboard</Heading1>

      <p className="text-center">Welcome to the dashboard!</p>
      <Button variant="secondary">Add Vehicle</Button>
      <Button>Report Accident</Button>

      <Button variant="secondary">View Vehicles</Button>
    </div>
  );
}

export default Dashboard;
