import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackBtn = styled(Link)`
  color: #696969;
  transition: color 250ms ease-in-out;

  &:hover {
    color: #47a76a;
  }

  &:active {
    color: #47a76a;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 24px;
`;

export const Avatar = styled.div`
  display: flex;
  gap: 15px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const EditBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const RemoveBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const EditButton = styled.div`
  min-width: 100px;
  text-align: center;
  background-color: rgba(26, 115, 232, 1);
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out;

  &:hover {
    box-shadow: -1px 0px 8px -2px rgba(0, 0, 0, 0.75);
  }

  &:active {
    box-shadow: -1px 0px 8px -2px rgba(0, 0, 0, 0.75);
  }
`;

export const RemoveButton = styled.div`
  min-width: 120px;
  text-align: center;
  background-color: rgba(212, 66, 53, 1);
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out;

  &:hover {
    box-shadow: -1px 0px 8px -2px rgba(0, 0, 0, 0.75);
  }

  &:active {
    box-shadow: -1px 0px 8px -2px rgba(0, 0, 0, 0.75);
  }
`;

// ===========

export const DetailsWrapper = styled.div`
  max-width: 520px;
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;

  h2 {
    font-size: 18px;
  }
`;

export const PhoneNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    text-decoration: none;
    color: rgba(59, 130, 246, 1);
  }
`;
