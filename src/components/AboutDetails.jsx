import BtnDownloadCV from "./BtnDownloadCV";
import photo from '../assets/Jahid-Photo.jpg';
import { data } from "autoprefixer";

const AboutDetails = () => {

    const aboutData = {
        "imgLink": "../assets/Jahid-Photo.jpg",
        "cvPdf": "/images/Resume.pdf",
        "title": "Hi There! I'm Jahid Hossan",
        "subtitle": "Wed Developer",
        "text": "I am a Visual Designer with a strong focus on digital branding. Visual design seeks to attract, inspire, create desires and otivate people to respond to messages, with a view to making a favorable impact.",
        "details": [
            {
                "title": "Birthday",
                "info": "May 07, 1990"
            },
            {
                "title": "Phone",
                "info": "+1 876-369-9009"
            },
            {
                "title": "Email",
                "info": "devis@example.com"
            },
            {
                "title": "From",
                "info": "2661 Hich meadow lane bear creek"
            },
            {
                "title": "Language",
                "info": "English, Germanic"
            },
            {
                "title": "Freelance",
                "info": "Available"
            },
            {
                "title": "Freelance",
                "info": "Available"
            }
        ]
    }

    console.log(aboutData);


    return (
        <section>
            <div className="flex font-Poppins w-11/12 mx-auto gap-10">
                <div className="flex-1  relative overflow-hidden">
                    <img src={photo} alt="" className=" overflow-hidden absolute w-full " />
                </div>
                <div className="flex-1  text-white/80 px-3 space-y-4">
                    <h4 className="text-white text-4xl">{aboutData.title}</h4>
                    <h5 className="text-base-color1 text-2xl tracking-wider font-light">{aboutData.subtitle}</h5>
                    <p className="text-justify ">{aboutData.text}</p>
                    <ul className=" space-y-2">
                        {aboutData.details.map((item, index) => (
                            <li key={index}>
                                <span>{item.title}</span> : <span>{item.info}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <BtnDownloadCV title="Download CV" href="href" style="mt-6" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutDetails