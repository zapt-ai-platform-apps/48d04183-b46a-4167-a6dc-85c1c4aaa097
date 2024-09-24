import { createSignal, Show } from 'solid-js';
import { createEvent } from './supabaseClient';

function App() {
  const [city, setCity] = createSignal('');
  const [weatherData, setWeatherData] = createSignal(null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal('');

  const handleGetWeather = async (e) => {
    e.preventDefault();
    if (!city().trim()) {
      setError('Please enter a city name.');
      return;
    }
    setLoading(true);
    setError('');
    setWeatherData(null);
    try {
      const result = await createEvent('call_api', {
        api_id: 'ea764266-2a18-41c9-b7b0-dac80fed3797',
        instructions: `Call the Weather API to get the current weather for city "${city()}". Return the JSON response.`,
      });
      if (result) {
        setWeatherData(result);
      } else {
        setError('Failed to fetch weather data. Please try again.');
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div class="max-w-lg mx-auto mt-10 h-full">
        <h1 class="text-4xl font-bold text-center text-blue-600 mb-8">Weather App</h1>
        <form onSubmit={handleGetWeather} class="flex items-center mb-8">
          <input
            type="text"
            value={city()}
            onInput={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            class="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent box-border"
          />
          <button
            type="submit"
            class={`p-3 bg-blue-500 text-white rounded-r-lg cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${
              loading() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading()}
          >
            <Show when={!loading()} fallback="Loading...">
              Get Weather
            </Show>
          </button>
        </form>
        <Show when={error()}>
          <div class="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error()}
          </div>
        </Show>
        <Show when={weatherData()}>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-blue-600 mb-4">
              Weather in {city()}
            </h2>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Temperature:</span> {weatherData().temp}°C
            </p>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Feels Like:</span> {weatherData().feels_like}°C
            </p>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Humidity:</span> {weatherData().humidity}%
            </p>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Wind Speed:</span> {weatherData().wind_speed} m/s
            </p>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Wind Degrees:</span> {weatherData().wind_degrees}°
            </p>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Cloud Coverage:</span> {weatherData().cloud_pct}%
            </p>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Min Temp:</span> {weatherData().min_temp}°C
            </p>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Max Temp:</span> {weatherData().max_temp}°C
            </p>
            <p class="text-gray-700 mb-2">
              <span class="font-semibold">Sunrise:</span> {new Date(weatherData().sunrise * 1000).toLocaleTimeString()}
            </p>
            <p class="text-gray-700">
              <span class="font-semibold">Sunset:</span> {new Date(weatherData().sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </Show>
      </div>
    </div>
  );
}

export default App;