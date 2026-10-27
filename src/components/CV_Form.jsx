import { useState } from "react";
import Experiance from "./Experiance";
import { Input } from "@/components/base/input/input";
import { Button } from "@/components/base/buttons/button";

function CV_Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    study: "",
    dateOfStudy: "",
    companyName: "",
    position: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateTo: "",
  });
  const [experiance, setExperiance] = useState([]);

  const addExperiance = () => {
    setExperiance([...experiance, formData]);
    console.log(experiance);
  };
  return (
    <>
      <div>
        <form className="shadow-lg rounded-lg p-6 mb-6 w-lg m-auto mt-8 text-center flex flex-col gap-2">
          <div className="infromation flex flex-col  gap-2">
            <div className="flex items-center gap-2">
              <Input
                onChange={(e) => setFormData({ ...formData, name: e })}
                isRequired
                label="Name"
                placeholder="Enter Your Name"
                tooltip="This is a tooltip kjdsn"
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                onChange={(e) => setFormData({ ...formData, email: e })}
                isRequired
                label="Email"
                placeholder="Enter Your Email"
                tooltip="This is a tooltip"
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                isRequired
                label="Phone Number"
                placeholder="Enter Your Phone Number"
                tooltip="This is a tooltip"
              />
            </div>
          </div>
          <div className="educational-experiance flex flex-col  gap-2">
            <div className="flex items-center gap-2">
              <Input
                isRequired
                label="School Name"
                placeholder="Enter Your School Name"
                tooltip="This is a tooltip"
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                isRequired
                label="Study"
                placeholder="Enter Your Study Field"
                tooltip="This is a tooltip"
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                isRequired
                label="Date of Study"
                placeholder="Enter Your Study ending date"
                tooltip="This is a tooltip"
                type="date"
              />
            </div>
          </div>
          <div className="practical-experiance flex flex-col  gap-2">
            <div className="enter-data flex flex-col  gap-2">
              <div className="flex items-center gap-2">
                <Input
                  isRequired
                  label="Company Name"
                  placeholder="Enter Your Company Name"
                  tooltip="This is a tooltip kjdsn"
                />
              </div>
              <div className="flex items-center gap-2">
                <Input
                  isRequired
                  label="Position"
                  placeholder="Enter Your Position"
                  tooltip="This is a tooltip kjdsn"
                />
              </div>
              <div className="flex items-center gap-2">
                <Input
                  isRequired
                  label="Main Responsibilities"
                  placeholder="Enter Your Main Responsibilities"
                  tooltip="This is a tooltip kjdsn"
                  type="textarea"
                />
              </div>
              <div className="flex items-center gap-1">
                <Input
                  isRequired
                  label="Date from: "
                  tooltip="This is a tooltip kjdsn"
                  type="date"
                />
                <Input
                  isRequired
                  label="Date to: "
                  tooltip="This is a tooltip kjdsn"
                  type="date"
                />
              </div>
              <Button
                onClick={addExperiance}
                type="submit"
                color="secondary"
                size="lg"
              >
                Add Experiance
              </Button>
            </div>
            <div className="data-entered">
              {experiance.length === 0 ? (
                <p>No Experiance added yet.</p>
              ) : (
                experiance.map((ex) => {
                  <Experiance
                    company={ex.company}
                    position={ex.position}
                    mainResposibilities={ex.mainResposibilities}
                    from={ex.from}
                    to={ex.to}
                  />;
                })
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CV_Form;
