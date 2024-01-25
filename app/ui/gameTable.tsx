import React from 'react';

interface GameTableProps {
  games: Record<string, any>;
}

const GamesTable: React.FC<GameTableProps> = ({ games }) => {
  const handleRowClick = (gameId: string) => {
    console.log(`Game ID: ${gameId}`);
  };

  return (
    <table className="w-full border-collapse text-base">
      <tbody>
        {Object.entries(games).map(([gameId, game]) => (
          <tr key={gameId} className='border border-gray-400 p-2 text-black'>
            <td className='p-2 text-center hover:text-gray-900 hover:transform hover:scale-105'>
              <div>
                <div>{`${game.homeTeam} ${game.homeScore} vs ${game.awayScore} ${game.awayTeam}`} </div>
                <div className='text-sm'>{game.gameTimeLTZ}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GamesTable;
