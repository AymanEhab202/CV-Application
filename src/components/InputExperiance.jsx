import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/Input";

function InputExperience({ setExperiance }) {
  const [experianceData, setExperianceData] = useState({});
  const addExperiance = () => {
    if (
      experianceData.companyName &&
      experianceData.position &&
      experianceData.mainResponsibilities &&
      experianceData.dateFrom &&
      experianceData.dateTo
    ) {
      setExperiance((prevExperiance) => [...prevExperiance, experianceData]);
      setExperianceData({});
    } else {
      alert("Please fill in all fields before adding experience.");
    }
  };
  return (
    <div className="enter-data bg-gray-200 p-4 rounded-lg flex flex-col  gap-2">
      <div className="flex items-center gap-2">
        <Input
          isRequired
          onChange={(e) =>
            setExperianceData({ ...experianceData, companyName: e })
          }
          value={experianceData.companyName ?? ""}
          label="Company Name"
          placeholder="Enter Your Company Name"
          tooltip="This is a tooltip"
        />
      </div>
      <div className="flex items-center gap-2">
        <Input
          isRequired
          onChange={(e) =>
            setExperianceData({ ...experianceData, position: e })
          }
          value={experianceData.position ?? ""}
          label="Position"
          placeholder="Enter Your Position"
          tooltip="This is a tooltip"
        />
      </div>
      <div className="flex items-center gap-2">
        <Input
          isRequired
          label="Main Responsibilities"
          onChange={(e) =>
            setExperianceData({ ...experianceData, mainResponsibilities: e })
          }
          value={experianceData.mainResponsibilities ?? ""}
          placeholder="Enter Your Main Responsibilities"
          tooltip="This is a tooltip"
          type="textarea"
        />
      </div>
      <div className="flex items-center gap-1">
        <Input
          isRequired
          onChange={(e) =>
            setExperianceData({ ...experianceData, dateFrom: e })
          }
          value={experianceData.dateFrom ?? ""}
          label="Date from: "
          tooltip="This is a tooltip"
          type="date"
        />
        <Input
          isRequired
          onChange={(e) => setExperianceData({ ...experianceData, dateTo: e })}
          value={experianceData.dateTo ?? ""}
          label="Date to: "
          tooltip="This is a tooltip"
          type="date"
        />
      </div>
      <Button onClick={addExperiance} color="secondary" size="lg">
        Add Experiance
      </Button>
    </div>
  );
}

export default InputExperience;
