export default function GalleryComponents1(){
    return(
        <>
            <div className="gallery-desktop-1">
                <div className='w-[400px] flex-col ml-10 mr-10'>
                    <div className='font-telegrafbold text-[16px] mt-26'>Undergraduate Course Assistant</div>
                    <div className='font-helveticaregular border-[3px] text-[12px] p-2 w-[100%] gallery-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </div>
                    <div className='flex justify-center'>
                        <div className='w-[3px] h-16 bg-white '></div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='font-telegrafbold text-[16px] mt-2'>Fall 2024</div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='font-telegraf text-[12px] text-center w-50'>Manning College of Information and Computer Sciences</div>
                    </div>
                </div>
            </div>

            <div className='gallery-phone-1 mx-1 w-[340px] hidden flex-col items-center justify-center h-[150vw]'>
                <div className='font-telegrafbold text-[16px]'>Undergraduate Course Assistant</div>
                <div className='gallery-text-box font-helveticaregular border-[3px] text-[12px] p-2 w-[100%] gallery-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</div>
                <div className='flex justify-center'>
                    <div className='w-[3px] h-16 bg-white'></div>
                </div>
                <div className='flex justify-center'>
                    <div className='font-telegrafbold text-[16px] mt-2'>Fall 2024</div>
                </div>
                <div className='flex justify-center'>
                    <div className='font-telegraf text-[12px] text-center w-50 mb-20'>Manning College of Information and Computer Sciences</div>
                </div>
            </div>
        </>
        
    )
}