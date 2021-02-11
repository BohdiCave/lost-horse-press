import React, {useState, useEffect} from "react";
import API from "../../utils/API";

export default function Covers() {

    const [covers, setCovers] = useState([])

    useEffect(() => {
      API.getCovers()
        .then(res => {
          console.log(res); 
          setCovers(res.data)
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <>
            {covers.map(cover => {
                return(
                    <img key={cover.id} src={cover.image_url} className="cover" />
                );
            })}
        </>
    );
}