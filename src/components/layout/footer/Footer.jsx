import { Outlet } from "react-router";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div style={{ backgroundColor: "purple" }}>
        <h5 style={{ color: "light purple" }}>This is a footer</h5>
      </div>
    </>
  );
};

export default Footer;
