import styled from 'styled-components'

export const ImgFixed = styled.img`
    width: auto;
    height: 100%;
    position: fixed;
`
export const TitleDiv = styled.div`
    margin: 6%;
    /* background-color: hsl(236, 21%, 26%); */
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(0, 0%, 100%);
`
export const CountDown = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    user-select: none; 
    margin-bottom: 100px;
    z-index: 10;
`
export const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: hsl(236, 21%, 26%);
    border-radius: 8px;
`
export const TextTime = styled.p`
    color: hsl(237, 18%, 59%);
    font-size: 13px;
`
export const Number = styled.h1`
    color: hsl(345, 95%, 68%);
    font-size: 65px;
`