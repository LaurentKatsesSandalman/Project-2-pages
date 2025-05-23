import style from ".././assets/styles/About.module.css";

// Import des images
import melissaImg from "../assets/pictures/melissa.png";
import laurentImg from "../assets/pictures/laurent.png";
import daphneeImg from "../assets/pictures/daphnee.png";
import logoImg from "../assets/pictures/logo.svg";

// Données avec import dynamique
const teamCard = [
    {
        name: "Melissa",
        picture: melissaImg,
        description: "Passionate about development, I contribute to innovative projects.",
    },
    {
        name: "Laurent",
        picture: laurentImg,
        description: "Experienced game designer specializing in free-to-play and mobile games.",
    },
    {
        name: "Daphnée",
        picture: daphneeImg,
        description: "I love creating engaging content that resonates with audiences.",
    },
];

const h1Section = [
    {
        title: "DiPiRi : Our story",
        description:
            "Pack your bags, we'll take care of the sun! Our web application reinvents travel planning by suggesting destinations based on the weather you like. No more rainy vacations when you're dreaming of sunshine! Discover our vision in the “Our mission” section, and meet the people behind the project in the “Our team” section. Ready to travel differently? 🌍✨",
    },
];

const h2Section = [
    {
        title: "Our mission",
        description:
            "Our mission is to revolutionize the way you plan your travels by offering personalized recommendations based on your weather preferences. We believe that everyone deserves a vacation that matches their dreams, and we are here to make it happen!",
    },
    {
        title: "Our team",
        description:
            "We are a passionate team of developers, designers, and travel enthusiasts who have come together to create a unique travel experience.",
    },
];

function About() {
    return (
        <>
            <section className={style.contenairlogo}>
                <img className={style.logo} src={logoImg} alt="Logo DiPiRi" />
            </section>

            <section className={style.contenair_H1}>
                {h1Section.map((section, index) => (
                    <div key={index} className={style.H1}>
                        <h1>{section.title}</h1>
                        <p className={style.miniparagraph}>{section.description}</p>
                    </div>
                ))}
            </section>

            <section className={style.contenairParagraphs}>
                {h2Section.map((section, index) => (
                    <div key={index} className={style.paragraphs}>
                        <h2>{section.title}</h2>
                        <p className={style.miniparagraph}>{section.description}</p>
                    </div>
                ))}
            </section>

            <section className={style.contenairTeamCards}>
                {teamCard.map((person, index) => (
                    <div key={index} className={style.teamCard}>
                        <img
                            className={style.teamCardpicture}
                            src={person.picture}
                            alt={person.name}
                        />
                        <div className={style.teamCardText}>
                            <h3>{person.name}</h3>
                            <p className={style.miniparagraph}>{person.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default About;
