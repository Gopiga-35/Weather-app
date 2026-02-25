import WeatherByDate from "../components/WeatherByDate";
import WeatherByMonth from "../components/WeatherByMonth";
import TemperatureStats from "../components/TemperatureStats";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <h1>Delhi Weather Dashboard</h1>

      <WeatherByDate />
      <WeatherByMonth />
      <TemperatureStats />

    </div>
  );
}

export default Dashboard;