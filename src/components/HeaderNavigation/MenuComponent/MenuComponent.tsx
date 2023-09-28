const menu = ['About us', 'Blog', 'Contact us', 'Help & Support'];

export const MenuComponent = () => {
  return (
    <ul className="flex text-slate-600 text-sm gap-12 ">
        {menu.map((item) => (
            <li key={item}>
                <a>
                {item}
                </a>
            </li>
        ))}
    </ul>
  );
};
