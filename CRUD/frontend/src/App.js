// src/App.js
import React from "react";
import DetailsList from "./components/DetailsList";
import DetailsForm from "./components/DetailsForm";
import DetailsUpdateForm from "./components/DetailsUpdateForm";

function App() {
  const [selectedId, setSelectedId] = React.useState(null);

  const handleUpdate = () => {
    setSelectedId(null);
  };

  return (
    <div>
      <DetailsList />
      <DetailsForm />
    </div>
  );
}

export default App;
