import { Error } from "./ErrorMessage.styled";

export const ErrorMessage = ({message}) => {
  return <Error>Oops! Something does wrong! <br /> <span>({message})</span></Error>;
}