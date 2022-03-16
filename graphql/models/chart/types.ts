import { gql } from 'apollo-server-micro';

const ReportChartTypes = gql`
  type Serie {
    name: String
    data: [Int]
  }

  type ChartReport {
    series: [Serie]
    categories: [String]
  }

  type Query {
    getChartData: ChartReport
  }
`;

export { ReportChartTypes };
