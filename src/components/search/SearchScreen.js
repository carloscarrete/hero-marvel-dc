import React from 'react'
import { useForm } from '../../hooks/useForm'

export const SearchScreen = () => {

    const [value, handleInputChange] = useForm({
        searchText : ''
    })

    const {searchText} = value;

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(searchText);
    }

    return (
        <>
            <h1>Search a Hero</h1>
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

            </div>
        </>
    )
}
