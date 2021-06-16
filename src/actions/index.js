export const CHANGE_VALUE = 'CHANGE_VALUE';
export const REGISTRATION = 'REGISTRATION';


export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const registration = (value, name) => ({
  type: REGISTRATION,
  value,
  name,
})
