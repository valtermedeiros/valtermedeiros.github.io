import VMIconDark from '../storage/images/vm_icon_dark.svg';
import VMIconLight from '../storage/images/vm_icon_light.svg';

export default function Footer({darkMode}){
    return(
        <div className='m-10 p-10  rounded-2xl h-auto dark:bg-neutral-800 dark:text-neutral-500 bg-neutral-100 text-neutral-500'>
          <div className='grid'>
            <p className='mx-auto text-xs'>(Copyright) ©  {new Date().getFullYear()} Valter Medeiros - All rights reserved.</p>
            <img className='mx-auto h-10 mt-5' src={darkMode ? VMIconLight : VMIconDark}></img>
          </div>
        </div>
    );
}