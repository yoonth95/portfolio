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
            path: "egg-mbti",
            async lazy() {
              const { default: EggMbtiPage } = await import("../pages/eggMbti/EggMbtiPage");
              return { Component: EggMbtiPage };
            },
          },
          {
            path: "happymanwon",
            async lazy() {
              const { default: HappymanwonPage } = await import("../pages/happymanwon/HappymanwonPage");
              return { Component: HappymanwonPage };
            },
          },
          {
            path: "beta-beta",
            async lazy() {
              const { default: BetaBetaPage } = await import("../pages/betaBeta/BetaBetaPage");
              return { Component: BetaBetaPage };
            },
          },
          {
            path: "web-builder",
            async lazy() {
              const { default: WebBuilderPage } = await import("../pages/webBuilder/WebBuilderPage");
              return { Component: WebBuilderPage };
            },
          },
        ],
      },
    ],
  },
]);

export default router;
