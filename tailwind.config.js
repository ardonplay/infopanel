const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}",  "./node_modules/flowbite-react/**/*.js"],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {},
  },
});
