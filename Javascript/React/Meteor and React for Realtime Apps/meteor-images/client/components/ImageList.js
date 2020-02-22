import React from 'react';
import ImageDetail from './ImageDetail';

const ImageList = (props) => {

	const validImages = props.images.filter(image => !image.is_album);

	const RenderedImages = validImages.map((image, i) => 
		<ImageDetail key={i} image={image} /> 
	)

	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

export default ImageList;