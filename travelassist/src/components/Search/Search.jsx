import React, { useState } from "react";
// import "../css/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PlaceIcon from '@mui/icons-material/Place';

import {Link} from 'react-router-dom'

import {SearchMain, SearchInputs, SearchIcons, DataResult} from './Search.style'

import {search} from '../../helpers/utils'

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const searchData = async value => {
    const res = await search(`http://localhost:8082/destinations?name=${value}`)
    // const a = res.data
    console.log(res)
    setFilteredData(res)
  }

  const handleFilter = async(event) => {
    const searchWord = event.target.value;
    searchData(event.target.value)
    setWordEntered(searchWord);
  };

  return (
    <SearchMain>
      <SearchInputs >
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          style={{
              backgroundColor: '#eee',
              border: '0',
              borderRadius: '6px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
              fontSize: '1rem',
              padding: '1em',
              height: '60px',
              width: '100%',
              letterSpacing: '1px'
          }}
        />
        <SearchIcons >
          {filteredData && filteredData.length === 0 ? (
            <SearchIcon fontWeight='800' />
          ) : (
            <CloseIcon style={{cursor: 'pointer'}} onClick={clearInput} />
          )}
        </SearchIcons>
      </SearchInputs>
      {(filteredData && filteredData.length !== 0) && (
        <DataResult>
          {filteredData.slice(0, 15).map((value) => {
            return (
              <Box component={Link} to={`/destinations/${value.id}`} key={value.id} sx={{
                  width: '100%',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#000',
                  padding: '1em',
                  textDecoration: 'none'
              }}>
                <Avatar
                  alt="Remy Sharp"
                  src={value.coverimage}
                  variant="square"
                >
                  <PlaceIcon />
                </Avatar>
                <Typography variant="subtitle1" ml={2}>{value.name} </Typography>
              </Box>
            );
          })}
        </DataResult>
      )}
    </SearchMain>
  );
}

export default SearchBar;