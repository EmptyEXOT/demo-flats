import Image from 'next/image'
import React, {FC} from 'react';
import {AppImgProps} from "@/shared/ui/AppImg/types/props";
import {SizesList} from "@/shared/types/size/SizesList";
import {Box} from "@mui/material";

export const AppImg: FC<AppImgProps> = ({src, size = SizesList.Large, alt, isDark, ...props}) => {
    return (
        <Box sx={isDark ? {backgroundColor: 'black'} : {}}>
            <Image src={src} alt={alt} {...props} style={ isDark ? {opacity: 0.5} : {}}>
            </Image>
        </Box>
    );
};

