import { services } from '.';

export default () => {
  const PaymentList = async (page = 1, q) => {
    try {
      const response = await services.get('payments', {
        params: { page: page, search: q },
      });
      return response;
    } catch (e) {
      throw e;
    }
  };

  return {
    PaymentList,
  };
};
