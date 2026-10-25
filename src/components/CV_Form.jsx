function Information() {
  const experiance = [];
  return (
    <>
      <div>
        <form className="w-lg m-auto mt-8 text-center flex flex-col gap-2">
          <div className="infromation flex flex-col  gap-2">
            <div className="flex items-center gap-2">
              <label className="flex-none">Name: </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <label>Email: </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <label>Phone Number: </label>
              <input
                type="number"
                placeholder="Enter Your Phone Number"
                className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
              />
            </div>
          </div>
          <div className="educational-experiance flex flex-col  gap-2">
            <div className="flex items-center gap-2">
              <label>School Name: </label>
              <input
                type="text"
                placeholder="Enter Your School Name"
                className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <label>Study: </label>
              <input
                type="text"
                placeholder="Enter Your Study Field"
                className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <label>Date of Study: </label>
              <input
                type="date"
                placeholder="Enter Your Study ending date"
                className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
              />
            </div>
          </div>
          <div className="practical-experiance flex flex-col  gap-2">
            <div className="enter-data flex flex-col  gap-2">
              <div className="flex items-center gap-2">
                <label>Company: </label>
                <input
                  type="text"
                  placeholder="Enter Your Company name"
                  className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <label>Position: </label>
                <input
                  type="text"
                  placeholder="Enter Your Company name"
                  className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <label>Main Resposiblities: </label>
                <textarea
                  placeholder="Enter Your Main Responsibilities"
                  className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
                />
              </div>
              <div className="flex items-center gap-1">
                <label className="flex-0 text-nowrap">Date From: </label>
                <input
                  type="date"
                  className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
                />
                <label className="flex-0 text-nowrap">Date to: </label>
                <input
                  type="date"
                  className="flex-1 p-1 border-2 border-solid border-black rounded-sm"
                />
              </div>
            </div>
            <div className="data-entered">
              {experiance.map((ex) => {
                <div>
                  <h2>{ex.position}</h2>
                  <h4>{ex.company}</h4>
                  <p>{ex.resposiblities}</p>
                  <p>
                    From {ex.dateFrom} to {ex.dateTo}
                  </p>
                </div>;
              })}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Information;
