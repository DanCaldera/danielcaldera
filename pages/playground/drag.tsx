// @ts-nocheck
import Head from 'next/head'
import React, { useRef } from 'react'
import Layout from '../../components/layout'
import { CMS_NAME } from '../../lib/constants'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import AnimatedNavbar from '../../components/animated-navbar'
import { useRouter } from 'next/router'

const fn =
  (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
  (index: number) =>
    active && index === originalIndex
      ? {
          y: curIndex * 50 + y,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key: string) => key === 'y' || key === 'zIndex',
        }
      : {
          y: order.indexOf(index) * 50,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        }

function DraggableList({ items }: { items: object[] }) {
  const router = useRouter()

  const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    api.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder
  })
  return (
    <div className="content" style={{ height: items.length * 50 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => {
        return (
          <animated.div
            {...bind(i)}
            key={i}
            style={{
              zIndex,
              boxShadow: shadow.to((s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
              y,
              scale,
            }}
            children={items[i].title}
            onClick={() => router.replace(items[i].path)}
          />
        )
      })}
    </div>
  )
}

const Drag = () => {
  const items = [
    { title: 'Inicio', path: '/' },
    { title: 'Profile', path: '/profile' },
    { title: 'Projects', path: '/projects' },
    { title: 'Playground', path: '/playground' },
  ]
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>

        <AnimatedNavbar title="draggable list" />

        {/* //! Information */}

        <div className="box-border h-screen w-screen flex items-center justify-center">
          <DraggableList items={items} />
        </div>
      </Layout>
    </>
  )
}

export default Drag
