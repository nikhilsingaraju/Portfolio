import React from 'react'

const Social = (props) => {
    const { site, gmail } = props;
    return (
        <>
            {site === "Github" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://${site}.com/nikhilsingaraju`}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} draggable="false" />
            </a>}
            
            {site === "Instagram" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://${site}.com/nikhil.singaraju`}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} draggable="false" />
            </a>}

            {site === "Linkedin" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://${site}.com/in/nikhilsingaraju`}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} draggable="false" />
            </a>}

            {site === "gmail" && <a className='pe-3' href={"mailto:" + gmail}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} draggable="false" />
            </a>}
        </>
    )
}

export default Social
