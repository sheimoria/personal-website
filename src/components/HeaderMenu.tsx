import { Menu, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/outline'

const HeaderMenu = () => {
  return (
    <Menu as="div" className="relative sm:hidden">
      {({ open }) => (
        <>
          <Menu.Button className="p-3 text-gray-800 transition-colors bg-gray-100 rounded hover:text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:hover:text-white">
            <MenuIcon className="w-6 h-6" />
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
              className="absolute right-0 z-10 flex flex-col py-3 mt-3 truncate origin-top-right bg-white rounded shadow dark:bg-gray-900 focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <Link href="#education">
                    <a className="px-6 py-3 text-gray-800 transition-colors cursor-pointer dark:text-gray-100 hover:text-gray-900 dark:hover:text-white">
                      Education
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="#experience">
                    <a className="px-6 py-3 text-gray-800 transition-colors cursor-pointer dark:text-gray-100 hover:text-gray-900 dark:hover:text-white">
                      Experience
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="#extracurriculars">
                    <a className="px-6 py-3 text-gray-800 transition-colors cursor-pointer dark:text-gray-100 hover:text-gray-900 dark:hover:text-white">
                      Extracurriculars
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a className="px-6 py-3 text-gray-800 transition-colors opacity-50 cursor-pointer dark:text-gray-100 hover:text-gray-900 dark:hover:text-white">
                    Art&Design
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://drive.google.com/file/d/1qwqvHZsvSc15-skze3NwWs26OiqZc4tM/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 text-gray-800 transition-colors cursor-pointer dark:text-gray-100 hover:text-gray-900 dark:hover:text-white"
                  >
                    Resume
                  </a>
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
