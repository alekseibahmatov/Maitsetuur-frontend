import React, {useEffect, useState} from "react";
import cross from "../../assets/img/cross.png";
import '../privacy-policy/Privacy-policy.css'

export const PrivacyPolicy = ({isOpen, toggleModal}) => {
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
                    <div className="modalPrivacy">
                        <div className="policySticky">
                            <div className="policyHeader">
                                Ostu- ning lepingu muud tingimused
                            </div>
                                <img src={cross} className='crossClose' onClick={toggleModal}/>
                        </div>
                        <div className='policyContent'>
                            <div className="policyDate">
                                Seisuga 01.04.2023. a
                            </div>
                            <div className="policyText">
                                <div className="policySingleHeader">
                                    I. Osapooled ja üldtingimused
                                </div>
                                <div className="policySingleText">
                                    I.1. Veebi XXXX.ee kaudu kinkekaardi ostu tehes sõlmib ostja (edaspidi Ostja) ja
                                    Maitsetuur OÜ (registrikood 16683461) (edaspidi Müüja) ostu-müügilepingu
                                    (edaspidi Leping) allolevatel tingimustel.
                                </div>
                                <div className="policySingleText">
                                    I.2. Ostu tehes kinnitab Ostja, et ta on Lepingu tingimustega tutvunud, nendega nõus
                                    ja
                                    täidab neid. Kindlasti peate tekitama selle kohta, kus klient peab panema linnukese,
                                    et
                                    ta on nõus tingimustega ja kohe juurde link antud tingimustele
                                </div>
                                <div className="policySingleText">
                                    I.3. Ostja kinnitab, et ta on teadlik ja aktsepteerib, et Müüja on vaid teenuse ja
                                    kauba
                                    vahendaja.
                                </div>
                                <div className="policySingleText">
                                    I.4. Müüja töötleb Ostja ja Ostja poolt märgitud muude isikute andmeid vastavalt
                                    punktis
                                    5 märgitule ja privaatsuspoliitikale.
                                </div>
                                <div className="policySingleText">
                                    I.5. Ostetud kinkekaarti loetakse mitmeotstarbeliseks vautšeriks käibemaksuseaduse
                                    tähenduses.
                                </div>
                                <div className="policySingleHeader">
                                    II. Kinkekaardi ostmise ja kasutamise tingimused
                                </div>
                                <div className="policySingleText">
                                    II.1. Kinkekaardi ostmiseks tuleb sooritada ost lehel XXXXX. Kinkekaardi eest
                                    tasumisel
                                    suunatakse Ostja makseviisi lehele, kus tuleb valida sobiv makseviis ja teostada
                                    makse. Kindlasti tuleb ära oodata pärast makset suunamist tagasi kaupmehe lehele.
                                </div>
                                <div className="policySingleText">
                                    II.2. Leping loetakse sõlmituks arvates ostusumma laekumisest Maitsetuur OÜ
                                    arvelduskontole.
                                </div>
                                <div className="policySingleText">
                                    II.3. Ostetud kinkekaart edastatakse Ostjale või Ostja poolt märgitud isikule
                                    e-posti teel
                                    pärast selle eest tasu laekumist. Ostu tegemise ja makse kättesaamise kohta saadab
                                    Müüja Ostjale automaatse e-kirja.
                                </div>
                                <div className="policySingleText">
                                    II.4. Juhul, kui Ostja märgib mittetoimiva e-posti aadressi, siis sellega kaasnevate
                                    asjaolude eest vastutab Ostja. Ostjal on kohustus veenduda, et märgitud e-posti
                                    aadress on õige. Sellises olukorras Müüja ei vastuta kinkekaardi edastamata jätmise
                                    eest.
                                </div>
                                <div className="policySingleText">
                                    II.5. Kinkekaart ei ole nimeline ja selle kasutajate ring ei ole piiratud ning
                                    eeldatakse, et
                                    kinkekaardi esitajal on õigus seda kasutada.
                                </div>
                                <div className="policySingleText">
                                    II.6. Ostja ostab kinkekaardi soovitud summa ulatuses, mida on võimalik kasutada
                                    lehel
                                    XXXXX märgitud koostööpartnerite juures ostes kaupu või teenuseid kasutades
                                    maksevahendina kinkekaarti. Kinkekaarti on võimalik kasutada korduvalt
                                    kinkekaardil oleva saldo ulatuses kuni summa on ära kulutatud.
                                </div>
                                <div className="policySingleText">
                                    II.7. Kinkekaardi kehtivus on 12 kuud alates ostu kuupäevast ja kehtivust ei
                                    pikendata.
                                </div>
                                <div className="policySingleText">
                                    II.8. Kinkekaardi kaotamisel uut kinkekaarti ei väljastata.
                                </div>
                                <div className="policySingleText">
                                    II.9. Kinkekaardil rahaliste vahendite jääki ja kinkekaardi kehtivusaega saab
                                    kontrollida
                                    lehel XXXXX.
                                </div>
                                <div className="policySingleText">
                                    II.10. Kinkekaarti ei vahetata raha vastu ning kasutamata kinkekaardi eest raha
                                    Müüja ei
                                    tagasta.
                                </div>
                                <div className="policySingleHeader">
                                    III. Vastutus
                                </div>
                                <div className="policySingleText">
                                    III.1. Kinkekaarti saab kasutada vaid Müüja koostööpartnerite juures (edaspidi
                                    Teenusepakkuja) vastavalt lehel XXX olevale nimekirjale. Müüja ei ole
                                    teenusepakkuja ega teenusepakkuja ja kliendi vahelise lepingu osapool ning tegutseb
                                    vaid vahendajana.
                                </div>
                                <div className="policySingleText">
                                    III.2. Teenusepakkuja tegevuse või tegevusetuse ja sellega kaasnevate asjaolude eest
                                    ei
                                    vastuta Müüja ning vastutab täielikult teenusepakkuja ise. Kõik pretensioonid
                                    teenusele või kaubale, selle kvantiteedile või kvaliteedile vms tuleb esitada
                                    koheselt ja
                                    otse Teenusepakkujale.
                                </div>
                                <div className="policySingleText">
                                    III.3. Ostjal on õigus esitada pretensioonid Müüjale vaid kinkekaardi osas, milleks
                                    on
                                    eelkõige kinkekaardil oleva QR-koodi viga, kinkekaardil olev summa või tähtaeg ei
                                    vasta ostu-müügilepingu summale.
                                </div>
                                <div className="policySingleText">
                                    III.4. Poolte vastutusele kohaldatakse Eesti Vabariigi õigusakte, eelkõige
                                    võlaõigusseaduse
                                    sätteid.
                                </div>
                                <div className="policySingleHeader">
                                    IV. Lepingust taganemine
                                </div>
                                <div className="policySingleText">
                                    IV.1. Ostjal on õigus põhjust avaldamata taganeda Lepingust 14 päeva jooksul alates
                                    kinkekaardi saamisest. Taganemisõigust ei ole kui kinkekaarti on alustatud kasutama.
                                </div>
                                <div className="policySingleText">
                                    IV.2. Taganemisõiguse kasutamiseks tuleb edastada Müüjale kirjalik taganemisavaldus
                                    Müüja e-postile XXXX@XXX.ee
                                </div>
                                <div className="policySingleText">
                                    IV.3. Lepingust taganemise avalduse esitamisega kaotab kinkekaart kehtivuse.
                                </div>
                                <div className="policySingleText">
                                    IV.4. Lepingust taganemisel kaotab kinkekaart kehtivuse ning Müüja tagastab Ostjale
                                    ostusumma arvestades Lepingus sätestatud erisusi XXX kalendripäeva jooksul
                                    taganemisavalduse jõudmisest Müüjani. Tagasimakse tehakse samale
                                    arvelduskontole, millelt ostu eest tasuti.
                                </div>
                                <div className="policySingleText">
                                    IV.5. Lepingust taganemisega kaasnevad otsesed kulud tuleb katta Ostjal.
                                </div>
                                <div className="policySingleHeader">
                                    V. Andmekaitse
                                </div>
                                <div className="policySingleText">
                                    V.1. Müüja tagab Ostja ja Ostja poolt märgitud kolmandate isikute andmete sh.
                                    isikuandmete kaitse ja kasutamise privaatsuspoliitika tingimuste kohaselt ette
                                    nähtud
                                    korras. Ostja kinnitab, et on tutvunud ja nõus privaatsuspoliitika tingimustega, mis
                                    on
                                    kätte saadavad igal hetkel Müüja kodulehel.
                                </div>
                                <div className="policySingleText">
                                    V.2. Müüjal, Ostja nõusolekuta, on õigus töödelda andmeid (sealhulgas isikuandmeid)
                                    ulatuses, mis on vajalik kinkekaardi ostu sooritamiseks, Lepingu täitmiseks või
                                    Lepingu täitmise tagamiseks, eelkõige on Müüjal õigus:<br/>
                                    V.2.1. saata Ostjale kinkekaardi ostmisega seonduvaid teateid;<br/>
                                    V.2.2. säilitada tehingu tõendamiseks Ostja ja kinkekaardi kasutaja andmed ja logi
                                    andmed Müüja veebilehe kasutamise ja sisselogimise osas;<br/>
                                    V.2.3. Kui Ostja on nõustunud turundusmaterjali saamiseks kasutab Müüja Ostja
                                    andmeid ka privaatsuspoliitikas fikseeritud tingimustel ja eesmärgil, muuhulgas
                                    Ostjale otseturunduse ja kampaaniate edastamiseks. Ostjal on õigus igal hetkel
                                    ilma põhjuseta antud nõusolek tagasi võtta saates vastavasisulise kirja Müüja e-
                                    postile.
                                </div>
                                <div className="policySingleText">
                                    V.3. Kinkekaardi ostmisel ja kinkekaardi kehtivuse jooksul töötleb Müüja andmeid
                                    Lepingu täitmise ja isiku nõusoleku alusel. Pärast seda töödeldakse andmeid
                                    õigustatud huvi alusel.
                                </div>
                                <div className="policySingleText">
                                    V.4. Müüja kogub vaid neid isikuandmeid, mida Ostja annab ning lähtub minimaalsuse
                                    põhimõttest.
                                </div>
                                <div className="policySingleHeader">
                                    VI. Muud tingimused
                                </div>
                                <div className="policySingleText">
                                    VI.1. Müüja kodulehel olevad pildid on illustratiivse tähendusega.
                                </div>
                                <div className="policySingleText">
                                    VI.2. Müüja ja Ostja vahel tekkivad vaidlused lahendavad pooled läbirääkimiste teel.
                                    Kokkuleppe mittesaavutamisel on Ostjal õigus pöörduda Tarbijakaitse ja Tehnilise
                                    Järelevalve Ametisse (Pronksi 12 Tallinn 10117, https://www.ttja.ee) ja
                                    Tarbijavaidluste komisjoni (Pronksi 12 Tallinn 10117, http://www.komisjon.ee)
                                    vaidluse kohtuväliseks lahendamiseks või Harju Maakohtusse.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PrivacyPolicy
