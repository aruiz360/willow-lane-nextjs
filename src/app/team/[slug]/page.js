import Image from 'next/image';
import { notFound } from 'next/navigation';
import teamMembers from '@/app/data/team_members'

export async function generateMetadata({ params }) {
  const member = teamMembers.find((item) => item.slug === params.slug);

  if (!member) {
    return {
      title: 'Team Member Not Found'
    }
  }

  return {
    title: `${member.name} | Willow Lane Acquisition Corporation`,
    description: `Learn about ${member.name}, ${member.title} at Willow Lane Acquisition Corporation.`,
  }
}


export default function TeamMemberBio({ params }) {
  const member = teamMembers.find((item) => item.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-8">

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full h-96 md:w-72 md:h-96 relative flex-shrink-0">
            <Image
              src={member.photo || "/profile.webp"}
              alt={member.name}
              fill
              className="grayscale object-cover object-top"
              priority
            />
          </div>


          <div className="flex-1">
            <h1 className="text-heading-mobile md:text-heading font-source-sans font-thin uppercase text-gray-dark mb-2">{member.name}</h1>
            <h2 className="text-body-mobile md:text-body text-gray-dark italic font-thin mb-4">{member.title}</h2>
            <p className="h-1 border-b border-primary w-1/2 mb-4"></p>
            {member.bio.map((line, i) => (
              <p className="text-doc-mobile md:text-doc text-gray-dark/80 leading-relaxed font-thin pb-3" key={i}>
                {line}
              </p>
            ))}
          </div>
        </div>

    </div>
  );
}
