export const ContactsList = ({ contacs, handleDelete }) => {
    return <ul>{contacs.map(contact => <li key={contact.id}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button type="button" onClick={() => handleDelete(contact.id)}>delete</button>
    </li>) }</ul>
}