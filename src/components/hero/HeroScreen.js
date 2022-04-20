import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroeById';

export const HeroScreen = () => {

    const navigator = useNavigate();
    const {idHero} = useParams();
    const hero = useMemo(() => getHeroById(idHero), [idHero]);

    if(!hero){
        return <Navigate to="/"/>
    }

    const handleReturn = () =>{
        navigator(-1);
    }

    const imgPath = `/assets/${hero.id}.jpg`;
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <img src={imgPath} alt={hero.superhero} className="img-thumbnail animate__animated animate__backInLeft"/>
                </div>

                <div className="col-8 animate__animated animate__backInLeft">
                    <h3>{hero.superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego </b>{ hero.alter_ego }</li>
                        <li className="list-group-item"><b>Publisher </b>{ hero.publisher }</li>
                        <li className="list-group-item"><b>First Appearance </b>{ hero.first_appearance }</li>
                    </ul>

                    <h3 className="mt-3">Characters</h3>
                    <h6>{hero.characters}</h6>

                    <button className="btn btn-outline-dark mt-3" onClick={handleReturn}>
                        Regresar
                    </button>
                </div>
            </div>
        </>
    )
}
