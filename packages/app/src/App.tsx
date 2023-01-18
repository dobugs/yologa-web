import { LayoutComponent } from 'components';
import { PATH } from 'data/pages';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SplashPages, MyPagePages, ChatPages, LoginPages, RunningCrewPages } from './pages';

function App() {
  return (
    <React.Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutComponent.Base />}>
            <Route index path={PATH.ROOT} element={<SplashPages.Splash />} />
            <Route path={PATH.LOGIN} element={<LoginPages.Login />} />

            <Route path={PATH.MY_PAGE} element={<MyPagePages.MyPage />} />
            <Route path={PATH.PROFILE} element={<MyPagePages.Profile />} />
            <Route path={PATH.NOTIFICATION} element={<MyPagePages.Notification />} />
            <Route path={PATH.NOTIFICATION_DETAIL} element={<MyPagePages.NotificationDetail />} />
            <Route path={PATH.GUIDE} element={<MyPagePages.Guide />} />
            <Route path={PATH.SETTINGS} element={<MyPagePages.Settings />} />

            <Route path={PATH.RUNNING_CREW} element={<RunningCrewPages.RunningCrew />} />
            <Route path={PATH.RUNNING_CREW_CREATE} element={<RunningCrewPages.RunningCrewCreate />} />
            <Route path={PATH.RUNNING_CREW_DETAIL} element={<RunningCrewPages.RunningCrewDetail />} />
            <Route path={PATH.RUNNING_CREW_DETAIL_EDIT} element={<RunningCrewPages.RunningCrewDetailEdit />} />
            <Route path={PATH.RUNNING_CREW_DETAIL_CHAT} element={<RunningCrewPages.RunningCrewDetailChat />} />

            <Route path={PATH.CHAT} element={<ChatPages.Chat />} />
            <Route path={PATH.CHAT_DETAIL} element={<ChatPages.ChatDetail />} />

            {/* 404 */}
            <Route path={PATH.UNDEFINED} element={<>몰라요</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
