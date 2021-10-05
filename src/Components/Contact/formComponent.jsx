import { SendSharp } from '@material-ui/icons';
import {useForm} from 'react-hook-form'

const FormComponent = () => {
const {handleSubmit,register,formState:{errors}} = useForm();
const sendValues = data => {
    alert(JSON.stringify(data))
}

return (
<section className='form-stration'>
<form onSubmit={handleSubmit(sendValues)}>
    <div className="fieldset flex-col">
       <input {...register("email", {required:"Come, on... That email is'nt correct"})}/>
        <label for='email'> Email </label>
       {errors.email && <span className='error'>{errors.email.message}</span>}
    </div>
    <div className="fieldset flex-col">
       <input id='title' {...register("title", {required:"Required"})}/>
        <label for='title'> Title/designation </label>
       {errors.title && <span className='error'>{errors.title.message}</span>}
    </div>
    <div className="fieldset flex-col">
       <textarea id='body' {...register("body", {required:"Come, on... That email is'nt correct"})}> </textarea>
        <label for='body'> Message </label>
       {errors.body && <span className='error'>{errors.body.message}</span>}
    </div>
    <div className='flex button'>
    <button type='submit'>Send</button>
    <SendSharp />
    </div>
</form>
</section>
    )
}

export default FormComponent



