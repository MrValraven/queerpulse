import SectionTitle from '@/components/SectionTitle/SectionTitle'
import CommunityPersonCard from './CommunityPersonCard/CommunityPersonCard';
import CommunityPerkCard from './CommunityPerkCard/CommunityPerkCard';
import TiagoImage from '@/assets/tiago.jpeg';
import MartaImage from '@/assets/marta.jpg';
import CollaborationIcon from '@/assets/collaboration.svg'
import ImpactIcon from '@/assets/impact.svg'
import InclusivityIcon from '@/assets/inclusivity.svg'
import MentorshipIcon from '@/assets/mentorship.svg'
import ResourcesIcon from '@/assets/resources.svg'

import './styles.scss'
import { useState } from 'react';
import Button from '@/components/Button/Button';

const people = [
    {
        id: 0,
        name: "Alex Rodriguez",
        pronouns: "they/them",
        image: 'https://images.pexels.com/photos/9050197/pexels-photo-9050197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: "Passionate activist and artist, Alex uses their creativity to advocate for LGBTQ+ rights and gender inclusivity.",
        paragraphs: [
            "Greetings, I'm Alex Rodriguez — an impassioned activist and artist committed to creating positive change.",
            "My canvas is a platform for advocating LGBTQ+ rights and fostering gender inclusivity through the transformative power of creativity.",
            "In the tapestry of my work, I weave stories that envision a world where everyone, irrespective of identity, can live authentically and thrive."
        ]
    },
    {
        id: 1,
        name: "Jordan Patel",
        pronouns: "he/him",
        image: 'https://images.pexels.com/photos/12271651/pexels-photo-12271651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: "Tech innovator and entrepreneur, Jordan is dedicated to creating inclusive digital spaces for the queer community.",
        paragraphs: [
            "Hello, I'm Jordan Patel — an enterprising tech innovator with a mission.",
            "My dedication extends to crafting inclusive digital environments specifically tailored for the LGBTQ+ community.",
            "I view technology as a catalyst for empowerment and equal representation, striving to dismantle barriers in the tech industry to ensure an inclusive future for all."
        ]
    },
    {
        id: 2,
        name: "Taylor Nguyen",
        pronouns: "she/her",
        image: 'https://images.pexels.com/photos/10275103/pexels-photo-10275103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: "Award-winning writer and speaker, Taylor shares powerful stories that amplify the voices of queer individuals and minorities.",
        paragraphs: [
            "Salutations, I'm Taylor Nguyen — an award-winning writer and speaker with a passion for storytelling.",
            "My craft revolves around amplifying the voices of queer individuals and marginalized communities.",
            "Through the written word and engaging talks, I aim to create a narrative that authentically reflects the richness and diversity of human experiences."
        ]
    },
    {
        id: 3,
        name: "Cameron Smith",
        pronouns: "they/them",
        image: 'https://images.pexels.com/photos/10593694/pexels-photo-10593694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: "Visual artist and advocate, Cameron's work challenges societal norms, promoting acceptance and understanding of diverse identities.",
        paragraphs: [
            "Greetings, I'm Cameron Smith — a visual artist and passionate advocate for acceptance and understanding.",
            "My canvas is a platform for challenging societal norms, promoting acceptance of diverse identities through the brushstrokes of artistic expression.",
            "I firmly believe in the power of art to transcend boundaries, building bridges toward a society that embraces inclusivity."
        ]
    },
    {
        id: 4,
        name: "Marta Mealha",
        pronouns: "she/they",
        image: MartaImage,
        description: "Designer, illustrator, and music producer, currently living in Lisbon. She's a proud queer woman who works as a full-time graphic designer.",
        paragraphs: [
            "Hi, I'm Marta! Your friendly neighborhood music-crazed gamer!",
            "I completed my Master’s Degree in Marketing at ISCTE Business School, leading the way to find myself in the world of design, and taking the most pleasure in it. That was my chance to enroll in the Graphic Design and UX/UI courses at Lisbon School of Design.",
            "Thus, I discovered my passion for working with Adobe’s Illustrator, inDesign, and Photoshop, to create brand identity, magazines, captivating visuals, videos, and mockups, among others. Connecting my manual illustration skills with the digital ones has been fulfilling me greatly, taking on new challenges and allowing me to learn every day."
        ]
    },
    {
        id: 5,
        name: "Tiago Costa",
        pronouns: "he/they/she",
        image: TiagoImage,
        description: "Tiago is a non-binary bisexual polyamorous person who works as a Fullstack Developer. Hes ones of the founders of Queer Pulse and dreams of creating a safe and inclusive world where everyone is free to work on their ideas.",
        paragraphs: [
            "Hi! I'm Tiago and I build things for the web.",
            "I'm a Fullstack Developer based in Portugal who loves to bring to life some useful and sometimes silly ideas that I think should exist outside my head :)",
            "When I'm not coding, I'm exploring some new type of cuisine, reinventing popular recipes as vegan ones, living the life of an intrepid D&D Character or thinking about the next big thing."
        ]

    }
];

