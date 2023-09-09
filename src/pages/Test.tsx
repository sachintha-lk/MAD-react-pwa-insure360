import Button from "../components/Button";

function Test() {
  const handleClick = () => {
    console.log("Clicked!");
    alert("Clicked!");
  };

  return (
    <div className="w-9/12 mx-auto mt-2">
      <Button children="Login" variant="primary" onClick={handleClick} />
      <br />
      <Button children="Sign Up" variant="secondary" onClick={handleClick} />
      <br />
      <Button children="Tertiary" variant="tertiary" onClick={handleClick} />
      <br />
      <Button children="Delete" variant="danger" onClick={handleClick} />
      <br />
      <Button children="Confirm" variant="success" onClick={handleClick} />
      <br />
      <Button children="Warn" variant="warning" onClick={handleClick} />
    </div>
  );
}

export default Test;
