'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  House,
  UserCircle,
  Wallet,
  PaperPlaneTilt,
  ClockCounterClockwise,
  GearSix,
  MagnifyingGlass,
  Bell,
  List,
  X,
} from '@phosphor-icons/react';

export default function Dashboard() {
  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       const response = await axios.get(
  //         'http://localhost:3002/api/v1/user/me',
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       console.log({
  //         status: response.status,
  //         data: response.data,
  //       });

  //       if (response.data) {
  //         console.log({
  //           status: response.status,
  //           data: response.data,
  //         });
  //       }
  //     } catch (error) {
  //       console.error('Error : ', error);
  //     }
  //   };
  //   getUserDetails();
  // }, []);
  const links = [
    {
      name: 'home',
    },
  ];
  return (
    <div className="flex h-dvh w-full items-start gap-2 divide-x divide-neutral-800 bg-neutral-100">
      <DashboardLayout />
      {/* <SideBar className="h-full min-h-full w-full max-w-2xs divide-y divide-neutral-800 rounded-lg border-y border-l border-neutral-400" />
      <Content className="h-full min-h-full w-full" /> */}
    </div>
  );
}

const SideBar = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex w-full items-center justify-between p-2">
        {/* LOGO */}
        <span className="text-2xl font-semibold tracking-tighter text-neutral-900">
          Pay
          <span className="text-blue-800">Tm</span>
        </span>

        {/* Open/close */}
        <div className="group cursor-pointer rounded-sm p-1.5 hover:bg-neutral-200">
          <SidebarIcon
            className={'size-5 text-neutral-700 group-hover:text-neutral-900'}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

const Content = ({ ...props }) => {
  return <div {...props}></div>;
};

const SidebarIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.94358 2.25C8.10583 2.24998 6.65019 2.24997 5.51098 2.40314C4.33856 2.56076 3.38961 2.89288 2.64124 3.64124C1.89288 4.38961 1.56076 5.33856 1.40314 6.51098C1.24997 7.65019 1.24998 9.10582 1.25 10.9436V13.0564C1.24998 14.8942 1.24997 16.3498 1.40314 17.489C1.56076 18.6614 1.89288 19.6104 2.64124 20.3588C3.38961 21.1071 4.33856 21.4392 5.51098 21.5969C6.65018 21.75 8.1058 21.75 9.94354 21.75H14.0564C14.3706 21.75 14.6738 21.75 14.966 21.7492C14.9773 21.7497 14.9886 21.75 15 21.75C15.0129 21.75 15.0257 21.7497 15.0384 21.749C16.4224 21.7448 17.5607 21.7217 18.489 21.5969C19.6614 21.4392 20.6104 21.1071 21.3588 20.3588C22.1071 19.6104 22.4392 18.6614 22.5969 17.489C22.75 16.3498 22.75 14.8942 22.75 13.0565V10.9436C22.75 9.10585 22.75 7.65018 22.5969 6.51098C22.4392 5.33856 22.1071 4.38961 21.3588 3.64124C20.6104 2.89288 19.6614 2.56076 18.489 2.40314C17.5607 2.27833 16.4224 2.25523 15.0384 2.25096C15.0257 2.25032 15.0129 2.25 15 2.25C14.9886 2.25 14.9773 2.25025 14.966 2.25076C14.6737 2.25 14.3707 2.25 14.0564 2.25H9.94358ZM14.25 3.75002C14.1677 3.75 14.0844 3.75 14 3.75H10C8.09318 3.75 6.73851 3.75159 5.71085 3.88976C4.70476 4.02503 4.12511 4.27869 3.7019 4.7019C3.27869 5.12511 3.02503 5.70476 2.88976 6.71085C2.75159 7.73851 2.75 9.09318 2.75 11V13C2.75 14.9068 2.75159 16.2615 2.88976 17.2892C3.02503 18.2952 3.27869 18.8749 3.7019 19.2981C4.12511 19.7213 4.70476 19.975 5.71085 20.1102C6.73851 20.2484 8.09318 20.25 10 20.25H14C14.0844 20.25 14.1677 20.25 14.25 20.25L14.25 3.75002ZM15.75 20.2443C16.7836 20.2334 17.6082 20.2018 18.2892 20.1102C19.2952 19.975 19.8749 19.7213 20.2981 19.2981C20.7213 18.8749 20.975 18.2952 21.1102 17.2892C21.2484 16.2615 21.25 14.9068 21.25 13V11C21.25 9.09318 21.2484 7.73851 21.1102 6.71085C20.975 5.70476 20.7213 5.12511 20.2981 4.7019C19.8749 4.27869 19.2952 4.02503 18.2892 3.88976C17.6082 3.79821 16.7836 3.76662 15.75 3.75573L15.75 20.2443Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

type NavItem = {
  label: string;
  icon: React.ElementType;
};

const navigation: NavItem[] = [
  { label: 'Home', icon: House },
  { label: 'Me', icon: UserCircle },
  { label: 'Balances', icon: Wallet },
  { label: 'Send', icon: PaperPlaneTilt },
  { label: 'Activity', icon: ClockCounterClockwise },
];

function NavItem({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
        active
          ? 'bg-[#e98968] text-black'
          : 'text-neutral-500 hover:bg-white/6 hover:text-white'
      }`}
    >
      <Icon size={21} weight={active ? 'fill' : 'regular'} />
      <span className="font-medium">{item.label}</span>
    </button>
  );
}

function Sidebar({
  active,
  setActive,
  mobile = false,
  close,
}: {
  active: string;
  setActive: (value: string) => void;
  mobile?: boolean;
  close?: () => void;
}) {
  return (
    <aside className="flex h-full w-61.25 shrink-0 flex-col bg-[#090909] justify-between px-5 py-7">
      {/* Logo */}
      <div className="mb-14 flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e98968] text-xl font-black text-black">
            P
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            PayTM
          </span>
        </div>

        {mobile && (
          <button onClick={close} className="text-white">
            <X size={23} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="mb-3 px-3 text-[10px] font-semibold tracking-[2px] text-neutral-600 uppercase">
        Menu
        <nav className="flex flex-col">
          {navigation.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              active={active === item.label}
              onClick={() => {
                setActive(item.label);
                close?.();
              }}
            />
          ))}
        </nav>
      </div>

      {/* <div className="my-8 h-px bg-white/[0.07]" /> */}

      {/* Secondary navigation */}
      {/* <div className="mb-3 px-3 text-[10px] font-semibold tracking-[2px] text-neutral-600 uppercase">
        Preferences
      </div> */}

      {/* <NavItem
        item={{ label: 'Settings', icon: GearSix }}
        active={active === 'Settings'}
        onClick={() => {
          setActive('Settings');
          close?.();
        }}
      /> */}

      {/* Bottom profile */}
      <div className="w-full rounded-sm border border-white/8">
        <div className="flex items-center gap-3 rounded-xl p-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#292929] text-sm font-semibold text-white">
            JD
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-neutral-500">Personal account</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="flex h-19 shrink-0 items-center justify-between border-b border-white/6 px-5 sm:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenu}
          className="text-neutral-400 hover:text-white lg:hidden"
          aria-label="Open navigation"
        >
          <List size={25} />
        </button>

        <div className="flex items-center gap-3 text-neutral-500">
          <MagnifyingGlass size={19} />
          <input
            placeholder="Search anything..."
            className="w-32 bg-transparent text-sm text-white outline-none placeholder:text-neutral-600 sm:w-56"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <button className="relative text-neutral-400 transition hover:text-white">
          <Bell size={21} />
          <span className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-[#e98968]" />
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-xs font-medium text-white">Good evening, John</p>
            <p className="mt-1 text-[10px] text-neutral-500">
              Personal account
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#333333] text-xs font-semibold text-white">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}

const DashboardLayout = () => {
  const [active, setActive] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="h-full w-full">
      {/* Dashboard shell */}
      <div className="mx-auto flex h-full overflow-hidden border border-white/4 bg-black shadow-2xl">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar active={active} setActive={setActive} />
        </div>

        {/* Mobile sidebar */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative z-10 h-full">
              <Sidebar
                active={active}
                setActive={setActive}
                mobile
                close={() => setMobileOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Main dashboard */}
        <div className="flex min-w-0 flex-1 flex-col bg-[#202020]">
          <Topbar onMenu={() => setMobileOpen(true)} />

          {/* Empty content area */}
          <main className="min-h-0 flex-1 p-4 sm:p-7 lg:p-10">
            {/* Add your page components here */}
          </main>
        </div>
      </div>
    </div>
  );
};
