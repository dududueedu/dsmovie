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
                        href="https://www.facebook.com/profile.php?id=100005503066960"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaceBook />
                    </a>

                    <a
                        href="mailto:eduardooffside@alu.ufc.br"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Google />
                    </a>

                    <a
                        href="https://www.instagram.com/du.dudu.e_edu/"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Instagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dududueedu/"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
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