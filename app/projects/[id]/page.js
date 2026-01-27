
import { projects } from '../../../data';
import ProjectDetails from '../../../components/Projectdetails';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectPage({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="container py-5 text-center text-white">
                <h1>Project not found</h1>
            </div>
        );
    }

    return <ProjectDetails project={project} />;
}
