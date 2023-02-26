import  styled  from "@emotion/styled";

export const ItemTd = styled.td`
    padding: 10px;
    border: 1px solid #212121;
    background-color: #f3f2f2;

`
export const HeadTh = styled.th`
    font-weight: 600;
    padding: 10px;
    border: 1px solid #212121;
    background-color: #2acdff;
`
export const TransactionHistoryTable = styled.table`
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-align: center;
    background-color: #e4e3e3;
    width: 600px;
    font-family: 'Roboto', sans-serif;
    border-radius: 6px;
    box-shadow:
      0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
      margin-top: 40px;
      margin-bottom: 40px;
      
      &:hover{
    scale: 1.05;
    cursor: pointer;
}
`
