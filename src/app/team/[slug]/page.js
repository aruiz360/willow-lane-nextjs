import Image from 'next/image';
import { notFound } from 'next/navigation';

const teamMembers = {
    'luke-weil': {
      name: 'Luke Weil',
      title: 'Chief Executive Officer and Chairman of the Board',
      bio: [
        "Luke serves as our Chief Executive Officer and Chairman of the Board since our formation in July 2024, and is the sole managing member of our sponsor, Willow Lane Sponsor LLC.",
        "Previously, he served as the Non-Executive Chairman and a managing member of the sponsor of Andina Acquisition Corporation III ('Andina III') from its inception in January 2019 through its business combination with Stryve Foods, Inc. (Nasdaq: SNAX) in July 2021.",
        "From November 2015 to March 2018, Mr. Weil was the non-Executive Chairman and a managing member of the sponsor of Andina Acquisition Corporation II ('Andina II'), which completed a business combination with Lazyday's R.V. Center, Inc (Nasdaq: GORV).",
        "He served as Chief Executive Officer of Andina Acquisition Corporation ('Andina I') from January 2013 until its merger with Tecnoglass Inc. (NYSE: TGLS) in December 2013.",
        "Since July 2021, Mr. Weil has served as a member of the Board of Directors of Stryve Foods. He has previously served on the boards of Lazydays Holdings, Inc., Tecnoglass, and All Market, Inc. (d/b/a Runa).",
        "Earlier in his career, from 2008 to 2013, Mr. Weil headed International Business Development for Scientific Games Corporation in Latin America. From 2004 to 2006, he was an associate and then Junior Partner at Business, Strategies, & Insight.",
        "Luke started his career as an investment banker at Bear Stearns. He holds a B.A. from Brown University and an M.B.A. from Columbia Business School."
      ],
      photo: '/team/Luke Weil Photo.jpg'
    },
    'george-peng': {
      name: 'George Peng',
      title: 'Chief Financial Officer',
      bio: [
        "George has served as our Chief Financial Officer since our formation in July 2024.",
        "Previously, Mr. Peng served as Chief Financial Officer of Leisure Acquisition Corp., a SPAC that acquired Ensysce Biosciences, Inc., from December 2017 until June 2021.",
        "He served as Vice President of Finance at Inspired Entertainment, Inc., from December 2016 to February 2022.",
        "From February 2022 until July 2024, Mr. Peng pursued various consulting activities.",
        "Prior to this, he was Chief Financial Officer of Hydra Industries Acquisition Corp., a SPAC that acquired Inspired Entertainment, Inc., from August 2015 until December 2016.",
        "Mr. Peng was a consultant to Scientific Games Corporation from May 2013 to April 2014, where he assisted in its integration of the acquisition of WMS Industries.",
        "He has also worked as a consultant focused on financial planning and analysis for various industries, including retail and financial services.",
        "Earlier in his career, he was an Associate in the Investment Banking division of Credit Suisse, focusing on private equity, high yield, and leveraged lending products.",
        "Mr. Peng holds an A.B. in Economics from the University of Michigan, Ann Arbor, as well as an M.B.A. with a concentration in Finance from the Anderson School at UCLA. He is also a CFA Charterholder."
      ],
      photo: '/team/George Peng Photo.jpg'
    },
    'maya-hernandez': {
      name: 'Maya Hernandez',
      title: 'Treasurer and Director of Business Development',
      bio: [
        "Marjorie (Maya) has served as our Treasurer and Director of Business Development since our formation in July 2024.",
        "From 2021 to 2024, Ms. Hernandez built a personal portfolio of early-stage company private investments.",
        "She also served as Board Member and Treasurer of Caring for Colombia Foundation and founded Doulas en Español, a community organization in New York City.",
        "From January 2019 to January 2021, she served as Treasurer of Andina III. Ms. Hernandez was Secretary and Treasurer of Andina II from November 2015 to October 2017.",
        "She was an initial investor and advisor to Andina I.",
        "Prior to this, Ms. Hernandez served as senior currency strategist for Latin America at HSBC Securities (USA) from 2008 to 2015.",
        "From 2005 to 2008, she was the lead macro-economic and political analyst for HSBC, covering the Andean region.",
        "Previously, Ms. Hernandez was a public policy associate at the Council of the Americas, a forum dedicated to contemporary political, social and economic issues in Latin America."
      ],
      photo: '/team/Maya Hernandez Photo.jpg'
    },
    'mauricio-orellana': {
      name: 'Mauricio Orellana',
      title: 'Director',
      bio: [
        "Mauricio has been a Director of our Board since our formation.",
        "Since 2013, Mr. Orellana has served as a financial consultant to companies in Latin America in the media, infrastructure and services sectors.",
        "Currently, he is part of Blue Orange Capital LLC, a financial adviser for debt transactions in emerging markets.",
        "Since November 2018, Mr. Orellana has served as a member of the Board of Stryve Foods.",
        "He previously served as Chief Operating Officer for Andina Acquisition Corp. III from September 2016 until the consummation of the business combination with Stryve Foods.",
        "From August 2015 to March 2018, Mr. Orellana served as Chief Financial Officer and a member of the board of directors of Andina Acquisition Corp. II.",
        "From 2005 to 2013, Mr. Orellana was a Managing Director at Stephens Inc., a private investment banking firm.",
        "From 2000 to 2005, Mr. Orellana was a Vice President and Managing Director at Cori Capital Partners, L.P., a financial services firm.",
        "Prior to this, he served as Investment Officer for Emerging Markets Partnership and Inter-American Investment Corporation.",
        "Mr. Orellana received a degree in electrical engineering from the Universidad Central de Venezuela and an M.B.A. from the Instituto de Education Superior de Administración."
      ],
      photo: '/team/Mauricio Orellana Photo.jpg'
    },
    'robert-stevens': {
      name: 'Robert Stevens',
      title: 'Director',
      bio: [
        "Bob has been a Director of our Board since our formation.",
        "Mr. Stevens has served as an independent strategy and corporate development consultant in a variety of industries from 2014 to the present, and from 2002 to 2011.",
        "He has worked extensively in the gaming and leisure industry as well as in office furniture, apparel and music publishing.",
        "Mr. Stevens served as Vice President of Corporate Strategy at Scientific Games Corporation from 2011 to 2014 where he worked on M&A and corporate strategy in gaming and lottery.",
        "He served as Executive Vice President of Bluefly, Inc., a publicly traded fashion retailer, from 1999 to 2002.",
        "From 1992 to 1999, Mr. Stevens served as Vice President and Partner in the New York Strategy Practice of Mercer Management Consulting, where he led engagements in consumer products, industrial products, business services and utilities.",
        "Prior to that, he served as Senior Associate at Lorne Weil, Inc., a boutique corporate development and strategy consulting firm.",
        "Mr. Stevens holds an MBA from Columbia University where he was a Lawrence Wein fellow, an M.S. in Economics from the University of Wisconsin, and a B.A. in Economics from the University of Rhode Island.",
        "He served on the Board of Directors of Bluefly, Inc. and Axsys Technologies (Audit and Governance), an optoelectronics supplier which was sold to General Dynamics."
      ],
      photo: '/team/Robert Stevens Photo.jpg'
    },
    'rayne-steinberg': {
      name: 'Rayne Steinberg',
      title: 'Director',
      bio: [
        "Rayne has been a Director of our Board since our formation.",
        "Since November 2019, Mr. Steinberg has been Chief Executive Officer at Arca Capital Management LLC.",
        "Mr. Steinberg leads the company's strategic direction and is responsible for securities structuring and risk management.",
        "Since May 2018, he has been the Co-Founder and Chief Executive Officer of Praesidium Partners, Inc. (parent of Arca Capital Management LLC) and of Arca Investment Management, Inc., the investment adviser.",
        "Mr. Steinberg has an extensive history of financial and entrepreneurial success with nearly two decades of experience.",
        "Prior to founding Arca, Mr. Steinberg co-founded an asset management company, WisdomTree, where he was responsible for raising capital, creating intellectual property, and building and overseeing a sales team responsible for raising $50 billion in ETF assets under management.",
        "Mr. Steinberg holds a Bachelor of Science degree in Economics from The Wharton School of the University of Pennsylvania."
      ],
      photo: '/team/Rayne Steinberg Photo.jpg'
    },
    'simon-gaviria': {
      name: 'Simón Gaviria',
      title: 'Director',
      bio: [
        "Former director of National Planning for Colombia, where he was responsible for the investment budget for the country.",
        "He has served on the boards of Ecopetrol, the Colombian Coffee Federation, the energy regulator, water regulator, telecom regulator, and the national mining agency.",
        "From 2006 to 2014, Simon Gaviria was a member of the House of Representatives of Colombia.",
        "Simon began his career as an investment banking analyst at J.P. Morgan in New York City.",
        "He holds a BA from the University of Pennsylvania in economics and an MPA from Harvard."
      ],
      photo: '/team/simon-gaviria.jpg'
    },
    'lorne-weil': {
      name: 'Lorne Weil',
      title: 'Advisor',
      bio: [
        "Lorne serves as an advisor to the Company. Mr. Weil has served as the Executive Chairman of Inspired Entertainment, Inc. (“Inspired”) since the consummation of its business combination that created the current Inspired Entertainment, Inc. in December 2016. Mr. Weil was the co-sponsor and founder of Inspired's predecessor, Hydra Industries, and served as its Chairman and Chief Executive Officer since its formation in 2014. Mr. Weil has been a principal of Hydra Management, an investment vehicle he formed, since September 2014. Mr. Weil was Chairman of the Board of Scientific Games Corporation (and its predecessor, Autotote Corporation) from October 1991 to November 2013.  In 2011, Mr. Weil was the sponsor and Chairman of the Board of Andina I, and is currently the Chairman of its successor entity, Tecnoglass Inc. Mr. Weil served as Executive Chairman of Leisure Acquisition, a SPAC, from September 2017 until it completed a business combination in June 2021. Mr. Weil also served as the Chief Executive Officer of Scientific Games Corporation from 1992 to 2008 and from November 2010 to November 2013 and as the President from August 1997 to June 2005. Prior to joining Scientific Games, Mr. Weil was President of Lorne Weil, Inc. from 1979 to November 1992. From 1974 to 1979, Mr. Weil was Vice President — Corporate Development at General Instrument Corporation. From 1970 to 1974, Mr. Weil was a manager with the Boston Consulting Group. Mr. Weil received his undergraduate degree from the University of Toronto, an M.S. degree from the London School of Economics and an M.B.A. from Columbia University.",
      ],
      photo: '/team/Lorne Weil Photo.jpg'
    }
  };


export async function generateMetadata({ params }) {
  const member = teamMembers[params.slug]
  
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
  const member = teamMembers[params.slug];
  
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
            <p className="text-doc-mobile md:text-doc text-gray-dark/80 leading-relaxed font-thin">
              {member.bio.join(' ')}
            </p>
          </div>
        </div>
    
    </div>
  );
}