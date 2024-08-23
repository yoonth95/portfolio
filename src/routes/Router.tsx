import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    errorElement: <ErrorPage />,
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
            path: ":projectName", // 동적 경로 파라미터 사용
            async lazy() {
              const { default: ProjectPage } = await import("../pages/project/ProjectPage");
              return { Component: ProjectPage };
            },
          },
        ],
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorPage />, // 특정 경로에 대한 에러 페이지
  },
]);

export default router;
