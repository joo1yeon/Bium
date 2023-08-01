import { Route, Routes } from 'react-router-dom';
import MainPage from '../components/pages/MainPage/MainPage';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import SignupPage from '../components/pages/SignupPage/SignupPage';
import GameReadyPage from '../components/pages/GameReadyPage/GameReadyPage';
import GameRoomPage from '../components/pages/GameRoomPage/GameRoomPage';
import GameMakePage from '../components/pages/GameMakePage/GameMakePage';
import { CreateGameRoom } from '../components/pages/CreateGameRoomPage/CreateGameRoomPage';
import { ProfilePage } from '../components/pages/ProfilePage/ProfilePage';

function RouteLink() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/createroom" element={<CreateGameRoom />} />
        <Route path="/room" element={<GameRoomPage />} />
        <Route path="/profile/:nickname" element={<ProfilePage />} />
        <Route path="/gameready" element={<GameReadyPage />} />
        <Route path="/gamemake" element={<GameMakePage />} />
      </Routes>
    </div>
  );
}

export default RouteLink;
