import { useQuery } from '@apollo/client';
import { Tooltip } from '@mui/material';
import { GET_PROJECTS } from 'graphql/queries/projects';
import React from 'react';
import { matchRoles } from 'utils/matchRoles';

export async function getServerSideProps(context) {
  return {
    props: { ...(await matchRoles(context)) },
  };
}
const ProjectIndex = () => {
  const { data, loading } = useQuery(GET_PROJECTS);
  if (loading) return <div>Loading...</div>;

  return (
    <div className='w-full flex flex-col items-center p-10'>
      <h1>Projects</h1>
      <div className='my-3 w-full'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            {data.getProjects.map((project) => {
              return (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{project.price}</td>
                  <td>
                    <Tooltip title='Download Document'>
                      <a
                        href={project.document}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='fas fa-file text-2xl text-green-700 cursor-pointer' />
                      </a>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectIndex;
