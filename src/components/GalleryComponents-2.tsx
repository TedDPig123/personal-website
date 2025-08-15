interface ExperienceProp {
    position:string;
    text:string;
    date:string;
    place:string;
    phoneTop:number;
    deskTop:number;
}

export default function GalleryComponents2({position, text, date, place, phoneTop, deskTop}:ExperienceProp){
    return(
        <>
            <div className='gallery-desktop-2 w-[400px] flex-col ml-10 mr-10'>
                <div className="flex justify-center" style={{ marginTop: `${deskTop * 0.25}rem` }}>
                    <div className='font-telegrafbold text-[16px]'>{date}</div>
                </div>
                <div className='flex justify-center'>
                    <div className='font-telegraf text-[12px] text-center w-50 mb-2'>{place}</div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[3px] h-16 bg-white'></div>
                </div>
                <div className='flex-col'>
                    <div className="flex justify-center">
                        <div className='min-h-28 gallery-text font-helveticaregular border-[3px] text-[12px] p-2 overflow-ellipsis w-[100%]'>{text}</div>
                    </div>
                    <div className='font-telegrafbold text-[16px] mb-20'>{position}</div>
                </div>
            </div>

            <div className='gallery-phone-2 w-[340px] flex-col mx-1 h-[70vw] hidden'>
                <div className="flex justify-center" style={{ marginTop: `${phoneTop * 0.25}rem` }}>
                    <div className='font-telegrafbold text-[16px]'>{date}</div>
                </div>
                <div className='flex justify-center'>
                    <div className='font-telegraf text-[12px] text-center w-50 mb-2'>{place}</div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[3px] h-16 bg-white'></div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="flex justify-center mb-2">
                        <div className='min-h-35 gallery-text font-helveticaregular border-[3px] text-[12px] p-2 overflow-ellipsis w-[100%] gallery-text-box'>{text}</div>
                    </div>
                    <div className='font-telegrafbold text-[16px] text-center'>{position}</div>
                </div>
            </div>
        </>
    )
}