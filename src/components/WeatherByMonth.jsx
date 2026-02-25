import { useState } from "react";

function WeatherByMonth() {

  const [month, setMonth] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {

    const res = await fetch("/weather.json");
    const allData = await res.json();

    const result = allData.filter((item) => {
      const m = new Date(item.date).getMonth() + 1;
      return m === Number(month);
    });

    setData(result);

  };

  return (
    <div>

      <h2>Weather Details by Month</h2>

      <div className="search-box">

      <input
        type="number"
        placeholder="Enter Month (1-12)"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      </div>

      <table border="1">

        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.temperature}</td>
              <td>{item.humidity}</td>
              <td>{item.pressure}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default WeatherByMonth;