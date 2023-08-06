import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameRoomListItem from './GameRoomListItemPage';
import { useDispatch } from 'react-redux';

export const GameRoomListPage = () => {
  const dispatch = useDispatch();
  const [allRooms, setAllRooms] = useState([]);

  const gemeRoomapi = async () => {
    try {
      const response = await axios
        .get(
          'http://localhost:8080/api/game'
          // { sort: 1, keyword: 'qwe' },
          // {
          //   headers: {
          //     'Content-Type': 'application/json'
          //   }
          // }
        )
        .then((response) => {
          setAllRooms(response.data);
        });

      // axios response
      // 방제목, 인원
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    gemeRoomapi();
  }, []);
  const enterRoom = () => {};
  return (
    <div>
      ggg
      <h1>GGGG</h1>
      {allRooms !== [] ? (
        <>
          {allRooms.map((allRoom, index) => {
            return <GameRoomListItem key={index} allRoom={allRoom}></GameRoomListItem>;
          })}
        </>
      ) : null}
    </div>
  );
};
export default GameRoomListPage;
