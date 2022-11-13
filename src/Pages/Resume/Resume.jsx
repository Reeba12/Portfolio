import React from 'react'
import './resume.css'

const Resume = () => {
    return (
        <>
            <section id="resume" className="resume section-show">

                <div className="container">

                    <div className="section-title">
                        <h2>Resume</h2>

                        <p>Check My Resume</p></div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0"><h4>Reeba Sididqui</h4>
                                <p><em>I am a web developer with holistic knowledge of web
                                    development and design. I am also experienced in developing
                                    customized software based on varying client demands...</em></p>
                                <p></p>
                                <ul>
                                    <li>1907/2 Azizabad FB Area Karachi, Pakistan</li>
                                    <li>+92 333 1653260</li>
                                    <li>reebasiddiqui456@gmail.com</li>
                                </ul>
                                <p></p></div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item"><h4>Bachelor's of Computer Science</h4>
                                <h5>2019 - present</h5>
                                <p><em>Dawood university od Engineering & Technology, Karachi, Pakistan</em></p>
                                {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
                            </div>
                            <div className="resume-item"><h4>Intermediate (Pre-Engineering)</h4>
                                <h5>2017 - 2019</h5>
                                <p><em>Sir Syed College for Girls, Karachi, Pakistan</em></p>
                                {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item"><h4>Full Stack Developer</h4>
                                <h5>Feb 2022 - Present</h5>
                                <p><em>NocodeAi, Karachi, Pakistan </em></p>
                                <p></p>
                                <ul>
                                    <li>Took part in the scheduled development meeting to
                                        recommend relevant system modifications and project
                                        improvements.</li>
                                    <li>Establish an interactive and dynamic website that guarantees
                                        high traffic, page views, and maximum user experience.</li>
                                    <li>proactively liaised with the design team and project manager
                                        to ensure efficient and timely delivery of the significant
                                        projects.</li>
                                    <li>Use different clouds like GCP and AWS services in
                                        applications.</li>
                                </ul>
                                <p></p></div>
                            <div className="resume-item"><h4>Web Developer Intership</h4>
                                <h5>Nov 2021 - Jan 2022</h5>
                                <p><em>TechPros, Karachi, Pakistan</em></p>
                                <p></p>
                                <ul>
                                    <li>Devised various custom responsive website designs that
                                        included advanced features.</li>
                                    <li>Challenging opportunities, real-world projects, and regular
                                        interaction with staff.</li>
                                    <li>In addition to learning the specialized skills of a particular
                                        field, transferable skills such as communication, teamwork,
                                        and computer proficiency</li>
                                </ul>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume
