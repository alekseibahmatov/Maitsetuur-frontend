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
                    Kuidas see töötab
                </div>
                <div className="explainMain">
                    <div className="singleExplain">
                        <div className="number">
                            01
                        </div>
                        <div className="explainDescription">
                            Te valite sertifikaadi nimiväärtuse ja maksate kingituse eest kaardiga või internetipangas.
                        </div>
                    </div>
                    <div className="singleExplain">
                        <div className="number">
                            02
                        </div>
                        <div className="explainDescription">
                            Me saadame sertifikaadi teie e-postile või saajale. Kui otsustate ise sertifikaadi üle anda, printige see välja või saatke linki messengeris.
                        </div>
                    </div>
                    <div className="singleExplain">
                        <div className="number">
                            03
                        </div>
                        <div className="explainDescription">
                            Saaja valib sertifikaadi alusel mis tahes restorani, kuhu soovite minna.
                        </div>
                    </div>
                    <div className="singleExplain">
                        <div className="number">
                            04
                        </div>
                        <div className="explainDescription">
                            Restoran võtab külalistelt sertifikaadi vastu kuuekohalise numbri või qr-koodi abil.
                        </div>
                    </div>
                    <div className="singleExplainWithoutBorder">
                        <div className="number">
                            05
                        </div>
                        <div className="explainDescription">
                            Saaja külastab ühte või mitut restorani - ja rõõmustab teie kingituse üle.
                        </div>
                    </div>
                    <div className="singleExplainMargin">
                        <div className="explainButtons">
                            <div className="present" onClick={scrollToCertificate}>
                Tee Kingitus
                            </div>
                            <div className="business" onClick={scrollToCertificate}>
                           Ettevõttele
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Explanation
