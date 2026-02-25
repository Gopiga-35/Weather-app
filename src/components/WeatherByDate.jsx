import { useState } from "react";

function WeatherByDate() {

  const [date, setDate] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {

    const response = await fetch("/weather.json");
    const data = await response.json();

    const result = data.find((item) => item.date === date);

    setWeather(result);

  };

  return (
    <div>

      <h2>Weather Details by Date</h2>

      <div className="search-box">

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      </div>

      {weather && (
        <div>
          <p>Condition: {weather.condition}</p>
          <p>Temperature: {weather.temperature}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Pressure: {weather.pressure}</p>
        </div>
      )}

    </div>
  );
}

export default WeatherByDate;