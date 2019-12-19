import React from 'react'
import Loader from "react-loader-spinner";

export const ShowLoader = () => {
    return (
        <div className="loader">
            <Loader
                type="Oval"
                color="#aff700"
                height={100}
                width={100}
                timeout={0}
            />
        </div>
    )
}