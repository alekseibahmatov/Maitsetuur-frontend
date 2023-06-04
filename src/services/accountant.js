import http from "../utils/http-client";


const getReportTransactionsData = (data) => {
    return http.get('/accountant/report/' + data + '/transactions');
}

const getAllReports = () => {
    return http.get('/accountant/report');
}

const downloadReport = (reportId) => {
    return http.get('/accountant/download/report/' + reportId);
}


const methods = {
    getReportTransactionsData,
    getAllReports,
    downloadReport
}

export default methods;
