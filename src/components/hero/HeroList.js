import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const hero = getHeroByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
                {
                    hero.map(hero=>(
                        <HeroCard {...hero} key={hero.id}/>
                    ))
                }
        </div>
    )
}
