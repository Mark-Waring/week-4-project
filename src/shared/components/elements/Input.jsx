import styled from "@emotion/styled";
import { GenericElement } from "./GenericElement";
export const Input = styled(GenericElement)((props) => ({
    borderRadius: props.rounded ? "10px" : "",
    borderColor: props.theme.colors.primary,
})).withComponent("input");