import { COLORS } from '../../styles/style';
import styled from 'styled-components';

export const HeaderConstainer = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Name = styled.p`
    margin: 0;
    margin-top: 20px;
    font-weight: bold;
    color: ${COLORS.nameTextColor};
`;

export const LogoutButton = styled.button`
    margin: 20px 0 0 0;
    background: transparent;
    border: none;
    color: ${COLORS.buttonColor};
    cursor: pointer;
`;

