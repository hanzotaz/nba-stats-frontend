import React from 'react'
import GamesTable from '@/app/ui/gameTable'

const getData = async () => {
  const res = await fetch("http://127.0.0.1:5001/live", {
    cache: "no-store"
  },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();

  return data;
}

const GamePage: React.FC = async () => {
  const data = await getData()

  return (
    <div className='flex flex-col flex-1 w-full'>
      <h2 className='text-2xl font-bold m-5'>games_schedule: date_{data.date}</h2>
      <div className="grow bg-gray-100 p-4 mx-5 mb-5 rounded-md">
        <GamesTable games={data.games} />
      </div>
    </div>
  )
}

export default GamePage;
