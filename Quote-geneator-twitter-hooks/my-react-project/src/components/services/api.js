const getDataFromApi = () => {
  return fetch("https:game-of-thrones-quotes.herokuapp.com/v1/random")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDataFromApi,
};
