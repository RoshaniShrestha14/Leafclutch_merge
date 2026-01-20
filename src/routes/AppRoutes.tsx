import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import About from "../pages/About";
import Job from "../pages/careers/Job";
import Blog from "../pages/others/Blog";
import VerifyCertificate from "../pages/others/VerifyCertificate";
import OurProjects from "../pages/others/OurProjects";
import NotFound from "../components/ui/NotFound";
import Internship from "../pages/careers/Internship";
import Home from "../pages/Home";
import { AllServices } from "../pages/AllServices";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import CoursesAndTraining from "../pages/CoursesAndTraining";
import Contact from "../pages/Contact";
import { ScrollToTop } from "./ScrollToTop";
import InternshipDetails from "../components/AboutUs/InternDetails";
import CourseDetail from "../pages/CoursesPages/CourseDetail";
import IncludedCourseDetail from "../pages/CoursesPages/IncludedCourseDetail";


export default function AppRoutes() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/courses/included/:id" element={<IncludedCourseDetail />} />
          <Route path="/training/courses" element={<CoursesAndTraining />} />
          <Route path="/careers/jobs" element={<Job />} />
          <Route path="/careers" element={<Job />} />
          <Route path="/careers/internships" element={<Internship />} />
          <Route path="/others/blog" element={<Blog />} />
          <Route path="/others" element={<Blog />} />
          <Route
            path="/others/verify-certificate"
            element={<VerifyCertificate />}
          />
           <Route path="/intern-details" element={<InternshipDetails />} />
          <Route path="/others/our-projects" element={<OurProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
