import { useEffect } from "react";

const CarouselReplacement = () => {


    return (
        <div id="sponsors">
            <header className="faq-header">
                <h1>Sponsors</h1>
                <p>Code X Caliber</p>
            </header>
            <div className="project-container">
                {/* <!-- Card 1 --> */}
                <div className="project-card">
                    <h2 className="justify-center flex text-center">Interview Buddy</h2>
                    <img src="images/sponsors/Interview_Buddy.jpeg" alt="Interview Buddy" className="project-image" />
                </div>


                {/* <!-- Card 2--> */}
                <div className="project-card">
                    <h2 className="justify-center flex text-center">Balsamiq</h2>
                    <img src="images/sponsors/balsamiq.jpg" alt="Balsamiq" className="project-image" />
                </div>

                {/* <!-- Card 3 --> */}
                {/* <div className="project-card">
                    <h2 className="justify-center flex text-center">Github</h2>
                    <img src="images/sponsors/github_icon_2.png" alt="Interview Buddy" className="project-image" />
                </div> */}
            </div>
            <div className="announcement">
                <p>More Coming Soon</p>
            </div>

            <header class="faq-header">
                <h1>Community Partners</h1>
                <p>Code X Caliber</p>
            </header>
            <div class="project-container">
                {/* <!-- Card 1--> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">GDG IIIT Surat</h2>
                    <img src="images/community_partner/IIIT Surat.jpg" alt="GDG IIIT Surat" className="project-image" />
                </div>

                {/* <!-- Card 2 --> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">IIITDM Kurnool</h2>
                    <img src="images/community_partner/IIITDM Kurnool.jpg" alt="IIITDM Kurnool" className="project-image" />
                </div>

                {/* <!-- Card 3 --> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">GDG Vishnu Institute of Technology, Bhimavaram</h2>
                    <img src="images/community_partner/Vishnu Institute of Technology ,Bhimavaram.jpeg"
                        alt="GDG Vishnu Institute of Technology, Bhimavaram" className="project-image" />
                </div>

                {/* <!-- Card 4 --> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">BITS-Pilani</h2>
                    <img src="images/community_partner/BITS-Pilani-Logo.svg" alt="BITS-Pilani" className="project-image" />
                </div>

                {/* <!-- Card 5 --> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">GDG Priyadarshini College of Engineering</h2>
                    <div className="h-full items-center flex">

                    <img src="images/community_partner/centered.png" alt="GDG Priyadarshini College of Engineering" className="project-image" />
                    </div>
                </div>
                <div class="project-card">
                    <h2 className="justify-center flex text-center">GDG DAIICT</h2>
                    <div className="h-full items-center flex">

                    <img src="images/community_partner/DAIICT.jpg" alt="GDG DAIICT" className="project-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselReplacement;
