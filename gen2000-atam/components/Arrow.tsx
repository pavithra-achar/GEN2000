import { useNavigate } from 'react-router-dom';

const Arrow = (props : any) => {
  const navigate = useNavigate();

  return (
    <img onClick={() => {
        navigate(props.link);
    }} className={props.className} src={'/'+ props.src +'-nav-arrow.png'} alt="Arrow" />
  )
}

export default Arrow