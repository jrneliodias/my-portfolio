import { getProjectData } from '@/constants';
import ProjectView from '@/app/projects/components/ProjectView';
import { notFound } from 'next/navigation';

export default function ProjectPage({
  params,
}: {
  params: { locale: string; projectId: string };
}) {
  const projects = getProjectData(params.locale);
  const projectIndex = parseInt(params.projectId, 10);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  return <ProjectView project={project} />;
}
