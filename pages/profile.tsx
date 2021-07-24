import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import { FaWhatsapp } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Profile = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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

        {/* //! Header */}
        <div>
          <div>
            <img
              className="h-32 w-full object-cover lg:h-48"
              src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt=""
            />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618297277/Captura_de_Pantalla_2021-04-13_a_la_s_1.58.22_b86epk.png"
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">Daniel Caldera</h1>
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => (window.location.href = 'mailto:bdcaldera@gmail.com')}
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    {/* <!-- Heroicon name: solid/mail --> */}
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Email</span>
                  </button>
                  {/* <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <FaWhatsapp className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                    <span>Whatsapp</span>
                  </button> */}
                </div>
              </div>
            </div>
            <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">Daniel Caldera</h1>
            </div>
          </div>
        </div>
        {/* //! Information */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Short Resume</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900">Daniel Caldera Rosas</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="mt-1 text-sm text-gray-900">bdcaldera@gmail.com</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Degree</dt>
                    <dd className="mt-1 text-sm text-gray-900">Biomedical Engineer</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">University</dt>
                    <dd className="mt-1 text-sm text-gray-900">Universidad De Guadalajara</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Especiality</dt>
                    <dd className="mt-1 text-sm text-gray-900">MERN/MEVN</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Experience</dt>
                    <dd className="mt-1 text-sm text-gray-900">+1 Years</dd>
                  </div>

                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900">Jerez, Zacatecas México</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      I’m a Biomedical Engineer from ”Universidad de Guadalajara”, My main language is Javascript and I
                      have preferences to use react family tecnologies like nextjs and eventually learning more front
                      technologies such as nuxtjs, React Native for iOS and Android apps, also I have knowledge creating
                      RESTapi's with Nodejs with Express or using new tecnologies trends such as GraphQL.
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            {/* <!-- Heroicon name: solid/paper-clip --> */}
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">cv.pdf</span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a
                              href="https://repaso.s3-us-west-1.amazonaws.com/cv_dc.pdf"
                              className="font-medium text-cyan-600 hover:text-cyan-500"
                              download
                            >
                              Download
                            </a>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Profile
