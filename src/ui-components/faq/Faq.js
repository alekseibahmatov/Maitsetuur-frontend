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
        setFAQ(faq.map((item) => {
            item.open = false;
            return item;
        }));
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
    }

    const [faq, setFAQ] = React.useState([
        {
            question: 'Kui kaua sertifikaat kestab?',
            answer: 'Sertifikaadi kehtivusaeg on üks aasta pärast ostu sooritamist, seda saab alati kontrollida sertifikaadil.',
            open: false
        },
        {
            question: 'Kas ma saan teha oma sertifikaadi eelarve?',
            answer: 'Mis tahes oma eelistusi ootame teie e-kirja, pärast mida saame pakkuda parimat lahendust.',
            open: false
        },
        {
            question: 'Kuidas ma saan kontrollida jääki?',
            answer: 'Pärast iga restorani külastust saadetakse uus e-kiri, mis sisaldab järelejäänud saldot.',
            open: false
        },
        {
            question: 'Kas ma saan osta paar sertifikaati oma ettevõttele?',
            answer: 'Loomulikult, jättes tellimuse, saame teiega ühendust võtta ja teha kõik, mida soovisite 2-3 päeva jooksul!',
            open: false
        },
        {
            question: 'Kuidas näeb sertifikaat välja?',
            answer: (
                <div>
                    <div>
                        Saate kontrollida, klõpsates sellel lingil
                        <br/>
                        <button className="blue" onClick={toggleModal} style={{ display: "inline" }}>
                            Sertifikaadi näide
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
                            FAQ
                        </div>
                        <div className={isActive1 ? 'client' : "company"} onClick={contentNext1}>
                            Esita küsimus
                        </div>
                    </div>
                </div>
                <div className="contentFaq">
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
                                        Kui teil on küsimusi, millele ei ole veel vastatud, võite alati meiega ühendust võtta!
                                    </div>
                                    <div className="askInfo">
                                        maitsetuur@gmail.com
                                    </div>
                                    <div className="askInfo">
                                        +372 5887 8456
                                    </div>
                                    <div className="askInfo">
                                        Kikri 2/1 Esmaspäev-Pühapaäev 24/7
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
