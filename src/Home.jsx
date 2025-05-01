import Layout from './Layout';
import WorkHisorty from './WorkHistory';
import AboutMe from './AboutMe';
import ProjectDisplay from './ProjectDisplay';
import CurrentTechnologies from './CurrentTechnologies';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <Layout>

      <div className="bg-[#1A1A1A] text-white min-h-screen">
        <AboutMe />

        <CurrentTechnologies />

        <WorkHisorty />

        <ProjectDisplay />

      </div>
    </Layout>
  );
}