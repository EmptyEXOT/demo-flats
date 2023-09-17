import Image from 'next/image'
import React, {FC} from 'react';
import {AppImgProps} from "@/shared/ui/AppImg/types/props";
import {SizesList} from "@/shared/types/size/SizesList";

export const AppImg: FC<AppImgProps> = ({src, size = SizesList.Large, alt, ...props}) => {
    return (
        <Image src={src} alt={alt} {...props}>
        </Image>
    );
};

