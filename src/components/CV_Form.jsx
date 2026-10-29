import { useState } from "react";
import { Input } from "@/components/base/input/input";
import { Button } from "@/components/base/buttons/button";
import InputExperience from "./InputExperiance";
import CV_Response from "./CV_Response";

function CV_Form() {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState({});
  const [experiance, setExperiance] = useState([]);

  function editResponse() {
    if (
      experiance.length > 0 &&
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.schoolName &&
      formData.study &&
      formData.dateOfStudy
    ) {
      setFormData(response);
      setExperiance(response.experiance || []);
      console.log(response);
    } else {
      alert(
        "Please fill in all fields and add at least one experience before submitting.",
      );
    }
  }

  function handleSubmit() {
    if (
      experiance.length > 0 &&
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.schoolName &&
      formData.study &&
      formData.dateOfStudy
    ) {
      setResponse({ ...formData, experiance: experiance });
      console.log("Form Data:", formData);
      console.log("Experiance Data:", experiance);
    } else {
      alert(
        "Please fill in all fields and add at least one experience before submitting.",
      );
    }
  }

  return (
    <>
      <div className="cv-form-container flex justify-between gap-4">
        <div>
          <form className="shadow-lg rounded-lg p-6 mb-6 w-lg m-auto mt-8 text-center flex flex-col gap-2">
            <div className="infromation flex flex-col  gap-2">
              <div className="flex items-center gap-2">
                <Input
                  isRequired
                  onChange={(e) => setFormData({ ...formData, name: e })}
                  value={formData.name}
                  label="Name"
                  placeholder="Enter Your Name"
                  tooltip="This is a tooltip"
                />
              </div>
              <div className="flex items-center gap-2">
                <Input
                  isRequired
                  onChange={(e) => setFormData({ ...formData, email: e })}
                  value={formData.email}
                  label="Email"
                  placeholder="Enter Your Email"
                  tooltip="This is a tooltip"
                />
              </div>
              <div className="flex items-center gap-2">
                <Input
                  isRequired
                  onChange={(e) => setFormData({ ...formData, phone: e })}
                  value={formData.phone}
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
                  onChange={(e) => setFormData({ ...formData, schoolName: e })}
                  value={formData.schoolName}
                  label="School Name"
                  placeholder="Enter Your School Name"
                  tooltip="This is a tooltip"
                />
              </div>
              <div className="flex items-center gap-2">
                <Input
                  isRequired
                  onChange={(e) => setFormData({ ...formData, study: e })}
                  value={formData.study}
                  label="Study"
                  placeholder="Enter Your Study Field"
                  tooltip="This is a tooltip"
                />
              </div>
              <div className="flex items-center gap-2">
                <Input
                  isRequired
                  onChange={(e) => setFormData({ ...formData, dateOfStudy: e })}
                  value={formData.dateOfStudy}
                  label="Date of Study"
                  placeholder="Enter Your Study ending date"
                  tooltip="This is a tooltip"
                  type="date"
                />
              </div>
            </div>
            <div className="practical-experiance flex flex-col  gap-2">
              <InputExperience setExperiance={setExperiance} />
              <div className="data-entered">
                {experiance.length > 0 &&
                  experiance.map((exp, index) => (
                    <div
                      key={index}
                      className="border p-2 rounded-lg text-left mb-2 relative"
                    >
                      <div
                        className="delete-btn primary-destructive"
                        onClick={() =>
                          setExperiance(
                            experiance.filter((_, i) => i !== index),
                          )
                        }
                      >
                        Delete
                      </div>
                      <h2 className="text-lg font-bold">{exp.position}</h2>
                      <p className="text-md font-semibold">{exp.companyName}</p>
                      <p className="text-sm text-gray-500">
                        {exp.dateFrom} to {exp.dateTo}
                      </p>
                      <p>{exp.mainResponsibilities}</p>
                    </div>
                  ))}
              </div>
            </div>
            <Button
              color="primary"
              size="lg"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
        <CV_Response
          response={response}
          experiences={response.experiance}
          editResponse={editResponse}
        />
      </div>
    </>
  );
}

export default CV_Form;
