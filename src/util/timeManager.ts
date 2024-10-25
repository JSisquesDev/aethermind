import moment from "moment";

/**
 * Obtiene el año actual.
 *
 * @returns {number} El año actual como un número de cuatro dígitos.
 */
const getCurrentYear = () => {
  return moment().year();
};

export default getCurrentYear;
