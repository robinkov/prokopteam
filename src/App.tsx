import prokopLogo from '@/assets/images/logo.svg'
import prokopLogoWhite from '@/assets/images/logo-white.svg'

function App() {
  return (
    <>
      <div className='space-y-2 py-5'>
        <img src={prokopLogo} width={300} className='mx-auto dark:hidden'></img>
        <img src={prokopLogoWhite} width={300} className='mx-auto not-dark:hidden'></img>
        <div className='text-center [&_h1]:text-2xl [&_h3]:text-lg'>
          <h1 className='text-2xl'>PRO-KOP TEAM d.o.o.</h1>
          <h3>Savska ulica 14, Javorje</h3>
          <h3>OIB: 58819809163</h3>
        </div>
      </div>
      <div className='w-fit mx-auto [&_h1]:text-xl [&_h3]:italic [&_h3]:text-blue-500 [&_h3]:underline [&_h3]:text-lg space-y-4 pb-5'>
        <div>
          <h1>Bruno Kovačić</h1>
          <h3><a href="tel:+38598236858">+385 98 236 858</a></h3>
          <h3><a href="mailto:Bruno Kovačić<bruno.kovacic@prokopteam.hr>">bruno.kovacic@prokopteam.hr</a></h3>
        </div>
        <div>
          <h1>Tomislav Šoštarić</h1>
          <h3><a href="tel:+385995292129">+385 99 529 2129</a></h3>
          <h3><a href="mailto:Tomislav Šoštarić<tomislav.sostaric@prokopteam.hr>">tomislav.sostaric@prokopteam.hr</a></h3>
        </div>
      </div>
    </>
  )
}

export default App
