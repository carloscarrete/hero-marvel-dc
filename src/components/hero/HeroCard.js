import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const path = `./assets/${id}.jpg`;
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={path} alt={superhero} className="card-img"/>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <div className="card-text">{alter_ego}</div>
                            
                                {characters!==alter_ego && (
                                    <p className="text-muted">
                                        {characters}
                                    </p>
                                )}

                                <p className="text-muted">{first_appearance}</p>

                                <Link to={`/hero/${id}`} className="btn btn-dark">Ver más...</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
