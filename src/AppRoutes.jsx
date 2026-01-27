import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ProjectForm from "./Pages/ProjectForm";
import Services from "./Pages/Services";
import ServiceForm from "./Pages/ServiceForm";
import Contact from "./Pages/Contact";
import ContactList from "./Pages/ContactList";
import UserForm from "./Pages/UserForm";
import UserList from "./Pages/UserList";
import NotFound from "./Pages/NotFound";
import AdminDashboard from "./Pages/AdminDashboard";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

//Routes
export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Project Routes */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/add" element={<ProjectForm />} />
      <Route path="/project/edit/:id" element={<ProjectForm />} />

      {/* Services Routes */}
      <Route path="/services" element={<Services />} />
      <Route path="/service/add" element={<ServiceForm />} />
      <Route path="/service/edit/:id" element={<ServiceForm />} />


      {/* Admin Pages Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/messages" element={<ContactList />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/user/add" element={<UserForm />} />
      <Route path="/user/edit/:id" element={<UserForm />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
