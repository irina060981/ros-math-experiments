import { createBrowserRouter } from "react-router-dom";

import Home from '@/pages/Home.jsx';
import Theme from '@/pages/Theme.jsx';
import ClassGroup from '@/pages/ClassGroup.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/class",
    element: <Home />
  },
  {
    path: "/class/:classId",
    element: <ClassGroup />
  },
  {
    path: "/class/:classId/theme",
    element: <ClassGroup />
  },
  {
    path: "/class/:classId/theme/:themeId",
    element: <Theme />
  }
]);
