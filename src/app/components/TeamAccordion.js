'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import teamMembers from '../data/team_members'

const TeamMemberAccordion = ({ name, title, description, slug, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-light text-gray-light relative">
      <button
        className="w-full py-4 flex items-center justify-between hover:bg-gray-light/10 transition-colors"
        onClick={onClick}
      >
        <div className="flex-1 flex items-center justify-between lg:justify-start">
          <span className="font-arsenal text-heading-mobile md:text-heading text-gray-light uppercase text-left border-r border-gray-light pr-4 lg:pr-8">{name}</span>
          <span className="font-thin text-doc-mobile md:text-body text-gray-light text-right md:text-left pl-0 lg:pl-8">{title}</span>
        </div>
        <ChevronDownIcon
          className={`w-4 h-4 md:w-10 md:h-10 min-w-4 min-h-4 md:min-w-10 md:min-h-10 transform transition-transform duration-300 ease-in-out text-gray-light flex-shrink-0 ml-4 [stroke-width:1] ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`active:ring-0 active:outline-none active:ring-offset-0 active:border-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-0 transition-all duration-300 ease-in-out bg-white ${isOpen ? 'absolute top-100 left-0 lg:left-1/2 w-100 lg:w-50 z-[1000] lg:right-[18px] h-auto top-[60px]' : 'hidden'}`}>
        <div className="px-4 md:px-6 py-4">
          <div>
            <h6 className="text-heading-mobile md:text-heading text-primary font-arsenal uppercase mb-1 font-thin">{name}</h6>
            <p className="text-body-mobile md:text-body text-gray-dark italic font-source-sans font-thin mb-1">{title}</p>
            <p className="h-1 border-b border-primary w-1/2 mb-4"></p>
            <p className="text-body-mobile md:text-body text-gray-dark font-thin mb-8 font-source-sans">{description}</p>
            <p className="h-1 border-b border-primary w-full mb-4"></p>
            <div className="flex justify-end">
              <Link
                href={`/team/${slug}`}
                className="text-gray-dark hover:text-primary transition-colors font-source-sans text-right md:text-left group inline-flex items-center"
              >
                <span className="text-doc-mobile md:text-doc text-gray-dark font-thin group-hover:text-primary transition-colors font-source-sans">
                  View Full Profile
                </span>
                <ChevronRightIcon className="ml-2 md:ml-3 w-8 h-8 [stroke-width:1] text-gray-dark inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeamAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
        {teamMembers.map((member, index) => (
          <TeamMemberAccordion
            key={member.slug}
            {...member}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
    </>
  )
}
