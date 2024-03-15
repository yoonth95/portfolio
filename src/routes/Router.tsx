import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

const projectPaths = ["egg-mbti", "happymanwon", "beta-beta", "web-builder"];

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <App />,
    children: [
      {
        index: true,
        async lazy() {
          const { default: ProfilePage } = await import("../pages/profile/ProfilePage");
          return { Component: ProfilePage };
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
      {
        path: "/project",
        children: [
          {
            index: true,
            async lazy() {
              const { default: ProjectListPage } = await import("../pages/projectList/ProjectListPage");
              return { Component: ProjectListPage };
            },
          },
          {
            path: ":projectId", // 동적 경로 파라미터 사용
            async lazy() {
              const { default: ProjectPage } = await import("../pages/project/ProjectPage");
              return { Component: ProjectPage };
            },
          },
          // ...projectPaths.map((path) => ({
          //   path,
          //   async lazy() {
          //     const { default: ProjectPage } = await import("../pages/project/ProjectPage");
          //     return { Component: ProjectPage };
          //   },
          // })),
        ],
      },
    ],
  },
]);

export default router;
