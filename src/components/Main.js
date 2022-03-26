import React, { useEffect, useState } from 'react'
import { CountDown, ImgFixed, Number, TextTime, Time, TimeDiv, TitleDiv } from '../styledComp/main'
import starsImg from '../img/bg-stars.svg'

const Main = () => {

    const [date, setDate] = useState({
        remainTime: '',
        remainSeconds: '',
        remainMinutes: '',
        remainHours: '',
        remainDays: '',
        finalMessage: '',
    })

    const { remainTime, remainSeconds, remainMinutes, remainHours, remainDays, finalMessage } = date

    useEffect(() => {
        countDown('Mar 26 2022 18:30:00 GMT-0500')
        // endCountDown()
    }, [])


    const getRemainTime = finalDate => {
        const actualDate = new Date(),
            remainTime = (new Date(finalDate) - actualDate + 1000) / 1000,
            remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
            remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
            remainHours = ('0' + Math.floor(remainTime / 3600 % 60)).slice(-2),
            remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2)


        setDate({
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays
        })

        if (remainTime <= 1) {

            setDate({
                remainSeconds: '00',
                remainMinutes: '00',
                remainHours: '00',
                remainDays: '00',
                finalMessage: 'FIN DEL TIEMPO'
            })
        }


    }

    const countDown = finalDate => {
        const timerUpdate = setInterval(() => {

            getRemainTime(finalDate)

        }, 1000)
    }

    const endCountDown = () => {


    }


    return (
        <div>
            
            <ImgFixed src={starsImg} />

            <TitleDiv>
                <h2>WE'RE LAUNCHING SOON</h2>
            </TitleDiv>
            <CountDown>
                <div>
                    <Time>
                        <Number>{remainDays}</Number>
                    </Time>
                    <TextTime>DAYS</TextTime>
                </div>

                <div>
                    <Time>
                        <Number>{remainHours}</Number>
                    </Time>
                    <TextTime>HOURS</TextTime>
                </div>

                <div>
                    <Time>
                        <Number>{remainMinutes}</Number>
                    </Time>
                    <TextTime>MINUTES</TextTime>
                </div>

                <div>
                    <Time>
                        <Number>{remainSeconds}</Number>
                    </Time>
                    <TextTime>SECONDS</TextTime>
                </div>

            </CountDown>

            <div>
                <Number>{finalMessage}</Number>
            </div>

        </div>
    )
}

export default Main