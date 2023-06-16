import React, {useState} from "react";
import './Qrcodesuccess.css'
import qrCodeSuccess from '../../assets/img/qrcode/qrcode-sucess.pdf'
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import * as Yup from "yup";
import waiterServices from "../../services/waiter";
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
                    Olete edukalt <br/> skaneerinud QR-koodi
                </div>

                <div className="qrcodeSuccessImage">
                    <img src={qrCodeSuccess} alt=""/>
                </div>

                <div className="qrcodeMainText">
                    Palun kirjutage üles arve summa
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
                                    Kupongi omaniku nimi:
                                </div>
                                <input type="text" className='qrcodeInput' value={data?.name} disabled/>
                            </div>
                            <div className="qrcodeFormBlock">
                                <div className="qrcodeFormName">
                                    Ülejäänud summa:
                                </div>
                                <input type="text" className='qrcodeInput' value={'$' + data?.remainingValue} disabled/>
                            </div>

                            <div className="qrcodeFormBlock">
                                <div className="qrcodeFormName">
                                    Restorani arve:
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
                                    placeholder="Sisestage restorani arve..."
                                />

                                <div className="error">
                                    <ErrorMessage name="amount"/>
                                </div>
                            </div>


                            <div className="confirmQrButton" onClick={toggleModal}>
                                Kinnitus
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </>

    )

}

export default Qrcodesuccess
