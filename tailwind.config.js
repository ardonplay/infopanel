module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",  "./node_modules/flowbite-react/**/*.js"],
  plugins: [require("flowbite/plugin"), require("@material-tailwind/react/utils/withMT")],
  theme: {
    extend: {},
  },
};
