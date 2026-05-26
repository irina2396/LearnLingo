import Button from "../Button/Button"
import css from "./Hero.module.css"

export default function Hero() {
    return (
        <section className={css.hero}>
                <div className="container">
                    <div className={css.heroContent}>
                        <div className={css.pageHero}>
                            <h1 className={css.title}>Unlock your potential with the best  <span className={css.titlePart}>language</span> tutors</h1>
                            <p className={css.text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                            <Button>Get started</Button>
                        </div>
                        <div className={css.imgWrapper}>
                            <img className={css.image} src="/public/block.png" alt="teacher"/>
                        </div>
                    </div>
                </div>
        </section>
    )
}