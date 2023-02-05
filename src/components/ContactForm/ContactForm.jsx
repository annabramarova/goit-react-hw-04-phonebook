import {Component} from "react";
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik} from "formik";
import { Input, Button, FormStyled, Label, Error} from './ContactForm.styled'

const initialValues = {
    name: '',
    number: '',
}

const schema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Name is required field'),
   number: Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .required('A phone number is required'),
 });

class ContactForm extends Component {

    handleSubmit = (values, { resetForm }) => {
        console.log(values);
        this.props.handleSubmit(values);
        resetForm();
    }
    
    // const { name, number } = values;
    // 
    render(){
        return (
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={this.handleSubmit}>
                <FormStyled autoComplete="off">
                    <Label htmlFor="name">Name
                        <Input type="text"
                            name="name"
                            required
                            placeholder="Enter name..."
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        ></Input>
                            <Error name="name" component="p"/>
                    </Label>
                    <Label htmlFor="number">Number
                        <Input type='tel'
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            placeholder="Enter phone number..."
                            >
                        </Input>
                        <Error name="number" component="p"/>
                    </Label>
                    <Button type='submit'>Add contact</Button>
                </FormStyled>
            </Formik>
        );
    }
}


ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;