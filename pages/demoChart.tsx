import { Chart } from "react-google-charts";
import Box from "@mui/material/Box";
import Layout from "../components/layout";

export const data = [
  ["Task", "Hours per Day"],
  ["เฟียส", 11],
  ["โนว่า", 50],
  ["ก๊อต", 8],
  ["เด้", 10],
  ["เนโร", 1],
];
export const data2 = [
  ["Task", "Hours per Day"],
  ["เนโร", 11],
  ["เฟียส", 10],
  ["โนว่า", 200],
  ["เด้", 20],
  ["บัวลอย", 7],
];

export const options = {
  title: "ระดับความเจ้าชู้",
};

export const options2 = {
  title: "ระดับความเป็นคนดี",
  is3D: true,
};

const demoChart = () => {
  return (
    <div>
      <Box
        sx={{
          width: 400,
          border: 2,
          height: 400,
          marginTop: 2,
          // backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </Box>
      <Box
        sx={{
          width: 400,
          border: 2,
          height: 400,
          marginTop: 2,
          // backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Chart
          chartType="PieChart"
          data={data2}
          options={options2}
          width={"100%"}
          height={"400px"}
        />
      </Box>
    </div>
  );
};

export default demoChart;
