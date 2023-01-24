import React from "react";
import sosiska from '../../assets/img/sosiska.png'
import './Error.css'

export const Error = () =>{

    return(

        <div className='errorContent'>

            <div className="sausageImage">

                <img src={sosiska} alt="sosiska" className='sosiska'/>

            </div>

            <div className="error404">
                404
            </div>

            <div className="permission">
                You dont have permission to visit this page
            </div>
        </div>

    )

}

export default Error