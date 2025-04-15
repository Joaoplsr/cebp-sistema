import { Outlet } from "react-router-dom";
import NavBar from "../views/NavBar";

export default function PublicLayout() {
  return (
    <>
      <NavBar></NavBar>
      <h1>Public Layout</h1>
      <Outlet />
    </>
  );
}