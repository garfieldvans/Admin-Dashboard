import { services } from '.';

export default () => {
  const statistic = async () => {
    try {
      const response = await services.get('statistics');
      console.log(response);
      return response;
    } catch (e) {
      throw e;
    }
  };

  return {
    statistic,
  };
};
