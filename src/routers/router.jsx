import { createBrowserRouter } from "react-router-dom";

import Home from '@/pages/Home.jsx';
import Theme from '@/pages/Theme.jsx';
import ClassGroup from '@/pages/ClassGroup.jsx';
import Charts from '@/pages/Charts.jsx'
import Charts2 from '@/pages/Charts2.jsx'
import Charts3 from '@/pages/Charts3.jsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/class",
    element: <Home />,
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
  },
  {
    path: "/charts",
    element: <Charts />
  },
  {
    path: "/charts2",
    element: <Charts2 />
  },
  {
    path: "/charts3",
    element: <Charts3 />
  }
]);
