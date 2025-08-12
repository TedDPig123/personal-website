import mainLogo from '../assets/geribydesign.png'
import linkedInLogo from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import question from '../assets/question.png'
import spotify from '../assets/spotify.png'
import youtube from '../assets/youtube.png'

import React, { useRef } from 'react'
import Typed from 'typed.js'
import { currentlyList } from '../content/CurrentlyList';

export default function Navbar(){
    const typedStuff = useRef(null);
    React.useEffect(() => {
        const typed = new Typed(typedStuff.current, {
            strings: [...currentlyList],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return(
        <section className="navbar fixed top-0 z-50 w-full flex-col">
            <div className="navbar-inner text-black border-b-1 flex font-telegraf h-[102px] bg-white">
                <div className='border-r-1 inline-block flex-shrink-0 justify-center'>
                    <img src={mainLogo} alt="Logo ('Geri by Design')" className='nav-logo h-[70px] w-auto m-4'/>
                </div>
                <div className='currently-doing border-r-1 flex pl-7 pr-5 align-center items-center text-[12px] shrink-10 whitespace-normal w-[18%]'>
                    <div className='w-[280px]'>
                        <div className='underline leading-[14px]'>I am currently . . .</div>
                        <span className='flex-col' ref={typedStuff} />
                    </div>
                </div>
                <ul className='menu-options flex items-center p-7 justify-around text-[16px] border-r-1 min-w-[410px] grow-10'>
                    <li id='about' className='cursor-pointer'>about me</li>
                    <li id='projects' className='cursor-pointer'>projects</li>
                    <li id='resume' className='cursor-pointer'>resume</li>
                    <li id='contact' className='cursor-pointer'>contact</li>
                </ul>
                <div className='logo-links flex text-[12px] ml-auto'>
                    <div className='top flex border-r-1'>
                        <div>
                            <div className='h-[50%] w-[50.5px] p-2 border-b-1 logo'>
                                <img src={linkedInLogo} alt="linkedin" className='logo-image h-full w-full' />
                            </div>
                            <div className='h-[50%] w-[50.5px] p-2 logo z-0'>
                                <img src={github} alt="github" className='logo-image h-full w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='prof-lessprof top flex border-r-1 shrink-2'>
                        <div>
                            <div className='p-3 flex items-center w-full justify-center h-[50%] border-b-1'>← Professional stuff</div>
                            <div className='p-3 flex items-center w-full justify-center h-[50%]'>Less-professional stuff →</div>
                        </div>
                    </div>

                    <div className='top flex border-r-1'>
                        <div>
                            <div className='h-[50%] w-[50.5px] p-2 border-b-1 logo'>
                                <img src={instagram} alt="instagram" className='logo-image h-full w-full' />
                            </div>
                            <div className='h-[50%] w-[50.5px] p-2 logo z-0'>
                                <img src={youtube} alt="youtube" className='logo-image h-full w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='top flex border-r-1'>
                        <div>
                            <div className='h-[50%] w-[50.5px] p-3 border-b-1 logo z-0'>
                                <img src={question} alt="random" className='logo-image h-full w-full' />
                            </div>
                            <div className='h-[50%] w-[50.5px] p-2 logo z-0'>
                                <img src={spotify} alt="spotify" className='logo-image h-full w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='hire-me font-editoriallight text-[35px] flex items-center justify-center select-none relative w-[150px]'>
                        <div className='hire-me-1 z-20 absolute text-center w-full'></div>
                        <div className='z-10 absolute text-center w-full'>Hire me!!!</div>
                        {/* <div className='hire-me-2 z-15 absolute w-full text-center font-helveticabold text-[30px] leading-[28px]'>You want to hire me...</div> */}
                    </div>
                </div>
                <div className='logo-links-phone flex text-[12px] hidden'>
                    <div className='top flex-col'>
                        <div>
                            <div className='border-b-1 logo p-1'>
                                <img src={linkedInLogo} alt="linkedin" className='logo-image ' />
                            </div>
                            <div className='logo z-0 p-1'>
                                <img src={github} alt="githubs" className='logo-image' />
                            </div>
                        </div>
                    </div>
                    <div className='top flex-col'>
                        <div>
                            <div className='border-b-1 border-l-1 logo p-1'>
                                <img src={instagram} alt="instagram" className='logo-image ' />
                            </div>
                            <div className='logo z-0 p-1 border-l-1'>
                                <img src={spotify} alt="spotify" className='logo-image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='nav-buffer w-full h-4 bg-white'></div>
        </section>
        
    )
}