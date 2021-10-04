import { Menu, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/outline'

const HeaderMenu = () => {
  return (
    <Menu as="div" className="relative sm:hidden">
      {({ open }) => (
        <>
          <Menu.Button>
            <MenuIcon className="link-icon" />
          </Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items
              static
              className="absolute right-0 z-10 flex flex-col py-3 truncate origin-top-right bg-teal-900 rounded shadow-md focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <Link href="#stints">
                    <a className="menu-item">Stints</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="#studies">
                    <a className="menu-item">Studies</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="#sidework">
                    <a className="menu-item">Sidework</a>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default HeaderMenu
