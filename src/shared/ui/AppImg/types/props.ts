import {SizesList} from "@/shared/types/size/SizesList";
import {ImageProps} from "next/dist/shared/lib/get-img-props";

export interface AppImgProps extends ImageProps {
    size?: SizesList,
    isDark?: boolean,
}

