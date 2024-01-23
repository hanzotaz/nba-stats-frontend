async function getData() {
  const res = await fetch(
    "http://127.0.0.1:5001/players?name=Tim Duncan",
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
}

const Players = async () => {
  const data = await getData();

  const excludedHeader = ['PLAYER_ID', 'LEAGUE_ID', 'TEAM_ID', 'PLAYER_AGE'];

  const headers = data.resultSets[0].headers.filter((header: string) => !excludedHeader.includes(header));
  const rows = data.resultSets[0].rowSet;

  const filteredRows = rows.map((row: any) => {
    return row.filter((_: any, columnIndex: number) => !excludedHeader.includes(data.resultSets[0].headers[columnIndex]));
  })

  return (
    <div className="flex flex-col flex-1 w-full">
      <h2 className="text-2xl font-bold m-5">player_career_stats</h2>
      <div className="grow bg-gray-100 p-4 mx-5 mb-5 rounded-md overflow-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {headers.map((header: string, index: number) => (
                <th key={index} className="border border-gray-400 p-2 text-black">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row: Array<any>, rowIndex: number) => (
              <tr key={rowIndex}>
                {row.map((cell: any, cellIndex: number) => (
                  <td key={cellIndex} className="border border-gray-400 p-2 text-black">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Players;
