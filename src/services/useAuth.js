import { services } from '.';

export default () => {
  const signIn = async body => {
    // console.log(body);
    try {
      const response = await services.post('auth', body);
      // console.log(response);
      return response;
    } catch (e) {
      throw e;
    }
  };
  return {
    signIn,
  };
};
