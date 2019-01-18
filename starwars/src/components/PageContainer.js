import React from 'react';

function PageContainer(props) {
    return (
        <div className="pagination-system">
            <button>Previous</button>{props.currentPage}<button onClick={props.nextPageHandler}>Next</button>
        </div>
    );
}

export default PageContainer;