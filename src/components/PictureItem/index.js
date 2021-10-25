import {ContainerPhotos} from './style';

/* const itens ={
    url: String,
    title: String,
} */

export const PictureItem = ({url, title}) =>{
    return(
        <ContainerPhotos>
            <img src={url} alt={title} />
            {title}
              </ContainerPhotos>
    )
}