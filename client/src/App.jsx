import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const DashboardHome = lazy(() => import('./components/DashboardHome'));
const AdminMessages = lazy(() => import('./components/AdminMessages'));
const AdminProjects = lazy(() => import('./components/AdminProjects'));
const AddProject = lazy(() => import('./components/AddProject'));
const EditProject = lazy(() => import('./components/EditProject'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardHome />} />
              <Route path="messages" element={<AdminMessages />} />
              <Route path="projects" element={<AdminProjects />} />
              <Route path="projects/add" element={<AddProject />} />
              <Route path="projects/edit/:id" element={<EditProject />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
