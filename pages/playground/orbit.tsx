// @ts-nocheck
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import LayoutBlack from '../../components/layout-black'
import { CMS_NAME } from '../../lib/constants'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as THREE from 'three'

const OrbitControls = require('three-orbit-controls')(THREE)

extend({ OrbitControls })

const Cube = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent
      />
    </mesh>
  )
}

const Scene = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()
  return (
    <>
      <Cube />
      <orbitControls args={[camera, domElement]} />
    </>
  )
}

function Box(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Playground = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <LayoutBlack>
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

        {/* //! Information */}

        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
        <Canvas>
          <Scene />
        </Canvas>
      </LayoutBlack>
    </>
  )
}

export default Playground
