// @ts-nocheck
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import { CMS_NAME } from '../../lib/constants'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSpring, animated } from '@react-spring/web'

const files = [
  {
    title: 'Orbit',
    subtitle: 'basic react-tree example',
    source:
      'https://res.cloudinary.com/dtip8wwch/image/upload/v1625115716/Captura_de_Pantalla_2021-07-01_a_la_s_0.01.08_jmoazz.png',
    path: 'playground/orbit',
  },
  {
    title: 'Draggable List',
    subtitle: 'useStrings example',
    source:
      'https://res.cloudinary.com/dtip8wwch/image/upload/v1625120253/Captura_de_Pantalla_2021-07-01_a_la_s_1.17.18_phcxab.png',
    path: 'playground/drag',
  },
  {
    title: 'Tree Navbar',
    subtitle: 'useSpring example',
    source:
      'https://res.cloudinary.com/dtip8wwch/image/upload/v1625120984/Captura_de_Pantalla_2021-07-01_a_la_s_1.29.31_hilvax.png',
    path: 'playground/tree-navbar',
  },
]

const Playground = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [showAnimatedDivs, setShowAnimatedDivs] = React.useState(true)

  const [stateOne, toggleOne] = React.useState(true)
  const [stateTwo, toggleTwo] = React.useState(false)
  const [stateThree, toggleThree] = React.useState(false)

  const { xOne } = useSpring({
    from: { xOne: 0 },
    xOne: stateOne ? 1 : 0,
    config: { duration: 2000 },
  })

  const { xTwo } = useSpring({
    from: { xTwo: 0 },
    xTwo: stateTwo ? 1 : 0,
    config: { duration: 2000 },
  })

  const { xThree } = useSpring({
    from: { xThree: 0 },
    xThree: stateThree ? 1 : 0,
    config: { duration: 2000 },
  })

  React.useEffect(() => {
    setTimeout(() => {
      toggleOne(!stateOne)
    }, 2100)
    setTimeout(() => {
      toggleTwo(!stateTwo)
    }, 4000)
    setTimeout(() => {
      toggleTwo(false)
    }, 6000)
    setTimeout(() => {
      toggleThree(true)
      setShowAnimatedDivs(false)
    }, 8000)
  }, [])

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>

        {/* //! NavBar */}
        <nav className="bg-gradient-to-r from-light-blue-800 to-cyan-600">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <img
                      className="h-12 w-auto -mb-0 -mt-2"
                      src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618298901/danrepasologo_jpz4ll.png"
                      alt="repaso"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link href="/">
                      <a
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          router.pathname === '/'
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                        }`}
                        aria-current="page"
                      >
                        Home
                      </a>
                    </Link>

                    <Link href="/profile">
                      <a
                        href="/profile"
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          router.pathname === '/profile'
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                        }`}
                      >
                        Profile
                      </a>
                    </Link>

                    <Link href="/projects">
                      <a
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          router.pathname === '/projects'
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                        }`}
                      >
                        Projects
                      </a>
                    </Link>

                    <Link href="/playground">
                      <a
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          router.pathname === '/playground'
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                        }`}
                      >
                        Playground
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          {open && (
            <div className="sm:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href="/">
                  <a
                    href="/"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      router.pathname === '/'
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                    }`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>

                <Link href="/profile">
                  <a
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      router.pathname === '/profile'
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                    }`}
                  >
                    Profile
                  </a>
                </Link>

                <Link href="/projects">
                  <a
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      router.pathname === '/projects'
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                    }`}
                  >
                    Projects
                  </a>
                </Link>

                <Link href="/playground">
                  <a
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      router.pathname === '/playground'
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                    }`}
                  >
                    Playground
                  </a>
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* // react-spring */}
        {showAnimatedDivs && (
          <>
            <div
              className="box-border h-screen w-screen flex items-center justify-center"
              onClick={() => {
                toggleOne(true)
                toggleTwo(true)
                toggleThree(true)
                setShowAnimatedDivs(false)
              }}
            >
              <animated.div
                className="absolute text-7xl text-gray-900 sm:text-8xl md:text-9xl"
                style={{
                  opacity: xOne.to({ range: [0, 1], output: [0, 1] }),
                  scale: xOne.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1],
                  }),
                }}
              >
                hola
              </animated.div>
              <animated.div
                className="absolute text-md text-gray-900 mt-36"
                style={{
                  opacity: xOne.to({ range: [0, 1], output: [0, 1] }),
                  scale: xOne.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1],
                  }),
                }}
              >
                (Click to skip animation)
              </animated.div>
              <animated.div
                className="absolute text-center text-5xl text-gray-900 sm:text-7xl md:text-8xl"
                style={{
                  opacity: xTwo.to({ range: [0, 1], output: [0, 1] }),
                  scale: xTwo.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1],
                  }),
                }}
              >
                bienvenidx a mi playground
              </animated.div>
            </div>
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <animated.div
            className="max-w-8xl mx-auto"
            style={{
              opacity: xThree.to({ range: [0, 1], output: [0, 1] }),
              scale: xThree.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1],
              }),
            }}
          >
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-12"
            >
              {files.map((file, index) => (
                <li key={index} className="relative">
                  <div
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
                    onClick={() => router.push(file.path)}
                  >
                    <img
                      src={file.source}
                      alt=""
                      className="object-cover pointer-events-none group-hover:opacity-75"
                    />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {file.title}
                      </span>
                    </button>
                  </div>
                  <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                    {file.title}
                  </p>
                  <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                    {file.subtitle}
                  </p>
                </li>
              ))}
            </ul>
          </animated.div>
        </div>
      </Layout>
    </>
  )
}

export default Playground
