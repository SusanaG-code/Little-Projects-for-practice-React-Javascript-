const getDataFromApi = () => {
  return fetch(
    "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0374b0434bmshc0375fbb43550a8p1e5297jsn0ffaa68126d8",
        "x-rapidapi-host":
          "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default {
  getDataFromApi: getDataFromApi,
};
