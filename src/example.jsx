import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";


function Example() {
    return (
        <div>
            <LazyLoadImage
                alt="example"
                height={1080}
                src="https://example.com/image.jpg"
                width={1920}
            />
        </div>
    );
}

export default Example;