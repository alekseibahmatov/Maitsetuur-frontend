import React, {useEffect} from 'react';
import * as Yup from "yup";
import toast from "react-hot-toast";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import managerServices from "../../services/manager"
import {LoadingAnimationDots} from "../loading-animation/loading-animation-dots/LoadingAnimationDots";

const WaiterSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
})

function Popup({getAllWaitersOnMount, isOpen, toggleModal}) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);


    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <Formik
                            initialValues={{email: ''}}
                            onSubmit={(values, actions) => {
                                setTimeout(async () => {
                                    try {
                                        const result = await managerServices.createNewWaiter(values);
                                        console.log(result)
                                        toast.success("Waiter created successfully");
                                        if (result.status === 200) {
                                            getAllWaitersOnMount()
                                        }
                                    } catch (error) {
                                        console.log(error.code)
                                        toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
                                    }
                                    actions.setSubmitting(false)
                                }, 1000);
                            }}
                            validationSchema={WaiterSchema}
                        >
                            {(props: FormikProps<any>) => (
                                <Form>
                                    <h2 style={{textAlign: "center", margin: 20}}>To add new waiter, you have
                                        to <br/> input waiter's email</h2>
                                    <div className="leftPopup">
                                        <div className="newWaiterName">
                                            Waiter's Email
                                        </div>
                                        <div className="newWaitersInput">
                                            <Field className="newWaitersInputInput" type="email" name="email"
                                                   placeholder="Email"/>
                                            <div className="error">
                                                <ErrorMessage name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popupButtons">
                                        <button disabled={props.isSubmitting}
                                                style={props.isSubmitting ? {backgroundColor: "darkblue"} : {}}
                                                type="submit" className="confirmButton">
                                            {props.isSubmitting ? <LoadingAnimationDots/> : 'Send invitation'}
                                        </button>
                                        <button disabled={props.isSubmitting} className='closeButton'
                                                onClick={toggleModal}>Go back
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    );
}

export default Popup;

