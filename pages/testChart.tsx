import * as React from "react";
import { Paper, Stack, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Chart } from "react-google-charts";
import Layout from "../components/layout";
import { spacing } from "@mui/system";

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

export const data3 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const data4 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  title: "ระดับความเจ้าชู้",
};

export const options2 = {
  title: "ระดับความเป็นคนดี",
  is3D: true,
};

export const options3 = {
  title: "ระดับความเท่",
  pieHole: 0.4,
  is3D: false,
};

export const options4 = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "light" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  // height: "350px",
  // boxShadow: "none",
  // border: "",
}));

export default function DirectionStack() {
  return (
    <Box sx={{ mb: 10 }}>
      <Layout>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Item
            sx={{
              //backgroundColor: "primary.dark",
              opacity: [0.7],
              "&:hover": {
                //backgroundColor: "primary.main",
                opacity: [1],
              },
            }}
          >
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              // width="360px"
              // height={"300px"}
            />
          </Item>
          <Item
            sx={{
              //backgroundColor: "primary.dark",
              opacity: [0.7],
              "&:hover": {
                //backgroundColor: "primary.main",
                opacity: [1],
              },
            }}
          >
            <Chart
              chartType="PieChart"
              data={data2}
              options={options2}
              // width="360px"
              // height={"300px"}
            />
          </Item>
          <Item
            sx={{
              //backgroundColor: "primary.dark",
              opacity: [0.7],
              "&:hover": {
                //backgroundColor: "primary.main",
                opacity: [1],
              },
            }}
          >
            <Chart
              chartType="PieChart"
              data={data3}
              options={options3}
              // width="360px"
              // height={"300px"}
            />
          </Item>
        </Stack>
        <Stack direction="row" spacing={2} mb={2} mt={2}>
          <Item
            sx={{
              //backgroundColor: "primary.dark",
              opacity: [0.7],
              width: "100%",
              "&:hover": {
                //backgroundColor: "text.secondary",
                opacity: [1],
              },
            }}
          >
            <Chart
              chartType="Bar"
              // width="100%"
              // height="auto"
              width="auto"
              height={"300px"}
              data={data4}
              options={options4}
            />
          </Item>
        </Stack>
        <Stack>
          <Item>
            <h1>Venice</h1>
          </Item>
        </Stack>
      </Layout>
    </Box>
  );
}
