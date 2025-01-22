import Acc from "../components/pages/acc/Acc";
import Main from "../components/pages/main/Main";
import { ACC_ROUTE, MAIN_ROUTE } from "./Contst";

export const AppRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: ACC_ROUTE, 
    Component: Acc
  }
]