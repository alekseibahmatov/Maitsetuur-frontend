import React, {useState} from "react";
import './Qrcodesuccess.css'
import qre from '../../assets/img/qrc.png'
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import * as Yup from "yup";

const qrCodeSchema = Yup.object().shape({
    realPrice: Yup.number()
        .required('Real price is required')
        .positive('Real price must be a positive number')
        .max(10000, 'Real price has to be lower or equal 10000')
        .typeError('Real price must be a number'),
});

export const Qrcodesuccess = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (

        <>
            <div className="qrcodeContent">

                <div className="qrcodeSuccessHeader">
                    Success!
                </div>
                <div className="qrcodeSuccessHeader">
                    You’ve scanned QR code
                </div>

                <div className="qrcodeSuccessImage">
                    <img src={qre} alt=""/>
                </div>

                <div className="qrcodeMainText">
                    You’ve successfully scaned QR code! <br/> Please write down the real dinner price
                </div>

                <Formik
                    initialValues={{couponId: '', realPrice: ''}}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            console.log(values)
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={qrCodeSchema}
                >
                    {(props: FormikProps<any>) => (
                        <Form>

                            <div className="qrcodeFormBlock">
                                <div className="qrcodeFormName">
                                    Deposit amount:
                                </div>
                                <input type="text" className='qrcodeInput' value='300$' disabled/>
                            </div>
                            <div className="qrcodeFormBlock">
                                <div className="qrcodeFormName">
                                    Coupon Owner Name:
                                </div>
                                <input type="text" className='qrcodeInput' value='Ivan Zalupenko' disabled/>
                            </div>
                            <div className="qrcodeFormBlock">
                                <div className="qrcodeFormName">
                                    Real dinner price:
                                </div>
                                <Field className="qrcodeInput" type="text"
                                       name="realPrice" placeholder="Input the real price..."/>
                                <div className="error">
                                    <ErrorMessage name="realPrice"/>
                                </div>
                            </div>

                            <div className="confirmQrButton" onClick={toggleModal}>
                                Confirm
                            </div>
                            <PopupSumbit isOpen={isModalOpen} toggleModal={toggleModal}/>

                        </Form>
                    )}
                </Formik>
            </div>
        </>

    )

}

export default Qrcodesuccess