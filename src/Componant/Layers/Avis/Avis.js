import React from 'react'
import '../../../style/Avis.scss'


export default function Avis () {

    return (
        <section className="avis">
            <article className="avis_content">
                <div className="avis_title">
                    <h3>Ils nous ont recommander</h3>
                </div>
                <div className="avis_items_container">
                    <section className="avis_item">
                        <h4>Navid Niktash</h4>
                    </section>
                    <section className="avis_item">
                    <h4>Christophe Salliot</h4>
                    </section>
                </div>
            </article>
        </section>
    )
}