export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "8a4fb34455msh85011b9a2e69348p1de8fajsnd46c55d48a88",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json;

  return result;
}
