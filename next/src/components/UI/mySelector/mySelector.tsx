import { useRef, useState } from 'react';

interface Props {
    options: string[];
    selectedOption: string;
    onOptionSelect: (option: string) => void;
}

const MySelector = ({ options, selectedOption, onOptionSelect } : Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    return (
        <div
            ref={selectRef}
            className="relative inline-block"
        >
            <div
                className={`flex justify-between items-center appearance-none w-full bg-[#D6DAE0] text-[#888F99] px-[10px] py-[6px] rounded shadow leading-tight focus:outline-none focus:shadow-outline ${isOpen ? 'rounded-b-none' : 'rounded-b-md'
                    }`}
                onClick={toggleDropdown}
            >
                <span className="text-[13px] font-normal leading-4 tracking-[0%]">{selectedOption}</span>
                {/* <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''
                        }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5 7l5 5 5-5H5z"
                        clipRule="evenodd"
                    />
                </svg> */}
{/* 
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.47812 3.93387C4.67178 3.30448 5.25329 2.875 5.91179 2.875H8C8.41421 2.875 8.75 2.53921 8.75 2.125C8.75 1.71079 8.41421 1.375 8 1.375H5.91179C4.59478 1.375 3.43177 2.23397 3.04446 3.49274L0.632663 11.3311C0.544715 11.6169 0.5 11.9143 0.5 12.2133V16.375C0.5 18.0319 1.84315 19.375 3.5 19.375H18.5C20.1569 19.375 21.5 18.0319 21.5 16.375V12.2133C21.5 11.9143 21.4553 11.6169 21.3673 11.3311L18.9555 3.49274C18.5682 2.23397 17.4052 1.375 16.0882 1.375H14C13.5858 1.375 13.25 1.71079 13.25 2.125C13.25 2.53921 13.5858 2.875 14 2.875H16.0882C16.7467 2.875 17.3282 3.30448 17.5219 3.93387L19.7345 11.125H16.8906C15.7543 11.125 14.7155 11.767 14.2073 12.7834L13.9511 13.2958C13.697 13.804 13.1776 14.125 12.6094 14.125H9.39058C8.82242 14.125 8.30302 13.804 8.04894 13.2958L7.79271 12.7834C7.28453 11.767 6.24574 11.125 5.10942 11.125H2.26547L4.47812 3.93387Z" fill="#475569" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.625C11.4142 0.625 11.75 0.960786 11.75 1.375V7.81434L13.4697 6.09467C13.7626 5.80178 14.2374 5.80178 14.5303 6.09467C14.8232 6.38756 14.8232 6.86244 14.5303 7.15533L11.5303 10.1553C11.2374 10.4482 10.7626 10.4482 10.4697 10.1553L7.46967 7.15533C7.17678 6.86244 7.17678 6.38756 7.46967 6.09467C7.76256 5.80178 8.23744 5.80178 8.53033 6.09467L10.25 7.81434V1.375C10.25 0.960786 10.5858 0.625 11 0.625Z" fill="#475569" />
                </svg> */}

                <svg className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.28033 9.28033C8.98744 9.57322 8.51256 9.57322 8.21967 9.28033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.719671C1.01256 0.426777 1.48744 0.426777 1.78033 0.719671L8.75 7.68934L15.7197 0.71967C16.0126 0.426777 16.4874 0.426777 16.7803 0.71967C17.0732 1.01256 17.0732 1.48744 16.7803 1.78033L9.28033 9.28033Z" fill="#1E293B" />
                </svg>
            </div>
            {isOpen && (
                <div className="absolute z-10 left-0 w-full bg-[#D6DAE0] rounded-b-md p-text block appearance-none text-[#888F99]  rounded leading-tight focus:outline-none focus:shadow-outline rounded-t-none">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="user-select-none pl-[10px] py-[6px] hover:bg-gray-100 last:rounded-b-md text-[13px] font-normal leading-4 tracking-[0%]"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MySelector;