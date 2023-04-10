export const Filter = ({handleInputChange}) => {
    return (
        <>
            <h2>Find contacts by name</h2>
            <input
                type="text"
                name="filter"
                onChange={handleInputChange}
            />
        </>
    );
}