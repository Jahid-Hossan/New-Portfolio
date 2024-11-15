import SectionHeading from "../components/SectionHeading";

const Skills = () => {

    const skillData = {
        "title": "All the skills that I have in that field of work are mentioned.",
        "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
        "skills": [
            {
                "title": "Photoshop",
                "progress": "95%",
                "effect": "fade-up",
                "duration": "500",
                "delay": "200"
            },
            {
                "title": "Motion Graphic",
                "progress": "75%",
                "effect": "fade-up",
                "duration": "500",
                "delay": "300"
            },
            {
                "title": "Adobe XD",
                "progress": "90%",
                "effect": "fade-up",
                "duration": "500",
                "delay": "400"
            },
            {
                "title": "UX Design",
                "progress": "85%",
                "effect": "fade-up",
                "duration": "500",
                "delay": "500"
            },
            {
                "title": "HTML",
                "progress": "80%",
                "effect": "fade-up",
                "duration": "500",
                "delay": "600"
            },
            {
                "title": "Digital Marketing",
                "progress": "90%",
                "effect": "fade-up",
                "duration": "500",
                "delay": "700"
            }
        ]
    }

    return (
        <section className="mt-20">
            <SectionHeading title={"Skills"} />
            <div>
                <div>
                    <h3>{skillData.title}</h3>
                    <p>{skillData.text}</p>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default Skills