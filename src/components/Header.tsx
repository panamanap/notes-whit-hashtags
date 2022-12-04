interface HeaderProps {
    title: string;
}

export const Header = ({title}: HeaderProps) => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src='./vite.svg' className='vite' alt='Vite logo'/>
                <img src='./react.svg' className='react' alt='React logo'/>
                <img src='./typescript.svg' className='typescript' alt='Typescript logo'/>
                <h1 className='title'>{title}</h1>
            </div>

        </header>
    )
}