import styled from "@emotion/styled";
//! Styled Div that allows for flex
export const Container = styled("div")((props) => ({
    display: "flex",
    flexDirection: props.column ? "column" : "row",
    flexWrap: props.wrap ? "wrap" : "nowrap",
    justifyContent: props.justify,
}));
export const InputContainer = styled(Container) `
  text-align: center;
  margin: 5px auto;
  width: 75%;
`;