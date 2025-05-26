import { Route, Routes } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<div>Services</div>} />
        <Route path="opac" element={<div>OPAC</div>} />
        <Route path="research" element={<div>Research</div>} />
        <Route path="digital-library" element={<div>Digital Library</div>} />
        <Route path="staffs" element={<div>Staff Members</div>} />
        <Route path="library-rules" element={<div>Library Rules</div>} />
        <Route path="suggest-book" element={<div>Suggest a Book</div>} />
        <Route path="staffs" element={<div>Staff Members</div>} />
        <Route path="contact" element={<div>Contact Us</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
