import { t } from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const About = () => {
  const {t} = useTranslation()
  return (
    <div className="homebg text-white pt-4">
      <Navbar />
      <div className="container w-10/12 mx-auto">
        <section>
          <div className="aboutImg w-1/2 mx-auto overflow-hidden rounded-lg">
            <img
              className="rounded-lg transition-all hover:scale-[1.05]"
              src="/start_21.jpg"
              alt="start21"
            />
          </div>
          <p className="aboutTxt w-2/3 mx-auto py-4 text-center text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            reprehenderit nisi excepturi illo error. Iure est fugiat
            perspiciatis, fuga praesentium aliquid obcaecati placeat minus,
            suscipit maiores nulla, veritatis dolore ut sint sunt dolorem alias
            delectus vel non? Suscipit temporibus consequatur maiores sed quos
            ratione nobis, reiciendis, itaque dicta iure cum? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Obcaecati velit est incidunt
            earum perspiciatis. Distinctio tempora sequi possimus ducimus illo
            excepturi enim expedita facere voluptates mollitia! Est similique
            debitis quidem!
          </p>
        </section>
        <section>
          <h2 className="whyHeader text-center text-[50px] font-bold py-10">
            {t("CourseHeader")} :
          </h2>
          <div className='courseWrapper flex items-center gap-3 pb-7'>
            <img className='w-96' src="https://www.ielts.org/assets/img/mainLogo.svg" alt="ielts" />
            <p className='courseTxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa ut, ex molestias nisi omnis. Fugit minima aperiam sint porro quasi. Odio enim veniam delectus aliquam ipsam recusandae repudiandae aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio repellat deserunt expedita saepe tempora, sunt vitae rerum minima, accusantium dolores illo. Dolor a doloremque quibusdam sint quisquam eveniet sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reprehenderit?</p>
          </div>
          <div className='courseWrapper cw2 flex items-center gap-3 pb-7'>
            <p className='courseTxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa ut, ex molestias nisi omnis. Fugit minima aperiam sint porro quasi. Odio enim veniam delectus aliquam ipsam recusandae repudiandae aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio repellat deserunt expedita saepe tempora, sunt vitae rerum minima, accusantium dolores illo. Dolor a doloremque quibusdam sint quisquam eveniet sequi!</p>
            <img className='w-96' src="/intensive_Ielts.png" alt="ielts" />
          </div>
          <div className='courseWrapper flex items-center gap-3 pb-7'>
            <h2 className='dtmTxt engrussian text-6xl font-extrabold text-sky-500 text-center pb-3 [letter-spacing:7px]'>Английский<br/>язык</h2>
              
            <p className='courseTxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa ut, ex molestias nisi omnis. Fugit minima aperiam sint porro quasi. Odio enim veniam delectus aliquam ipsam recusandae repudiandae aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio repellat deserunt expedita saepe tempora, sunt vitae rerum minima, accusantium dolores illo. Dolor a doloremque quibusdam sint quisquam eveniet sequi!</p>
          </div>
          
          <div className='courseWrapper cw2 flex items-center gap-3 pb-7'>
            <p className='courseTxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa ut, ex molestias nisi omnis. Fugit minima aperiam sint porro quasi. Odio enim veniam delectus aliquam ipsam recusandae repudiandae aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio repellat deserunt expedita saepe tempora, sunt vitae rerum minima, accusantium dolores illo. Dolor a doloremque quibusdam sint quisquam eveniet sequi!</p>
            <img className='w-96 pl-2' src="/kids_english.png" alt="ielts" />
          </div>
          <div className='courseWrapper flex items-center gap-3 pb-7'>
            <h2 className='dtmTxt text-9xl font-extrabold [letter-spacing:27px]'>DTM</h2>
            <p className='courseTxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa ut, ex molestias nisi omnis. Fugit minima aperiam sint porro quasi. Odio enim veniam delectus aliquam ipsam recusandae repudiandae aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio repellat deserunt expedita saepe tempora, sunt vitae rerum minima, accusantium dolores illo. Dolor a doloremque quibusdam sint quisquam eveniet sequi!</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About
