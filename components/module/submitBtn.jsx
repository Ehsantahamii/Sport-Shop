"use client"
import './submitBtn.css'
import { useFormStatus } from 'react-dom'

const SubmitBtn = ({ title, style }) => {
    const { pending } = useFormStatus();
    return (
        <button type='submit' disabled={pending} className={style}>

            {pending &&
                <div className="lds-ring ml-4"><div></div><div></div><div></div><div></div></div>
            }
            {title}

        </button>
    );
};

export default SubmitBtn;