export const InputComponent = (props) => {
    return (
      <div className='mb-0'>
        {
          props.label && 
        <label className='form-label'>
          {props.label} {props.mandate && <span className='text-danger'> *</span>}
        </label>
        }
       
        {props.input}
      </div>
    )
  }