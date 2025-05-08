# Real-Time Crypto Price Tracker

## Overview

This is a responsive React application built with Redux Toolkit that tracks real-time cryptocurrency prices. It simulates WebSocket updates to provide a dynamic view of the market. The UI displays key information for several crypto assets in a sortable table, including price, percentage changes, market cap, volume, supply, and a basic 7-day price chart.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RShaik08/crypto-tracker.git
    cd crypto-tracker
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
4.  **Open your browser** and navigate to `http://localhost:3000` 

## Tech Stack and Architecture

* **React:** A JavaScript library for building user interfaces.
* **Redux Toolkit:** A set of tools to simplify Redux development, including `createSlice` for defining reducers and actions, and `configureStore` for setting up the Redux store.
* **React Redux Hooks:** (`useSelector`, `useDispatch`) for connecting React components to the Redux store.
* **CSS:** For styling the user interface, including basic responsiveness using media queries.
* **`cryptoData.json`:** A local JSON file containing the sample cryptocurrency data.
* **`setInterval`:** Used to simulate real-time WebSocket updates by dispatching Redux actions at regular intervals.

The application architecture follows a standard React/Redux pattern:

1.  **Components (`src/components`)**: The `CryptoTable` component is responsible for rendering the UI and displaying the cryptocurrency data fetched from the Redux store.
2.  **Redux (`src/redux`)**:
    * **`cryptoSlice.js`**: Defines the Redux slice, including the initial state (loaded from `cryptoData.json`), the `updatePrices` reducer to simulate price changes, and the corresponding action. It also includes logic to generate and update the simulated 7-day chart data.
    * **`store.js`**: Configures the Redux store by combining the reducers from the different slices (in this case, only `cryptoSlice`).
3.  **Data (`src/assets/cryptoData.json`)**: Contains the initial data for the cryptocurrency assets, including their logos, names, symbols, prices, and other relevant information.
4.  **App (`src/App.js`)**: The main application component that renders the `CryptoTable`.
5.  **Index (`src/index.js`)**: Sets up the Redux `Provider` to make the store available to all components and renders the `App`.

## Embedded Demo GIF or Video Link

(https://drive.google.com/file/d/1rXlEeKxKgQPUZaGQHatxjige3hOmvHl0/view?usp=sharing)

## Enhancements Made (Per Skill Level)

* **Dynamic Simulated 7D Chart:** Instead of a static SVG or image, a basic, dynamic 7-day price chart is simulated using `div` elements and updated with the price changes. This provides a visual representation of the price fluctuations over the simulated period.
* **Basic Table Responsiveness:** The table includes basic CSS media queries to hide less critical columns (like Market Cap, Volume, and Supply) on smaller screen sizes to prevent horizontal scrolling and improve readability on mobile devices.
* **Clear UI and Styling:** Basic CSS has been applied to ensure the table is readable, with color-coding for percentage changes and clear text for headers and data.

## Further Potential Enhancements (Time Permitting)

* **Sorting:** Implementing the ability to sort the table columns (e.g., by price, market cap, % change).
* **More Sophisticated Charting:** Integrating a proper charting library (like Chart.js or Recharts) for more visually appealing and informative charts.
* **Optimized Selectors:** Creating more specific selectors in Redux to potentially optimize component re-renders, although with a small dataset, the current approach is efficient enough.
* **More Comprehensive Responsiveness:** Implementing more advanced responsive design techniques to ensure the table adapts well to a wider range of screen sizes and orientations.

## Developer Notes

* The real-time updates are simulated using `setInterval` and a simple function in the Redux slice to generate random changes. A real application would integrate with a WebSocket API for live data.
* The 7-day chart data is also simulated and updated along with the price. Real historical data would be fetched from an API.

---
