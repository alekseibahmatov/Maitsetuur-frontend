import React from "react";
import './Certificate.css'
import qrcode from '../../assets/img/qrCodeCertificate.png'
export const Certificate = () => {

    return (

        <>
            <div className="certificatePdf">
                <div className="certificatePdfContent">
                    <div className="certificatePdfLeft">
                        <div className="certificatePdfHeader">
                            <div className="certificatePdfHeaderCompany">
                                MaitseTuur
                            </div>
                            <div className="certificatePdfHeaderCertificate">
                                Sertifikaat
                            </div>
                        </div>
                        <div className="certificateSingleInputForm">
                            <div className="certificatePdfTittle">
                                Sertifikaadi number:
                            </div>
                            <div className="certificatePdfValue">
                                123456
                            </div>
                        </div>
                        <div className="certificateSingleInputForm">
                            <div className="certificatePdfTittle">
                                Saatja:
                            </div>
                            <div className="certificatePdfValue">
                                German Eine
                            </div>
                        </div>
                        <div className="certificateSingleInputForm">
                            <div className="certificatePdfTittle">
                                Saaja:
                            </div>
                            <div className="certificatePdfValue">
                                Lepeshka Bashmak
                            </div>
                        </div>
                        <div className="certificateSingleInputForm">
                            <div className="certificatePdfTittle">
                                Õnnesoov:
                            </div>
                            <div className="certificatePdfCongrats">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices elementum ipsum ac euismod. Morbi vel lorem porta ex lacinia blandit sit amet ac ante. Morbi at augue ornare, placerat urna egestas, tempor sapien. Proin ut purus a erat congu!
                            </div>
                        </div>
                        <div className="certificatePdfMoreInfo">
                            <div className="certificatePdfMoreInfoText">
                                Rohkem infot
                            </div>
                            <div className="certificatePdfMoreInfoLink">
                                maitsetuur.ee
                            </div>
                        </div>
                    </div>
                    <div className="certificatePdfRight">
                        <div className="certificatePdfRightHeader">
                            KINGITUS SERTIFIKAAT
                        </div>
                        <div className="certificatePdfRightTittle">
                            Tallinna parimate restoranidesse
                        </div>
                        <div className="certificatePdfRightLower">
                            <div className="lowerLeft">
                                <div className="singleLower">
                                    <div className="certificateDateAvailability">
                                        KEHTIB KUNI:
                                    </div>
                                    <div className="certificateDateAvailabilityValue">
                                        02.07.2023
                                    </div>
                                </div>
                                <div className="singleLower marginned">
                                    <div className="certificateDateAvailability">
                                        NOMINAAL:
                                    </div>
                                    <div className="certificateDateAvailabilityValue">
                                        500€
                                    </div>
                                </div>
                            </div>
                            <div className="lowerRight">
                                <div className="lowerRightQR">
                                    <img src={qrcode} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}