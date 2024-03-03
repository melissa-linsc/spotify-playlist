import React from "react";

import styles from './SearchResults.module.css'

import Tracklist from '../Tracklist/Tracklist'

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
          <h2 className={styles.results}>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <Tracklist userSearchResults={props.userSearchResults} isRemoval={false} onAdd={props.onAdd} />
      </div>
        );
}

export default SearchResults;