
// import React, { useEffect, useRef } from "react";
// import * as echarts from "echarts";
// import { useJobs } from "../../contexts/JobsContext";

// export default function Charts() {
//   const chartRef = useRef(null);
//   const { jobs } = useJobs();

//   useEffect(() => {
//     if (!chartRef.current) return;
//     const chartInstance = echarts.init(chartRef.current);

//     const statusData = [
//       { name: "Pending", value: jobs.filter((j) => j.status === "pending").length },
//       { name: "In Progress", value: jobs.filter((j) => j.status === "in-progress").length },
//       { name: "Completed", value: jobs.filter((j) => j.status === "completed").length },
//     ];

//     const option = {
//       title: { text: "Jobs by Status", left: "center", textStyle: { fontSize: 18 } },
//       tooltip: { trigger: "item" },
//       legend: { bottom: 0 },
//       series: [
//         {
//           name: "Jobs",
//           type: "pie",
//           radius: "50%",
//           data: statusData,
//           label: { show: true, formatter: "{b}: {c}" },
//           animationType: "scale", // Expands outward on load
//           animationDuration: 1000,
//           animationEasing: "elasticOut", // Bounce effect
//           emphasis: {
//             scale: true, // Expands section on hover
//             itemStyle: { shadowBlur: 15, shadowColor: "rgba(0,0,0,0.5)" },
//           },
//           itemStyle: {
//             borderWidth: 2,
//             borderColor: "#fff",
//             shadowBlur: 8,
//             shadowColor: "rgba(255,255,255,0.8)", // Neon glow effect
//           },
//         },
//       ],
//     };

//     chartInstance.setOption(option);

//     chartInstance.on("click", function (params) {
//       chartInstance.dispatchAction({
//         type: "highlight",
//         seriesIndex: 0,
//         dataIndex: params.dataIndex,
//       });
//     });

//     return () => {
//       chartInstance.dispose(); // Cleanup
//     };
//   }, [jobs]);

//   return (
//     <div className="p-4 bg-gray rounded-2xl transition-transform duration-500 hover:scale-90">
//       <div ref={chartRef} className="w-full h-70"></div>
//     </div>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import * as echarts from "echarts";
// import { useJobs } from "../../contexts/JobsContext";

// export default function Charts() {
//   const chartRef = useRef(null);
//   const { jobs } = useJobs();

//   useEffect(() => {
//     if (!chartRef.current) return;
//     const chartInstance = echarts.init(chartRef.current);

//     // ✅ Corrected status labels
//     const statusData = [
//       { name: "Open", value: jobs.filter((j) => j.status === "Open").length },
//       { name: "In Progress", value: jobs.filter((j) => j.status === "In Progress").length },
//       { name: "Completed", value: jobs.filter((j) => j.status === "Completed").length },
//     ];

//     const option = {
//       title: {
//         text: "Jobs by Status",
//         left: "center",
//         textStyle: { fontSize: 18 },
//       },
//       tooltip: { trigger: "item" },
//       legend: { bottom: 0 },
//       series: [
//         {
//           name: "Jobs",
//           type: "pie",
//           radius: "50%",
//           data: statusData,
//           label: { show: true, formatter: "{b}: {c}" },
//           animationType: "scale",
//           animationDuration: 1000,
//           animationEasing: "elasticOut",
//           emphasis: {
//             scale: true,
//             itemStyle: { shadowBlur: 15, shadowColor: "rgba(0,0,0,0.5)" },
//           },
//           itemStyle: {
//             borderWidth: 2,
//             borderColor: "#fff",
//             shadowBlur: 8,
//             shadowColor: "rgba(255,255,255,0.8)",
//           },
//         },
//       ],
//     };

//     chartInstance.setOption(option);

//     chartInstance.on("click", function (params) {
//       chartInstance.dispatchAction({
//         type: "highlight",
//         seriesIndex: 0,
//         dataIndex: params.dataIndex,
//       });
//     });

//     return () => {
//       chartInstance.dispose();
//     };
//   }, [jobs]);

//   return (
//     <div className="p-4 bg-gray rounded-2xl transition-transform duration-500 hover:scale-90">
//       <div ref={chartRef} className="w-full h-70"></div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useJobs } from "../../contexts/JobsContext";

export default function Charts() {
  const chartRef = useRef(null);
  const { jobs } = useJobs();

  useEffect(() => {
    if (!chartRef.current) return;
    const chartInstance = echarts.init(chartRef.current);

    // Helper to normalize status strings
    const normalizeStatus = (status) =>
      status?.toLowerCase().trim().replace(/\s+/g, "-");

    // Count jobs by normalized status
    const openCount = jobs.filter(j => normalizeStatus(j.status) === "open").length;
    const inProgressCount = jobs.filter(j => normalizeStatus(j.status) === "in-progress").length;
    const completedCount = jobs.filter(j => normalizeStatus(j.status) === "completed").length;

    // Debug log (remove in production)
    console.log("Jobs statuses:", jobs.map(j => j.status));
    console.log({ openCount, inProgressCount, completedCount });

    const statusData = [
      { name: "Open", value: openCount },
      { name: "In Progress", value: inProgressCount },
      { name: "Completed", value: completedCount },
    ];

    const option = {
      title: {
        text: "Jobs by Status",
        left: "center",
        textStyle: { fontSize: 18 },
      },
      tooltip: { trigger: "item" },
      legend: { bottom: 0 },
      series: [
        {
          name: "Jobs",
          type: "pie",
          radius: "50%",
          data: statusData,
          label: { show: true, formatter: "{b}: {c}" },
          animationType: "scale",
          animationDuration: 1000,
          animationEasing: "elasticOut",
          emphasis: {
            scale: true,
            itemStyle: { shadowBlur: 15, shadowColor: "rgba(0,0,0,0.5)" },
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: "#fff",
            shadowBlur: 8,
            shadowColor: "rgba(255,255,255,0.8)",
          },
        },
      ],
    };

    chartInstance.setOption(option);

    chartInstance.on("click", (params) => {
      chartInstance.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: params.dataIndex,
      });
    });

    return () => {
      chartInstance.dispose();
    };
  }, [jobs]);

  return (
    <div className="p-4 bg-gray-100 rounded-2xl transition-transform duration-500 hover:scale-95">
      <div ref={chartRef} className="w-full" style={{ height: "300px" }}></div>
    </div>
  );
}
