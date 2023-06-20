import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import Team from './pages/Team';
import Template from './pages/Template';
import LoginPage from './pages/LoginPage';
import Document from './pages/Document';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import Register from './pages/Register';
import Doctemplate from './pages/Doctemplate';
import Import from './pages/Import';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
       
        { path: 'app', element: <Dashboard /> },
        { path: 'Template', element: <Template /> },
        { path: 'Document', element: <Document /> },
        { path: 'Team', element: <Team /> },
        { path: 'Create', element: <Create /> },
        { path: 'Doctemplate', element: <Doctemplate /> },
        { path: 'Import', element: <Import /> },
        
      ],
    },
    { element: <Navigate to="login" />, index: true },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'Create',
      element: <Create />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
      ],
    },
  ]);

  return routes;
}
