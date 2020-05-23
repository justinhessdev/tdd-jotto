import styled from 'styled-components'

export const SearchDropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 13em;
  min-height: 40px;
`

export const SearchDropdownInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: white;
  font-size: 14px;
  color: #030303;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  cursor: text;
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(45deg, transparent 50%, #909090 50%),
    linear-gradient(135deg, #909090 50%, transparent 50%),
    linear-gradient(to right, #909090, #909090);
  background-position: calc(100% - 16px) calc(1em + 5px),
    calc(100% - 11px) calc(1em + 5px), calc(100% - 2em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 25px;
  background-repeat: no-repeat;
  outline: none;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    opacity: 0.9;
  }
`

export const SearchDropdownContent = styled.div`
  position: absolute;
  top: 40px;
  z-index: 999;
  width: 99%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  background-color: white;
`

type TSearchDropdownItem = {
  isActive: boolean
}

export const SearchDropdownItem = styled.div<TSearchDropdownItem>`
  cursor: pointer;
  padding: 0 3.5em 0 1em;
  text-align: left;
  color: #282c34;
  display: flex;
  align-items: center;
  min-height: 40px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : '400')};
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(0, 0, 0, 0.05)' : 'none'};
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
