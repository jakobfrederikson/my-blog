import Link from 'next/link';
import GitHubIcon from './github-icon';
import LinkedInIcon from './linkedin-icon'


const Footer = () => {
    return (
     <footer>
        <div className="grid-cols-1 grid justify-center">
            <div className="flex justify-center p-3">
                <p>
                    Built by <a className="font-bold text-indigo-800 hover:text-indigo-600/75 hover:underline hover:underline-offset-4" href="https://jakobdev.netlify.app/" target="_blank">Jakob</a>
                </p>
            </div>
            <div className="flex justify-center pb-3">
                <Link href="https://github.com/jakobfrederikson" target="_blank">
                    <GitHubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/jakob-frederikson/" target="_blank">
                    <LinkedInIcon />
                </Link>
            </div>
        </div>
     </footer>
    )
};

export default Footer;