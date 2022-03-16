import prisma from 'config/prisma';
import _ from 'lodash';

const ChartResolvers = {
  Query: {
    getChartData: async (parent, args) => {
      const data = (await prisma.$queryRaw`
      select
      sum(r."timeSpent") as "data",
      r."date",
      p."name"
      from "Report" r
        join "Project" p 
          on r."projectId" = p.id
      group by p."name", r."date"
      order by r."date" asc;
      `) as any[];

      const dateGroup = _.groupBy(data, 'date');
      const dates = Object.keys(dateGroup);

      const projects = _.groupBy(data, 'name');

      const projectNames = Object.keys(projects);

      const reports = {};
      projectNames.forEach((p) => {
        dates.forEach((d) => {
          reports[p] = { ...reports[p], [d]: null };
        });
      });

      data.forEach((d) => {
        reports[d.name] = { ...reports[d.name], [d.date]: d.data };
      });

      const series = Object.keys(reports).map((r) => {
        return {
          name: r,
          data: Object.values(reports[r]),
        };
      });

      return {
        series,
        categories: dates,
      };
    },
  },
};

export { ChartResolvers };
