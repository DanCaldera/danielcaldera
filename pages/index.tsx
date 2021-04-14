import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Index = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <div className="min-h-screen bg-gray-100">
          <header className="pb-24 bg-gradient-to-r from-light-blue-800 to-cyan-600">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                {/* <!-- Logo --> */}
                <div className="absolute left-0 py-5 flex-shrink-0 lg:static">
                  <a href="/">
                    <img
                      className="h-16 w-auto -mb-2"
                      src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618298901/danrepasologo_jpz4ll.png"
                      alt="repaso"
                    />
                  </a>
                </div>

                <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                  <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center pt-4">
                    {/* <!-- Left nav --> */}
                    <div className="hidden lg:block lg:col-span-2">
                      <nav className="flex space-x-4">
                        <Link href="/">
                          <a
                            className="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                            aria-current="page"
                          >
                            Home
                          </a>
                        </Link>

                        <Link href="/profile">
                          <a className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10">
                            Profile
                          </a>
                        </Link>

                        <a
                          href="#"
                          className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                        >
                          Projects
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>

                {/* <!-- Menu button --> */}
                <div className="absolute right-0 flex-shrink-0 lg:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button
                    onClick={() => setOpen(!open)}
                    type="button"
                    className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* <!--
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
              </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on mobile menu state. --> */}
            <div className="lg:hidden">
              {/* <!--
        Mobile menu overlay, show/hide based on mobile menu state.

        Entering: "duration-150 ease-out"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "duration-150 ease-in"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
              {open && (
                <div
                  className="z-20 fixed inset-0 bg-black bg-opacity-25"
                  aria-hidden="true"
                ></div>
              )}

              {open && (
                <div className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                    <div className="pt-3 pb-2">
                      <div className="flex items-center justify-between px-4">
                        <div>
                          <img
                            className="h-16 w-auto"
                            src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618298901/danrepasologo_jpz4ll.png"
                            alt="Workflow"
                          />
                        </div>
                        <div className="-mr-2">
                          <button
                            onClick={() => setOpen(!open)}
                            type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                          >
                            <span className="sr-only">Close menu</span>
                            {/* <!-- Heroicon name: outline/x --> */}
                            <svg
                              className="h-6 w-6"
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
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        <Link href="/">
                          <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                            Home
                          </a>
                        </Link>

                        <Link href="/profile">
                          <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                            Profile
                          </a>
                        </Link>

                        <Link href="/projects">
                          <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                            Projects
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-150 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}
            </div>
          </header>
          <main className="-mt-24 pb-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-4">
              <h1 className="sr-only">Profile</h1>
              {/* <!-- Main 3 column grid --> */}
              <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                {/* <!-- Left column --> */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                  {/* <!-- Welcome panel --> */}
                  <section aria-labelledby="profile-overview-title">
                    <div className="rounded-lg bg-white overflow-hidden shadow">
                      <div className="bg-white p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                          <div className="sm:flex sm:space-x-5">
                            <div className="flex-shrink-0">
                              <img
                                className="mx-auto h-20 w-20 rounded-full"
                                src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618297277/Captura_de_Pantalla_2021-04-13_a_la_s_1.58.22_b86epk.png"
                                alt="daniel caldera"
                              />
                            </div>
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                              <p className="text-sm font-medium text-gray-600">
                                Welcome to the page of
                              </p>
                              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                                Daniel Caldera
                              </p>
                              <p className="text-sm font-medium text-gray-600">
                                Biomedical Engineer && MERN Developer
                              </p>
                            </div>
                          </div>
                          <div className="mt-5 flex justify-center sm:mt-0">
                            <Link href="/profile">
                              <a className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                View profile
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* <!-- Actions panel --> */}
                  <section aria-labelledby="quick-links-title">
                    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                      <h2 className="sr-only" id="quick-links-title">
                        Quick links
                      </h2>

                      <div className="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <div>
                          <span className="rounded-lg inline-flex p-3 bg-teal-50 text-light-blue-700 ring-4 ring-white">
                            <FaGithub className="h-6 w-6" />
                          </span>
                        </div>
                        <div className="mt-8">
                          <h3 className="text-lg font-medium">
                            <a
                              href="https://github.com/DanCaldera"
                              className="focus:outline-none"
                            >
                              {/* <!-- Extend touch target to entire panel --> */}
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                              Github Account
                            </a>
                          </h3>
                          <p className="mt-2 text-sm text-gray-500">
                            All public repositories to support the programming
                            community.
                          </p>
                        </div>
                        <span
                          className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                          aria-hidden="true"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                          </svg>
                        </span>
                      </div>

                      <div className="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <div>
                          <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="mt-8">
                          <h3 className="text-lg font-medium">
                            <a href="#" className="focus:outline-none">
                              {/* <!-- Extend touch target to entire panel --> */}
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                              Personal Projects
                            </a>
                          </h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Public and private actual projects
                          </p>
                        </div>
                        <span
                          className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                          aria-hidden="true"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </section>
                </div>

                {/* <!-- Right column --> */}
                <div className="grid grid-cols-1 gap-4">
                  {/* <!-- Announcements --> */}
                  <section aria-labelledby="announcements-title">
                    <div className="rounded-lg bg-white overflow-hidden shadow">
                      <div className="p-6">
                        <h2
                          className="text-base font-medium text-gray-900"
                          id="announcements-title"
                        >
                          Announcements
                        </h2>
                        <div className="flow-root mt-6">
                          <ul className="-my-5 divide-y divide-gray-200">
                            <li className="py-5">
                              <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                <h3 className="text-sm font-semibold text-gray-800">
                                  <a
                                    href="https://repasoenarm.com"
                                    className="hover:underline focus:outline-none"
                                  >
                                    {/* <!-- Extend touch target to entire panel --> */}
                                    <span
                                      className="absolute inset-0"
                                      aria-hidden="true"
                                    ></span>
                                    Open Beta of Repaso ENARM App
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                  Web and Mobile apps to make medical students
                                  and doctors to succeed in the ENARM test for
                                  medical specialization in Mexico.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="mt-6">
                          <a
                            href="#"
                            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View all
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </section>

                  {/* <!-- Recent Hires --> */}
                  <section aria-labelledby="recent-hires-title">
                    <div className="rounded-lg bg-white overflow-hidden shadow">
                      <div className="p-6">
                        <h2
                          className="text-base font-medium text-gray-900"
                          id="recent-hires-title"
                        >
                          Jobs
                        </h2>
                        <div className="flow-root mt-6">
                          <ul className="-my-5 divide-y divide-gray-200">
                            <li className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618300062/OWMGZAL3_400x400_lvqjgx.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    Coolhumans Studio
                                  </p>
                                  <p className="text-sm text-gray-500 truncate">
                                    @coolhumansxyz
                                  </p>
                                </div>
                                <div>
                                  <a
                                    href="https://twitter.com/coolhumansxyz"
                                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                  >
                                    View
                                  </a>
                                </div>
                              </div>
                            </li>

                            <li className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618393413/81450251_atv0rf.png"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    LatinXMafia
                                  </p>
                                  <p className="text-sm text-gray-500 truncate">
                                    @LatinXMafia
                                  </p>
                                </div>
                                <div>
                                  <a
                                    href="https://twitter.com/LatinxMafia"
                                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                  >
                                    View
                                  </a>
                                </div>
                              </div>
                            </li>

                            <li className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://res.cloudinary.com/dtip8wwch/image/upload/v1618300222/FhlJ8nmt_400x400_la7tud.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    Bosch Mexico
                                  </p>
                                  <p className="text-sm text-gray-500 truncate">
                                    @BoschMexico
                                  </p>
                                </div>
                                <div>
                                  <a
                                    href="https://twitter.com/BoschMexico"
                                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                  >
                                    View
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="mt-6">
                          <a
                            href="#"
                            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View all
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
              <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
                <span className="block sm:inline">
                  &copy; 2021 Daniel Caldera.
                </span>{' '}
                <span className="block sm:inline">All rights reserved.</span>
              </div>
            </div>
          </footer>
        </div>
      </Layout>
    </>
  )
}

export default Index
