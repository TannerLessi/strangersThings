export const cohortName = "2209-FTB-PT-WEB-FT";
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

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

export async function fetchMe(token) {
  const response = await fetch(`${APIURL}users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}
