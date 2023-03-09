import styled from 'styled-components'

export const Card = styled.div`
    width: 305px;
    height: 961px;
    border-radius: 7px;
    float:left;
    margin: 8px;
    background: #EAEAEA;
`

export const Title = styled.h1`
color: #72138A;
text-align: center;
`

export const ContentCard = styled.div`
width: 290px;
height: 231px;
background: #5BC76D;
box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
border-radius: 25px;
margin-left: 7.5px;
margin-top: 18px;
`

export const InputContentCard = styled.input`
    width: 260px;
    height: 50px;
    box-sizing: border-box;
    border: 3px solid #0088ff;
    border-radius: 25px;
    margin-left: 14px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 14px;
    background: #FFFFFF;
    color: #000000;

&:not(input) {
    min-height: 100px;
    padding-block: 1rem;
  }

&:hover{
    background: blue;
    color: #FFFFFF;
    border-color: #FFFFFF;
}
`

export const ContentTextArea = styled.textarea`
box-sizing: border-box;
border: 3px solid #0088ff;
border-radius: 25px;
width: 260.05px;
height: 121.26px;
margin-left: 14px;
padding: 14px;
background: #FFFFFF;
color: #000000;

&:hover{
    border-color: #FFFFFF;
    background: blue;
    color: #FFFFFF;
}
`

export const StyleAdd = styled.div`
background: #000DFF;
width: 30px;
height: 30px;
margin-left: 130px;
border-radius: 15px;
cursor: pointer;
`

export const StyleDireita = styled.div`
background: #000DFF;
width: 30px;
height: 30px;
border-radius: 15px;
cursor: pointer;
`

export const StyleEsquerda = styled.div`
background: #000DFF;
width: 30px;
height: 30px;
border-radius: 15px;
cursor: pointer;
`
export const Lixeira = styled.div`
background: #000DFF;
width: 30px;
height: 34px;
border-radius: 14px;
cursor: pointer;
`

export const Color = styled.div`
display: flex; 
justify-content: space-around;
`

export const EspaçoTitle = styled.div`
margin-top: -26px;
margin-left: 6px;
color: red;
`
export const EspaçoText = styled.div`
margin-top: -14px;
margin-left: 6px;
`

export const StyleEdit = styled.div`
margin-left: 240px;
margin-bottom: -50px;
cursor: pointer;
background: #000DFF;
width: 39px;
height: 34px;
border-radius: 30px;
`

export const StyleCancel = styled.button`
width: 94px;
height: 36px;
display: flex;
align-items: center;
border-radius: 30px;
background-color: #0088ff;
color: #FFFFFF;
border-color: #000DFF;
margin-left: 14px;
float: left;
cursor: pointer;
&:hover{
    background: blue;
    color: #FFFFFF;
    border-color:red;
}
`

export const StyleSalvar = styled.button`
width: 94px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30px;
background-color: #0088ff;
color: #FFFFFF;
border-color: #000DFF;
margin-left: 180px;
cursor: pointer;
&:hover{
    background: blue;
    color: #FFFFFF;
    border-color: #10FF00;
}
`