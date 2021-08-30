import React from 'react';
import { BsMusicNoteList } from 'react-icons/bs'


const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <BsMusicNoteList/>
            </button>
        </nav>
    );
}

export default Nav;