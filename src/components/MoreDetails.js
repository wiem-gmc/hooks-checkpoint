import React from 'react'
import Moviesdata from '../moviesData'

const MoreDetails = ({match}) => {
    const filtredList = Moviesdata.filter(el => el.id == match.params.id)
    console.log(match)
    return (
        <div>
            <iframe width="560" height="315" 
            src={filtredList[0].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{filtredList[0].title}</p>
           
        </div>
    )
}

export default MoreDetails