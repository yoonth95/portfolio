import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <App />,
    children: [
      {
        path: "/",
        async lazy() {
          const { default: ProfilePage } = await import("../pages/profile/ProfilePage");
          return { Component: ProfilePage };
        },
      },
      {
        path: "/skill",
        async lazy() {
          const { default: SkillPage } = await import("../pages/skill/SkillPage");
          return { Component: SkillPage };
        },
      },
      {
        path: "/career",
        async lazy() {
          const { default: CareerPage } = await import("../pages/career/CareerPage");
          return { Component: CareerPage };
        },
      },
      {
        path: "/award",
        async lazy() {
          const { default: AwardPage } = await import("../pages/award/AwardPage");
          return { Component: AwardPage };
        },
      },
    ],
  },
]);

export default router;
