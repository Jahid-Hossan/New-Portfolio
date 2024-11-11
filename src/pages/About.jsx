import AboutDetails from "../components/AboutDetails";
import SectionHeading from "../components/SectionHeading";

const About = () => {



    return (
        <section id="about">
            <div>
                <SectionHeading title={"About Me"} />
                <AboutDetails />
            </div>
        </section>
    );
};

export default About