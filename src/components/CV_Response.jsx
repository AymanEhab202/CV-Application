export default function CV_Response({ response, experiences }) {
  return (
    <div className="shadow-lg rounded-lg p-6 mb-6 w-lg m-auto mt-8 text-center flex flex-col gap-2">
      <h2>CV Response </h2>
      <p>
        <strong>Name:</strong> {response.name}
      </p>
      <p>
        <strong>Email:</strong> {response.email}
      </p>
      <p>
        <strong>Phone:</strong> {response.phone}
      </p>
      <p>
        <strong>School Name:</strong> {response.schoolName}
      </p>
      <p>
        <strong>Study:</strong> {response.study}
      </p>
      <p>
        <strong>Date of Study:</strong> {response.dateOfStudy}
      </p>
      <h3>Experiences:</h3>
      {experiences && experiences.length > 0 ? (
        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="border p-2 rounded-lg text-center mb-2">
              <h4 className="text-lg font-bold">{exp.position}</h4>
              <p className="text-md font-semibold">{exp.companyName}</p>
              <p className="text-sm text-gray-500">
                {exp.dateFrom} to {exp.dateTo}
              </p>
              <p>{exp.mainResponsibilities}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No experiences added.</p>
      )}
    </div>
  );
}
