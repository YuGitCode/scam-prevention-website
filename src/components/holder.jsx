<div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
  <ul className='list-none sm:flex hidden justify-end items-center flex-wrap flex-1 -mb-px'>
    {homepage.map((nav, index) => (
      <li
        key={nav.id}
        className={`inline-block p-4 rounded-t-lg font-poppins font-normal cursor-pointer text-[16px] text-white transition-transform duration-300 transform hover:scale-110  ${
          nav.disabled
            ? 'cursor-not-allowed text-gray-400 dark:text-gray-500'
            : `hover:scale-110 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:hover:border-gray-300`
        }`}
      >
        <a
          href={`#${nav.id}`}
          className={`inline-block p-4 rounded-t-lg transition-transform duration-300 transform
            hover:scale-110 hover:text-gray-600  hover:border-gray-300 dark:hover:text-gray-300 dark:hover:border-gray-300
        }`}
          aria-current={
            index === homepage.findIndex((item) => item.active)
              ? 'page'
              : undefined
          }
        >
          {nav.title}
        </a>
      </li>
    ))}
  </ul>
</div>;
