import React, { useContext } from 'react';
import { NoteContext } from './NoteContext';
import styled from 'styled-components';
import { NavbarBrand, NavbarText, Navbar } from 'reactstrap';

const Navigation = styled.div`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`

const Nav = () => {
    const [notes, setNotes] = useContext(NoteContext);
    return(
        <Navigation>
            <Navbar>
                <NavbarBrand>Nathan Scott's Notes!</NavbarBrand>
                <NavbarText>Number of notes: {notes.length}</NavbarText>
            </Navbar>
        </Navigation>
    )
}

export default Nav;