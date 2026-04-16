import { useNavigate } from 'react-router-dom';

const Arrow = (props : any) => {
  const navigate = useNavigate();

  return (
    <img onClick={() => {
        navigate(props.link);
    }} className={props.className} src={'/'+ props.src +'-nav-arrow.svg'} alt="Arrow" />
  )
}

export default Arrow