import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoAbiOptions, url } from "../../Abi";
const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputvalue) => {
        return fetch(`${url}?minPopulation=1000000&namePrefix=${inputvalue}`, GeoAbiOptions)
            .then(res => res.json())
            .then(res => {
                return {
                    options: res.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    }

                    )
                }
            })
            .catch(err => console.log(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;