import styled from "@emotion/styled/macro";

export const Button = styled.button`
    /* background: red; */
    background: ${(props) => props.background};
    &:hover{
        background: black;
        color: white;
    }
`;

export const Button2 = styled(Button)`
    /* color: green; */
    color: ${(props) => props.color};
`;
