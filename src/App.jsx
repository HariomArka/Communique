import { useRef, useState } from 'react'
import './App.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Card from './components/Card'
import Moon from './assets/moon.svg'
import Sun from './assets/sun.svg'
import GMUN from './assets/GMUN logo.png'
import UNSC from './assets/unsc.jpg'
import UNHRC from './assets/UNHRC.jpg'
import ECOSOC from './assets/ecosoc.jpg'
import DISEC from './assets/disec.jpg'


function App() {
  const [darkmode, setdarkmode] = useState(false)

  const dark = useRef()
  const light = useRef()

  const handleDark = (e) => {
    console.log(e)
    setdarkmode(!darkmode)
  }

  const scrollToTop = (e) => {
    console.log(e)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const imagetexts1 = ["UNSC (The United Nations Security Council) is the most powerful organ of the United Nations. It is charged with maintaining peace and security between nations. The Security Council has the power to make decisions that member governments must carry out under the United Nations Charter. The decisions of the Council are known as UN Security Council Resolutions. For detailed info please click on the icon below",

    "UNHRC (The United Nations Human Right Council) withholds the responsibility to ensure and strengthen the promotion and protection of human rights on a global scale, as well as to address cases of human rights infringements and make recommendations upon them. It was established in 2006 with 47 member states.For detailed info please click on the icon below",

    "ECOSOC (Economic and Social Council) is dedicated to establishing global frameworks that promote a higher standard of living. Being established by the United Nations Charter in 1945 and consisting of 54 member states, ECOSOC is one of the six principal organs of the United Nations. The committee is responsible for finding solutions to various international economic, social, and environmental issues. Its role in encouraging the protection of human rights and fundamental freedoms was also remarkable.For detailed info please click on the icon below",

    "DISEC (Disarmament and International Security Committee) was created as the first of the Main Committees in the General Assembly when the charter of the United Nations was signed in 1945. The purpose of the committee in the General Assembly is to establish ‘general principles of cooperation in the maintenance of international peace and security, including the principles governing disarmament and the regulation of armaments, and also to give 'recommendations with regard to such principles to the Members or to the Security Council.' For detailed info please click on the icon below"]

  const agendaText = ["Addressing the proliferation of armed militias in destabalized countries", "Deliberation on the rights of individuals of the LGBTQIA + Community with special emphasis on Islamic States", "Building Sustainable and Resilient Infrastructure to achieve sustainable developement goals", "Revising the treaty on prohibition of nuclear weapons with special emphasis on the review committee."]

  const WhatHow = ["The United Nations Security Council (UNSC) is a committee at Model United Nations (MUN) conferences that simulates the real-life UNSC, which is one of the six main organs of the United Nations (UN). The UNSC is responsible for maintaining international peace and security, and it has the authority to take a wide range of actions, including imposing economic sanctions, authorizing the use of force, and establishing peacekeeping missions. At a MUN conference, the UNSC committee is made up of delegations from different countries, and each delegation represents a different member of the real-life UNSC. The delegations work together to address issues related to international peace and security, and they use the rules and procedures of the real-life UNSC as a guide. One of the main tasks of the UNSC committee at a MUN conference is to discuss and debate current global issues and come up with solutions to address them. This can involve researching and writing resolutions, negotiating with other delegations, and presenting and defending their positions.",

    "The United Nations Human Rights Council (UNHRC) is a body within the United Nations General Assembly that is responsible for promoting and protecting human rights around the world. The UNHRC is made up of 47 member states, which are elected by the General Assembly for a three-year term. The UNHRC is headquartered in Geneva, Switzerland, and meets three times a year for regular sessions, with additional special sessions as needed.At the Model United Nations (MUN), the UNHRC Committee is a simulated version of the real UNHRC, in which participants take on the role of delegates from different countries and work to address various human rights issues. In the UNHRC Committee at MUN, delegates have the opportunity to discuss, debate, and negotiate solutions to pressing human rights challenges facing the international community.One of the main functions of the UNHRC Committee at MUN is to consider and adopt resolutions that address human rights issues around the world. Delegates must work together to draft resolutions that reflect the positions of their respective countries and that are acceptable to a wide range of delegations. In addition to adopting resolutions, the UNHRC Committee at MUN may also engage in discussions with guest speakers, such as human rights experts or representatives from NGOs, in order to learn more about human rights challenges and possible solutions.",

    "The United Nations Economic and Social Council (ECOSOC) is one of the six main organs of the United Nations, and is responsible for promoting international economic and social cooperation and development. It is made up of 54 member states, which are elected by the General Assembly for a three-year term. The ECOSOC meets annually in July for a four-week session, and also holds special sessions as needed.At the Model United Nations (MUN), the ECOSOC Committee is a simulated version of the real ECOSOC, in which participants take on the role of delegates from different countries and work to address various economic and social issues facing the international community. In the ECOSOC Committee at MUN, delegates have the opportunity to discuss, debate, and negotiate solutions to pressing issues such as poverty, inequality, and sustainable development.One of the main functions of the ECOSOC Committee at MUN is to consider and adopt resolutions that address economic and social issues around the world. Delegates must work together to draft resolutions that reflect the positions of their respective countries and that are acceptable to a wide range of delegations. In addition to adopting resolutions, the ECOSOC Committee at MUN may also engage in discussions with guest speakers, such as experts in economics or development, in order to learn more about the challenges and opportunities facing the international community. ",

    "The United Nations Disarmament and International Security Committee (DISEC) is one of the six main committees of the United Nations General Assembly, and is responsible for promoting international peace and security through disarmament and non-proliferation efforts. The DISEC is made up of all member states of the United Nations, and meets regularly throughout the year to discuss issues related to disarmament, arms control, and international security.At the Model United Nations (MUN), the DISEC Committee is a simulated version of the real DISEC, in which participants take on the role of delegates from different countries and work to address various issues related to disarmament and international security. In the DISEC Committee at MUN, delegates have the opportunity to discuss, debate, and negotiate solutions to pressing issues such as nuclear proliferation, arms trade, and regional conflicts. One of the main functions of the DISEC Committee at MUN is to consider and adopt resolutions that address disarmament and international security issues around the world. Delegates must work together to draft resolutions that reflect the positions of their respective countries and that are acceptable to a wide range of delegations. In addition to adopting resolutions, the DISEC Committee at MUN may also engage in discussions with guest speakers, such as experts in international relations or security, in order to learn more about the challenges and opportunities facing the international community."]

  const officialLinks = ["https://www.un.org/securitycouncil", "https://www.ohchr.org/en/ohchr_homepage?gad_source=1&gclid=Cj0KCQjwhb60BhClARIsABGGtw-9yOQJELcrzNwiscjd_3R8GtS1YavRi5M4pzb3AMNlrrVB7aVTD2MaAiUrEALw_wcB", "https://ecosoc.un.org/en", "https://www.un.org/en/ga/first/index.shtml"]

  const heading = ["United Nations Security Council", "United Nations Human Rights Council", "Economic and Social Council", "Disarmament and International Security"]

  const [small, setsmall] = useState(false)

  return (
    <div className={`${darkmode ? 'bg-black' : 'bg-sky-100 text-black'}`} ref={dark}>

      <nav className='navbar flex items-center justify-between sticky top-0 backdrop-blur-sm z-50'>
        <div className='flex items-center'>
          <img className='w-[150px] gmunimage max-[620px]:w-[60px]' src={GMUN} alt="GMUN" />
          <div className='text-6xl font-serif committee  max-[620px]:text-xl'>Committees</div>
        </div>

        <ul className='flex text-2xl gap-[50px] mx-4 font-serif duration-700'>

          <Link className='cursor-pointer p-2 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700 max-[1100px]:hidden' to='card1' smooth={true} duration={700}>UNSC</Link>
          <Link className='cursor-pointer p-2 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700 max-[1100px]:hidden' to='card12' smooth={true} duration={700}>UNHRC</Link>
          <Link className='cursor-pointer p-2 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700 max-[1100px]:hidden' to='card3' smooth={true} duration={700}>ECOSOC</Link>
          <Link className='cursor-pointer p-2 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700 max-[1100px]:hidden' to='card4' smooth={true} duration={700}>DISEC</Link>

          <li className='hidden max-[1100px]:block' onClick={() => { setsmall(!small) }}>
            {small? 
            <svg  className='w-[30px] mt-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="rgb(248, 207, 131)" fill="rgb(248, 207, 131)">
            <path d="M10.247 6.7402C11.0734 7.56657 11.4866 7.97975 12.0001 7.97975C12.5136 7.97975 12.9268 7.56658 13.7531 6.74022L13.7531 6.7402L15.5067 4.98669L15.5067 4.98668C15.9143 4.5791 16.1181 4.37524 16.3302 4.25283C17.3965 3.63716 18.2748 4.24821 19.0133 4.98669C19.7518 5.72518 20.3628 6.60345 19.7471 7.66981C19.6247 7.88183 19.4209 8.08563 19.0134 8.49321L17.26 10.2466C16.4336 11.073 16.0202 11.4864 16.0202 11.9999C16.0202 12.5134 16.4334 12.9266 17.2598 13.7529L19.0133 15.5065C19.4209 15.9141 19.6247 16.1179 19.7471 16.3299C20.3628 17.3963 19.7518 18.2746 19.0133 19.013C18.2749 19.7516 17.3964 20.3626 16.3302 19.7469C16.1181 19.6246 15.9143 19.4208 15.5067 19.013L13.7533 17.2598L13.7533 17.2597C12.9271 16.4336 12.5135 16.02 12.0001 16.02C11.4866 16.02 11.073 16.4336 10.2468 17.2598L10.2468 17.2598L8.49349 19.013C8.08586 19.4208 7.88204 19.6246 7.67001 19.7469C6.60373 20.3626 5.7253 19.7516 4.98689 19.013C4.24836 18.2746 3.6374 17.3963 4.25303 16.3299C4.37545 16.1179 4.57926 15.9141 4.98689 15.5065L6.7404 13.7529C7.56678 12.9266 7.97996 12.5134 7.97996 11.9999C7.97996 11.4864 7.56656 11.073 6.74019 10.2466L4.98681 8.49321C4.57924 8.08563 4.37544 7.88183 4.25303 7.66981C3.63737 6.60345 4.24841 5.72518 4.98689 4.98669C5.72539 4.24821 6.60365 3.63716 7.67001 4.25283C7.88203 4.37524 8.0859 4.5791 8.49348 4.98668L8.49349 4.98669L10.247 6.7402Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>:
            <svg className='w-[30px] mt-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={`${darkmode ? "rgb(248, 207, 131)" : 'black'}`} fill="white">
              <path d="M4 5L20 5" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            }
          </li>

          <li className='cursor-pointer p-2 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700' onClick={handleDark}>
            {darkmode ? <img src={Moon} alt="" /> : <img src={Sun} alt="" />}</li>
        </ul>
      </nav>

      {small && <div className='small flex flex-col text-3xl font-bold gap-[50px] font-serif duration-700 fixed z-50 top-[25%]  w-[100%] h-[60vh] backdrop-blur-sm justify-center items-center min-[700px]:text-4xl  '>
        <Link className='cursor-pointer p-3 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700 ' to='card1' smooth={true} duration={700}>UNSC</Link>
        <Link className='cursor-pointer p-2 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700 ' to='card12' smooth={true} duration={700}>UNHRC</Link>
        <Link className='cursor-pointer p-2 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700 ' to='card3' smooth={true} duration={700}>ECOSOC</Link>
        <Link className='cursor-pointer p-2 rounded-lg hover:text-yellow-500 hover:bg-slate-600 duration-700 ' to='card4' smooth={true} duration={700}>DISEC</Link>
      </div>}

      <div className="cardContainer relative z-0 w-[100%] text-center flex flex-col justify-center items-center">
        <div id='card1'><Card imgsrc={UNSC} imagetext={imagetexts1[0]} agenda={agendaText[0]} what={WhatHow[0]} heading={heading[0]} officialLink={officialLinks[0]} /></div>

        <div id='card2'><Card imgsrc={UNHRC} imagetext={imagetexts1[1]} agenda={agendaText[1]} what={WhatHow[1]} heading={heading[1]} officialLink={officialLinks[1]} /></div>

        <div id='card3'><Card imgsrc={ECOSOC} imagetext={imagetexts1[2]} agenda={agendaText[2]} what={WhatHow[2]} heading={heading[2]} officialLink={officialLinks[2]} /></div>

        <div id='card4'><Card imgsrc={DISEC} imagetext={imagetexts1[3]} agenda={agendaText[3]} what={WhatHow[3]} heading={heading[3]} officialLink={officialLinks[3]} /></div>
      </div>


      <div className={`top w-max sticky bottom-5 left-[90%] p-3 bg-slate-800 cursor-pointer  rounded-lg ${darkmode ? 'bg-slate-800' : 'bg-sky-200'}`} >
        <svg onClick={scrollToTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="30px" color="rgb(248, 207, 131)" fill="none">
          <path d="M18 15C18 15 13.5811 9.00001 12 9C10.4188 8.99999 6 15 6 15" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="footer pb-8 flex mx-auto justify-center mt-9 max-[500px]:mt-2">
        <div className='p-5 rounded-full hover:bg-gray-800 duration-700 cursor-pointer'>
          <a href="https://www.facebook.com/people/Global-MUN-IIT-Kharagpur/100088188648912/?mibextid=ZbWKwL" target="_blank">
            <svg className='w-[70px] max-[500px]:w-[50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="none" fill="rgb(248, 207, 131)">
              <path fill={`${darkmode ? "rgb(248, 207, 131)" : 'black'}`} d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="none" strokeWidth="1.5" strokeLinejoin="round" />
            </svg></a>
        </div>

        <div className='p-5 rounded-full hover:bg-gray-800 duration-700 cursor-pointer'>
          <a href="https://www.instagram.com/gmun.iitkgp/" target="_blank">
            <svg className='w-[70px] max-[500px]:w-[50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color={`${darkmode ? "black" : 'rgb(224 242 254)'}`} fill="none">
              <path fill={`${darkmode ? "rgb(248, 207, 131)" : 'black'}`} d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="0" strokeLinejoin="round" />
              <path fill="none" d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path fill="none" d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg></a>
        </div>

        <div className={`p-5 rounded-full hover:bg-gray-800 duration-700 cursor-pointer`}><a href="https://x.com/name" target="_blank">
          <svg className='w-[70px] max-[500px]:w-[50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#000000" fill={`${darkmode ? "rgb(248, 207, 131)" : 'black'}`}>
            <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" strokeWidth="0" strokeLinejoin="round" />
          </svg></a>
        </div>
      </div>

    </div>
  )
}

export default App
