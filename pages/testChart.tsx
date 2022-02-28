import { Chart } from "react-google-charts";
import Box from "@mui/material/Box";
import Layout from "../components/layout";
import Grid from "@mui/material/Grid";

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
      <Layout>
        <Box
          sx={{
            width: 500,
            height: 500,
            marginTop: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green.dark",
            opacity: [0.9, 0.8, 0.7],
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [1],
            },
          }}
        >
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"120%"}
            height={"600px"}
          />
        </Box>
        <Box
          sx={{
            width: 500,
            height: 500,
            marginTop: 2,
            backgroundColor: "green.dark",
            opacity: [0.9, 0.8, 0.7],
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [1],
            },
          }}
        >
          <Chart
            chartType="PieChart"
            data={data2}
            options={options2}
            width={"120%"}
            height={"600px"}
          />
        </Box>
      </Layout>
    </div>
  );
};

export default demoChart;
