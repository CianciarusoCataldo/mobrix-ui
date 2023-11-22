import React from "react";

import { DismissableCardProps } from "../../../types/components";
import { MobrixUiReactiveComponent } from "../../../types/global";

import { Button } from "../../atoms";
import { xIcon } from "./icons";

import cardComponent from "../Card/component";


const DismissableCardComponent: MobrixUiReactiveComponent<boolean, DismissableCardProps> = ({
    children,
    noFooterDivider,
    noDividers,
    noHeaderDivider,
    setValue,
    body,
    footer,
    header,
    dark,
    onClose,
    alwaysVisible
}) => cardComponent({
    children,
    noFooterDivider,
    noDividers,
    noHeaderDivider,
    header: (
        <div data-mobrix-ui-class="header-container">
            <Button
                dark={dark}
                unstyled
                additionalProps={{
                    "data-mobrix-ui-class": "card-dismiss-button",
                    "data-mobrix-ui-test": "card_dismiss_button"
                }}
                onClick={() => {
                    onClose()
                    !alwaysVisible && setValue(true)
                }}
            >
                {xIcon}
            </Button>
            <div data-mobrix-ui-class="header-element">{header}</div>
        </div>
    ),
    body,
    footer,
})

export default DismissableCardComponent;