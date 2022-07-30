import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ handleAdd }) => {
    const [category, setCategory] = useState("");

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!category.trim().length) return alert("Category can't be empty");
        handleAdd(category);
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name of the category"
                value={category}
                onChange={handleChange}
                maxLength="20"
            />
        </form>
    );
};

AddCategory.propTypes = {
    handleAdd: PropTypes.func.isRequired,
};

export default AddCategory;
