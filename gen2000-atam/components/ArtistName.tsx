const ArtistName = (props : any) => {
  return (
    <div className={"pos " + props.className}>
        <img className={'absolute ' + props.titleclass} src='/master-name.png'/>
        <h1 className="relative master-label z-50">{props.title}</h1>
    </div>
  )
}

export default ArtistName