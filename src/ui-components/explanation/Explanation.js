import React from "react";

export const Explanation = () => {

    const scrollToCertificate = () =>{
        document.getElementById('certificate').scrollIntoView({behavior: "smooth", block: "start"});
    }

    const scrollToFaq = () =>{
        document.getElementById('faq').scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (

        <>
            <div className="explainSection">
                <div className="explainHeader">
                    How does it work
                </div>
                <div className="explainMain">
                    <div className="singleExplain">
                        <div className="number">
                            01
                        </div>
                        <div className="explainDescription">
                            You choose the denomination of the certificate and pay for a gift by card or in internet banking.
                        </div>
                    </div>
                    <div className="singleExplain">
                        <div className="number">
                            02
                        </div>
                        <div className="explainDescription">
                            We send the certificate to your email or recipient. If you decide for yourself hand over the certificate, print it out or send a link in the messenger.
                        </div>
                    </div>
                    <div className="singleExplain">
                        <div className="number">
                            03
                        </div>
                        <div className="explainDescription">
                            The recipient selects any restaurant you want to go to by certificate.
                        </div>
                    </div>
                    <div className="singleExplain">
                        <div className="number">
                            04
                        </div>
                        <div className="explainDescription">
                            The restaurant accepts a certificate from the guest by six digit number or a qr code.
                        </div>
                    </div>
                    <div className="singleExplainWithoutBorder">
                        <div className="number">
                            05
                        </div>
                        <div className="explainDescription">
                            The recipient visits one or several restaurants - and rejoices your gift.
                        </div>
                    </div>
                    <div className="singleExplainMargin">
                        <div className="explainButtons">
                            <div className="present" onClick={scrollToCertificate}>
                                Make a gift
                            </div>
                            <div className="business" onClick={scrollToCertificate}>
                                For business
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Explanation