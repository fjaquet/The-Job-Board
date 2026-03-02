import Job from "./Job";

const Jobs = ({ className, title, contractType, country, city }) => {
  return (
    <Job
      className={className}
      title={title}
      contractType={contractType}
      country={country}
      city={city}
    />
  );
};

export default Jobs;
