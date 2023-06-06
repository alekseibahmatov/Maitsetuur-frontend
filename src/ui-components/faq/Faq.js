import React, {useState} from "react";
import ReactSwipe from "react-swipe";
import PopupCertificate from "../popup-certificate/Popup-certificate";

export const Faq = () =>{

    let reactSwipeEl2;

    const [isActive1, setIsActive1] = useState(false);

    const [isFaq, setIsFaq] = useState(false);

    function contentNext1 (){
        handleClick1();
        reactSwipeEl2.next()
    }

    function contentPrevious1 (){
        handleClick1();
        reactSwipeEl2.prev()
    }

    const handleClick1 = () => {
        setIsActive1(current => !current);
        setIsFaq(current => !current);
    }

    const toggleFAQ = index => {
        setFAQ(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
            return item;
        }));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        console.log('asd')
    }

    const [faq, setFAQ] = React.useState([
        {
            question: 'How long does the certificate lasts?',
            answer: 'Certificate lasts for one years after the purchase, it can always be checked on the certificate',
            open: false
        },
        {
            question: 'Can i make my own budget for certificate?',
            answer: 'With any of your own preferences we are waiting for your email, after what we can provide the best solution',
            open: false
        },
        {
            question: 'How can i check the balance?',
            answer: 'After each of the visits to the restaurants, there will a new email sent, containing remaining balance',
            open: false
        },
        {
            question: 'Can i buy a few certificates for my company?',
            answer: 'Of course, by leaving the order we will be able to contact you and make everything you wanted within 2-3 days!',
            open: false
        },
        {
            question: 'How does the certificate look like?',
            answer: (
                <div>
                    <div>
                        You can check by clicking on this link{" "}
                        <button className="blue" onClick={toggleModal} style={{ display: "inline" }}>
                            Certificate.pdf
                        </button>
                    </div>
                </div>
            ),
            open: false,
        }
    ]);

    return (

        <>
            <div className="faqSection" id='faq'>
                <div className="faqHeader">
                    <div className="from">
                        <div className={isActive1 ? 'company' : "client"} onClick={contentPrevious1}>
                            Answers to the questions
                        </div>
                        <div className={isActive1 ? 'client' : "company"} onClick={contentNext1}>
                            Ask a question
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <ReactSwipe
                            className="carousel"
                            swipeOptions={{ continuous: false, disableScroll: true }}
                            ref={el => (reactSwipeEl2 = el)}
                        >
                            <div><div className="faq">
                                {/* Map over the FAQ items and render them */}
                                {faq.map((item, index) => (
                                    <div key={index} className="faq-item">
                                        <button type="button" className={item.open ? 'open' : ''} onClick={() => toggleFAQ(index)}>
                                            {item.question}
                                            <span className="toggle-icon">
              {item.open ? '-' : '+'}
            </span>
                                        </button>
                                        {item.open && <p>{item.answer}</p>}
                                    </div>
                                ))}
                            </div></div>
                            <div>
                                <div className="infoAsk">
                                    <div className="askInfoMain">
                                        If you have any questions which were not answered yet you can always contact us!
                                    </div>
                                    <div className="askInfo">
                                        maitsetuur@gmail.com
                                    </div>
                                    <div className="askInfo">
                                        +372 5887 8456
                                    </div>
                                    <div className="askInfo">
                                        Kikri 2/1 Monday-Sunday 24/7
                                    </div>
                                </div></div>
                        </ReactSwipe>
                    </div>
                </div>
            </div>
            <PopupCertificate isOpen={isModalOpen} toggleModal={toggleModal} />
        </>

    )
}
export default Faq