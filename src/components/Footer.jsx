import { GitHubLogo, EmailLogo, InstagramLogo } from './Logos'
import '../Styles/footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='links-footer-container'>
                <div><a href="" className='link-footer'><GitHubLogo className="social-icon"/></a></div>
                <div><a href="" className='link-footer'><EmailLogo className="social-icon"/></a></div>
                <div><a href="" className='link-footer'><InstagramLogo className="social-icon"/></a></div>
            </div>
        </footer>
    )
}
