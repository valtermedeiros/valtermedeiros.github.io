import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <>

      <PageTitle title="Who am I" />

      <div className="mt-5 space-y-3">
        <p className="font-black">A little about me:</p>
        <p>I am an experienced full-stack web developer and designer with over 5 years of expertise in creating web applications, video games, operating system-specific software, data visualization tools, database management, and custom-built content management systems (CMS).</p>
        <p>My skills also extend to graphic design, illustration, and UI/UX design, with over 8 years of experience in these areas. </p>
        <p>My passion is in utilizing technology to make scientific data more accessible and improve data quality worldwide, ultimately promoting sustainable management of our planet.</p>
        <p>I am constantly seeking to expand my skillset through research and development of new technologies and tools that can benefit the scientific community.</p>
      </div>

      <div className="mt-5 space-y-3">
        <p className="font-black">Research focus:</p>
        <p>My main research focus is to be up-to-date with new technologies, frameworks and libraries, knowing what is trending around the world and what becomes obsolete (and what needs more research/improvement).</p>
        <p>Making efforts to create a much wider and connected platform for researchers & other scientific purposes. I believe that scientific data should be accessible, improving all data quality world-wide for a better management of our planet.</p>
        <div>
          <li>Scientific data endpoints (APIs)</li>
          <li>Libraries and tools that are powerful and useful to all users.</li>
          <li>Cryptography of obsolete and modern systems: Decentralisation</li>
          <li>Internet Of Things (IoT)</li>
        </div>

      </div>

    </>
  );
}