import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
`;

export const PinButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin-left: 7px;
  cursor: pointer;
  font-size: 16px;
  color: #444;
  display: flex;
  align-items: center;

  outline: none;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #317efb;
  }
`;

export const Logo = styled.div`
  display: grid;
  place-items: center;
`;

export const Header = styled.header`
  background-color: #fefefe;
  border-bottom: 2px solid #dcdfe4;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TabList = styled.div`
  display: flex;
  height: 48px;
`;

export const TabItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 14px;
  color: #444;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #eff2f4;
  }

  &.active {
    background-color: #ffffff;
    border: 1px solid #cfd4db;
    border-bottom: none;
    box-shadow: 0 -2px 0 0 #317efb inset;
    color: #000;
  }
`;

export const Icon = styled.div`
  display: flex;
  font-size: 16px;
`;

export const OverflowMenu = styled.div`
  position: relative;

  &:hover .dropdown {
    display: block;
  }
`;

export const OverflowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  padding: 8px 12px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 48px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .dropdown-item {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background-color: #f0f2f5;
    }
  }
`;
