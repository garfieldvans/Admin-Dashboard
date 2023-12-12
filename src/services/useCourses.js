import { services } from '.';

export default () => {
  const courses = async (page = 1, q) => {
    try {
      const response = await services.get('courses', {
        params: { page: page, search: q },
      });
      return response;
    } catch (e) {
      throw e;
    }
  };

  return {
    courses,
  };
};
