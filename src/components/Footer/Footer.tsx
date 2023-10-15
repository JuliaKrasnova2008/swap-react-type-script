import React from 'react'
import './Footer.css'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function Footer() {
    return (
        <section className='footer'>
            <SocialMedia />
            <p className='footer__subtitle'>&copy; 2023 Krasnova</p>
        </section>
    )
}
