import SectionTitle from '@/components/SectionTitle/SectionTitle'
import CommunityPersonCard from './CommunityPersonCard/CommunityPersonCard';
import TiagoImage from '@/assets/tiago.jpeg'

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
        name: "Jamie Lee",
        pronouns: "xe/xem",
        image: "https://images.pexels.com/photos/13098481/pexels-photo-13098481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Film director and LGBTQ+ activist, Jamie creates groundbreaking documentaries that shed light on queer experiences and struggles.",
        paragraphs: [
            "Hey, I'm Jamie Lee — a groundbreaking film director and devoted LGBTQ+ activist.",
            "My cinematic endeavors revolve around crafting documentaries that illuminate the experiences and struggles of the queer community.",
            "Through the lens of storytelling, I aspire to create empathy and understanding, inviting you to join me in making a lasting impact by showcasing the diversity and resilience of LGBTQ+ individuals on the big screen."
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
                    <Button text='Join our community' />
                </div>
                <div className="cards-container">
                    {selectedPeople.map(person => <CommunityPersonCard clickEvent={() => organizeArrayOfPeople(person.id)} key={person.id} image={person.image} name={person.name} pronouns={person.pronouns} description={person.description} />)}
                </div>
            </div>
        </section>
    )
}

export default Community