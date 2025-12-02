/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "yt-black": "#0F0F0F",
        "yt-red": "#FF0300",
        "yt-white": "#F1F1F1",
        "yt-light-black": "#272727",
        "yt-light": "#181818",
        "yt-light-1": "#212121",
        "yt-light-gray": "#353636",
        "yt-gray": "gray",
        "yt-very-light-black": "#111111",
        "yt-light-green": "#00887A",
      },
      gridTemplateColumns: {
        yt: "repeat(auto-fit, minmax(250px,1fr))",
      },
    },
  },
  plugins: [],
}
