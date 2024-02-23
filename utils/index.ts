export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "e78c112fc1msh1882f5f2dac387bp1f3632jsn274afd03621a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers }
  );

  const data = await response.json();

  return data;
}
