function Experiance(company, position, mainResposibilities, from, to) {
  return (
    <div>
      <h2>{position}</h2>
      <h4>{company}</h4>
      <span>
        {from} to {to}
      </span>
      <p>{mainResposibilities}</p>
    </div>
  );
}

export default Experiance;
