const Footer = ({ techno, orga, creator }) => {
  return (
    <footer>
      <p>
        Made with <span>{techno}</span> at <span>{orga}</span> by{" "}
        <span>{creator}</span>
      </p>
    </footer>
  );
};

export default Footer;
