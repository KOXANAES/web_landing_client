import MobileAppDnldPage from "../components/pages/mobileApp/mobileAppDownload";
import Acc from "../components/pages/acc/Acc";
import Main from "../components/pages/main/Main";
import { ACC_ROUTE, MAIN_ROUTE, MOBILE_APP_ROUTE, PPR_ROUTE } from "./Contst";
import PPR from "../components/pages/ppr/PPR";

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
  }
]