import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
export const InfoCard = ({ title, text }) => {
  return (
    <div className='bg-[rgba(164,161,161,0.10)] min-h-[300px] rounded-[16px] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[1.9px] border-[1px] border-[solid] border-[rgba(169,159,159,0.25)]'>
      <div className='flex flex-col gap-10 py-5 px-10 items-start'>
        <FontAwesomeIcon
          fade={true}
          color='gray'
          size='xl'
          icon={faCircleInfo}
        />
        <div className='flex flex-col gap-2'>
          <h4 className='text-white'>{title}</h4>
          <p className='text-[#a3a3a3]'>{text}</p>
        </div>
      </div>
    </div>
  );
};
