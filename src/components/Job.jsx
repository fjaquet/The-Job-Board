const Job = ({ className, title, contractType, country, city }) => {
  return (
    <div className={className + " job"}>
      <h4>{title}</h4>
      <p>
        {contractType} - {country} - {city}
      </p>
    </div>
  );
};

export default Job;