const perks = [
    {
        id: 0,
        icon: InclusivityIcon,
        title: "Inclusivity",
        description: "We thrive on diversity and inclusivity, nurturing an environment where everyone's voice is heard and respected."
    },
    {
        id: 1,
        icon: MentorshipIcon,
        title: "Mentorship",
        description: "Our seasoned mentors provide invaluable guidance and support, helping you navigate your creative and entrepreneurial journey."
    },
    {
        id: 2,
        icon: CollaborationIcon,
        title: "Collaboration",
        description: "Connect with like-minded individuals, form partnerships, and create lifelong bonds with fellow visionaries."
    },
    {
        id: 3,
        icon: ResourcesIcon,
        title: "Resources",
        description: "Access a treasure trove of tools, tech, and knowledge to fuel your creative and IT endeavors."
    },
    {
        id: 4,
        icon: ImpactIcon,
        title: "Impact",
        description: "Make a difference in the world. Your ideas, your art, and your innovations can change lives and make the world a better place."
    }
];
const Community = () => {
    const [selectedPeople, setSelectedPeople] = useState(people);
    const [selectedPerson, setSelectedPerson] = useState(people[people.length - 1]);

    const organizeArrayOfPeople = (idOfFirstPerson) => {
        console.log('Original array: ', people)
        const filterArrayOfPeople = people.filter((person) => person.id <= idOfFirstPerson);
        const arrayOfRemovedPeople = people.filter((person) => person.id > idOfFirstPerson);

        console.log("filtered: ", filterArrayOfPeople);
        console.log("removed: ", arrayOfRemovedPeople);

        arrayOfRemovedPeople.forEach(person => {
            filterArrayOfPeople.unshift(person)
        });

        console.log("Reorganized array: ", filterArrayOfPeople)

        setSelectedPeople(filterArrayOfPeople);
        setSelectedPerson(filterArrayOfPeople[filterArrayOfPeople.length - 1]);
    }
    return (
        <section className='community'>
            <SectionTitle title="Get to know our community" />
            <h2>All of this wouldn't be possible without the contribute of each one of you, here's some of the faces that impact our initiatives:</h2>
            <div className="community-cards-container">
                <div className="content">
                    <h3>{selectedPerson.name} <span>({selectedPerson.pronouns})</span></h3>
                    {selectedPerson.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    <p>Would you like to meet more creatives like {selectedPerson.name.split(" ")[0]}?</p>
                    <div className="buttons">
                        <Button text='Join our community' />
                        <Button variant="secondary" text={`Connect with ${selectedPerson.name.split(" ")[0]}`} />
                    </div>
                </div>
                <div className="cards-container">
                    {selectedPeople.map(person => <CommunityPersonCard clickEvent={() => organizeArrayOfPeople(person.id)} key={person.id} image={person.image} name={person.name} pronouns={person.pronouns} description={person.description} />)}
                </div>
            </div>
            <h3 className='our-perks'>Our community perks</h3>
            <ul>
                {perks.map((perk) => <CommunityPerkCard key={perk.id} icon={perk.icon} title={perk.title} description={perk.description} />)}
            </ul>
        </section>
    )
}

export default Community