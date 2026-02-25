import { useState } from "react";

function TemperatureStats() {

  const [year, setYear] = useState("");
  const [stats, setStats] = useState([]);

  const handleSearch = async () => {

    const res = await fetch("/weather.json");
    const data = await res.json();

    const yearData = data.filter(
      (item) => new Date(item.date).getFullYear() === Number(year)
    );

    const months = {};

    yearData.forEach((item) => {
      const m = new Date(item.date).getMonth() + 1;

      if (!months[m]) months[m] = [];

      months[m].push(item.temperature);
    });

    const result = Object.keys(months).map((m) => {
      const temps = months[m];

      const maxTemp = Math.max(...temps);
      const minTemp = Math.min(...temps);
      const medianTemp =
        temps.reduce((a, b) => a + b, 0) / temps.length;

      return {
        month: m,
        maxTemp,
        medianTemp: medianTemp.toFixed(1),
        minTemp
      };
    });

    setStats(result);

  };

  return (
    <div>

      <h2>Temperature Statistics</h2>

      <div className="search-box">

      <input
        type="number"
        placeholder="Enter Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      </div>

      <table border="1">

        <thead>
          <tr>
            <th>Month</th>
            <th>Max Temp</th>
            <th>Median Temp</th>
            <th>Min Temp</th>
          </tr>
        </thead>

        <tbody>
          {stats.map((item, i) => (
            <tr key={i}>
              <td>{item.month}</td>
              <td>{item.maxTemp}</td>
              <td>{item.medianTemp}</td>
              <td>{item.minTemp}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default TemperatureStats;