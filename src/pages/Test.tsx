import Button from "../components/Button";

function Test() {
  const handleClick = () => {
    console.log("Clicked!");
    alert("Clicked The button");
  };

  return (
    <div className="mx-auto mt-10 w-9/12">
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
