// @ts-nocheck
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import { CMS_NAME } from '../../lib/constants'
import AnimatedNavbar from '../../components/animated-navbar'

const TreeNav = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>

        <AnimatedNavbar title="tree navbar" />
      </Layout>
    </>
  )
}

export default TreeNav
