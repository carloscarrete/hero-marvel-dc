import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName'
import { HeroCard } from '../hero/HeroCard'
import queryString from 'query-string'

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [value, handleInputChange] = useForm({
        searchText : q
    })

    const {searchText} = value;

    const handleSearch = (e) =>{
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    const heroFiltred = useMemo(() => getHeroByName(q), [q]);

    return (
        <>
            <h1 className="mt-2">Search a Hero</h1>
            <div className="row">
                <div className="col-5">
                    <h4>Search...</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-dark w-100 mt-3" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h2>Results</h2>
                    <hr/>

                {
                    q==='' ? <div className="alert alert-primary">Search your Hero!...</div>
                    : heroFiltred.length===0 && <div className="alert alert-danger">There's not results for {q}</div>
                }

                {
                    heroFiltred.map(hero =>(
                        <HeroCard key={hero.id} {...hero}/>
                    ))
                }
                </div>

            </div>
        </>
    )
}
