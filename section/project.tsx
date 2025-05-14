import ProjectScroll from "../component/projects-scroll";

export default function Project() {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <h2 className="text-[calc(1rem+6vw)] uppercase font-bold">PROJECTS</h2>
      </div>
      <ProjectScroll />
    </>
  );
}
