import './style.css'
import { ReactComponent as FaceBook } from 'assets/img/facebook.svg'
import { ReactComponent as Google } from 'assets/img/google-logo.svg'
import { ReactComponent as Instagram } from 'assets/img/instagram.svg'
import { ReactComponent as LinkdIn } from 'assets/img/linkedin.svg'

function Footer() {
    return (
        <footer className="bg-light text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        href="#!"
                        role="button"
                    >
                        <FaceBook />
                    </a>

                    <a
                        href="#!"
                        role="button"
                    >
                        <Google />
                    </a>

                    <a
                        href="#!"
                        role="button"
                    >
                        <Instagram />
                    </a>

                    <a
                        href="#!"
                        role="button"
                    >
                        <LinkdIn />
                    </a>
                </section>
            </div>

            <div className="text-center p-3">
                © 2022 Copyright: Eduardo Silva
            </div>
        </footer>
    )
}

export default Footer