import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { browseDisplayName } from '../features/friendSlice';
import Friend from './Friend';

function SearchBar() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [hasResults, setHasResults] = useState(false)
    useEffect(()=>{
        const delayDebounceFn = setTimeout(()=>{
            browseDisplayName(
                searchKeyword,
                (datas)=>{
                    setSearchResults(datas.map(dt=>dt.data()));
                    setHasResults(true);
                },
                ()=>{
                    setHasResults(false);
                    setSearchResults(prev=>prev.splice(0, prev.length));
                }
            );
        }, 1000)

        return ()=>clearTimeout(delayDebounceFn)
    }, [searchKeyword, hasResults])
    return (
        <SearchBarContainer>
            <input
                type="text"
                onChange={e=>setSearchKeyword(e.target.value)}
                value={searchKeyword}
                placeholder="Search DisplayNames"
            />
            {hasResults && searchResults?.map(user=>(
                <Friend
                    email={user.email}
                    displayName={user.displayName}
                    photoURL={user.photoURL}
                />
            ))}
        </SearchBarContainer>
    )
}

export default SearchBar

const SearchBarContainer = styled.div`
    width: 300px;
    position: absolute;
    top: 0;
    background-color: var(--ig-dgray);
    padding: 10px 0;
    display: flex;
    flex-direction: column;

    > input {
        border: none;
        border-radius: 5px;
        background-color: var(--ig-ddgray);
        outline: none;
        padding: 5px 20px;
        color: white;
    }
`;