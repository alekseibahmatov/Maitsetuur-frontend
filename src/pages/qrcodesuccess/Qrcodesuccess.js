import React, {useState} from "react";
import './Qrcodesuccess.css'
import qre from '../../assets/img/qrc.png'
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import * as Yup from "yup";
import waiterServices from "../../services/waiter";
import authService from "../../services/auth";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const qrCodeSchema = Yup.object().shape({
    amount: Yup.number()
        .required('Restaurant Bill is required')
        .positive('Restaurant Bill must be a positive number')
        .max(10000, 'Restaurant Bill has to be lower or equal 10000')
        .typeError('Restaurant Bill must be a number'),
});

export const Qrcodesuccess = ({data}) => {
    const navigate = useNavigate();
    const [realInputValue, setRealInputValue] = useState('');
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
                    You’ve successfully scanned QR code!
                    <br/> Please write down the real dinner price
                </div>

                <Formik
                    initialValues={{uniqueCode: data?.certificate_id, amount: ''}}
                    onSubmit={(values, actions) => {
                        setTimeout(async () => {
                            console.log(values)
                            try {
                                const result = await waiterServices.createTransaction(values)
                                toast.success(result?.data.message);
                                setTimeout(() => {
                                    if (result.status === 200) {
                                        navigate('/qrcode-success');
                                    }
                                }, 1000);
                            } catch (error) {
                                console.log(error.code)
                                toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
                                setTimeout(() => {
                                    navigate('/qrcode-fail');
                                }, 1000);
                            }

                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={qrCodeSchema}
                >
                    {(props: FormikProps<any>) => (
                        <Form>
                            <PopupSumbit actionName={'Submit QR Code'} props={props}
                                         isOpen={isModalOpen} toggleModal={toggleModal}/>

                            <div className="qrcodeFormBlock">
                                <div className="qrcodeFormName">
                                    Coupon Owner Name:
                                </div>
                                <input type="text" className='qrcodeInput' value={data?.name} disabled/>
                            </div>
                            <div className="qrcodeFormBlock">
                                <div className="qrcodeFormName">
                                    Remaining amount:
                                </div>
                                <input type="text" className='qrcodeInput' value={'$' + data?.remainingValue} disabled/>
                            </div>

                            <div className="qrcodeFormBlock">
                                <div className="qrcodeFormName">
                                    Restaurant Bill:
                                </div>
                                <Field
                                    className="qrcodeInput"
                                    type="text"
                                    value={realInputValue}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        const sanitizedValue = value.replace(/[^0-9]+/g, ''); // Remove any non-digit characters
                                        const numericValue = parseInt(sanitizedValue, 10) || 0;

                                        if (numericValue > 10000) {
                                            setRealInputValue('$10000');
                                            props.setFieldValue('amount', '10000');
                                        } else {
                                            const formattedValue = numericValue === 0 ? '$' : `$${numericValue}`;
                                            setRealInputValue(formattedValue);
                                            // Set the field value in Formik state
                                            props.setFieldValue('amount', numericValue);
                                        }
                                    }}

                                    name="amount"
                                    placeholder="Input the Restaurant Bill..."
                                />

                                <div className="error">
                                    <ErrorMessage name="amount"/>
                                </div>
                            </div>


                            <div className="confirmQrButton" onClick={toggleModal}>
                                Confirm
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </>

    )

}

export default Qrcodesuccess