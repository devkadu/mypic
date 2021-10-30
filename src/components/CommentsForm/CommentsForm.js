import React, { useState } from "react";
import api from '../../api/api.config'

const CommentsForm = ({ toggleForm, goiaba, updateComment}) => {
    const [comment, setComment] = useState("");
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const result = await api.post(`/comment/${goiaba}`, {comment})
            console.log(result)
            updateComment(result.data)
            setComment('')
        } catch (error) {
            console.error(error.response)
            setError(error.response.data.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                className="form-control"
                value={comment}
                onChange={({ target: { value } }) => setComment(value)}
            />
            <div >
                <button onClick={toggleForm}>
                    Cancelar
                </button>
                <button type="submit">
                    Enviar
                </button>
            </div>
            {error && (<p className='badge bg-danger mt-5'>{error}</p>)}
        </form>
    );
};

export default CommentsForm;