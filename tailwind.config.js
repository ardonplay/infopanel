const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",  "./node_modules/flowbite-react/**/*.js"],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {},
  },
});
