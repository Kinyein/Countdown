import styled from 'styled-components'

export const ImgFixed = styled.img`
    width: auto;
    height: 100%;
    position: fixed;
`
export const TitleDiv = styled.div`
    height: 250px;
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
    margin: 0 10px;
    user-select: none; 
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