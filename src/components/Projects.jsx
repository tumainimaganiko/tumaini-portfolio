import ProjectsDetails from "./ProjectsDetails"

const Projects = () => {
  const container = {
    margin: '0 5%',
  }
  return (
    <section style={container}>
      <h2>projects</h2>
      <p>some things I've worked (am working) on</p>
      <ProjectsDetails />
    </section>
  )
}

export default Projects