import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>О нас</h1>
      <p>Мы — команда разработчиков, создающих отличные веб-приложения!</p>
      <Link href="/">Назад на главную</Link>
    </div>
  );
};

export default About;