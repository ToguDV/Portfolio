import React from 'react'
import { BiCodeBlock, BiBot, BiGame, BiStar } from 'react-icons/bi';

const Offer = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-24'>
                <h1 className='text-4xl mb-10 font-bold text-white'>What I do</h1>
                <div className='offers-container flex'>
                    <div className='offer-tarjet offer-color1 ml-10 mr-10'>
                        <div className='tarjet-header mt-11 ml-5'>
                            <BiCodeBlock className='text-2xl mb-3'></BiCodeBlock>
                            <h1 className='text-xl font-bold'>WEB DEVELOPMENT</h1>
                        </div>
                        <p className='mt-5 ml-5'>I bring your vision to life while ensuring your website stands out in the digital landscape.</p>

                    </div>

                    <div className='offer-tarjet offer-color2 ml-10 mr-10'>
                        <div className='tarjet-header mt-11 ml-5'>
                            <BiBot className='text-2xl mb-3'></BiBot>
                            <h1 className='text-xl font-bold'>AUTOMATIZATION</h1>
                        </div>
                        <p className='mt-5 ml-5'>Reduce errors, and save time with my automation solutions. Experience the transformative power of automation for your business success.</p>

                    </div>

                    <div className='offer-tarjet offer-color3 ml-10 mr-10'>
                        <div className='tarjet-header mt-11 ml-5'>
                            <BiGame className='text-2xl mb-3'></BiGame>
                            <h1 className='text-xl font-bold'>GAME DEVELOPMENT</h1>
                        </div>
                        <p className='mt-5 ml-5'>From pixels to magic, I weave enchanting code to bring your wildest ideas to reality. Let's collaborate and create digital wonders that leave a lasting impression.</p>

                    </div>

                    <div className='offer-tarjet offer-color4 ml-10 mr-10'>
                        <div className='tarjet-header mt-11 ml-5'>
                            <BiStar className='text-2xl mb-3'></BiStar>
                            <h1 className='text-xl font-bold'>CUSTOM</h1>
                        </div>
                        <p className='mt-5 ml-5'>Your vision, meticulously crafted. Let's bring your unique project to life together.</p>

                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Offer
