import React from 'react';
import { matchRoles } from 'utils/matchRoles';
import dynamic from 'next/dynamic';
import { useQuery } from '@apollo/client';
import { GET_CHART_DATA } from 'graphql/queries/chart';
import { useState } from 'react';
import { useEffect } from 'react';
// import ReactApexChart from 'react-apexcharts';

const ReactApexChart = dynamic(
  () => {
    return import('react-apexcharts');
  },
  { ssr: false }
);

export async function getServerSideProps(context) {
  return {
    props: { ...(await matchRoles(context)) },
  };
}
const Report = () => {
  const { data, loading } = useQuery(GET_CHART_DATA);

  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [],
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  });

  const [series, setSeries] = useState([]);

  useEffect(() => {
    if (data) {
      setSeries(data.getChartData.series);
      setOptions({
        ...options,
        xaxis: { ...options.xaxis, categories: data.getChartData.categories },
      });
    }
  }, [data, options]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className='w-full flex flex-col items-center'>
      <h1>Time Report per Project</h1>
      <div className='w-full'>
        <ReactApexChart
          options={options}
          series={series}
          type='bar'
          height={350}
        />
      </div>
    </div>
  );
};

export default Report;
