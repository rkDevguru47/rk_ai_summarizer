const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={logo} alt='rk_logo' className='w-20 h-20 object-contain' /> */}
          
        <button
          type='button'
          onClick={() =>
            window.open("https://rishu47.vercel.app/", "_blank")
          }
          className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
        >
          RK
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT 3.5-Turbo</span>
      </h1>
      <h2 className='desc'>
      RK-Summize is an open-source article summarizer that helps you simplify your reading by transforming lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
