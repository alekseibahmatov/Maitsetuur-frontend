import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {LoadingAnimationCircular} from "../loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import {scrollTop} from "../../pages/business-coupon-order/tools";

export const BackToHomePage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const navigateWithDelay = () => {
        setLoading(true)
        setTimeout(() => {
            navigate('/')
            setLoading(false)
            scrollTop()
        }, 1000)
    }

    return (
        <div className="backToHomePageWrapper">
            { loading ? <LoadingAnimationCircular/> :
                <div className="backToHomePage" onClick={() => navigateWithDelay()}>
                  Go back to homepage
                </div>
            }
        </div>
    )

}

