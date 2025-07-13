import React, { FC } from "react";
import { FlexBox, Image, Text } from "spectacle";
import PropTypes from "prop-types";

export type ImageEnhancedProps = {
    src: string;
    alt?: string;
    label?: string;
    labelPosition?: "top" | "bottom";
} & React.ComponentProps<typeof Image>

export const ImageEnhanced: FC<ImageEnhancedProps> = ({
                                  src,
                                  alt = '',
                                  label,
                                  labelPosition = "bottom",
                                  ...imageProps
                              }) => (
    <FlexBox flexDirection="column" alignItems="center">
        {label && labelPosition === "top" && (
            <Text fontSize="24px" margin="0 0 0.5em 0">
                {label}
            </Text>
        )}
        <Image src={src} alt={alt} {...imageProps} />
        {label && labelPosition === "bottom" && (
            <Text fontSize="24px" margin="0.5em 0 0 0">
                {label}
            </Text>
        )}
    </FlexBox>
);