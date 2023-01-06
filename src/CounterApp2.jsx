import PropTypes from 'prop-types';

export const CounterApp2 = ({anio}) => {
  return (
    <p>{anio}</p>
  );
}

CounterApp2.prototypes = {
    anio: PropTypes.number.isRequired
}
