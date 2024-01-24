import style from "./SideBar.module.css"

console.log(style)
function Heading({children}) {
    return(
        <>
        <hr />
        <header className={style.header}>
            {children}
        </header>
        </>
        
    )
}

export default Heading