import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div  className ={css.loader}>
    <RotatingLines
      strokeColor="#171241"
      strokeWidth="5"
      animationDuration="0.75"
      width="120"
      marginLeft="300px"
      visible={true}
      />
      </div>
  );
};
