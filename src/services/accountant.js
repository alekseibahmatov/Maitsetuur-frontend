import http from "../utils/http-client";

const getReportData = (data) => {
    return http.get('/admin/report/' + data);
}

const getAllReports = () => {
    return http.get('/admin/report');
}

const downloadReport = (fileId) => {
    return http.get(`/file/download/${fileId}`);
}

const downloadAllReports = (userId) => {
    return http.get(`/file/download-all/${userId}`);
}

const methods = {
    getReportData,
    getAllReports,
    downloadAllReports,
    downloadReport
}

export default methods;
