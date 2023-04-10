import { Button } from "./components/Button";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [onChange, setOnChange] = useState(false);
  return (
    <>
      {onChange == true && (
        <Alert onClose={() => setOnChange(false)}>Some Messaeg for Alert</Alert>
      )}
      <Button color="danger" onClick={() => setOnChange(true)}>
        New Button
      </Button>
    </>
  );
}

export default App;
