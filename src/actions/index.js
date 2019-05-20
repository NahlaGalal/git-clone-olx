export function addUser (field, text) {
  const type = `ADD_${field.toUpperCase()}`;
  return {
    type,
    text
  }
}

export function checkValidity(state) {
  let validity = false;
  const filteration = Object.keys(state).filter(key => state[key]);
  if(filteration.length === 6) validity = true;
  console.log(validity)
  return {
    type: "VALID_SIGNUP",
    validity
  };
}