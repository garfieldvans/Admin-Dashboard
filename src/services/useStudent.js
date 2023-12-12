import { services } from '.';

export default () => {
  const studentList = async (page = 1, q) => {
    try {
      const response = await services.get('students', {
        params: { page: page, search: q },
      });
      return response;
    } catch (e) {
      throw e;
    }
  };

  const addStudent = async body => {
    try {
      const response = await services.post('students', body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('res', response);
      return response;
    } catch (e) {
      console.log('err', e);
      throw e?.response?.data?.message;
    }
  };

  const deleteStudent = async studentId => {
    try {
      const response = await services.delete(`students/${studentId}`);
      console.log('response delete', response);
      return response;
    } catch (e) {
      console.log('error delete', e);
      throw e?.response?.data?.message;
    }
  };
  const updateStudent = async (studentId, body) => {
    try {
      const response = await services.put(`students/${studentId}`, body);
      return response;
    } catch (e) {
      throw e?.response?.data?.message;
    }
  };

  return {
    addStudent,
    studentList,
    updateStudent,
    deleteStudent,
  };
};
