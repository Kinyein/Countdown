import React from 'react'
import { CountDown, ImgFixed, Number, TextTime, Time, TimeDiv, TitleDiv } from '../styledComp/main'
import starsImg from '../img/bg-stars.svg'



const Main = () => {
    return (
        <div><ImgFixed src={starsImg} />
            <center>
            
                <TitleDiv>
                    <h2>WE'RE LAUNCHING SOON</h2>
                </TitleDiv>
                <CountDown>
                    <div>
                        <Time>
                            <Number>08</Number>
                        </Time>
                        <TextTime>DAYS</TextTime>
                    </div>

                    <div>
                        <Time>
                            <Number>23</Number>
                        </Time>
                        <TextTime>HOURS</TextTime>
                    </div>

                    <div>
                        <Time>
                            <Number>55</Number>
                        </Time>
                        <TextTime>MINUTES</TextTime>
                    </div>

                    <div>
                        <Time>
                            <Number>41</Number>
                        </Time>
                        <TextTime>SECONDS</TextTime>
                    </div>
                </CountDown>
            </center>
            
        </div>
    )
}

export default Main