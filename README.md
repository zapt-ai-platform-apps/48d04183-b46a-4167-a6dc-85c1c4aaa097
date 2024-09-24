# Weather App

The Weather App provides current weather information for any city entered by the user.

## User Journey

1. **Access the App**

   - The user opens the Weather App in their web browser.

2. **Enter City Name**

   - The user sees a simple interface with a text input field and a "Get Weather" button.
   - The user types the name of a city they are interested in (e.g., "London").

3. **Submit the Request**

   - The user clicks the "Get Weather" button.
   - While the app fetches the weather data, the button shows a loading state, and the user cannot click it again until the data is retrieved.

4. **View Weather Information**

   - Upon successful retrieval, the app displays the current weather details for the entered city, including:
     - Temperature
     - Feels Like Temperature
     - Humidity
     - Wind Speed and Direction
     - Cloud Coverage
     - Minimum and Maximum Temperature
     - Sunrise and Sunset times

5. **Handle Errors**

   - If there is an error fetching the weather data (e.g., invalid city name, network issues), an error message is displayed informing the user to try again.

6. **Repeat Searches**

   - The user can enter a different city name and click "Get Weather" to view weather information for another location.

## Features

- **Responsive Design**: The app is designed to work smoothly on various screen sizes, making it accessible on desktops, tablets, and mobile devices.

- **User Feedback**: Loading states and error messages provide clear feedback to the user during interactions.

Inspired by simplicity, the Weather App aims to deliver essential weather information quickly and efficiently.