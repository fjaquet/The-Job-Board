import Title from "./Title";

const Header = ({ title }) => {
  return (
    <header>
      <Title name={title} />
    </header>
  );
};

export default Header;
