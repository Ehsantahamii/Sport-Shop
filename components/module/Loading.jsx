import './Loading.css'
const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center mt-[25%]'>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;