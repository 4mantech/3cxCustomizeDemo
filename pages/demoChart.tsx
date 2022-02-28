import { Chart } from "react-google-charts";
import Box from "@mui/material/Box";

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
          width: 500,
          border: 2,
          height: 500,
          marginTop: 2,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"60%"}
          height={"400px"}
        />
      </Box>
      <Box>
        <Chart
          chartType="PieChart"
          data={data2}
          options={options2}
          width={"60%"}
          height={"400px"}
        />
      </Box>
    </div>
  );
};

export default demoChart;

// import { Chart } from "react-google-charts";

// export const data2 = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

// export const options = {
//   title: "My Daily Activities",
//   is3D: true,
// };

// const demoChart2=() =>{
//   return (
//     <Chart
//       chartType="PieChart"
//       data={data2}
//       options={options}
//       width={"80%"}
//       height={"400px"}
//     />
//   );
// }
// export default demoChart2;
