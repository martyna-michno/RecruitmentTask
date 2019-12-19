import React from 'react'
import Loader from "react-loader-spinner";

export const ShowLoader = () => {
    return (
        <div className="loader">
            <Loader
                type="Oval"
                color="#aff700"
                height={200}
                width={200}
                timeout={0}
            />
        </div>
    )
}