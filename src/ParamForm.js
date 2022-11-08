function ParamForm({
  params,
  breakpoints
}) {
  return (<>
    <p>{params.baseFontSize}</p>
    <p>{breakpoints.mobile[0]}</p>
  </>)
}

export default ParamForm;