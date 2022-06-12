import React from 'react';

const Pagination = (props) => {
    let pageLinks = []
    
    for(let i = 1; i <= props.pages + 1; i++ ) {
        let active = props.currentPage === i ? 'active' : '';
        pageLinks.push(<button className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}>{i}</button>)              
    }
    return (
            <div className="container">
                <div className="row">
                    <ul className="pagination">
                        { props.currentPage > 1 ? <button className="waves-effect" onClick={() => props.nextPage(props.currentPage - 1)}>prev</button> : ''}
                        {  pageLinks }
                        { props.currentPage < props.pages + 1 ? <button className="waves-effect" onClick={() => props.nextPage(props.currentPage + 1)}>next</button> : ''} 
                    </ul>
                </div>        
            </div>
    )
}

export default Pagination