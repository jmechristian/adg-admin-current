'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import useAuthStore from '@/store/useAuthStore';
import { usePathname } from 'next/navigation';
import useLayoutStore from '@/store/useLayoutStore';
import ProjectCreateModal from '@/components/shared/ProjectCreateModal';
import './globals.css';

const navigation = [
  { name: 'All', href: '/', current: false },
  { name: 'Architecture', href: '/architecture', current: false },
  {
    name: 'Interiors',
    href: '/interiors',
    current: false,
  },
  { name: 'Branding', href: '/branding', current: false },
  { name: 'Residential', href: '/residential', current: false },
  { name: 'Millwork', href: '/millwork', current: false },
  { name: 'Map', href: '/map', current: false },
  { name: 'Templates', href: '/templates', current: false },
  { name: 'Gallery', href: '/media', current: false },
  {
    name: 'Aux',
    href: '/aux',
    current: false,
    pages: [
      { name: 'Services', href: '/aux/services', current: false },
      { name: 'Studio', href: '/aux/studio', current: false },
      { name: 'Inquire', href: '/aux/inquire', current: false },
      { name: 'Home', href: '/aux/home', current: false },
    ],
  },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const pathname = usePathname();
  const isModalOpen = useLayoutStore((state) => state.isModalOpen);
  const toggleModal = useLayoutStore((state) => state.toggleModal);

  const currentNavigation = navigation.map((item) => ({
    ...item,
    current: pathname === item.href,
  }));

  return (
    <html lang='en'>
      <body className='bg-neutral-100'>
        <div className='min-h-full'>
          <Disclosure
            as='nav'
            className='bg-gray-900 py-2 px-10  border-b border-b-brand-brown '
          >
            <div>
              <div className='flex h-16 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='shrink-0 mb-4'>
                    <img
                      alt='Your Company'
                      src='/logo.svg'
                      className='w-[60px]'
                    />
                  </div>
                </div>
                <div className='hidden md:!block'>
                  <div className='ml-10 flex gap-1'>
                    {currentNavigation.map((item) =>
                      item.pages ? (
                        <Menu as='div' key={item.name} className='relative'>
                          <MenuButton
                            className={classNames(
                              item.current
                                ? 'bg-gray-700 text-white'
                                : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-1 font-brand-serif font-medium'
                            )}
                          >
                            {item.name}
                          </MenuButton>
                          <MenuItems className='absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none'>
                            {item.pages.map((page) => (
                              <MenuItem key={page.name}>
                                <a
                                  href={page.href}
                                  className={classNames(
                                    page.current ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {page.name}
                                </a>
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                            item.current
                              ? 'bg-gray-700 text-white rounded-md px-3 py-1 font-brand'
                              : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-1 font-brand-serif font-medium'
                          )}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
                <div className='hidden md:!block'>
                  <div className='ml-4 flex items-center md:ml-6'>
                    <button
                      type='button'
                      className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    >
                      <span className='absolute -inset-1.5' />
                      <span className='sr-only'>View notifications</span>
                      <BellIcon aria-hidden='true' className='size-6' />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as='div' className='relative ml-3'>
                      <div>
                        <MenuButton className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                          <span className='absolute -inset-1.5' />
                          <span className='sr-only'>Open user menu</span>
                          <div className='aspect-square size-8 rounded-full bg-indigo-900 ring-2 ring-white/60 flex items-center justify-center'>
                            <div className='font-brand-serif text-white text-xl leading-none'>
                              {user.name.charAt(0)}
                            </div>
                          </div>
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                      >
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            <a
                              href={item.href}
                              className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none'
                            >
                              {item.name}
                            </a>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  </div>
                </div>
                <div className='-mr-2 flex md:!hidden'>
                  {/* Mobile menu button */}
                  <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    <Bars3Icon
                      aria-hidden='true'
                      className='block size-6 group-data-[open]:hidden'
                    />
                    <XMarkIcon
                      aria-hidden='true'
                      className='hidden size-6 group-data-[open]:block'
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className='md:!hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                {currentNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as='a'
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              <div className='border-t border-gray-700 pb-3 pt-4'>
                <div className='flex items-center px-5'>
                  <div className='shrink-0'>
                    <img
                      alt=''
                      src={user.imageUrl}
                      className='size-10 rounded-full'
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base/5 font-medium text-white'>
                      {user.name}
                    </div>
                    <div className='text-sm font-medium text-gray-400'>
                      {user.email}
                    </div>
                  </div>
                  <button
                    type='button'
                    className='relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>View notifications</span>
                    <BellIcon aria-hidden='true' className='size-6' />
                  </button>
                </div>
                <div className='mt-3 space-y-1 px-2'>
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as='a'
                      href={item.href}
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <main className='relative'>
            {isModalOpen && <ProjectCreateModal />}
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
