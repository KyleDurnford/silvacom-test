//Creates the city directory
const Places = ({handleClick}) => {
    const Cities = ["Edmonton", "Tokyo", "New York City", "Los Angeles", "Mykonos"];

    return (
        <div className="cities">
        {Cities.map((place, i) => {
            return (
                <div onClick={() => handleClick(place)} className="place" key={i} style={{background: 'url(../img/' + place.replace(/\s+/g, '') + '.jpg) center/cover no-repeat'}}>
                    <h2 className="placeTitle">{place}</h2>
                </div>
            )
        })
    }
    </div>
    )
}

export default Places