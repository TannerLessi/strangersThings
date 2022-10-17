const cohortName = "2209-FTB-PT-WEB-FT";
const APIURL = `https://strangers-things.herokuapp.com/api${cohortName}/`;

export async function registerUser(username, password) {
  const response = await fetch(`${APIURL}users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const result = await response.json();
  return result;
}
