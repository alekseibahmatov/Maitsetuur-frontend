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
            await getAllWaitersOnMount()
        } catch (error) {
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
        setIsDeleting(prevState => ({...prevState, [id]: false}));
    }

    /*   const filteredList = listData?.filter((item) =>
           Object.values(item).some((value) =>
               value.toString().toLowerCase().includes(search.toLowerCase())
           )
       );*/

    const getAllWaitersOnMount = async () => {
        try {
            const result = await adminServices.getAllWaiters()
            console.log(result)
            setListData(result.data)
        } catch (error) {
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    const filteredData = listData?.filter((item) => {
        const searchTerm = search.toLowerCase();
        if (searchTerm === '') {
            return true;
        }
        return Object.values(item).some(value => {
            const strValue = value?.toString().toLowerCase();
            return strValue?.includes(searchTerm);
        });
    });

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
            <PopupAdmin getAllWaitersOnMount={getAllWaitersOnMount} isOpen={isModalOpen} toggleModal={toggleModal}/>
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
                {!filteredData ?
                    <div className="loadingWrapper">
                        <LoadingAnimationCircular/>
                    </div>
                    : filteredData?.length === 0 ?
                        <h1 className="noDataList">No data...</h1>
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

                            {filteredData?.map((item, index) => (
                                <tr key={index}>
                                    <td data-label="ID">{item.id}</td>
                                    <td data-label="Full Name">{item.fullName}</td>
                                    <td data-label="E-mail">{item.email}</td>
                                    <td data-label="Phone">{item.phone}</td>
                                    <td data-label="Turnover">{item.turnover}</td>
                                    <td>
                                        <button
                                            className={isDeleting[item?.id] ? "deleteButton deleteButtonLoading" : "deleteButton"}
                                            onClick={() => deleteWaiter(item.id)}>
                                            {isDeleting[item.id] ?
                                                <LoadingAnimationDots/> :
                                                'Delete'
                                            }
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                }
            </div>
        </div>
    </div>;
};

export default ListOfWaiters;