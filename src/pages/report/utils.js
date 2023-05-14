import accountantServices from "../../services/accountant";
import toast from "react-hot-toast";


export const downloadReportBlobFile = async (reportData, endPointType) => {
    try {
        const result = await accountantServices.downloadReport(reportData[endPointType], endPointType);
        const blob = new Blob([result.reportData], {type: 'application/pdf'});
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
