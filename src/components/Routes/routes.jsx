import { Routes as ReactRoutes, Route } from "react-router-dom";
import MainPage from "../../pages/mainPage/mainPage";
import MyPage from "../../pages/myPage/myPage";
import InfoPage from "../../pages/infoPage/infoPage"
 export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/infoPage" element={<InfoPage />} />
    </ReactRoutes>
  );
}
