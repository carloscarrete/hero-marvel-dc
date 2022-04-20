import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const hero = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
                {
                    hero.map(hero=>(
                        <HeroCard {...hero} key={hero.id}/>
                    ))
                }
        </div>
    )
}
