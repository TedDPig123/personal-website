interface ExperienceProp {
    position:string;
    text:string;
    date:string;
    place:string;
}

export default function GalleryComponents1({position, text, date, place}:ExperienceProp){
    return(
        <>
            <div className="gallery-desktop-1">
                <div className='w-[400px] flex-col ml-10 mr-10'>
                    <div className='font-telegrafbold text-[16px] mt-26'>{position}</div>
                    <div className='min-h-28 font-helveticaregular border-[3px] text-[12px] p-2 w-[100%] gallery-text'>{text}</div>
                    <div className='flex justify-center'>
                        <div className='w-[3px] h-16 bg-white '></div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='font-telegrafbold text-[16px] mt-2'>{date}</div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='font-telegraf text-[12px] text-center w-50'>{place}</div>
                    </div>
                </div>
            </div>

            <div className='gallery-phone-1 mx-1 w-[340px] hidden flex-col items-center justify-center h-[150vw]'>
                <div className='font-telegrafbold text-[16px]'>{position}</div>
                <div className='min-h-35 gallery-text-box font-helveticaregular border-[3px] text-[12px] p-2 w-[100%] gallery-text'>{text}</div>
                <div className='flex justify-center'>
                    <div className='w-[3px] h-16 bg-white'></div>
                </div>
                <div className='flex justify-center'>
                    <div className='font-telegrafbold text-[16px] mt-2'>{date}</div>
                </div>
                <div className='flex justify-center'>
                    <div className='font-telegraf text-[12px] text-center w-50 mb-20'>{place}</div>
                </div>
            </div>
        </>
        
    )
}