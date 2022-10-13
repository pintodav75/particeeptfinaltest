import { connect } from 'react-redux'
import { updateFilter } from '../redux/actions'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const uniqueArray = (a) => a.filter(function(item, pos) {
    return a.indexOf(item) === pos;
})

const MovieFilter = ({ movies, updateFilter, filter }) => {
    const categories = uniqueArray(movies.map(m => m.category))

    const onSelect = (e) => {
        if (e.target.value === undefined)
            updateFilter('')
        else
            updateFilter(e.target.value)
    } 

    return (
        // <div>
        //     <select name="category" onChange={onSelect} >
        //         <option value="">--Please choose an option--</option>
        //         {categories.map(optionFromCategory)}
        //     </select>
        // </div>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="All category"
                    onChange={onSelect}
                >
                    <MenuItem
                        key={"41814841"}
                        name={""}
                        >
                        All categories
                    </MenuItem>
                    {categories.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
    </Box>
    )
}

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
    filter: state.filter,
})

export default connect(
    mapStateToProps,
    { updateFilter }
)(MovieFilter);
