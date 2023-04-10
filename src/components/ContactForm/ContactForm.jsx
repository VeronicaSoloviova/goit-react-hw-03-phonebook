import { Component } from "react";
import { nanoid } from "nanoid";

export class ContactForm extends Component {
    state = { name: '', number: '', }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit({ ...this.state, id: nanoid() })
        this.setState({name: "", number: ""})
    }
    
    render() {
        const { name, number } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleInputChange}
                />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleInputChange}
                    />
                </label>
            <button type="submit">Add contact</button>
        </form>
    )
    }
}



 
