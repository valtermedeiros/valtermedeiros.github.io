import PageTitle from "../components/PageTitle";
import projectsData from "../data/data.json";

export default function Projects() {
  return (
    <>

      <PageTitle title="My past work" />


      <div className="mt-5 space-y-3">
        <p className="font-black">A little about me:</p>
        <p>I am an experienced full-stack web developer and designer with over 5 years of expertise in creating web applications, video games, operating system-specific software, data visualization tools, database management, and custom-built content management systems (CMS).</p>
        <p>My skills also extend to graphic design, illustration, and UI/UX design, with over 8 years of experience in these areas. </p>
        <p>My passion is in utilizing technology to make scientific data more accessible and improve data quality worldwide, ultimately promoting sustainable management of our planet.</p>
        <p>I am constantly seeking to expand my skillset through research and development of new technologies and tools that can benefit the scientific community.</p>
      </div>


      <div class="grid grid-cols-4 gap-4">
        {projectsData.map((el) => (
          <div className="bg-neutral-100 my-3">
            <p className="font-bold text-xs uppercase bg-blue-100 px-2 py-1 rounded-md">{el.type}</p>
            <p className="text-lg font-black my-1">{el.acronym}</p>
            
            <div className="my-3">
              <p className="font-light text-xs uppercase opacity-50">Client:</p>
              <p className="font-bold text-xs uppercase">{el.client}</p>
            </div>
            
            <div className="my-3">
              <p className="font-light text-xs uppercase mb-2 opacity-50">Links:</p>
              <a className="font-bold text-xs uppercase p-2 bg-neutral-200 dark:bg-neutral-800" href={el.link_external}>Live-view / demo</a>
            </div>

            <div>
              {el.tags_technologies.map((tag)=>(
                <span className="mr-2 bg-red-400 rounded px-1 py-2">{tag}</span>
              ))}
            </div>

          </div>
        ))}
      </div>


      <div className="mt-5 space-y-3">
        <p className="font-black">Research focus:</p>
        <p>My main research focus is to be up-to-date with new technologies, frameworks and libraries, knowing what is trending around the world and what becomes obsolete (and what needs more research/improvement).</p>

        <p>Making efforts to create a much wider and connected platform for researchers & other scientific purposes. I believe that scientific data should be accessible, improving all data quality world-wide for a better management of our planet.</p>

        <li>Scientific data endpoints (APIs)</li>
        <li>Libraries and tools that are powerful and useful to all users.</li>
        <li>Cryptography of obsolete and modern systems: Decentralisation</li>
        <li>Internet Of Things (IoT)</li>

      </div>

    </>
  );
}