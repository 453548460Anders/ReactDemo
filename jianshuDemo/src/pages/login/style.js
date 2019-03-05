import styled from 'styled-components'

export const LoginWrapper = styled.div`
    z-index: 0;
    top: 56px;
    right: 0;
    bottom: 0;
    left: 0;
    background: #eee;
    position: absolute;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 205px;
    margin: 120px auto;
    padding-top: 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    background: #fff
`;

export const Input = styled.input`
display: block;
    width: 200px;
    height: 35px;
    line-height: 35px;
    padding:0 10px;
    margin: 20px auto;
    color: #777
`;

export const Button = styled.div`
display: block;
    width: 220px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin: 20px auto;
    border-radius: 15px;
    background:#3194d0;
`;