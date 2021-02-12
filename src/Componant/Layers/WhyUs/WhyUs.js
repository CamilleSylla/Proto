import React from 'react'
import '../../../style/WhyUs.scss'
import Hi from '../../Elements/Scene/Hi'
import Icon from '../../../assets/Icon/Dev.svg'

export default function WhyUs () {

    return (
        <section className="whyus">
            <section className="whyus_content">
                <article className="whyus_articles">
                    <div className="whyus_articles_content">
                        <img src={Icon} alt="Icon"/>
                        <h1>Point principal blablabla</h1>
                    </div>
                    <div className="whyus_articles_content">
                        <img src={Icon} alt="Icon"/>
                        <h2>Point principal blablabla</h2>
                    </div>
                    <div className="whyus_articles_content">
                        <img src={Icon} alt="Icon"/>
                        <h3>Point principal blablabla</h3>
                    </div>
                </article>
            <Hi/>
            </section>
        </section>
    )
}