import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import api from "../../api/api.config"
import CommentsForm from "../CommentsForm/CommentsForm"
import { SingleGallery } from "./style"



 const SinglePic=(props)=>{
     const {id} = useParams()
    

     const [picture, setPicture] = useState();
     const [loading, setLoading] = useState(true);
     const [showForm, setShowForm] = useState(false)
    
     useEffect(() => {
         (async()=> {
            try {
                const result = await api.get(`/picture/${id}`);
                setPicture(result.data);
                console.log(result)
            } catch (error) {
                console.error(error.response);
          } finally {
                   setLoading(false);
               }
           })();
       }, []);
     

     const toggleForm = () => {
        setShowForm(!showForm);
    };

    const updateComment = (newComment) => {
        setPicture({...picture, comment: [...picture.comment, newComment]});
    };






    return (
        <SingleGallery>

            {loading ? (
                <div>
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div>
                    <div>
                        <h2>{picture.title}</h2>
                        <img  src={picture.url} alt={picture.title} />
                    </div>
                    
        
            

                    <div>
                        <h6>Reviews:</h6>
                        {picture.comment && picture.comment.map((comment) => (
                            <div key={comment._id}>
                                <h5>{comment.comment}</h5>
                            </div>
                        ))}
                        {showForm ? (
                            <CommentsForm
                                toggleForm={toggleForm}
                                goiaba={id}
                                updateReviews={updateComment}
                            />
                        ) : (
                            
                            <button
                                onClick={toggleForm}
                                
                            >
                                Comentar
                            </button>
                        )}

                    </div>
                    </div>
                
            )}



        </SingleGallery>
    );
};

export default SinglePic