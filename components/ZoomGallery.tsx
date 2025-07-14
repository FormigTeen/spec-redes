import React, { FC, ReactNode } from "react";
import { FlexBox, Stepper } from "spectacle";

interface ZoomGalleryProps {
    children: ReactNode[];
    zoomScale?: number;
    shrinkScale?: number;
    duration?: number;
    easing?: string;
}

export const ZoomGallery: FC<ZoomGalleryProps> = ({
                                                      children,
                                                      zoomScale = 1.2,
                                                      shrinkScale = 0.8,
                                                      duration = 500,
                                                      easing = "ease-in-out",
                                                  }) => (
    <Stepper values={children.map((_, idx) => idx)}>
        {(currentIndex) => (
            <FlexBox width="100%" justifyContent="space-around" height="100%">
                {React.Children.map(children, (child, idx) => (
                    <FlexBox
                        key={idx}
                        flex="1"
                        justifyContent="center"
                        alignItems="center"
                        style={{
                            transform:
                                idx === currentIndex
                                    ? `scale(${zoomScale})`
                                    : `scale(${shrinkScale})`,
                            transition: `transform ${duration}ms ${easing}`,
                            zIndex: idx === currentIndex ? 1 : 0,
                        }}
                    >
                        {child}
                    </FlexBox>
                ))}
            </FlexBox>
        )}
    </Stepper>
);
