import React, { FC, useState, useEffect, CSSProperties } from "react";
import { FlexBox } from "spectacle";
import {ImageEnhanced, ImageEnhancedProps} from "./ImageEnhanced";

type ImageItem = {
    src: string;
    alt?: string;
    label?: string;
};

type GalleryProps = {
    images: ImageItem[];
    labelPosition?: ImageEnhancedProps['labelPosition'];
    duration?: number;
    transitionDuration?: number;
    loop?: boolean;
    wideWidth?: string | number;
    wideHeight?: string | number;
} & Omit<React.ComponentProps<typeof ImageEnhanced>, "src" | "alt" | "label" | "labelPosition">;

export const Gallery: FC<GalleryProps> = ({
                                              images,
                                              labelPosition = "bottom",
                                              duration = 3000,
                                              transitionDuration = 500,
                                              loop = false,
                                              wideWidth = "100%",
                                              wideHeight = "100%",
    ...rest
                                          }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = window.setTimeout(() => {
            setCurrentIndex((idx) => {
                const next = idx + 1;
                if (next < images.length) return next;
                return loop ? 0 : idx;
            });
        }, duration);
        return () => clearTimeout(timer);
    }, [currentIndex, duration, images.length, loop]);

    const wrapperStyle: CSSProperties = {
        position: "relative",
        width: wideWidth,
        height: wideHeight,
        overflow: "hidden",
    };

    const slideStyle = (visible: boolean): CSSProperties => ({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transition: `opacity ${transitionDuration}ms ease-in-out`,
    });

    return (
        <FlexBox style={wrapperStyle}>
            {images.map(({ src, alt = "", label }, idx) => (
                <div key={idx} style={slideStyle(idx === currentIndex)}>
                    <ImageEnhanced
                        src={src}
                        alt={alt}
                        label={label}
                        labelPosition={labelPosition}
                        maxWidth="80%"
                        maxHeight="80%"
                        {...rest}
                    />
                </div>
            ))}
        </FlexBox>
    );
};
