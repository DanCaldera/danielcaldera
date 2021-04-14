import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import { FaWhatsapp } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Projects = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
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
                  {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
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
                  {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
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
              </div>
            </div>
          )}
        </nav>
        {/* <img
          className="h-32 w-full object-cover lg:h-48"
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt=""
        /> */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-cyan-600 tracking-wide uppercase">
                Projects
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Personal and Private Projects.
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                When something is important enough, you do it even if the odds
                are not in your favor.
              </p>
              <p className="max-w-xl italic mx-auto text-base text-gray-500">
                - Elon Musk
              </p>
            </div>
          </div>
        </div>

        {/* // Projects */}
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618394670/Captura_de_Pantalla_2021-04-14_a_la_s_5.04.19_upmokb.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a
                        href="https://repasoenarm.com/"
                        className="hover:underline"
                      >
                        Web App and Mobile App
                      </a>
                    </p>
                    <a href="https://repasoenarm.com/" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        Repaso ENARM
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Web and Mobile apps to make medical students and doctors
                        to succeed in the ENARM test for medical specialization
                        in Mexico.
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Technologies: Nextjs, TailwindCss, Typescript, Stripe,
                        React Native (iOS and Android), Express and MongoDB
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">Daniel Caldera</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618297277/Captura_de_Pantalla_2021-04-13_a_la_s_1.58.22_b86epk.png"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Daniel Caldera
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2020-02-12">In Progress</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618393202/Captura_de_Pantalla_2021-04-14_a_la_s_4.39.52_kshvr2.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a
                        href="https://dumbhandles.xyz/"
                        className="hover:underline"
                      >
                        Web App
                      </a>
                    </p>
                    <a href="https://dumbhandles.xyz/" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        dumbhandles
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Viral Project to collect funds for LatinXMafia
                        foundation.
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Technologies: Nextjs, Firebase and Stripe
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="https://twitter.com/LatinxMafia">
                        <span className="sr-only">LatinXMafia</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618393413/81450251_atv0rf.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a
                          href="https://twitter.com/LatinxMafia"
                          className="hover:underline"
                        >
                          LatinXMafia
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2020-03-16">Mar 11, 2021</time>
                        {/* <span aria-hidden="true">&middot;</span> */}
                        {/* <span>6 min read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618397087/Captura_de_Pantalla_2021-04-14_a_la_s_5.44.34_djdmt0.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a
                        href="https://apps.apple.com/us/app/garlock/id1520124341"
                        className="hover:underline"
                      >
                        Mobile App
                      </a>
                    </p>
                    <a
                      href="https://apps.apple.com/us/app/garlock/id1520124341"
                      className="block mt-2"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        Garlock
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Mobile App for iOS and Android for the company leader in
                        sealing integrity
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Technologies: React Native, Typescript
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="https://twitter.com/BoschMexico">
                        <span className="sr-only">Bosch Mexico</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618300222/FhlJ8nmt_400x400_la7tud.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a
                          href="https://twitter.com/BoschMexico"
                          className="hover:underline"
                        >
                          Bosch Mexico
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2020-03-16">Jul, 2020</time>
                        {/* <span aria-hidden="true">&middot;</span> */}
                        {/* <span>6 min read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618394299/Captura_de_Pantalla_2021-04-14_a_la_s_4.58.08_kejw41.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a
                        href="https://www.sandiegored.com/es/noticias/186588/Programadores-Mexicanos-Desarrollan-Tecnologia-en-Hackathon-Durante-la-Pandemia"
                        className="hover:underline"
                      >
                        1st Place Hackify League (San Diego Red Mention)
                      </a>
                    </p>
                    <a
                      href="https://fans-app.vercel.app/movies"
                      className="block mt-2"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        MovieFans
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        WebApp developed for Hackify League obtaining first
                        place in tomatazos challenge
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Technologies: Create React App, Redux, GraphQL, MongoDB
                        and themoviedb API
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="https://www.facebook.com/hackifyLeague">
                        <span className="sr-only">Hackify League</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618396016/descarga_v1ayla.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a
                          href="https://www.facebook.com/hackifyLeague"
                          className="hover:underline"
                        >
                          Hackify League
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2020-03-16">Jun, 2020</time>
                        {/* <span aria-hidden="true">&middot;</span> */}
                        {/* <span>6 min read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <video
                    className="h-48 w-full"
                    src="https://res.cloudinary.com/dtip8wwch/video/upload/v1618337754/Grabaci%C3%B3n_de_pantalla_2021-04-13_a_la_s_13.14.13_szpk25.mov"
                    playsInline
                    loop
                    autoPlay={true}
                    muted
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a
                        href="https://repasoenarm.com/"
                        className="hover:underline"
                      >
                        Research
                      </a>
                    </p>
                    <a href="https://repasoenarm.com/" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        Myoelectric Signal Analysis for Neuromuscular Function
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Several projects related to HDEMG and EMG analysis with
                        MITACS program.
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Technologies: MATLAB
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="https://www.unb.ca/">
                        <span className="sr-only">
                          University of New Brunswick
                        </span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="http://www2.unb.ca/~alloyd1/UNBRED+BLACK.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        University of New Brunswick
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2020-03-10">Oct, 2019</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Projects
