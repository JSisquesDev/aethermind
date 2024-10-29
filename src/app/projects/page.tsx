'use client';

import CustomProjectSection from '@/components/customProjectSection/CustomProjectSection';
import Project from '@/interfaces/Project';
import fetchManager from '@/util/fetchManager';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchManager.get('https://api.github.com/orgs/JSisquesDev/repos').then(data => {
      data
        .filter((project: Project) => project.private === false && project.description !== null)
        .forEach((project: Project) => {
          setProjects(projects => [...projects, project]);
        });
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        projects.map(project => (
          <CustomProjectSection
            key={project.id}
            title={project.name.charAt(0).toUpperCase() + project.name.slice(1)}
            imageUrl={project.owner.avatar_url}
            link={`/projects/${project.id}`}
          >
            <p>{project.description}</p>
          </CustomProjectSection>
        ))
      )}
    </main>
  );
};

export default Projects;
