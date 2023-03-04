import adminServices from "../../../services/admin";
import toast from "react-hot-toast";

const MAX_FILENAME_LENGTH = 15;

export const downloadBlobFile = async (restaurantData, endPointType, blobType) => {
    try {
        const result = await adminServices.downloadFile(restaurantData[endPointType], endPointType);
        const blob = new Blob([result.data], {type: blobType});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    } catch (error) {
        console.log(error.code);
        toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
    }
}

export const truncateFilename = (filename) => {
    const extension = filename.slice(filename.lastIndexOf("."));
    const truncatedFilename = filename.substr(0, MAX_FILENAME_LENGTH - extension.length);
    return truncatedFilename + "..." + extension;
}