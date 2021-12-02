import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 <strong>BUZZ IT UP</strong> 🎥
    </span>
  );
};

export default Header;
