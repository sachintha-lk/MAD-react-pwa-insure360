import { Link } from "react-router-dom";

function Reports() {
  return (
    <div
      className="
            flex
            h-4/5
            flex-col
            items-center
            justify-center"
    >
      <h1>Reports</h1>

      <Link
        to="/report"
        className="
                mt-4
                rounded
                bg-blue-500
                px-4
                py-2
                font-bold
                text-white
                hover:bg-blue-700
                "
      >
        Create an accident report
      </Link>
    </div>
  );
}

export default Reports;
