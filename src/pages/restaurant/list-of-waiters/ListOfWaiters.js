import React, {useState, useEffect} from 'react';
import PopupAdmin from "../../../ui-components/popup-admin/Popup-admin";
import dots from "../../../assets/img/dots.png";
import adminServices from "../../../services/admin";
import toast from "react-hot-toast";
import {
    LoadingAnimationCircular
} from "../../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import managerServices from "../../../services/manager";
import {
    LoadingAnimationDots
} from "../../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";


export const ListOfWaiters = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [listData, setListData] = useState(null);
    const [isDeleting, setIsDeleting] = useState({});

    const deleteWaiter = async (id) => {
        setIsDeleting(prevState => ({...prevState, [id]: true}));
        try {
            const result = await managerServices.deleteWaiter(id)
            toast.success("Waiter Successfully Deleted")
            console.log(result)
        } catch (error) {
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
        setIsDeleting(prevState => ({...prevState, [id]: false}));
    }

    const getAllWaitersOnMount = async () => {
        try {
            const result = await adminServices.getAllWaiters()
            console.log(result)
            setListData(result.data)
        } catch (error) {
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    useEffect(() => {
        getAllWaitersOnMount()
    }, [isModalOpen, isDeleting]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return <div className='rightBlock1'>
        <div className="waitersButton">
            <div className="waitersHeader">
                List of waiters
            </div>
            <div className="addWaiter" onClick={toggleModal}>
                Add waiter
            </div>
            <PopupAdmin isOpen={isModalOpen} toggleModal={toggleModal}/>
        </div>

        <div className="waitersMain" style={{display: "block"}}>
            <div className="searchAndDots">
                <div className="search">
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"/>
                    </button>
                    <input type="text" className="searchTerm"
                           onChange={(e) => setSearch(e.target.value)}
                           placeholder="What are you looking for?"/>

                </div>
                <div className="dots">
                    <img src={dots} alt="dots"/>
                </div>
            </div>
            <div className="overflownContent">
                {listData ?
                    listData.length === 0 ?
                        <h1>no data</h1>
                        :
                        <table>

                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Turnover</th>
                                <th scope='col'/>
                            </tr>
                            </thead>

                            <tbody>

                            {listData.filter((item) => {
                                const searchTerm = search.toLowerCase();
                                if (searchTerm === '') {
                                    return true;
                                }
                                return Object.values(item).some(value => {
                                    const strValue = value.toString().toLowerCase();
                                    return strValue.includes(searchTerm);
                                });
                            }).map((item, index) => (
                                <tr key={index}>
                                    <td data-label="ID">{item.id}</td>
                                    <td data-label="Full Name">{item.full_name}</td>
                                    <td data-label="E-mail">{item.email}</td>
                                    <td data-label="Phone">{item.phone}</td>
                                    <td data-label="Turnover">{item.turnover}</td>
                                    <td>
                                        {/*<div className="deleteButton" onClick={() => deleteWaiter(item.id)}>*/}
                                        {/*    {isDeleting ? <LoadingAnimationDots/> : 'Delete'}*/}
                                        {/*</div>*/}
                                        {isDeleting[item.id] ?
                                            <LoadingAnimationDots/> :
                                            <button className="deleteButton"
                                                    onClick={() => deleteWaiter(item.id)}>Delete</button>
                                        }
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    :

                    <div style={{marginTop: 40, textAlign: "center"}}>
                        <LoadingAnimationCircular/>
                    </div>
                }
            </div>
        </div>
    </div>;
};

export default ListOfWaiters;
//
// import React, {useState, useEffect} from 'react';
// import PopupAdmin from "../../../ui-components/popup-admin/Popup-admin";
// import dots from "../../../assets/img/dots.png";
// import adminServices from "../../../services/admin";
// import toast from "react-hot-toast";
// import {
//     LoadingAnimationCircular
// } from "../../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
// import managerServices from "../../../services/manager";
// import {
//     LoadingAnimationDots
// } from "../../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
//
//
// export const ListOfWaiters = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [search, setSearch] = useState('');
//     const [listData, setListData] = useState(null);
//     const [isDeleting, setIsDeleting] = useState(false)
//
//     const deleteWaiter = async (id) => {
//         setIsDeleting(true)
//         try {
//             const result = await managerServices.deleteWaiter(id)
//             toast.success(result.data.message)
//             console.log(result)
//         } catch (error) {
//             toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
//         }
//         setIsDeleting(false)
//     }
//
//     const getAllWaitersOnMount = async () => {
//         try {
//             const result = await adminServices.getAllWaiters()
//             console.log(result)
//             setListData(result.data)
//         } catch (error) {
//             toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
//         }
//     }
//
//     useEffect(() => {
//         getAllWaitersOnMount()
//     }, [isModalOpen]);
//
//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//     }
//
//     return <div className='rightBlock1'>
//         <div className="waitersButton">
//             <div className="waitersHeader">
//                 List of waiters
//             </div>
//             <div className="addWaiter" onClick={toggleModal}>
//                 Add waiter
//             </div>
//             <PopupAdmin isOpen={isModalOpen} toggleModal={toggleModal}/>
//         </div>
//
//         <div className="waitersMain" style={{display: "block"}}>
//             <div className="searchAndDots">
//                 <div className="search">
//                     <button type="submit" className="searchButton">
//                         <i className="fa fa-search"/>
//                     </button>
//                     <input type="text" className="searchTerm"
//                            onChange={(e) => setSearch(e.target.value)}
//                            placeholder="What are you looking for?"/>
//
//                 </div>
//                 <div className="dots">
//                     <img src={dots} alt="dots"/>
//                 </div>
//             </div>
//             <div className="overflownContent">
//                 {listData ?
//                     <table>
//
//                         <thead>
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">Full Name</th>
//                             <th scope="col">E-mail</th>
//                             <th scope="col">Phone</th>
//                             <th scope="col">Turnover</th>
//                             <th scope='col'/>
//                         </tr>
//                         </thead>
//
//                         <tbody>
//
//                         {listData.filter((item) => {
//                             const searchTerm = search.toLowerCase();
//                             if (searchTerm === '') {
//                                 return true;
//                             }
//                             return Object.values(item).some(value => {
//                                 const strValue = value.toString().toLowerCase();
//                                 return strValue.includes(searchTerm);
//                             });
//                         }).map((item, i) => (
//
//                             <tr key={i}>
//                                 <th scope="row">{item.id}</th>
//                                 <td>{item.fullName}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.phone}</td>
//                                 <td>{item.turnover}</td>
//                                 <td>
//                                     <div className="deleteButton" onClick={() => deleteWaiter(item.id)}>
//                                         {isDeleting ? <LoadingAnimationDots/> : 'Delete'}
//                                     </div>
//                                 </td>
//                             </tr>))}
//                         </tbody>
//
//                     </table>
//                     :
//                     listData === {} ?
//                         'no data'
//                         :
//                         <div style={{marginTop: 40, textAlign: "center"}}>
//                             <LoadingAnimationCircular/>
//                         </div>
//                 }
//             </div>
//         </div>
//
//
//     </div>;
// }