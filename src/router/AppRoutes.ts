import MobileAppDnldPage from "../components/pages/mobileApp/mobileAppDownload";
import Acc from "../components/pages/acc/Acc";
import Main from "../components/pages/main/Main";
import { ACC_ROUTE, MAIN_ROUTE, MOBILE_APP_ROUTE, PPR_ROUTE, AI_ROUTE } from "./Consts";
import PPR from "../components/pages/ppr/PPR";
import AI from "../components/pages/ai/AI";

export const AppRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: ACC_ROUTE, 
    Component: Acc
  },
  {
    path: MOBILE_APP_ROUTE, 
    Component: MobileAppDnldPage
  },
  {
    path: PPR_ROUTE, 
    Component: PPR
  },
  {
    path: AI_ROUTE, 
    Component: AI
  }
]