import Button from "../Button/Button"
import css from "./Hero.module.css"

export default function Hero() {
    return (
        <section className={css.hero}>
            <div className={css.container}>
                <h1 className={css.title}>Unlock your potential with the best  language tutors</h1>
                <p className={css.text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                <Button>Get started</Button>
                <div>
                    <img src="/public/block.png" alt="teacher"/>
                </div>
            </div>
        </section>
    )
}