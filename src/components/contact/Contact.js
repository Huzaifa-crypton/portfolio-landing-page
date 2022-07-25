import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'

import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import facebook from '../../images/social/facebook.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/Huzaifa-crypton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://linkedin.com/in/huzaifa-khan-ab961b228"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://www.facebook.com/muhammadhuzaaifa.khan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
